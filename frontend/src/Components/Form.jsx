import { useState } from "react";
import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";

export default function Form({ getApplications, setShowModal }) {
  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    status: "",
    linkToApplication: "",
    dateApplied: "",
    contact: "",
    resume: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    setFormData(() => {
      for (let i = 0; i < 8; i++) {
        formData[e.target[i].name] = e.target[i].value;
      }
    });
  };

  // const saveApplication = (event) => {
  //   setShowModal(false);
  //   const form = document.querySelector("form");
  //   event.preventDefault();

  //   const elementsArray = [...event.target.elements];

  //   const formData = elementsArray.reduce((acc, curr) => {
  //     if (curr.id) {
  //       acc[curr.id] = curr.value;
  //     }
  //     return acc;
  //   }, {});
  //   form.reset();
  //   const createApplication = async (form) => {
  //     await addDoc(collection(db, "applications"), form);
  //   };
  //   createApplication(formData);
  //   getApplications();
  // };

  return (
    <div
      onClick={() => setShowModal(false)}
      className="fixed z-50 flex justify-center items-center w-full h-full overflow-y-hidden bg-black bg-opacity-50"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-80 shadow-md px-8 rounded pt-6 pb-8 mb-4 bg-white"
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="companyName"
            >
              Company
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </label>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="jobTitle"
            >
              Job Title
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </label>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="status"
            >
              Status
              <select
                type="text"
                id="status"
                name="status"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="Saved">Saved</option>
                <option value="Applied">Applied</option>
                <option value="InterviewOffer">Interview Offer</option>
                <option value="JobOffer">Job Offer</option>
                <option value="Rejected">Rejected</option>
              </select>
            </label>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="linkToApplication"
            >
              Application Link
              <input
                type="text"
                id="linkToApplication"
                name="linkToApplication"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </label>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dateApplied"
            >
              Date Applied
              <input
                type="date"
                id="dateApplied"
                name="dateApplied"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="contact"
            >
              Contact (optional)
              <input
                type="text"
                id="contact"
                name="contact"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="resume"
            >
              Resume (optional)
              <input
                type="file"
                id="resume"
                name="resume"
                disabled
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="notes"
            >
              Notes (optional)
              <textarea
                id="notes"
                name="notes"
                maxLength={140}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-20 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Track
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
