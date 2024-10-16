import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<div>Login Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
