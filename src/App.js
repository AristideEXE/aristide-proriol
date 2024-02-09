import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { contactPath, homePath, aboutPath, projectsPath, summaryPath, aristideproriol, caducee, factoryland, irdDispositifs, cloneMonsterHunter } from './routes';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Summary from './pages/Summary/Summary';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import AristideProriol from './pages/Projects/Projects/AristideProriol/AristideProriol';
import Caducee from './pages/Projects/Projects/Caducee/Caducee';
import FactoryLand from './pages/Projects/Projects/FactoryLand/FactoryLand';
import IRDDispositifs from './pages/Projects/Projects/IRDDispositifs/IRDDispositifs';
import CloneMonsterHunter from './pages/Projects/Projects/CloneMonsterHunter/CloneMonsterHunter';

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
          <Route path={aristideproriol} element={<AristideProriol />} />
          <Route path={caducee} element={<Caducee />} />
          <Route path={factoryland} element={<FactoryLand />} />
          <Route path={irdDispositifs} element={<IRDDispositifs />} />
          <Route path={cloneMonsterHunter} element={<CloneMonsterHunter />} />
          <Route path="*" element={<p>Page introuvable</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
