import "./App.css";
import FormContainer from "./components/Form-Container/FormContainer";

export const initialState = {
  fullName: "",
  displayName: "",
  workspaceName: "",
  workspaceUrl: "",
};

function App() {
  const formReducer = (state, action) => {
    switch (action.type) {
      case "SET_FULL_NAME":
        return { ...state, fullName: action.payload.fullName };
      case "SET_DISPLAY_NAME":
        return { ...state, displayName: action.payload.displayName };
      case "SET_WORKSPACE_NAME":
        return { ...state, workspaceName: action.payload.workspaceName };
      case "SET_WORKSPACE_URL":
        return { ...state, workspaceUrl: action.payload.workspaceUrl };
      default:
        return state;
    }
  };

  return (
    <div className="App h-[100vh] flex justify-center items-center bg-slate-200">
      <FormContainer reducer={formReducer} />
    </div>
  );
}

export default App;
