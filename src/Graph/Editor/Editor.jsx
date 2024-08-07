import React from "react";
import { EditorWrapper } from "./comp/EditorWrapper";
import { EditorToolbar } from "./comp/EditorToolbar";
import { EditorGraph } from "./comp/EditorGraph";

const nodes = [
  {
    id: "1",
    type: "input",
    data: { label: "An input node" },
    position: { x: 0, y: 50 },
    sourcePosition: "right"
  },
  {
    id: "2",
    type: "selectorNode",
    data: { label: "sel" },
    style: { border: "1px solid #777", padding: 10 },
    position: { x: 300, y: 50 }
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output A" },
    position: { x: 650, y: 25 },
    targetPosition: "left"
  },
  {
    id: "4",
    type: "output",
    data: { label: "Output B" },
    position: { x: 650, y: 100 },
    targetPosition: "left"
  }
];
export const Editor = () => {
  return (
    <EditorWrapper
      drawArea={<EditorGraph nodes={nodes} />}
      herobarArea={<div>HeroBarArea</div>}
      toolbarArea={
        <EditorToolbar tools={["tasks", "transforms", "end", "if"]} />
      }
    />
  );
};
