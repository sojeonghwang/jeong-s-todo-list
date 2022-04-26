import { Route, Routes } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout'
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={BaseLayout(<Home />)} />
    </Routes>
  );
}

export default App;