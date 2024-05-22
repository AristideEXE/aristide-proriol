import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { contactPath, homePath, aboutPath, projectsPath, summaryPath, aristideproriol, caducee, factoryland, irdDispositifs, cloneMonsterHunter, starWarsLegacy, agirr } from './routes';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Summary from './pages/Summary/Summary';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Caducee from './pages/Projects/Projects/Caducee/Caducee';
import FactoryLand from './pages/Projects/Projects/FactoryLand/FactoryLand';
import IRDDispositifs from './pages/Projects/Projects/IRDDispositifs/IRDDispositifs';
import CloneMonsterHunter from './pages/Projects/Projects/CloneMonsterHunter/CloneMonsterHunter';
import StarWarsLegacy from './pages/Projects/Projects/StarWarsLegacy/StarWarsLegacy';
import Agirr from './pages/Projects/Projects/Agirr/Agirr';

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
          <Route path={caducee} element={<Caducee />} />
          <Route path={factoryland} element={<FactoryLand />} />
          <Route path={irdDispositifs} element={<IRDDispositifs />} />
          <Route path={agirr} element={<Agirr />} />
          <Route path={cloneMonsterHunter} element={<CloneMonsterHunter />} />
          <Route path={starWarsLegacy} element={<StarWarsLegacy />} />
          <Route path="*" element={<p>Page introuvable</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
