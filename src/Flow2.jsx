import React from "react";
import ReactFlow from "react-flow-renderer";

const elements2 = [
  {
    id: "21",
    type: "input", // input node
    data: { label: "Input Node" },
    position: { x: 250, y: 25 }
  },
  // default node
  {
    id: "22",
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 }
  },
  {
    id: "23",
    type: "output", // output node
    data: { label: "Output Node" },
    position: { x: 250, y: 250 }
  },
  // animated edge
  { id: "e21-22", source: "21", target: "22", animated: true },
  { id: "e22-23", source: "22", target: "23" }
];

export const Flow2 = () => (
  <div style={{ height: 600 }}>
    <ReactFlow elements={elements2} />
  </div>
);
