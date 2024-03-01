import logo from "../pictures/loga.jpg"
import "../styling/hero.css"

export default function Home() {
    return (
        <div>
            <div className="hero-div">
                <h1 className="hero-h1">Skånes Geologiska Sällskap</h1>
                <p className="hero-p">-upplev, upptäck och utforska med likasinnade</p>
            </div>
            <div className="info-div">
                <h3>SKGS</h3>
                <div className="logo-holder">
                    <img src={logo} className="info-logo" alt="skgs logo"></img>
                </div>
                <p>Skånes Geologiska Sällskap (SKGS) bildades 1979. <br /> Vi har som mål att på ett gemytligt sätt odla och förmedla vårt intresse för geologi!</p>
                <a href="/about"><button className="info-btn">Läs mer</button></a>
            </div>
        </div>
    )
}