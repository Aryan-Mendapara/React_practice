import React, { useEffect, useState } from 'react';
import { db } from './FirbaseConfig';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';

function TodoFirebase() {
    const [tasks, setTasks] = useState('');
    const [lists, setLists] = useState([]);

    const collectionRef = collection(db, 'todo');

    const fetchData = async () => {
        const data = await getDocs(collectionRef);
        setLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const handleAdd = async () => {
        if (tasks.trim() !== '') {
            await addDoc(collectionRef, { text: tasks });
            setTasks('');
            fetchData();
        }
    };

    const handleDelete = async (id) => {
        const docRef = doc(db, 'todo', id);
        await deleteDoc(docRef);
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">To-Do List with Firebase Database</h1>

            <input
                type='text'
                value={tasks}
                onChange={(e) => setTasks(e.target.value)}
                placeholder='Enter your task'
                className='border p-2 mr-2'
            />
            <button onClick={handleAdd} className="border p-2">Add</button>

            <ul className="mt-4 space-y-2">
                {lists.map((item) => (
                    <li key={item.id} className="flex justify-between items-center border p-2">
                        <span>{item.text}</span>
                        <button
                            onClick={() => handleDelete(item.id)}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoFirebase;
