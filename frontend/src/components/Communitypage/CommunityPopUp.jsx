import "./popup.scss";
const CommunityPopUp = ({ trigger, setTrigger, children }) => {
  // const getAllPostHandler = (e) => {
  //   e.preventDefault();

  //   const config = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },

  //   };

  //   fetch("http://localhost:3000/community", config)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log(err, "coming from catch communityPopUp");
  //     });
  // };

  return trigger ? (
    <div className="CommunityPop">
      <div className="popUpWindow">
        {children}
        {/* <div className="popUpButtons">
          <button onClick={submitHandler}>Submit</button>
          <button
            onClick={() => {
              setTrigger(false);
            }}
          >
            Cancel
          </button>
        </div> */}
      </div>
    </div>
  ) : (
    ""
  );
};

export default CommunityPopUp;
