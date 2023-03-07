import React from "react";

function Exp() {
  return (
    <div>
      <section>
        <div className="main">
          <div
            className="sub is-hidden-mobile"
            style={{ width: "100%", height: "450px", backgroundColor: "white" }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "24px",
                marginTop: "1rem",
                color: "#034460",
              }}
            >
              <b>Experience</b>
            </p>
            <section>
              <div className="main">
                <div
                  className="sub"
                  style={{
                    width: "100%",
                    height: "450px",
                    backgroundColor: "white",
                  }}
                >
                  <div className="columns">
                    <div className="column is-one-third">
                      <figure style={{ marginTop: "2rem" }} id="album-art">
                        <img src="/Album Arts.png" />
                      </figure>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "24px",
                          fontWeight: "bold",
                          marginTop: "0rem",
                          marginBottom: "0rem",
                          color: "#034460",
                        }}
                      >
                        Album Arts
                      </p>
                    </div>
                    <div className="column">
                      <figure style={{ marginTop: "2rem" }} id="album-art">
                        <img src="/UI Design.png" />
                      </figure>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "24px",
                          fontWeight: "bold",
                          marginTop: "0rem",
                          marginBottom: "0rem",
                          color: "#034460",
                        }}
                      >
                        UI Design
                      </p>
                    </div>
                    <div className="column">
                      <figure style={{ marginTop: "2rem" }} id="album-art">
                        <img src="/Advertisements.png" />
                      </figure>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          fontWeight: "bold",
                          marginTop: "0rem",
                          marginBottom: "0rem",
                          color: "#034460",
                        }}
                      >
                        Advertisements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* Experience Mobile View */}
      <section>
        <div
          className="column is-hidden-desktop"
          style={{ height: "1370px", backgroundColor: "white" }}
        >
          <p
            style={{ textAlign: "center", fontSize: "24px", color: "#034460" }}
          >
            <b>Experience</b>
          </p>
          <figure style={{ marginTop: "2rem" }}>
            <img src="/Album Arts.png" />
          </figure>
          <p
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#034460",
            }}
          >
            Album Arts
          </p>
          <figure style={{ marginTop: "2rem" }}>
            <img src="/UI Design.png" />
          </figure>
          <p
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#034460",
            }}
          >
            UI Design
          </p>
          <figure style={{ marginTop: "2rem" }}>
            <img src="/Advertisements.png" />
          </figure>
          <p
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#034460",
            }}
          >
            Advertisements
          </p>
        </div>
      </section>
    </div>
  );
}

export default Exp;
