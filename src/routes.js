import React  from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NoMatch from "./Components/NoMatch";
import Hoc from "./Components/Hoc";
import Logout from "./Components/Logout";



const RoutesArr =  [
  
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/Login",
    exact: true,
    component: Login,
  },
  {
    path: "/Logout",
    exact: true,
    component: Logout,
  },
  {
    path: "/Search",
    exact: true,
    component: Hoc,
  }
];

const  Routes =(props)=>{
 

  return (  
               
    <Switch>
                  
      {RoutesArr.map(({ path, exact, component: Component, ...rest }) => (
        <Route key={path} path={path} exact={exact} render={(props) => (
          <Component {...props} {...rest} />
        )} />
      ))}
      <Route render={(props) => <NoMatch {...props} /> } />
    </Switch>  
  );
    

};

export default Routes;
