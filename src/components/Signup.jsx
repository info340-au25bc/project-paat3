import { Link } from 'react-router';
import { Footer } from './Footer';

export function Signup(props) {
    return (
        <div>
            <nav>
                    {/* <div className="nav-left"> </div> */}
                    <div className="nav-login-signup">
                        <img src="img/compass.jpg" alt="compass" width="60" height="60" />
                        <Link to="/signup" className="home-button">A Gifter's Compass</Link>
                    </div>
                </nav>

            <header className="container-fluid text-white py-5">
                <h1 style={{fontSize: "50px"}}> Create Account</h1>
            </header>

            <main>
                <div className="d-flex justify-content-center align-items-center">
                <div className="card col-12 col-md-6 mb-5">
                        <div className="card-body">
                            <h2 className="card-title text-center mt-3 mb-4">Join Us!</h2>


                            <form className="p-3">
                                <div className="mb-3">
                                    <label for="nameInput" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="nameInput" />
                                </div>
                                <div className="mb-3">
                                    <label for="emailInput" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="emailInput" />
                                </div>
                                <div className="mb-3">
                                    <label for="passwordInput" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="passwordInput" />
                                </div>
                                <div className="mb-3">
                                    <label for="confirmPasswordInput" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPasswordInput" />
                                </div>
                                <Link to="index" className="btn btn-primary">Create account</Link>
                                <p className="text-center mt-3">
                                    Already have an account? <Link to="/login">Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

           <Footer />
        </div>
    );
}