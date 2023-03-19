import { useEffect } from "react";
import { db } from "../firebase.js";
import { doc, deleteDoc } from "firebase/firestore";

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
    <table className="table-auto w-full text-sm text-left">
      <thead className="text-gray-700 bg-gray-50 uppercase">
        <tr>
          <th>Company</th>
          <th>Role</th>
          <th>Contact</th>
          <th>Date Applied</th>
          <th>Application Link</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {applications &&
          applications.map((application) => {
            return (
              <tr key={application.id}>
                <td>{application.company}</td>
                <td>{application.role}</td>
                <td>{application.contact}</td>
                <td>{application["date-applied"]}</td>
                <td>
                  <a
                    href={application.source}
                    target="_blank"
                    className="underline "
                  >
                    Open Application
                  </a>
                </td>
                <td>
                  <button
                    onClick={deleteApplication}
                    data={application.id}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
