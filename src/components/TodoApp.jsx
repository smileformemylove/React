import React, { useState } from "react";
import "../css/App.css";

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState("");


    const addTask = () => {
        if (newTask.trim() !== "") {
            setTodos([
                ...todos,
                { id: Date.now(), text: newTask, completed: false },
            ]);
            setNewTask("");
        }
    };


    const deleteTask = (id) => {
        setTodos(todos.filter((task) => task.id !== id));
    };


    const toggleTask = (id) => {
        setTodos(
            todos.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="app">
            <h1>Todo List</h1>
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Enter your task:"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <div className="task-list">
                {todos.map((task, index) => (
                    <div
                        key={task.id}
                        className={`task-card ${
                            task.completed ? "completed" : ""
                        }`}
                    >
                        <h2>
                            Task №{index + 1} | Completed:{" "}
                            {task.completed ? "✅" : "❌"}
                        </h2>
                        <p>{task.text}</p>
                        <button
                            className="toggle-btn"
                            onClick={() => toggleTask(task.id)}
                        >
                            {task.completed ? "Mark as Undone" : "Mark as Done"}
                        </button>
                        <button
                            className="delete-btn"
                            onClick={() => deleteTask(task.id)}
                        >
                            Delete Task
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoApp;
