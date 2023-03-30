import { db } from "./firebase.js";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Card from "./Components/Card";
import ShowModal from "./Components/ShowModal";

function Dashboard({ showModal, setShowModal }) {
  const [applications, setApplications] = useState([]);

  const getApplications = async () => {
    await getDocs(collection(db, "applications")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setApplications(newData);
    });
  };

  return (
    <div>
      <div className="m-auto">
        <Card applications={applications} getApplications={getApplications} />
      </div>
      <ShowModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Dashboard;