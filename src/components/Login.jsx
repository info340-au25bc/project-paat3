import { Link } from 'react-router';
import { Footer } from './Footer';

export function Login(props) {
    return (
        <div>
            <nav>
                {/* <div className="nav-left"> </div> */}
                <div className="nav-login-signup">
                    <img src="img/compass.jpg" alt="compass" width="60" height="60" />
                    <Link to="/login" className="home-button">A Gifter's Compass</Link>
                </div>
            </nav>

            <header className="container-fluid text-white py-5">
                <h1 style={{ fontSize: "50px" }}>Account Login</h1>
            </header>

            <main>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="card w-50 mb-5">
                        <div className="card-body">
                            <h2 className="card-title text-center mt-3 mb-4">Welcome Back!</h2>

                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <Link to="/index" className="btn btn-primary" role="button">Log in</Link>
                                <p className="text-center mt-3">
                                    Don't have an account? <Link to="/signup">Sign Up</Link>
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