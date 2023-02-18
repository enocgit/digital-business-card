import React from "react";
import FacebookIcon from "../assets/Facebook_Icon.png"
import GithubIcon from "../assets/GitHub_Icon.png"
import InstaIcon from "../assets/Instagram_Icon.png"
import TwitterIcon from "../assets/Twitter_Icon.png"


export default function Footer(){
    return (
        <div className="footer">
            <div>
                <a href="">
                    <img src={TwitterIcon} alt="" />  
                </a>
                <a href="">
                    <img src={FacebookIcon} alt="" />
                </a>
                <a href="">
                    <img src={InstaIcon} alt="" />
                </a>
                <a href="">
                    <img src={GithubIcon} alt="" />
                </a>
            </div>
        </div>
    )
}