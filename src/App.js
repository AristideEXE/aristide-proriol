import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { contactPath, homePath, aboutPath, projectsPath, summaryPath } from './routes';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Summary from './pages/Summary/Summary';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={homePath} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={summaryPath} element={<Summary />} />
          <Route path={contactPath} element={<Contact />} />
          <Route path={aboutPath} element={<About />} />
          <Route path={projectsPath} element={<Projects />} />
          <Route path="*" element={<p>Page introuvable</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
