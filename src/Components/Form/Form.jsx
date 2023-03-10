import db from "../../firebase.js";
import { collection, addDoc } from "firebase/firestore";
import "./Form.css";

export default function Form({ getApplications }) {
  const saveApplication = (event) => {
    event.preventDefault();

    const elementsArray = [...event.target.elements];

    const formData = elementsArray.reduce((acc, curr) => {
      if (curr.id) {
        acc[curr.id] = curr.value;
      }

      return acc;
    }, {});

    const createApplication = async (form) => {
      await addDoc(collection(db, "applications"), form);
    };
    createApplication(formData);
    getApplications();
  };

  return (
    <form onSubmit={saveApplication}>
      <div>
        <label htmlFor="company">
          Company
          <input type="text" id="company" required />
        </label>
        <label htmlFor="role">
          Role
          <input type="text" id="role" required />
        </label>
        <label htmlFor="contact">
          Contact
          <input type="text" id="contact" />
        </label>
        <label htmlFor="date-applied">
          Date Applied
          <input type="date" id="date-applied" />
        </label>
        <label htmlFor="source">
          Application Link
          <input type="text" id="source" required />
        </label>
      </div>
      <button>Track</button>
    </form>
  );
}
