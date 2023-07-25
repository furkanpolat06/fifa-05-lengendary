import PlayerCard from "./PlayerCard";
import { data } from "../helper/data";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardContainer = () => {
  const[state, setState]=useState("")
  const handleSubmit = (e) => setState(e.target.value);
  const filterName=data.filter(item=>item.name.toLocaleLowerCase().includes(state.trim().toLocaleLowerCase()))
  console.log(filterName);
  

  
  return (
    <div className="container">
       <Form.Control  className="mb-4" type="search" placeholder="Enter footballer..." onChange={handleSubmit} />
      <div className="card-container " >
        {filterName.map((player) => (
          <PlayerCard key={player.name} {...player} />
        ))}
        
      </div>
    </div>
  );
};

export default CardContainer;
