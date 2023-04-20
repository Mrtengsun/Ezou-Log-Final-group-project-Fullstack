import "./popup.scss";
const CommunityPopUp = ({ trigger, setTrigger, children }) => {
  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     console.log(addPostData);
  //     const config = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(addPostData),
  //     };

  //     fetch("http://localhost:3000/community", config)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((result) => {
  //         console.log(result);
  //       })
  //       .catch((err) => {
  //         console.log(err, "coming from catch communityPopUp");
  //       });
  //     setTrigger(false);
  //   };

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
