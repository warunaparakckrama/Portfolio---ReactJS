import React from "react";

function Contact() {
  return (
    <div>
      <section>
        <div className="home-hero is-hidden-mobile">
          <div className="main">
            <div
              className="sub"
              style={{ width: "100%", backgroundColor: "white" }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "24px",
                  marginTop: "2rem",
                  color: "#034460",
                }}
                id="contact"
              >
                <b>Contact</b>
              </p>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "28px",
                  marginTop: "1rem",
                  color: "black",
                }}
              >
                Let's Create Something Amazing!
              </p>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "22px",
                  marginTop: "0rem",
                  color: "black",
                }}
              >
                Write to Me
              </p>
              <br />
              <div className="field is-grouped">
                <p
                  className="control"
                  style={{ marginLeft: "500px", width: "400px" }}
                >
                  <input
                    className="input"
                    type="text"
                    placeholder="Type your message here"
                    id="message"
                  />
                </p>
                <div className="control">
                  <button id="button3">Get a Quote</button>
                </div>
              </div>
              <br />
              <figure id="contact-icon">
                <img src="/phone.png" />
              </figure>
              <p
                style={{
                  marginLeft: "622px",
                  fontSize: "24px",
                  marginTop: "-2rem",
                  color: "#034460",
                }}
              >
                +9477 123 45 67
              </p>
              <br />
              <figure id="contact-icon">
                <img src="/Vector.png" />
              </figure>
              <p
                style={{
                  fontSize: "24px",
                  marginTop: "-2rem",
                  color: "#034460",
                }}
                id="text-align"
              >
                warunam1325@gmail.com
              </p>
              <br />
              <figure id="contact-icon">
                <img src="/house.png" />
              </figure>
              <p
                id="text-align-2"
                style={{
                  fontSize: "24px",
                  marginTop: "-2rem",
                  color: "#034460",
                }}
              >
                4/25, Paramount Park, Colombo 03, SriLanka
              </p>
              <br />
              <section className="is-hidden-mobile">
                <div
                  className="hero-body"
                  style={{
                    width: "100%",
                    height: "300px",
                    backgroundColor: "#034460",
                  }}
                ></div>
              </section>
              <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation"
                id="navbar"
              >
                <div className="navbar-brand">
                  <img src="/M white.png" width={120} height={4} />
                </div>
                <div className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item mr-6 ml-6" id="a" href="#home">
                      Home
                    </a>
                    <a className="navbar-item ml-6 mr-6" id="a" href="#about">
                      About
                    </a>
                    <a
                      className="navbar-item ml-6 mr-6"
                      id="a"
                      href="#showcase"
                    >
                      Showcase
                    </a>
                  </div>
                  <div className="navbar-end">
                    <div className="navbar-item">
                      <p style={{ fontSize: "12px", color: "white" }}>
                        ©2023. All rights reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Mobile View */}
      <section>
        <div
          className="column is-hidden-desktop"
          style={{ height: "480px", backgroundColor: "white" }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "24px",
              marginTop: "0rem",
              color: "#034460",
            }}
            id="contact"
          >
            <b>Contact</b>
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "28px",
              marginTop: "1rem",
              color: "black",
            }}
          >
            Let's Create Something Amazing!
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "22px",
              marginTop: "0rem",
              color: "black",
            }}
          >
            Write to Me.
          </p>
          <br />
          <div className="field is-grouped">
            <p className="control" style={{ marginLeft: "3px" }}>
              <input
                className="input"
                type="text"
                placeholder="Type your message here"
                id="message"
              />
            </p>
            <div className="control">
              <button id="button3">Get a Quote</button>
            </div>
          </div>
          <br />
          <div className="field is-grouped">
            <figure style={{ marginLeft: "75px" }}>
              <img src="/phone.png" style={{ width: "30px", height: "30px" }} />
            </figure>
            <p
              style={{ fontSize: "20px", color: "#034460", marginLeft: "10px" }}
            >
              +9477 123 45 67
            </p>
          </div>
          <div className="field is-grouped">
            <figure style={{ marginLeft: "25px" }}>
              <img
                src="/Vector.png"
                style={{ width: "30px", height: "30px" }}
              />
            </figure>
            <p
              style={{ fontSize: "20px", color: "#034460", marginLeft: "10px" }}
            >
              warunam1325@gmail.com
            </p>
          </div>
          <div className="field is-grouped">
            <figure style={{ marginLeft: "50px" }}>
              <img src="/house.png" style={{ width: "30px", height: "30px" }} />
            </figure>
            <p
              style={{ fontSize: "20px", color: "#034460", marginLeft: "10px" }}
            >
              4/25, Paramount Park, <br />
              Colombo 03, SriLanka
            </p>
          </div>
        </div>
        <section>
          <a href="#home">
            <div
              className="column is-hidden-desktop"
              style={{ height: "120px", backgroundColor: "#034460" }}
            >
              <img
                src="/M white.png"
                style={{ marginLeft: "120px" }}
                width={120}
                height={4}
              />
            </div>
          </a>
        </section>
      </section>
    </div>
  );
}

export default Contact;
