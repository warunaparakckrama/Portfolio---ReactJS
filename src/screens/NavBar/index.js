import React from "react";

function NavBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="is-hidden-mobile">
          <img src="/M Logo 2.png" width={120} height={15} />
        </div>
        <div className="is-hidden-desktop field is-grouped">
          <div>
            <img src="/M Logo 2.png" width={80} height={1} />
          </div>
          <div style={{ marginLeft: "240px", marginTop: "5px" }}>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item mr-6 ml-6" href="#home">
            Home
          </a>
          <a className="navbar-item mr-6 ml-6" href="#about">
            About
          </a>
          <a className="navbar-item mr-6 ml-6" href="#showcase">
            Showcase
          </a>
          <a className="navbar-item mr-6 ml-6" href="#contact">
            Contact
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item is-hidden-mobile">
            <button className="button is-white">
              <img
                src="/share.png"
                className="mr-2"
                width="20px"
                height="20px"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
