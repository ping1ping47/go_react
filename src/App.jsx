import React from 'react';
import StudentsList from './components/StudentList/index';
import SubjectsList from './components/subjectsList/index';
import ItemList from './components/itemList/index';

function App() {
  return (
    <div className="app">
      <h1>My App</h1>

      <div className="card">
        <h2>Items</h2>
        <ItemList />
      </div>

      <div className="card">
        <h2>Students</h2>
        <StudentsList />
      </div>

      <div className="card">
        <h2>Subjects</h2>
        <SubjectsList />
      </div>
    </div>
  );
}

export default App;
