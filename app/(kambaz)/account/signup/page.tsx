import Link from "next/link";
import { Form } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Signup</h3>
      <Form.Control 
        id="wd-username"
        placeholder="username"
        className="mb-3"
      />
      <Form.Control 
        id="wd-password"
        placeholder="password" 
        type="password"
        className="mb-3"
      />
      <Link 
        id="wd-signup-btn"
        href="/account/profile"
        className="btn btn-primary w-100 mb-2"
      >
        Signup
      </Link>
      <Link id="wd-signin-link" href="/account/signin">
        Signin
      </Link>
    </div>
  );
}