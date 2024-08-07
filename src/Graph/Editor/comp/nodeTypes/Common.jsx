import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

export default memo(({ data, isConnectable }) => {
  const allowDrop = ev => {
    ev.preventDefault();
  };

  const drop = ev => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log("here", data);
    // ev.target.appendChild(document.getElementById(data));
  };
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        onConnect={params => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div onDrop={drop} onDragOver={allowDrop}>
        Custom Color Picker Node: <strong>{data.color}</strong>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 10, background: "#555" }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 10, top: "auto", background: "#555" }}
        isConnectable={isConnectable}
      />
    </>
  );
});
