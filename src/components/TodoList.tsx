import { useAppSelector } from "../store";
import { RemoveTodo } from "./RemoveTodo";

export function TodoList() {
  const todos = useAppSelector((state) => {
    return state.todo;
  });

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>
          {todo}{' '}
          <RemoveTodo todo={todo} />
        </li>
      ))}
    </ul>
  );
}
