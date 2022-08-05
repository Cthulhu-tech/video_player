import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './compopnents/layouts/layout';

export const App = () => {

  return <HashRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<div>home</div>}/>
        <Route path="/last" element={<div>last</div>}/>
        <Route path="/noted" element={<div>noted</div>}/>
        <Route path="/stats" element={<div>stats</div>}/>
      </Route>
    </Routes>
  </HashRouter>

}
