import React, { useState, useMemo, Fragment } from "react";
import {
  DistanceMatrixService,
  GoogleMap,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setDistance, setLatLng } from "../../store/map/mapSlice";

export default function MapComponent({ isOpen, setIsOpen }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    language: "thailand",
    region: "thailand",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
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
              <Dialog.Panel className="w- transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                <Map />
                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    className="rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring-red-500 focus-visible:ring-2 focus-visible:ring-offset-2"
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

  /// CLICK TO GET LAT LNG
  const [destinationPosition, setDestinationPosition] = useState();
  const originPosition = { lat: 14.829494277866198, lng: 102.19258206357422 };

  const containerStyle = {
    width: "80vw",
    height: "80vh",
  };

  return (
    <>
      <GoogleMap
        zoom={6}
        center={useMemo(() => originPosition, [])}
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
        />
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
