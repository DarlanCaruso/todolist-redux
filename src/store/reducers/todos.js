const INITIAL_STATE = [
  {
    key: 1,
    date: new Date().toString(),
    text: "Fazer café",
    status: "done"
  },
  {
    key: 2,
    date: new Date().toString(),
    text: "Fazer suco",
    status: "todo"
  }
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          key: Math.random(),
          date: new Date().toString(),
          text: action.payload.text,
          status: "todo"
        }
      ];

    case "REMOVE_TODO":
      return state.filter(todo => todo.key !== action.payload.key);

    default:
      return state;
  }
}
