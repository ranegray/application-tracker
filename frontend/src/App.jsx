import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Form from "./Components/Form";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import Login from "./Login";
import Help from "./Help";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <BrowserRouter>
      {showModal ? <Form setShowModal={setShowModal} /> : null}
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard showModal={showModal} setShowModal={setShowModal} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
