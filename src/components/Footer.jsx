export function Footer(props) {
    return (
        <footer>
            <div id="social-links">
                <a href="https://www.instagram.com/accounts/login/"><i className="fa fa-instagram" aria-label="instagram"></i></a>
                <a href="https://x.com/i/flow/login"><i className="fa fa-twitter-square" aria-label="twitter"></i></a>
                <a href="https://www.facebook.com/login.php/"><i className="fa fa-facebook-square" aria-label="facebook"></i></a>
                <a href="https://github.com/login"><i className="fa fa-github" aria-label="github"></i></a>
            </div>

            <div className="container">
                <p><a href="mailto:giftCompass@uw.edu"><span className="material-icons">email</span> giftCompass@uw.edu</a></p>
                <p><a href="tel:555-123-4567"><span className="material-icons">phone</span> 555-123-4567</a></p>
                <p>&copy; A Gifter's Compass 2025</p>
            </div>
        </footer>
    )
}