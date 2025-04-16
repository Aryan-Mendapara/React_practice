// import React, { useState } from 'react';

// function Hooks() {
//     const [count, setCount] = useState(0);

//     const ClickPlus = () => {
//         setCount(count + 1);
//     };

//     const ClickMinus = () => {
//         setCount(count - 1);
//     };

//     const Refresh = () => {
//       setCount(0);
//     }

//     // Determine background color based on the count
//     const handleChange = () => {
//         return count > 0 ? "bg-blue-100" : count < 0 ? "bg-red-200" : "bg-white";
//     };

//     return (
//         <div className={`p-4 ${handleChange()} rounded-lg shadow-md`}>
//             <h1 className="text-xl font-bold">Hello Hooks</h1>
//             <h1 className="text-2xl font-semibold">{count}</h1>
//             <div className="my-4 space-x-4">
//                 <button
//                     onClick={ClickPlus}
//                     className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//                 >
//                     Click Me For Plus
//                 </button>

//                 <button
//                     onClick={ClickMinus}
//                     className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//                 >
//                     Click Me For Minus
//                 </button>

//                 <button 
//                   onClick={Refresh}
//                   className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow"
//                 >
//                   Refresh
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Hooks;



import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (task.trim() === "") return;
    if (editingIndex !== null) {
      const updatedTasks = tasks.map((t, index) => 
        index === editingIndex ? task : t
      );
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, task]);
    }
    setTask("");
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setTask(tasks[index]);
    setEditingIndex(index);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">My Todo List</h1>
      
      {/* Input for new task */}
      <div className="flex space-x-2 mb-4">
        <input
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {editingIndex !== null ? "Update Task" : "Add Task"}
        </button>
      </div>

      {/* List of tasks */}
      <ul className="space-y-2">
        {tasks.map((t, index) => (
          <li key={index} className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
            <span className="text-gray-700">{index + 1}. {t}</span>
            <div className="space-x-2">
              <button 
                onClick={() => editTask(index)} 
                className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
              >
                Edit
              </button>
              <button 
                onClick={() => removeTask(index)} 
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
