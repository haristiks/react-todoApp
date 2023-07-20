import React from "react";
import Button from 'react-bootstrap/Button';

function ListTask({ task, index, removeTask }) {
  return (
    <>
      <div className="list-tasks">
        {task.title}
        <Button
          onClick={() => {
            removeTask(index);
          }}
          className="delete-btn btn-lg"
          variant="danger"
        >
          Delete
        </Button>
      </div>
    </>
  );
}

export default ListTask;
