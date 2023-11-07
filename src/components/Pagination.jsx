import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [todos, setTodos] = useState([]);
  const [todosPerPage, setTodosPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPagesCalculated = Math.ceil(todos.length / todosPerPage);
  const noOfPagesArray = [...Array(totalPagesCalculated + 1).keys()].slice(1);
  const todoLastIndex = currentPage * todosPerPage;
  const todoStartindex = todoLastIndex - todosPerPage;
  const calculatedTodos = todos.slice(todoStartindex, todoLastIndex);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div>
      <select onChange={(e) => setTodosPerPage(e.target.value)}>
        <option value={10}>10</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </select>
      {calculatedTodos.map((todo) => (
        <h3 key={todo.id}>{todo.id}</h3>
      ))}
      <p
        onClick={() =>
          currentPage !== 1 ? setCurrentPage(currentPage - 1) : null
        }
      >
        Prev
      </p>
      {noOfPagesArray.map((page) => (
        <button onClick={() => setCurrentPage(page)} key={page}>
          {page}
        </button>
      ))}
      <p
        onClick={() =>
          currentPage !== 20 ? setCurrentPage(currentPage + 1) : null
        }
      >
        next
      </p>
    </div>
  );
};

export default Pagination;
