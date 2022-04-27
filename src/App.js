import { Route, Routes } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout'
import Login from './pages/Login'
import DateTodoList from './pages/DateTodoList';
import Calendar from './pages/Calendar'

function App() {
  return (
    <Routes>
      <Route exact strict path="/login" element={BaseLayout(<Login />)} />
      <Route path="/" element={BaseLayout(<Calendar />)} />
      <Route exact strict path="/daily" element={BaseLayout(<DateTodoList />)} /> 
    </Routes>
  );
}

export default App;