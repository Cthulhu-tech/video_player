import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./layouts/layouts";

function App () {

  return <BrowserRouter>
    <Routes>
      <Route element={<Layouts/>}>
        <Route path="/" element={<>vvvvv</>}/>

      </Route>
    </Routes>
  </BrowserRouter>

}

export default App;
