import { Link } from "react-router-dom";
import style from "./Login.module.css"

function Login() {

    return (

        <>
            <div className={style.container} >

                <div className={style.loginContainer}>
                    <h5 className={style.loginTitle}>로그인</h5>

                    <div className={style.loginForm}>

                        <input type="login" placeholder="아이디"/>
                        <input type="password" placeholder="비밀번호"/>

                    </div>

                    <Link>비밀번호 찾기</Link>
                    <Link>아이디 찾기</Link>
                </div>

            </div>
        </>
    )

}


export default Login;