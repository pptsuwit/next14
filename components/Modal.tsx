import { useGlobalContext } from "@/contexts/store";
export default function Modal() {
  const { setModal, modalMessage } = useGlobalContext();
  return (
    <>
      <div
        id="popup-modal"
        tabIndex={-1}
        className="w-full h-full flex overflow-y-auto overflow-x-hidden absolute bottom-[calc(100%-75%)] right-0 left-0 z-50 justify-center items-center"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow-2xl shadow-slate-400">
            <button
              onClick={() => setModal(false)}
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
              data-modal-hide="popup-modal"
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <svg className="mx-auto mb-4 text-gray-400 w-12 h-12  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-red-500  ">{modalMessage.message}</h3>
              {/* <button
                onClick={() => setModal(false)}
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
              >
                Close
              </button> */}
              <button
                onClick={() => setModal(false)}
                data-modal-hide="popup-modal"
                type="button"
                className="text-gray-50 bg-gray-500 hover:bg-gray-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10  "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
