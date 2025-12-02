import { Link } from 'react-router';


export function NavBar (props) {
    return (
    <div>
        <nav>
            <div className="nav-left">
                <div id="hamburger-menu">
                    <a href="#"><i className="fa fa-bars" aria-label="menu"></i></a>
                </div> <Link to="/index" className="home-button">A Gifter's Compass</Link>
            </div>

            <div className="nav-middle">
                <Link to="/login">
                    <img src="img/compass.jpg" alt="compass" width="60" height="60" />
                </Link>
            </div>

            <div className="nav-right">
                <Link to="/browse" className="browse-button">Browse</Link>
                <Link to="/quiz1" className="take-quiz-btn">Take Quiz</Link>
                <Link to="/library" className="library-button">Saved Gifts</Link>
            </div>
        </nav>
    </div>
    );
}