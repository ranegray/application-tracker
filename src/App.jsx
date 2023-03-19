import { db } from "./firebase.js";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Form from "./Components/Form";
import Card from "./Components/Card";
import SignUp from "./Components/SignUp";

function App() {
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
    <div className="m-auto">
      <SignUp />
      <h1 className="text-3xl font-bold">Job Tracker</h1>
      <Form getApplications={getApplications} />
      <Card applications={applications} getApplications={getApplications} />
    </div>
  );
}

export default App;
