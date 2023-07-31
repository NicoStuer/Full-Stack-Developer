import React from "react";
import "../components/task.css";

export const TaskCard = ({ready}) => {
  return (
    <div className="card">
      <h1>Mt first task</h1>
      <span
      className={ready ? "bg-green" : "bg-red"}
      >{ready ? "Task done" : "Task pending"}</span>
    </div>
  );
};
