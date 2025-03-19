import React, { createContext, useEffect, useState } from "react";
import { useNodesState, useEdgesState } from "@xyflow/react";

export const WorkflowContext = createContext();

const WorkflowProvider = ({ children }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  //to fetch the datas from the local storage
  const loadWorkflow = () => {
    const savedNodes = JSON.parse(localStorage.getItem("workFlowNodes")) || [];
    const savedEdges = JSON.parse(localStorage.getItem("workFlowEdges")) || [];
    setNodes(savedNodes);
    setEdges(savedEdges);
  }

  //to save the datas to local storage
  const saveWorkflow = () => {
    localStorage.setItem("workFlowNodes", JSON.stringify(nodes));
    localStorage.setItem("workFlowEdges", JSON.stringify(edges));
    alert("Workflow saved successfully!");
  };

  return (
    <WorkflowContext.Provider
      value={{
        nodes,
        setNodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
        saveWorkflow,
        loadWorkflow
      }}
    >
      {children}
    </WorkflowContext.Provider>
  );
};

export default WorkflowProvider;
