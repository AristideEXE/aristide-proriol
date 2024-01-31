import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { contactPath, homePath, summaryPath } from './routes';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Summary from './pages/Summary/Summary';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={homePath} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={summaryPath} element={<Summary />} />
          <Route path={contactPath} element={<Contact />} />
          <Route path="*" element={<p>Page introuvable</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
