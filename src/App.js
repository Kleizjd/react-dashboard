import './App.css';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";// Switch
import { useState } from "react";

// import { useState } from "react";

const Dashboard = () => {
  return <h1>Dashboard</h1>;
};
const Content = () => {
  return <h1>Content</h1>;
};
const Courses = () => {
  return <h1>Content/Courses</h1>;
};
const Videos = () => {
  return <h1>Content/Videos</h1>;
};
const Design = () => {
  return <h1>Content/Design</h1>;
};

function App() {
  const [inactive, setInactive] = useState(false);
  
  return (
    <div className="App">
      <Router>
        <Sidebar onCollapse={(inactive) => { console.log(inactive); setInactive(inactive);}}/>
        <div className={`container_sidebar ${inactive ? "inactive" : ""}`}>
          <Switch>
            <Route exact path={'/'}>
              <Dashboard />
            </Route>
            <Route path={'/content'}>
              <Content />
            </Route>
            <Route path={'/content/courses'}>
              <Courses />
            </Route>
            <Route path={'/content/videos'}>
              <Videos />
            </Route>
            <Route path={'/content/design'}>
              <Design />
            </Route>
          </Switch>
        </div>
        
      </Router>

    </div>
  );
}

export default App;
