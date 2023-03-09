import db from "../../firebase.js";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import "./Card.css";

export default function Card() {
  const [applications, setApplications] = useState([]);

  const getApplications = async () => {
    await getDocs(collection(db, "applications")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setApplications(newData);
      console.log(applications, newData);
    });
  };

  useEffect(() => {
    getApplications();
  }, []);

  console.log(applications);

  return (
    <div>
      {applications &&
        applications.map((application) => {
          return (
            <div className="application">
              <h2>{application.company}</h2>
              <h3>{application.role}</h3>
              <p>Date applied: {application["date-applied"]}</p>
              <p><a href="{application.source}">Open Application</a></p>
            </div>
          );
        })}
    </div>
  );
}
