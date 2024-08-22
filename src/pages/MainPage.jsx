
import logo from "../images/logo.png"
import style from "../pages/MainPage.module.css"



function MainPage() {

    const List = ["라이즈", "코르키" , "아칼리"]

    return (

        <>
        <div className={style.mainContainer}>

            <img className={style.logo} src={logo} alt="Logo" />

            <button className={style.participateButton}>참여하기</button>

            <div className={style.boardContainer}>

                <div className={style.bestBoard}>

                    

                </div>

                <div className={style.patchNote}>


                </div>

            </div>

        </div>
        </>
    ) 

    
}

export default MainPage;