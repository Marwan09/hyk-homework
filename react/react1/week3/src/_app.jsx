import { useEffect, useRef, useState } from "react";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef();
  const deadlineRef = useRef();
  // async function fetchAPI()
  const fetchAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
      );
      const data = await response.json();
      if (data) {
        setTodos(data);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    // setLoading(true);
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(data => setTodos(data))
    //   .catch(error => console.error(error));
    // setLoading(false);
    fetchAPI();
  }, []);

  // Handle comleted to do
  const handlecomleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  // Add ToDo function
  const handleAdd = () => {
    const currentTodo = inputRef.current.value;
    const currentDeadLineTodo = deadlineRef.current.value;

    if (
      currentTodo === "" ||
      currentDeadLineTodo === "" ||
      currentDeadLineTodo.toDateString < new Date().toDateString()
    ) {
      alert("Please enter a valid todo or DeadLine");
      return;
    }
    const newElement = {
      id: Date.now(),
      description: currentTodo,
      deadline: currentDeadLineTodo,
      completed: false,
    };
    console.log(currentDeadLineTodo.toDateString < new Date().toDateString());
    console.log(inputRef.current.value);
    console.log(deadlineRef.current.value);
    setTodos([...todos, newElement]);
  };
  // Delete ToDo function
  const handleDelete = (id) => {
    const newTodos = todos.filter((e) => e.id !== id);
    setTodos(newTodos);
  };

  // Edit ToDo function

  const handleEdit = (id) => {
    const currentTodo = inputRef.current.value;
    const currentDeadLineTodo = deadlineRef.current.value;
    const updatedTodos = todos.map((e) => {
      if (e.id === id) {
        (e.id = Date.now()),
          (e.description = currentTodo),
          (e.deadline = currentDeadLineTodo),
          (e.completed = false);
      }
    });
  };

  // counter to  “Time On Page”  function
  useEffect(() => {
    const timer = setInterval(() => setCounter(counter + 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      {loading ? (
        <h2>"loading ..."</h2>
      ) : (
        <div className="box">
          <div>You have used: {counter} seconeds on this side </div>
          <h2>MY Todo List</h2>
          <div className="add">
            {/* new todo  input */}
            <input
              type="text"
              className="inputAdd"
              ref={inputRef}
              placeholder="Enter ToDo here"
            />
            {/* deadline input */}
            <input
              type="date"
              className="inputAdd"
              ref={deadlineRef}
              placeholder="Add new ToDo"
            />
            <button onClick={handleAdd}>Add</button>
          </div>
          {/* display To Dos List value  */}
          <ul>
            {todos.map((e, index) => (
              <div key={e.id}>
                <li>
                  <div className="todo">
                    <div>
                      <input
                        onClick={() => handlecomleted(index)}
                        type="checkbox"
                        description=""
                        id={e.description}
                        // checked={() => e.completed}
                      />
                      <label
                        className={e.completed ? "done" : ""}
                        htmlFor={e.description}
                      >
                        {e.description}
                        <span htmlFor={e.description}>
                          {" "}
                          Deadline: {e.deadline}
                        </span>{" "}
                      </label>{" "}
                    </div>
                    <div>
                      {" "}
                      <button
                        className="delete"
                        onClick={() => handleDelete(e.id)}
                      >
                        Delete
                      </button>
                      <button className="edit" onClick={() => handleEdit(e.id)}>
                        Edit
                      </button>
                    </div>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
