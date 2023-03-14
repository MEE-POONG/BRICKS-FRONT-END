import React, { useMemo, Fragment, useState, useRef } from "react";
import {
  Autocomplete,
  DistanceMatrixService,
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setDistance, setLatLng } from "../../store/map/mapSlice";

const libraries = ["places"];

export default function MapComponent({ isOpen, setIsOpen }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    libraries,
    language: "thailand",
    region: "thailand",
  });

  if (!isLoaded) return <div>กำลังโหลด...</div>;
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all lg:w-auto">
                <Map />
                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    className="rounded-md border border-transparent bg-[#a5522a] px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring-red-500 focus-visible:ring-2 focus-visible:ring-offset-2"
                    onClick={() => setIsOpen(false)}
                  >
                    ยืนยัน
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function Map() {
  //Redux
  const dispatch = useDispatch();
  const { mapStore } = useSelector((state) => state);

  const [searchResult, setSearchResult] = useState();
  const mapCenter = {
    lat: 13.736717,
    lng: 100.523186,
  };

  /// CLICK TO GET LAT LNG
  const originPosition = { lat: 14.8425959800221, lng: 102.18779271165197 }; //ร้านช่างพอง
  const containerStyle = {
    width: "90vw",
    height: "80vh",
    margin: "auto",
  };

  const onLoad = (autocomplete) => {
    setSearchResult(autocomplete);
  };

  const onPlaceChanged = () => {
    if (searchResult !== null) {
      //variable to store the result
      const place = searchResult?.getPlace();
      console.log("place", place);
      dispatch(
        setLatLng({
          lat: place?.geometry?.location?.lat(),
          lng: place?.geometry?.location?.lng(),
        })
      );
    } else {
      alert("โปรดใส่ชื่อสถานที่");
    }
  };

  console.log(mapStore);
  return (
    <>
      <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
        <div className="w-full mx-auto mb-3 lg:max-w-md">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white">
            <div className="grid place-items-center h-full w-12 text-gray-800 rounded-l-lg border-y-2 border-l-2 border-[#b96800]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none rounded-r-lg text-sm text-gray-700 px-2 border-y-2 border-r-2 border-[#b96800]"
              type="text"
              id="search"
              placeholder="ค้นหาสถานที่"
            />
          </div>
        </div>
      </Autocomplete>
      <GoogleMap
        zoom={9}
        center={useMemo(() => mapCenter, [])}
        options={{ streetViewControl: false }}
        mapContainerStyle={containerStyle}
        onClick={(e) => {
          dispatch(
            setLatLng({
              lat: e.latLng.lat(),
              lng: e.latLng.lng(),
            })
          );
        }}
      >
        <MarkerF
          position={{
            lat: parseFloat(mapStore?.lat),
            lng: parseFloat(mapStore?.lng),
          }}
          icon={"/marker.png"}
        >
          {mapStore?.lat !== null || mapStore?.lng !== null ? (
            <InfoWindowF
              position={{
                lat: parseFloat(mapStore?.lat),
                lng: parseFloat(mapStore?.lng),
              }}
            >
              <div>สถานที่จัดส่ง</div>
            </InfoWindowF>
          ) : null}
        </MarkerF>
        <DistanceMatrixService
          options={{
            destinations: [{ lat: mapStore.lat, lng: mapStore.lng }],
            origins: [originPosition],
            travelMode: "DRIVING",
          }}
          callback={(res) => {
            dispatch(
              setDistance({
                distance: res?.rows[0]?.elements[0]?.distance?.value,
              })
            );
          }}
        />
      </GoogleMap>
    </>
  );
}
