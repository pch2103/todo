import React, {useContext} from 'react'
import {Context} from "./context";
import {CHANGE_TODOS, REMOVE_TODOS} from "./types";

export default function TodoItem({title, id, completed}) {
  const {dispatch} = useContext(Context);
  const cls = ["todo"];

  if(completed){
    cls.push("completed")
  }

  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={()=>dispatch({type: CHANGE_TODOS, payload: id})}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick={()=>dispatch({type: REMOVE_TODOS, payload: id})}
        >
          delete
        </i>
      </label>
    </li>
  )
}