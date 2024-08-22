
import logo from "../images/headerLogo.png"
import style from "./Header.module.css"
import { useNavigate} from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    
    return (

        <>
            <header className={style.container}>
                
                    <img src={logo} alt="headerLogo" className={style.logoImg}  />

                    <div className={style.headerButton}>

                        <button className={style.loginButton}> 로그인 </button>
                        <button className={style.signUpButton}> 회원가입 </button>

                    </div>
                
            </header>
        </>
    )
}

export default Header;