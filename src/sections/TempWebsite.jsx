/** @format */

import React, { useState } from "react";

const TempWebsite = ({ authenticate }) => {
  const [nameVal, set_nameVal] = useState("");
  const [showWarning, set_showWarning] = useState(false);

  const handleChange = (e) => {
    set_nameVal((crr) => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameKey = "s0ham";

    if (nameVal !== nameKey) {
      set_showWarning((crr) => true);
      setTimeout(() => {
        set_showWarning((crr) => false);
      }, 2500);
    } else {
      authenticate("UNLOCK");
    }
  };

  return (
    <div className="App">
      <div className="temp-wrapper">
        <div className="card temp-card">
          <div className="temp-title">
            <div className="temp-title-text-hi">Hi!</div>
            <div className="temp-title-text-caption">I'm Soham</div>
          </div>
        </div>
        <div className="card temp-card">
          <form onSubmit={handleSubmit} className="temp-inputWrapper">
            <label
              htmlFor="content-form-label"
              className="temp-nameEntry-label"
            >
              Enter A Code:{" "}
            </label>
            <input
              id="temp-name-input"
              onChange={handleChange}
              type="text"
              value={nameVal}
              autoComplete="off"
              className="temp-nameEntry"
              placeholder="The code ..."
              required
            />
            <button className="temp-submitBtn">
              <span>Submit</span>
            </button>
          </form>
          {showWarning === false ? (
            <></>
          ) : (
            <div className="warning-box">
              <div className="temp-warning-text">
                That's not the correct code!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TempWebsite;
