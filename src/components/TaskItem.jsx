import { useDispatch } from "react-redux";

export default function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        backgroundColor: "#fff",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <span style={{ textDecoration: task.completada ? 'line-through' : 'none' }}>
        {task.titulo}
      </span>
      <div>
        <button
          onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
          style={{
            marginRight: "5px",
            backgroundColor: task.completada ? "#e67e22" : "#2ecc71",
            color: "#fff",
            border: "none",
            borderRadius: "3px",
            padding: "5px 10px",
            cursor: "pointer"
          }}
        >
          {task.completada ? "Desmarcar" : "Completar"}
        </button>
        <button
          onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
          style={{
            backgroundColor: "#e74c3c",
            color: "#fff",
            border: "none",
            borderRadius: "3px",
            padding: "5px 10px",
            cursor: "pointer"
          }}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}
