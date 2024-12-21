import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });
  function handleContact(event) {
    const { name, value } = event.target;
    setContact((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "email") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value,
          phone: preValue.phone,
        };
      } else if (name === "phone") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: preValue.email,
          phone: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <form>
        <input
          onChange={handleContact}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleContact}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleContact}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <input
          onChange={handleContact}
          value={contact.phone}
          name="phone"
          placeholder="First phone"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
