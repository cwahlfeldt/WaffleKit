import React from 'react'
import Footer from '../Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import FixedBorder from '../FixedBorder';
import Jumbo from '../Jumbo';

const App = () => (
  <div>
    <Jumbo />
    <div className="container">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <FixedBorder />
    </div>
  </div>
);

export default App;
