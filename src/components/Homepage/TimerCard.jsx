import React from "react";
import images from "../../assets/images";

const TimerCard = ({ label, value, onIncrease, onDecrease }) => {
  return (
    <div style={{ textAlign: "center", padding: "6px", }}>
      <p style={{color:"#949494",fontFamily:"Roboto",letterSpacing:"1.2",fontSize:"20px"}}>{label}</p>
      <img
        style={{ width: "20px", height: "20px",padding: "6px" }}
        onClick={onIncrease}
        src={images.up}
        alt="up_icon"
      />
      <p>{value}</p>
      <img
        style={{ width: "20px", height: "20px",padding: "6px" }}
        onClick={onDecrease}
        src={images.down}
        alt="down_icon"
      />
    </div>
  );
};

export default TimerCard;