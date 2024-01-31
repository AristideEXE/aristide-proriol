import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { homePath } from './routes';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={homePath} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<p>Page introuvable</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
