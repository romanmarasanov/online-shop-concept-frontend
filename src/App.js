import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
