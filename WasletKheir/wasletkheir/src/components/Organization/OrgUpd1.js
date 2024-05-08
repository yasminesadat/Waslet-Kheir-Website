import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Org.css';
import OrgNavBar2 from './NavbarOrg';



//IN THE NAME TYPE "Winter Jackets For School"


export default function OrgUpd1() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
    window.location.href = "/OrgUpd11";

  };
  const handleCancel = (event) => {
    window.location.href = "/OrgViewDon";
  }

  return (
    <>
      <OrgNavBar2 />
      <br />
      <br />
      <br />
      <br />
      <center>
        <h1>Update Clothing Donation Information</h1>
      </center>
      <div className="main-request-container">
        <br />
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" placeholder="Jackets" />
          </label>
          <label>
            Type:
            <input type="text" name="type" placeholder="Jacket" />
          </label>
          <label>
            Age:
            <select name="age">
              <option value="0-2">0-2 years</option>
              <option value="3-7">3-7 years</option>
              <option value="8-12" selected>8-12 years</option>
              <option value="13-17">13-17 years</option>
              <option value="18+">18+ years</option>
            </select>
          </label>
          <label>
            Gender:
            <select name="gender">
              <option value="unisex" selected>Unisex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>
            Season:
            <select name="season">
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="fall">Fall</option>
              <option value="winter" selected>Winter</option>
            </select>
          </label>
          <label>
            Material:
            <input type="text" name="material" placeholder="Cotton" />
          </label>
          <label>
            Quantity:
            <input type="number" name="quantity" placeholder="60" />
          </label>
          <label>
            Description:
            <input type="text" name="description" placeholder="We would appreciate receiving winter jackets for our students to wear." />
          </label>
          <label>
            Scheduled Donation Drop-off time:
            <input type="datetime-local" name="scheduled-donation" />
          </label>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              type="button"
              onClick={handleCancel}
              value="Cancel"
              style={{
                backgroundColor: "#ff6347",
                border: "none",
                color: "white",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                borderRadius: "4px",
                cursor: "pointer",
                height: "30%"
              }}
            />
            <input
              type="submit"
              value="Update"
              style={{
                border: "none",
                color: "white",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                borderRadius: "4px",
                cursor: "pointer",
                width: "25%",

              }}
            />
          </div>
        </form>
      </div>

      {formSubmitted && (
        <div className="success-message">
          Donation Request Updated Successfully
        </div>
      )}
    </>
  );
}
