
import TopMenu from "../components/pages/topMenu";
import Options from "../components/pages/options";
import Register from "../components/pages/authentication/register";
import Info from "../components/pages/homepage/info";
import { AuthProvider } from "../login/authContext";
import style from "./page.module.css"
function RegisterPage(){


    return( <AuthProvider>
        <div className={style.login}>
        <TopMenu></TopMenu>
        <Options></Options>
        <Register></Register>
        <Info></Info>

    </div>
    </AuthProvider>);

}export default RegisterPage;