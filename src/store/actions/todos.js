export const addTodo = text => ({ type: "ADD_TODO", payload: { text } });
export const removeTodo = key => ({ type: "REMOVE_TODO", payload: { key } });
