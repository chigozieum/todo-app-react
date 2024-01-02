import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo.jsx";
import Modal from './components/Modal.jsx';

import Title from "./components/Title.jsx";


function App() {
  return (
    <div>
    <Title />
    <div className="todo_wrapper">
      <Todo title="Finish Software Engineering Program"
      paragraph="Code along with Frontend Simplified step by step "/>
      <Todo title="Finish Interview Section"
      paragraph="Finish every interview question in the next six weeks"/>
      <Todo  title="Land a $100k+ job" paragraph="Apply to 100 jobs"/>


    </div>
    {/* <Modal /> */}
     </div>
  );
}

export default App;
