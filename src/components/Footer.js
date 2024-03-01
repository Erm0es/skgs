import "../styling/footer.css"
export default function Footer() {
    return (
        <div className="footer-div">
            <ul>
                <li><a href="/home">HEM</a></li>
                <li><a href="/meetings">MÖTEN</a></li>
                <li><a href="/excursions">EXKURSIONER</a></li>
                <li><a href="/membership">MEDLEMSKAP</a></li>
                <li><a href="/about">OM OSS</a></li>
                <li><a href="/topical">AKTUELLT</a></li>
                <li><a href="/contact">KONTAKT</a></li>
            </ul>
            <p className="copyright">© Emelie Wiberg</p>
        </div>
    )
}