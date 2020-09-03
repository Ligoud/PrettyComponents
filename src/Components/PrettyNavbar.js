import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";

import $ from "jquery";
import { NavDropdown } from "react-bootstrap";

class PrettyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.switched = this.switched.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  switched() {
    console.log("Something");
    $("#field").toggleClass("dark");
  }
  handleClick(e) {
    let link = e.target;
    let type = $(link).attr("data-type");
    this.props.onNavClicked(type);
  }
  render() {
    return (
      <React.Fragment>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          bg="dark"
          className="navtop"
        >
          <Navbar.Brand href="#">
            <div className="cutlogo">
              <img src={require("../FirstLogo.png")} alt="" />
            </div>
            {/* sssxxx */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={this.handleClick} data-type="page1">
                Pretty Components
              </Nav.Link>
              <Nav.Link onClick={this.handleClick} data-type="page2">
                Pretty Sorting Algorithms
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Form>
                <Form.Switch
                  inline
                  custom
                  id="themeSwitcher"
                  label="On/Off dark theme"
                  onChange={this.switched}
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default PrettyNavbar;
