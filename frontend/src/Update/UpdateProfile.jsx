import React, { useContext } from "react";
import "./update.scss";
import { CreateaccountCTX } from "../components/contexts/CreateaccountCTX";


const UpdateProfile = () => {
  const { navigate, file, setFile, user,setUser } = useContext(CreateaccountCTX);

  const homePage = () => {
    navigate("homepage");
  };

  const handleFile = (e) => {
    
    console.log( "first" ,e.target.files[0]);
    setFile(e.target.files[0])

  };

  const uploadFile = (e) => {
    e.preventDefault();
    console.log(file);
    const form = new FormData();
    form.append("profilePicture", file);

    const config = {
      method: "PUT",
      body: form,
    };

    fetch(`/api/user/update-profile-picture/${user._id}`, config)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("user" , JSON.stringify(data))
        setUser(data)})
      .catch((err) => console.log(err));
  };

  const imageURL= user.imgProfile? `/api/user/profile-picture/${user._id}`:`/images/Neytiri_Profilbild.webp`;


  return (
    <div className="update">
      <div className="w-48 boxform text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <form onSubmit={uploadFile}>
            <img src={imageURL} alt="" />
          Update Profile Picture
          <input onChange={handleFile} type="file" className="m-5 w-2" />
          <button type="submit">upload</button>
        </form>
    <div  className="exit">
        <button
          type="button"
          className="relative  items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-4 h-4 mr-2 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
          </svg>
          Update Data
        </button>
        <button
          onClick={homePage}
          type="button"
         
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4 mr-4 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Exit
        </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
