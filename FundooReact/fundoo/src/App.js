import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from './Pages/SignUp/signup';
import Signin from './Pages/signIn/signin';
import Dashboard from './Pages/Dashboard/Dashboard';
import { signin } from './Services/userservice';
import { Provider } from "react-redux";
import store from "./Redux/store";
import Router1 from "./Router";

function App() {
  return (
    <div>
       <Provider store={store}>
           <Router1/>
       </Provider>
    </div>
  );
}

export default App;
