import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Profile</h3>
      <Form.Control 
        id="wd-username"
        defaultValue="alice"
        placeholder="username"
        className="mb-3"
      />
      <Form.Control 
        id="wd-password"
        defaultValue="123"
        placeholder="password" 
        type="password"
        className="mb-3"
      />
      <Form.Control 
        id="wd-firstname"
        defaultValue="Alice"
        placeholder="First Name"
        className="mb-3"
      />
      <Form.Control 
        id="wd-lastname"
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="mb-3"
      />
      <Form.Control 
        id="wd-dob"
        type="date"
        className="mb-3"
      />
      <Form.Control 
        id="wd-email"
        defaultValue="alice@wonderland.com"
        placeholder="email"
        type="email"
        className="mb-3"
      />
      <Form.Select 
        id="wd-role"
        defaultValue="USER"
        className="mb-3"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select>
      <Link 
        href="/account/signin"
        className="btn btn-danger w-100"
      >
        Signout
      </Link>
    </div>
  );
}