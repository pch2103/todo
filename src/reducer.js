import {ADD_TODOS, CHANGE_TODOS, REMOVE_TODOS} from "./types";

export default function (state, action) {
	switch (action.type) {
		case ADD_TODOS:
			return [
					...state,
					{
						id: Date.now(),
						title: action.payload,
						completed: false
					}
			]
		case CHANGE_TODOS:
			return state.map(todo => {
				if(todo.id === action.payload) {
					todo.completed = ! todo.completed
				}
				return todo
			})

		case REMOVE_TODOS:
			return state.filter(todo => todo.id !== action.payload)

		default:
			return state
	}
}