import WrapperRoutes from "./router/index.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WrapperRoutes />
      </BrowserRouter>
    </div>
  );
}
export default App;