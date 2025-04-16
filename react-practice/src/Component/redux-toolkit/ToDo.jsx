import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    // addToDo, 
    removeToDo, 
    updateToDo, 
    setEdit, 
    cancelToDo, 
    handleEditChange, 
    addToDo
} from "./slice/ToDoSlice";

function ToDo() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    const { todo, editId, editTask } = useSelector((state) => state.todos);

    const handleAddTodo = () => {
        if (task.trim()) {
            dispatch(addToDo(task));
            setTask("");
        }
    };

    const handleSaveEdit = () => {
        if (editTask.trim()) {
            dispatch(updateToDo({ id: editId, tasks: editTask }));
            dispatch(cancelToDo()); // Reset edit state after saving
        }
    };

    return (

        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Redux-Toolkit Todo</h1>
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Enter Todo"
                    value={task}
                    className="border p-2 w-64"
                    onChange={(e) => setTask(e.target.value)}
                />
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleAddTodo}
                >
                    Add Todo
                </button>
            </div>

            <ul className="mt-4">
                {todo.map((todoItem) => (
                    <li key={todoItem.id} className="flex justify-between mt-4 items-center border-b pb-2">
                        {editId === todoItem.id ? (
                            <input
                                type="text"
                                value={editTask}
                                className="border p-2 w-64"
                                onChange={(e) => dispatch(handleEditChange(e.target.value))}
                            />
                        ) : (
                            <span>{todoItem.tasks}</span>
                        )}

                        <div className="flex gap-2">
                            {editId === todoItem.id ? (
                                <>
                                    <button 
                                        className="bg-green-500 text-white px-3 py-1 rounded"
                                        onClick={handleSaveEdit}
                                    >
                                        Save
                                    </button>
                                    <button 
                                        className="bg-gray-500 text-white px-3 py-1 rounded"
                                        onClick={() => dispatch(cancelToDo())}
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button 
                                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                                    onClick={() => dispatch(setEdit(todoItem))}
                                >
                                    Edit
                                </button>
                            )}

                            <button 
                                className="bg-red-500 text-white px-3 py-1 rounded"
                                onClick={() => dispatch(removeToDo(todoItem.id))}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDo;