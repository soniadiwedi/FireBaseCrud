import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserAuth } from "../contex/UserAuthContext";

export const Navbars = () => {
  const { user, logout } = useUserAuth();

  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  const handleLogOut = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Link to="/" style={linkStyle}>
            Dashboard
          </Link>

          <p style={linkStyle}>
            {user ? (
              <Button onClick={() => handleLogOut()}>LogOut</Button>
            ) : (
              (
                <>
                 <Link to="/login" style={linkStyle}>
                  Login
                </Link>
             
                <Link to="/signin" style={linkStyle}>
                  Sign Up
                </Link>
                </>
               
              )
            )}
          </p>
        </Container>
      </Navbar>
    </div>
  );
};
