import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import Auth from './components/Auth';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;