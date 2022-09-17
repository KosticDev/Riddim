import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import snapchat from '../assets/snapchat.png'
import twitter from '../assets/twitter.png'
import discord from '../assets/discord.png'

export default function Join() {
    return(
        <div className="join">
            <div className="join_main">
                
            </div>
            <div className="join_icons">
                <div className="join_icons_content">
                    <a className="j_facebook" href="https://www.facebook.com/Riddim-104005655683489">
                        <img src={facebook} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}