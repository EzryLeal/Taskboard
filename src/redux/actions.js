// Acción para agregar una tarea
export const addTask = (titulo) => ({
  type: 'ADD_TASK',
  payload: {
    id: Date.now(),
    titulo,
    completada: false
  }
});

// Acción para alternar el estado de completada
export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK',
  payload: id
});

// Acción para eliminar una tarea
export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: id
});
