import React, { useState } from 'react';
import OrgNavBar2 from './NavbarOrg';
import { Link } from 'react-router-dom';




//IN THE DESCRIPTION TYPE "We would like to have plushies for our younger students for their comfort."



export default function OrgReqDon() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
    window.location.href = "/OrgUpd22";
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
      <center>
        <h1>Update Toys Donation Information</h1>
      </center>
      <div className="main-request-container">
        <br />
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" placeholder="Plushies" />
          </label>
          <label>
            Age:
            <select name="age">
              <option value="0-3">0-3 years</option>
              <option value="4-6" selected>4-6 years</option>
              <option value="7-12">7-12 years</option>
              <option value="12+">12+ years</option>
            </select>
          </label>
          <label>
            Gender:
            <select name="gender">
              <option value="unisex">Unisex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>
            Type:
            <select name="toycategory">
              <option value="board-games">Board Games</option>
              <option value="stuffed-toys" selected>Stuffed Toys</option>
              <option value="dolls">Dolls</option>
              <option value="sports">Sports</option>
              <option value="car">Car</option>
              <option value="outdoor">Outdoor</option>
            </select>
          </label>
          <label>
            Quantity:
            <input type="number" name="quantity" placeholder="20" />
          </label>
          <label>
            Picture:
            <br></br>
            <img src="teddy.jpeg" alt="Plushies" style={{ width: '30%', height: 'auto' }} className="org-item-image" />
            <br></br>
            <input type="file" name="picture" accept="image/*" />
          </label>
          <br />
          <label>
            Description:
            <input type="text" name="description" placeholder="We would like to have plushies for our younger students." />
          </label>
          <label>
            Scheduled Donation Drop-off time:
            <input type="datetime-local" name="description" placeholder="Enter description" />
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
          Toy Donation Request Created Successfully
        </div>
      )}
    </>
  );
}
