import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/cadastro";
import FakeAdmPage from "../pages/fakeadm";
import Home from "../pages/home";
import UserPage from "../pages/userPage";



const Routes = () => {
    return(
        <Switch>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/fake-adm" element={<FakeAdmPage />} />
            <Route path="/my-account" element={<UserPage />} />
        </Switch>
    )
}

export default Routes