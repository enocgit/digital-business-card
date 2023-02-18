import MailImg from "../assets/Mail.png"
import LinkedinImg from "../assets/linkedin.png"


export default function Info(){
    return (
        <>
            <img src="http://www.placebear.com/350/317" alt="my profile picture" className="info--intro-img" />
            <div className="info--intro container">
                <h4 className="info--intro-name">Enoch Ansah</h4>
                <p className="info--intro-dev">Frontend Developer</p>
                <small className="info--intro-website">enochprogrammer.netlify.net</small>
                <div className="info--btns">
                    <a href="">
                        <button className="info--btn"><img src={MailImg}/><p>Email</p></button>
                    </a>
                    <a href="">
                        <button className="info--btn linkedin-btn"><img src={LinkedinImg} /><p>Linkedin</p></button>
                    </a>
                </div>
            </div>
        </>
    )
}