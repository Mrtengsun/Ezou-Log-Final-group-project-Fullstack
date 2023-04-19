import { useRef } from "react";

const CommunityPopUp = () => {
  return (
    <div className="CommunityPop">
      <div className="popUpWindow">
        <form action="">
          <h1>Ask me</h1>
          <tr>
            <label>Title</label>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" placeholder="Description" />
          </tr>
        </form>
        <div>
          <button>Submit</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPopUp;
