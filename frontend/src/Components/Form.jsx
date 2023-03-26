import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";

export default function Form({ getApplications, setShowModal }) {
  const saveApplication = (event) => {
    setShowModal(false)
    const form = document.querySelector("form");
    event.preventDefault();

    const elementsArray = [...event.target.elements];

    const formData = elementsArray.reduce((acc, curr) => {
      if (curr.id) {
        acc[curr.id] = curr.value;
      }
      return acc;
    }, {});
    form.reset();
    const createApplication = async (form) => {
      await addDoc(collection(db, "applications"), form);
    };
    createApplication(formData);
    getApplications();
  };

  return (
    <div onClick={() => setShowModal(false)} className="fixed z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
      <div onClick={(e) => {e.stopPropagation()}} className="w-80 shadow-md px-8 rounded pt-6 pb-8 mb-4 bg-white">
        <form
          onSubmit={saveApplication}
        >
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="company"
            >
              Company
              <input
                type="text"
                id="company"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </label>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="role"
            >
              Role
              <input
                type="text"
                id="role"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </label>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="contact"
            >
              Contact
              <input
                type="text"
                id="contact"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date-applied"
            >
              Date Applied
              <input
                type="date"
                id="date-applied"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="source"
            >
              Application Link
              <input
                type="text"
                id="source"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </label>
          </div>
          <div className="flex justify-center">
            <button className="w-20 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Track
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
