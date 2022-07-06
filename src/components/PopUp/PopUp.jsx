import React from "react";
import "./PopUp.css";
import PopUp1 from "./PopUp01.jpeg";
import PopUp2 from "./PopUp02.jpeg";
import { Close } from "@mui/icons-material";
export default function PopUp({setShowPopUp}) {
  return (
    <div className="PopUp-Container">
      <div className="PopUp-Card">
        <div className="PopUp-Card-Close">
          <button className="Close-btn" onClick={() => setShowPopUp(false)}>
            <Close />
          </button>
        </div>
        <div className="PopUp-Card-row">
          {" "}
          <a href=" https://ekyc.kalpatarumulti.com/ipo">
            <img src={PopUp1} alt="" />
          </a>
          <a href="https://ekyc.kalpatarumulti.com/kalpataru/signup">
            <img src={PopUp2} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
