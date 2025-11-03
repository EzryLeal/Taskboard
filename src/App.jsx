import { Provider } from "react-redux";
import { store } from "./redux/store";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <Provider store={store}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
        fontFamily: "Segoe UI, sans-serif",
        padding: "20px"
      }}>
        <h1 style={{ color: "#2c3e50", fontSize: "2.5rem", marginBottom: "20px" }}>TaskBoard</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
}
