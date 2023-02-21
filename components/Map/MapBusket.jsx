import React, { useMemo, Fragment } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { Dialog, Transition } from "@headlessui/react";

export default function MapBusket({ lat, lng, isOpen, setIsOpen }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
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
                <Map lat={lat} lng={lng} />
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

function Map({ lat, lng }) {
  const mapCenter = {
    lat: lat,
    lng: lng,
  };

  const containerStyle = {
    width: "90vw",
    height: "80vh",
    margin: "auto",
  };

  return (
    <>
      <GoogleMap
        zoom={9}
        center={useMemo(() => mapCenter, [])}
        options={{ streetViewControl: false }}
        mapContainerStyle={containerStyle}
      >
        <MarkerF
          position={{
            lat: parseFloat(lat),
            lng: parseFloat(lng),
          }}
          icon={"/marker.png"}
        >
          {lat !== null || lng !== null ? (
            <InfoWindowF
              position={{
                lat: parseFloat(lat),
                lng: parseFloat(lng),
              }}
            >
              <div>สถานที่จัดส่ง</div>
            </InfoWindowF>
          ) : null}
        </MarkerF>
      </GoogleMap>
    </>
  );
}
