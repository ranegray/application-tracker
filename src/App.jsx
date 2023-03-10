import {db} from "./firebase.js";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Form from "./Components/Form/Form";
import Card from "./Components/Card/Card";
import SignUp from "./Components/SignUp/SignUp";
import "./App.css";

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
    <div className="App">
      <SignUp />
      <h1>Job Tracker</h1>
      <Form getApplications={getApplications} />
      <Card applications={applications} getApplications={getApplications} />
    </div>
  );
}

export default App;
