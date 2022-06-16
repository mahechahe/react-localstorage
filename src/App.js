import "./App.css";
import React, { useState, useEffect } from "react";
import { TaskCreate } from "./components/TaskCreate";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
import { Container } from "./components/Container";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const toggleTask = (tasks) => {
    setTaskItems(
      taskItems.map((task) =>
        task.name === tasks.name ? { ...task, done: !task.done } : task
      )
    );
  };

  const createTask = (taskName, done) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([
        ...taskItems,
        {
          name: taskName,
          done: done ? true : false,
        },
      ]);
    }
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  const cleanTask = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreate createTask={createTask}></TaskCreate>
        <TaskTable toggleTask={toggleTask} tasks={taskItems}></TaskTable>

        <VisibilityControl
          showCompleted={showCompleted}
          setShowCompleted={setShowCompleted}
          cleanTask={cleanTask}
          isChecked={showCompleted}
        ></VisibilityControl>

        {showCompleted && (
          <TaskTable
            toggleTask={toggleTask}
            tasks={taskItems}
            showCompleted={showCompleted}
          ></TaskTable>
        )}
      </Container>
    </main>
  );
}

export default App;
