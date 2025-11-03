import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const ordenadas = [...tasks].sort((a, b) => a.completada - b.completada);
  const completadas = tasks.filter(t => t.completada).length;

  return (
    <>
      <p style={{ fontWeight: "bold", color: "#34495e", marginBottom: "20px" }}>
        Tareas completadas: {completadas}
      </p>
      <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
        {ordenadas.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}
