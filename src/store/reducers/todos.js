const INITIAL_STATE = [
  {
    id: 1,
    text: "Fazer café"
  },
  {
    id: 2,
    text: "Fazer suco"
  }
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
