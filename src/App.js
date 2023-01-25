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
    (text) => { // text는 value값
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      setTodos((todos) => todos.concat(todo));
      nextId.current += 1; 
    }, []);

  // 항목 지우기
  const onRemove = useCallback(
    id => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
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

  // 날짜
  // const Content = () => {
  //   const [value, setValue] = useState(new Date());
  
  //   console.log(value.getDate(), value.getMonth() + 1);
  //   return (
  //     <Grid container spacing={2}>
  //       <Grid item xs={12} md={6}>
  //         <Item>
  //           <DatePicker
  //             selected={value}
  //             onChange={(date) => setValue(date)}
  //             inline
  //           />
  //         </Item>
  //       </Grid>
  //       <Grid item xs={12} md={6}>
  //         <Item sx={{ display: "flex", flexDirection: "column" }}>
  //           <TodoProvider>
  //             <TodoHead value={value}/>
  //             <TodoLists/>
  //           </TodoProvider>
  //         </Item>
  //       </Grid>
  //     </Grid>
  //   );
  // };
        
  return (
    <div className='flex_box'>
      <Calender 
      // onchildren={children}
      // selected={value}
      // onChange={(date) => setValue(date)}
      // inline 
      />
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
