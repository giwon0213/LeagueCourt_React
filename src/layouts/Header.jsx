
import logo from "../images/headerLogo.png"
import style from "./Header.module.css"
import { useNavigate , Link} from "react-router-dom";


function Header() {

    const navigate = useNavigate();

    
    return (

        <>
            <header className={style.container}>
                
                    <img src={logo} alt="headerLogo" className={style.logoImg}  />

                    <div className={style.headerButton}>

                        <Link to='/login' className={style.loginButton} > 로그인 </Link>
                        <Link to='/signUp' className={style.signUpButton}> 회원가입 </Link>

                    </div>
                
            </header>
        </>
    )
}

export default Header;