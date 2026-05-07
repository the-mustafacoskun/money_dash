import "./App.css";
import MainLayout from "./layout/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Settings from "./pages/Settings";
function App() {
  return (
    <BrowserRouter>
    <MainLayout>
      <div className="flex ">
        
          <Switch>
            <Route exact path='/dashboard'>
              <Dashboard/>
            </Route>
            <Route path='/settings'>
              <Settings/>
            </Route>
          </Switch>
        
      </div>
    </MainLayout>
    </BrowserRouter>
  );
}

export default App;
