import React from "react";

export const EditorToolbar = ({ tools }) => {
  const drag = ev => {
    ev.dataTransfer.setData("text", ev.target.textContent);
  };
  return (
    <div>
      {tools.map((tool, index) => (
        <div
          key={index}
          style={{ border: "1px solid grey" }}
          draggable="true"
          onDragStart={drag}
        >
          {tool}
        </div>
      ))}
    </div>
  );
};
