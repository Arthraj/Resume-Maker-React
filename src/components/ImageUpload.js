import React, { useState } from "react";
// import "./Createpost.css";
// import { toast } from 'react-toastify';
// import { useNavigate } from "react-router-dom";

export default function ImageUpload() {
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [urlData, setUrlData] = useState({});


  // posting image to cloudinary
  const postDetails = async () => {
    // console.log(body, image);
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

    const urlLink=response.json()
    .then((data)=>setUrlData(data.url));
  };


  console.log(urlData);
  const loadfile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src);
    };
  };
  return (
    <div className="createPost">
      <div className="post-header">
        <button
          id="post-btn"
          onClick={() => {
            postDetails();
          }}
        >
          Share
        </button>
      </div>
      
      <div className="main-div">
        <img
          id="imageUpload"
          src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            loadfile(event);
            setImage(event.target.files[0]);
          }}
        />
      </div>

      {/* <div className="details">
        <div className="card-header">
          <div className="card-pic">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}
