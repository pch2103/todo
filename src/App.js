import React, {useEffect, useReducer, useState} from 'react'
import TodoList from './TodoList'
import {Context} from "./context";
import Reducer from './reducer'
import {ADD_TODOS} from "./types";

export default function App() {
	const [state, dispatch] = useReducer(Reducer,
			JSON.parse(localStorage.getItem('todos')) || [])

	const [todoTitle, seTodoTitle] = useState('')

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(state))
	}, [state]);

	const addTodo = (event) => {
		if (event.key === "Enter") {
			dispatch({type: ADD_TODOS, payload: todoTitle})
			seTodoTitle('')
		}
	}

	return (
			<Context.Provider value={{
				dispatch
			}}>
				<div className="container">
					<h1>Todo app</h1>

					<div className="input-field">
						<input
								value={todoTitle}
								type="text"
								onChange={event => {
									seTodoTitle(event.target.value)
								}}
								onKeyPress={addTodo}
						/>
						<label>Todo name</label>
					</div>

					<TodoList todos={state}/>
				</div>
			</Context.Provider>
	);
}
