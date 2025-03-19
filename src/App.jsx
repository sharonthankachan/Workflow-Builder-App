import { ReactFlowProvider } from "@xyflow/react";
import "./App.css";
import { DnDProvider } from "./DnDContext";
import WorkflowCanvas from "./WorkflowCanvas";
import WorkflowProvider from "./workFlowContext";

WorkflowCanvas;

const App = () => {
  return (
    <WorkflowProvider>
      <ReactFlowProvider>
        <DnDProvider>
          <WorkflowCanvas />
        </DnDProvider>
      </ReactFlowProvider>
    </WorkflowProvider>
  );
};

export default App;
