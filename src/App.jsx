import { ReactFlowProvider } from "@xyflow/react";
import "./App.css";
import { DnDProvider } from "./DnDContext";
import WorkflowCanvas from "./components/WorkflowCanvas";
import WorkflowProvider from "./workFlowContext";

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
