import { BrowserRouter } from "react-router-dom";

import NavigationBar from "./components/NavegationBar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
