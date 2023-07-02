import React, { useState } from "react";
import "../css/Form.css";

function ProfileImage({ onSave, data, next }) {
  //   const [formData, setFormData] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    postDetails();
    onSave(urlData);
    next();
  };

  const [image, setImage] = useState("");
  const [urlData, setUrlData] = useState();

  // posting image to cloudinary
  const postDetails = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "imageDB");
    data.append("cloud_name", "cohackinimagedb");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/cohackinimagedb/image/upload/",
      {
        method: "post",
        body: data,
      }
    )
    const urlLink = await response.json().then((cloudinaryData) => setUrlData(cloudinaryData));
    console.log(urlData,urlLink);
  };

  const loadfile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src);
    };
  };

  return (
    <>
      <h1 className="fs-title">Personal Details</h1>

      <form onSubmit={handleSubmit}>
        <div className="createPost">
          <div className="post-header"></div>

          <div className="main-div">
            <img
              id="output"
              src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
              alt="../images/# Sangeet Dance.jpg"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(event) => {
                loadfile(event);
                setImage(event.target.files[0]);
              }}
            />

            <div className="savebtn">
              <input className="saveButton" type="submit" value="Upload" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ProfileImage;
