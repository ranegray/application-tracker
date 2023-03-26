import { db } from "./firebase.js";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Form from "./Components/Form";
import Card from "./Components/Card";
import NavBar from "./Components/NavBar";
import ShowModal from "./Components/ShowModal";

function App() {
  const [applications, setApplications] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
      {showModal ? (
        <Form getApplications={getApplications} setShowModal={setShowModal} />
      ) : null}
      <NavBar />
      <div className="m-auto">
        <Card applications={applications} getApplications={getApplications} />
      </div>
      <ShowModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
