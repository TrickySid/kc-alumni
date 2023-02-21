import React from "react";
import "../styles/Details.css";

export default function Details() {
  return (
    <div id="login-form-wrap">
      <form id="login-form" action="https://j0qf7q.csb.app/">
        <p>
          <input type="email" id="email" placeholder="Email" required />
          <i class="validation">
            <span></span>
            <span></span>
          </i>
        </p>
        <p>
          <input
            type="password"
            id="password"
            name="email"
            placeholder="Password"
            required
          />
        </p>
        {/* <p className="forgot-pass" href="/">
          Forgot Password?
        </p> */}
        <p>
          <input type="submit" id="login" value="Login" />
        </p>
      </form>
      <form id="create-account-wrap" action="https://x9zs4f.csb.app">
        <p>
          New here?
          <br />
          <input type="submit" id="register" value="Register" />
        </p>
      </form>
    </div>
  );
}
