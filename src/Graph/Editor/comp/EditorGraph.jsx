import React from "react";
import { ReactFlow } from "@xyflow/react";
import Common from "./nodeTypes/Common";
const nodeTypes = {
  selectorNode: Common
};

export const EditorGraph = ({ nodes }) => {
  return <ReactFlow nodes={nodes} nodeTypes={nodeTypes} fitView />;
};
