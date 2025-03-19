import React from "react";
import { useDnD } from "./DnDContext";

const NodePalette = () => {
  const [_, setType] = useDnD();

  const onDragStart = (event, nodeType) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="node-palette">
      <h3 className="palette-title">Node Palette</h3>
      <div
        className="node-item start-node"
        onDragStart={(event) => onDragStart(event, "Start")}
        draggable
      >
        Start Node
      </div>
      <div
        className="node-item process-node"
        onDragStart={(event) => onDragStart(event, "Process")}
        draggable
      >
        Process Node
      </div>
      <div
        className="node-item decision-node"
        onDragStart={(event) => onDragStart(event, "Decision")}
        draggable
      >
        Decision Node
      </div>
      <div
        className="node-item end-node"
        onDragStart={(event) => onDragStart(event, "End")}
        draggable
      >
        End Node
      </div>
    </div>
  );
};

export default NodePalette;
