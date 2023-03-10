import { useEffect } from "react";
import db from "../../firebase.js";
import { doc, deleteDoc } from "firebase/firestore";
import "./Card.css";

export default function Card({ applications, getApplications }) {
  const deleteApplication = async ({ target }) => {
    console.log(target.attributes.data.value);
    const appRef = doc(db, "applications", target.attributes.data.value);
    await deleteDoc(appRef);
    getApplications();
  };

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <div>
      {applications &&
        applications.map((application) => {
          return (
            <div key={application.id} className="application">
              <h2>{application.company}</h2>
              <h3>{application.role}</h3>
              <select name="status" id="status">
                <option value="saved">Saved</option>
                <option value="applied">Applied</option>
                <option value="first-interview">First Interview</option>
                <option value="follow-up-interview">Follow-up Interview</option>
                <option value="offer">Offer</option>
              </select>
              <p>Date applied: {application["date-applied"]}</p>
              <p>
                <a href={application.source} target="_blank">
                  Open Application
                </a>
              </p>
              <button onClick={deleteApplication} data={application.id}>
                Remove
              </button>
            </div>
          );
        })}
    </div>
  );
}
