import { useDispatch } from "react-redux";

export default function TaskForm() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const titulo = e.target.titulo.value;
    if (titulo.trim() === "") return;
    dispatch({ type: "ADD_TASK", payload: { id: Date.now(), titulo, completada: false } });
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input
        name="titulo"
        placeholder="Nueva tarea"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "250px"
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#3498db",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Agregar
      </button>
    </form>
  );
}
