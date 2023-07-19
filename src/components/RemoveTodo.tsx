import { useDispatch } from "react-redux";
import { remove } from "../store";

export function RemoveTodo({ todo }: {todo : string}) {
  const dispatch = useDispatch();
  
  function handleRemoveTodo(todo: string) {
    dispatch(remove(todo));
  }

  return (
    <button onClick={() => handleRemoveTodo(todo)}>Remover</button>
  )
}