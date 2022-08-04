import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './compopnents/layouts/layout';

export const App = () => {

  return <HashRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<div>ddsadsds</div>}/>
      </Route>
    </Routes>
  </HashRouter>

}
