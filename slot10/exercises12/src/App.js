// App.js
import React from 'react';
import Counter from './Counter';
import ColorSwitcher from './ColorSwitcher';
import ControlledInput from './ControlledInput';
import DragDropList from './DragDropList';
import SearchFilter from './SearchFilter';
import TodoList from './TodoList';
import ToggleVisibility from './ToggleVisibility';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <h2>Counter</h2>
      <Counter />

      <h2>ColorSwitcher</h2>
      <ColorSwitcher />

      <h2>ControlledInput</h2>
      <ControlledInput />

      <h2>DragDropList</h2>
      <DragDropList />

      <h2>SearchFilter</h2>
      <SearchFilter />

      <h2>TodoList</h2>
      <TodoList />

      <h2>ToggleVisibility</h2>
      <ToggleVisibility />
    </div>
  );
}

export default App;
