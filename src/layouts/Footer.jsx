import style from "./Footer.module.css"

function Footer() {

    console.log('"gdgdgdgd');


    return (

        <>
            <footer>
                <div className={style.container}>
                    <div className={style.contact_info}>


                        <span className={style.email}>이메일 : 2giwon0213@gmail.com </span>

                        <span className={style.phoneNumber}>연락처 : 010-2724-5574</span>

                        <span className={style.gitHubAddress}>GitHub : github.com/giwon0213</span>

                        <span className={style.name}>만든애 : 이기원</span> 
                        
                        <span className={style.lolId}>롤아이디 : 기빡스#KR1</span> 

                        <span className={style.lolPosition}>포지션 : 탑,원딜</span>

                        <span className={style.address}>집주소 : 비밀</span>

                        <span className={style.duo}>듀오신청 : 다이아 이상 서폿</span>

                    </div>
                </div>
            </footer>

        </>
    )

}

export default Footer;
