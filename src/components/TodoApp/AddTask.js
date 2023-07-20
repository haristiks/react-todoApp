import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function AddTask({ addTask }) {
  const [value, setValue] = useState("");


  const addItem = () => {
    if(!value){
      alert("add an item")
      return;
    }
    addTask(value);
    setValue("");
  };
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Add a new Task"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button onClick={addItem} className="add-btn btn-lg" variant="primary">
          ADD
        </Button>
      </div>
    </>
  );
}

export default AddTask;
