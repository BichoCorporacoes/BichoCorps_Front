import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/cadastro";



const Routes = () => {
    return(
        <Switch>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Switch>
    )
}

export default Routes