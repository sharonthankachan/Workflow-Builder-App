import { Handle, Position } from "@xyflow/react";
import React from "react";

const ProcessNode = ({ data }) => {
  return (
    <div title="Click to edit / delete" style={{ padding: "10px", borderRadius: "5px", backgroundColor: "orange", color: "white" }}>
      {data.label}
      <Handle type="source" position={Position.Right} id="source" />
      <Handle type="target" position={Position.Left} id="target" />
    </div>
  );
};

const StartNode = ({ data }) => {
  return (
    <div title="Click to edit / delete" style={{ padding: "10px", borderRadius: "5px", backgroundColor: "green", color: "white" }}>
      {data.label}
      <Handle type="source" position={Position.Right} id="source" />
      <Handle type="target" position={Position.Left} id="target" />
    </div>
  );
};

const DecisionNode = ({ data }) => {
  return (
    <div title="Click to edit / delete" style={{ padding: "10px", borderRadius: "5px", backgroundColor: "gray", color: "white" }}>
      {data.label}
      <Handle type="source" position={Position.Right} id="source" />
      <Handle type="target" position={Position.Left} id="target" />
    </div>
  );
};

const EndNode = ({ data }) => {
  return (
    <div title="Click to edit / delete" style={{ padding: "10px", borderRadius: "5px", backgroundColor: "blue", color: "white" }}>
      {data.label}
      <Handle type="source" position={Position.Right} id="source" />
      <Handle type="target" position={Position.Left} id="target" />
    </div>
  );
};

export const nodeTypes = {
  Process: ProcessNode,
  Start: StartNode,
  Decision: DecisionNode,
  End: EndNode
};
