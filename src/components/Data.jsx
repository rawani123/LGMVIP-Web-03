import React, { useState } from "react";
import "./form.css";

export default function Data() {
  const [resistration, setResistration] = useState({
    username: "",
    Email: "",
    Mobile: "",
    Password: "",
  });

  const [record, setRecord] = useState([]);

  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    console.log(value);
    setResistration({
      ...resistration,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...resistration, id: new Date().getTime().toString() };
    setRecord([...record, newRecord]);
    setResistration({
      username: "",
      Email:"",
      Mobile:"",
      Password:"",
    });
  };
  return (
    <>
      <div className="main">
        <form className="form" onSubmit={handleSubmit}>
          <div className="element">
            <label htmlFor="username">Name:-</label>
            <input
            required
              autoComplete="off"
              type="text"
              value={resistration.username}
              onChange={handelInput}
              name="username"
              id="username"
              className="input"
            />
          </div>
          <div className="element">
            <label htmlFor="Email">Email:-</label>
            <input
             required
              value={resistration.Email}
              onChange={handelInput}
              autoComplete="off"
              type="email"
              name="Email"
              id="Email"
              className="input"
            />
          </div>
          <div className="element">
            <label htmlFor="Mobile">Mobile no:-</label>
            <input
             required
              value={resistration.Mobile}
              onChange={handelInput}
              autoComplete="off"
              type="number"
              name="Mobile"
              id="Mobile"
              className="input"
            />
          </div>
          <div className="element">
            <label htmlFor="Password">Password:-</label>
            <input
             required
              value={resistration.Password}
              onChange={handelInput}
              autoComplete="off"
              type="password"
              name="Password"
              id="Password"
              className="input"
            />
          </div>
          <button type="submit" className="button">
            Register
          </button>
        </form>

        <div>
          {
            record.map((elem)=>{
              const {username,Email,Mobile,Password,id}=elem;
              return(
                <div className="data" key={id}>
                  <p>{username}</p>
                  <p>{Email}</p>
                  <p>{Mobile}</p>
                  <p>{Password}</p>
                </div>
              )
            })

            }
          
        </div>
      </div>
    </>
  );
}
