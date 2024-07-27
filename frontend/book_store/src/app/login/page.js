import style from "./loginPage.module.css"
import Login from "../components/pages/authentication/login";
import Info from "../components/pages/homepage/info";
import TopMenu from "../components/pages/topMenu";
import Options from "../components/pages/options";
import Register from "../components/pages/authentication/register";
import { AuthProvider } from "./authContext";
function LoginPage(){

    return(
    
    <AuthProvider>
        <div className={style.login}>
        <TopMenu></TopMenu>
        <Options></Options>
        <Login></Login>
        <Info></Info>

    </div>
    </AuthProvider>
    );

}export default LoginPage;
