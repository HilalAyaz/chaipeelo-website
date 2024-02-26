import { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numPeople, setNumPeople] = useState(1);

  // Initialize AOS
  AOS.init();

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    setName("");
    setEmail("");
    setNumPeople(1);
    toast(`Table reserved by ${name} for ${numPeople} people`);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              data-aos="zoom-in"
              className="inline-block align-bottom bg-gray-200 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-brandDark px-4 py-5 sm:px-6 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-white">
                  Reserve your table!
                </h2>
                <button onClick={onClose} className="text-white">
                  <AiOutlineClose size={20} />
                </button>
              </div>

              <div className="px-4 py-5 sm:px-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 p-2 border border-gray-3s00 rounded-md w-full"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="numPeople" className="block text-gray-700">
                      Number of People
                    </label>
                    <input
                      type="range"
                      name="numPeople"
                      id="numPeople"
                      min="1"
                      max="12"
                      value={numPeople}
                      onChange={(e) => setNumPeople(parseInt(e.target.value))}
                      className="mt-1 py-2 border border-gray-300 rounded-md w-full appearance-none"
                      style={{
                        background: `linear-gradient(to right, #422800, #b86600 ${
                          ((numPeople - 1) / 11) * 100
                        }%, #e2e8f0 ${((numPeople - 1) / 11) * 100}%, #e2e8f0)`,
                      }}
                    />
                    <div className="flex justify-between text-gray-500">
                      {[...Array(12)].map((_, index) => (
                        <span key={index}>{index + 1}</span>
                      ))}
                    </div>
                  </div>

                  {/* Number of People */}

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-yellow-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="ml-2 inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
