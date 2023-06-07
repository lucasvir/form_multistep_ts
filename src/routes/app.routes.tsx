import {Routes, Route} from 'react-router-dom';

import { Home } from '../pages/Home';
import { Empresa } from '../pages/Empresa';
import { Projeto } from '../pages/Projeto';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/empresa' element={<Empresa />} />
      <Route path='/projeto' element={<Projeto />} />
    </Routes>
  )
}