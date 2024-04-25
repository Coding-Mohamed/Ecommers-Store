import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./AppContent";
import store from "./store/Index";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
};

export default App;
