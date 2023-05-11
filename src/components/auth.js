import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signUp,
  signIn,
  logout,
  forgotPassword,
  resetPassword,
} from "../actions/authActions";
import { Button } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const AuthPage = () => {
  // initialize local state for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetPasswordToken, setResetPasswordToken] = useState("");
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

  // initialize Redux dispatch function
  const dispatch = useDispatch();

  // initialize Redux state variables
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userData = useSelector((state) => state.auth.user);
  const [user, setUser] = useState(userData);
  const error = useSelector((state) => state.auth.error);

  // handle sign up form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUp({ firstName, lastName, email, password, confirmPassword }));
  };

  // handle sign in form submission
  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  };

  // handle sign out
  const handleSignOut = () => {
    dispatch(logout());
  };
  const handleResetPassword = (e) => {
    e.preventDefault();
    dispatch(resetPassword(resetPasswordToken, password));
  };

  // handle forgot password form submission
  const handleForgotPassword = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div className="container-flud">
      {showForgotPassword ? (
        <div className="row">
          <div className="col">
            <form onSubmit={handleForgotPassword}>
              <div className="form-group">
                <label htmlFor="forgotPasswordEmail">Email address</label>
                <input
                  type="email"
                  className="my-3 form-control"
                  id="forgotPasswordEmail"
                  value={forgotPasswordEmail}
                  required
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Enter your email address and we'll send you a link to reset
                  your password.
                </small>
              </div>
              <button className="btn btn-primary rounded-pill" type="submit">
                Reset Password
              </button>
            </form>

            <button onClick={() => setShowForgotPassword(false)}>
              Back to Sign In
            </button>
          </div>
        </div>
      ) : showResetPassword ? (
        <div className="row">
          <div className="col">
            <form onSubmit={handleResetPassword}>
              <div className="form-group">
                <label htmlFor="resetPasswordToken">Reset Password Token</label>
                <input
                  type="text"
                  className="my-3 form-control"
                  id="resetPasswordToken"
                  value={resetPasswordToken}
                  required
                  onChange={(e) => setResetPasswordToken(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  className="my-3 form-control"
                  id="newPassword"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn btn-primary rounded-pill" type="submit">
                Reset Password
              </button>
            </form>

            <button onClick={() => setShowResetPassword(false)}>
              Back to Sign In
            </button>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
            <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded bg-white my-5">
              {isAuthenticated ? (
                <div>
                  <p>You are logged in as {user.email}</p>
                  <button className="btn btn-primary" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="text-center my-3">
                    Sign {user ? "In" : "Up"}
                  </h2>
                  <form onSubmit={user ? handleSignIn : handleSignUp}>
                    {!user && (
                      <>
                        <div className="form-group">
                          <label htmlFor="firstName">First Name</label>
                          <input
                            type="text"
                            className="my-3 form-control"
                            id="firstName"
                            value={firstName}
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                            type="text"
                            className="my-3 form-control"
                            id="lastName"
                            value={lastName}
                            required
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="phoneNumber">Phone Number</label>
                          <input
                            type="tel"
                            className="my-3 form-control"
                            id="phoneNumber"
                            value={phoneNumber}
                            required
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </div>
                      </>
                    )}
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="my-3 form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <small id="emailHelp" class="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="my-3 form-control"
                        id="exampleInputPassword1"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {!user && (
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="my-3 form-control "
                          id="exampleInputPassword1"
                          value={confirmPassword}
                          required
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    )}
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Check me out
                      </label>
                    </div>

                    <div className="justify-content-center">
                      <button
                        className="btn btn-primary w-100 rounded-pill"
                        type="submit"
                        disabled={isLoading}
                      >
                        {user ? "Sign In" : "Sign Up"}
                      </button>
                    </div>
                    <div className="justify-content-center my-2">
                      <button
                        className="btn btn-outline-danger w-100 rounded-pill"
                        type="submit"
                        disabled={isLoading}
                        onClick={google}
                      >
                        <FaGoogle />
                        Sign in with Google
                      </button>
                    </div>
                    <div className="justify-content-center my-2">
                      <button
                        className="btn btn-outline-info w-100 rounded-pill"
                        type="submit"
                        disabled={isLoading}
                        onClick={facebook}
                      >
                        <FaFacebook />
                        Sign in with Facebook
                      </button>
                    </div>
                    <div className="justify-content-center my-2">
                      <button
                        className="btn btn-outline-secondary w-100 rounded-pill"
                        type="submit"
                        disabled={isLoading}
                        onClick={github}
                      >
                        <FaGithub />
                        Sign in with Github
                      </button>
                    </div>
                  </form>

                  {!user && (
                    <div className="text-center mt-3">
                      Already have an account?{" "}
                      <Button variant="link" onClick={() => setUser(true)}>
                        Sign In
                      </Button>
                    </div>
                  )}
                  {user && (
                    <div className="text-center mt-3">
                      Don't have an account?{" "}
                      <Button variant="link" onClick={() => setUser(false)}>
                        Sign Up
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {isAuthenticated === null && !error && (
                <div className="text-center mt-3">Loading...</div>
              )}
              {/* <button onClick={handleForgotPassword}>Forgot Password?</button>
                <button onClick={handleResetPassword}>Reset Password</button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
