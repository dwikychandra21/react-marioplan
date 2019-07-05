import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from "./components/Layout/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import ProjectDetail from "./components/Projects/ProjectDetail";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import CreateProject from "./components/Projects/CreateProject";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetail} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
