
import logo from "../images/logo.png"
import style from "../pages/MainPage.module.css"



function MainPage() {

    const List = ["라이즈", "코르키", "아칼리"]

    return (

        <>
            <div className={style.mainContainer}>

                <img className={style.logo} src={logo} alt="Logo" />

                <button className={style.joinButton}>참여하기</button>

                <div className={style.boardContainer}>

                    <div className={style.bestBoard}>

                        <div className={style.boardTitle}>

                            <div>실시간 <strong>Best5 </strong> 인기글</div>

                        </div>

                        <div className={style.boardContent}>

                            <div className={style.boardNum}>
                                1
                            </div>

                            <div className={style.thumbnali}>
                                <img src={logo} alt="이미지 들어올곳" />
                            </div>

                            <div className={style.boardText}>
                                내용 쏼라쏼라
                            </div>
                        </div>

                    </div>

                    <div className={style.attentionChamps}>

                        <div className={style.champsTitle}>주요 챔피언</div>

                        <div className={style.chmpsSub}>

                            <div className={style.winRate}>승률</div>

                            <div className={style.pickRate}>픽률</div>

                            <div className={style.banRate}>밴율</div>
                        </div>

                        <div className={style.champDetails}>
                            <div className={style.champName}>세나</div>
                            <div className={style.champWinRate}>55.5</div>
                            <div className={style.champPickRate}>40.8</div>
                            <div className={style.champBan}>82.1</div>
                        </div>


                    </div>

                </div>

            </div>
        </>
    )


}

export default MainPage;