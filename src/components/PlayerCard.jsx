// import Col from "react-bootstrap/Col";
import { useState } from "react";
import Card from "react-bootstrap";

const PlayerCard = ({ name, img, statistics}) => {
  const [showImage, setShowImage]=useState(true)
  const toggleImage = () => {
    setShowImage((showImgCard) => !showImgCard);
  };
  return (
    <div id="card" onClick={toggleImage} className="card  m-1">
      {showImage ? (<div className="first-face">
        <img src={img} alt="" />
      </div>):
      <div>{
        statistics.map((item, i)=>
        <li className="text-dark h4 text-start list-unstyled mb-4 m-2" key={i}>⚽  {item}</li>)
      }</div>
      }
      
      {/* <div className="second-face">
        <p>&#127936; {statistics[0]}</p>
        <p>&#127936; {statistics[1]}</p>
        <p>&#127936; {statistics[2]}</p>
        <p>&#127936; {statistics[3]}</p>
      </div> */}
      <h3 className="bg-blue">{name}</h3>
    </div>
  );
};

export default PlayerCard;
