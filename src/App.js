import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sort from "../../display-data/src/Sort";
import Display from "../../display-data/src/Display";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Display/>} />
        <Route exact path="/Sort" element={<Sort/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
