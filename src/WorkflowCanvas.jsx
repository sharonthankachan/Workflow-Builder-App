import React, { useRef, useCallback, useContext, useState } from "react";
import {
  ReactFlow,
  addEdge,
  Controls,
  useReactFlow,
  Background,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { useDnD } from "./DnDContext";
import NodePalette from "./NodePalette";
import EditNodeModal from "./EditNodeModal";
import { WorkflowContext } from "./workFlowContext";
import { nodeTypes } from "./CustomNodes";

const getId = () => `dndnode_${Date.now()}`;

const WorkflowCanvas = () => {
  const reactFlowWrapper = useRef(null);
  const { screenToFlowPosition } = useReactFlow();
  const [type, setType] = useDnD();
  const [selectedNode, setSelectedNode] = useState(null);

  const { nodes, setNodes, edges, setEdges, saveWorkflow, loadWorkflow, onNodesChange, onEdgesChange } = useContext(WorkflowContext);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);


  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      if (!type) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} Node` },
      };

      setNodes((prevNodes) => [...prevNodes, newNode]);
      setType(null);
    },
    [screenToFlowPosition, type, setNodes, setType]
  );

  const updateNodeLabel = (id, newLabel) => {
    setNodes((nodes) =>
      nodes.map((node) => (node.id === id ? { ...node, data: { label: newLabel } } : node))
    );
  };

  const onDeleteNode = (id) => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
  };

  return (
    <div>
      <h1 style={{ backgroundColor: "#bdc3c7", fontWeight: "bolder", fontFamily: "cursive", padding: "1rem", textAlign: "center" }}>Workflow Builder</h1>
      <div className="workflow-container">
        <NodePalette />
        <div className="workflow-builder" ref={reactFlowWrapper}>
          <div className="workflow-header">
            <button className="save-button" onClick={saveWorkflow}>
              Save Workflow
            </button>
            <button className="load-button" onClick={loadWorkflow}>
              Load Workflow
            </button>
          </div>

          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeClick={(event, data) => setSelectedNode(data)}
            fitView
            style={{ backgroundColor: "#F3F4F6", margin: "0" }}
            nodeTypes={nodeTypes}
          >
            <Controls />
            <Background />

          </ReactFlow>
        </div>
        {selectedNode && <EditNodeModal node={selectedNode} onDelete={onDeleteNode} onClose={() => setSelectedNode(null)} onUpdate={updateNodeLabel} />}
      </div>
    </div>
  );
};

export default WorkflowCanvas;
