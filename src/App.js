/* eslint-disable */
import { useState, useRef, useCallback } from 'react';
import TodoChange from './components/TodoChange';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { Calender } from './components/Calender';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 공부하기",
      checked: true
    },
    {
        id: 2,
        text: "포트폴리오 만들기",
        checked: false
    },
    {
        id: 3,
        text: "달팽이 밥주기",
        checked: false
    },
  ]);

  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const nextId = useRef(4);

  // 수정기능
  const onInsertToggle = useCallback(() => {
    if (selectedTodo) {
      setSelectedTodo((selectedTodo) => null);
    }
    setInsertToggle((prev) => !prev);
  }, [selectedTodo]);

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo((selectedTodo) => todo);
  };

  // 항목 추가
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      setTodos((todos) => todos.concat(todo));
      nextId.current += 1; 
    }, []);

  // 항목 지우기
  const onRemove = useCallback( id => {
    if (window.confirm("정말 삭제합니까?")) {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
        alert("삭제되었습니다.");
    } else {
      alert("취소합니다.");
    }
  }, []);

    
  // 체크기능
  const onToggle = useCallback(
    (id) => {
      setTodos(todos.map(todo => 
        todo.id === id ? {...todo, checked: !todo.checked} : todo
      ));
    }, [todos]);
    
  // 업데이트
  const onUpdate = useCallback(
    (id, text) => {
      onInsertToggle();

      setTodos((todos) =>
        todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
      );
    },
    [onInsertToggle],
  );

  // 개수 세기
  // const todoCount = new TodoCount({
  //   selectedTodoItems: selectedTodoItems => {
  //     todoList.setState(selectedTodoItems)
  //   }
  // })

  // this.init = () => {
  //   todoCount.init()
  //   todoCount.setState(this.todoItems)
  //   todoList.setState(this.todoItems)
  // }
        
  return (
    <div className='flex_box'>
      <Calender />
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList 
        todos={todos} 
        onToggle={onToggle}
        onRemove={onRemove} 
        onChangeSelectedTodo={onChangeSelectedTodo}
        onInsertToggle={onInsertToggle}
        />
        {insertToggle && (
          <TodoChange 
          onInsert={onInsert}
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onUpdate={onUpdate}
          insertToggle={insertToggle}
          />
        )}
      </TodoTemplate>
    </div>
  );
}

export default App;
