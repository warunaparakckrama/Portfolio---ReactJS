import React from "react";


function HomeHero() {
  return (
    <section>

<style dangerouslySetInnerHTML={{__html: "\n\t         @font-face {font-family: poppins; src: url(Poppins-Regular.woff); font-weight: normal;} @font-face {font-family: poppins; src: url(Poppins-Light.woff); font-weight:lighter;} @font-face {font-family: poppins; src: url(Poppins-Bold.woff); font-weight:bold;}* {font-family: poppins;}\n\n" }} />
      <div className="columns">
        <div className="column is-8">
          <div className="sub " style={{ backgroundColor: "white" }} id="home">
            <h1
              className="title is-1 is-hidden-mobile"
              style={{
                textAlign: "center",
                marginBottom: "0rem",
                fontSize: "95px",
                color: "black",
              }}
            >
              Hi! I am Waruna
            </h1>

            <h1
              className="title is-1 is-hidden-desktop"
              style={{
                textAlign: "center",
                marginBottom: "0rem",
                fontSize: "85px",
                color: "black",
              }}
            >
              Hi! I am Waruna
            </h1>

            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                color: "#034460",
                fontWeight: "normal",
              }}
            >
              Multimedia Designer | Freelancer
            </p>
            <br />
            <p
              style={{
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "lighter",
              }}
            >
              I create and design digital content for customers who seek the
              best in graphic designs, UI design, animations and video editing.
            </p>
            <br />
            <div className="field is-grouped is-hidden-mobile">
              <p className="control">
                <a href="#message">
                  <button id="button1">Get in touch</button>
                </a>
              </p>
              <p className="control">
                <button id="button2">Download CV</button>
              </p>
            </div>

            <div className="column is-hidden-desktop">
              <p className="control">
                <a href="#message">
                  <button id="button1m">Get in touch</button>
                </a>
              </p>
              <p className="control">
                <button id="button2m">Download CV</button>
              </p>
            </div>
          </div>
        </div>


        <div className="column is-3">
          <div className="sub " style={{ backgroundColor: "white" }}>
            <figure className="image" id="image-size">
              <img className="is-rounded" src="photo1.png" />
            </figure>
          </div>
          {/* <div class="sub " style="width:5%; height:350px; background-color:white;">
                    <div class="column"> */}
        </div>
        <div className="column is-1 is-hidden-mobile" style={{ marginTop: "3rem" }}>
          <a
            href="https://www.facebook.com/waruna.parakckrama.7"
            target="_blank"
          >
            <button className="button is-white">
              <span className="icon">
                <img src="facebook.png" />
              </span>
              {/* <span> </span> */}
            </button>
          </a>
          <br />
          <br />
          <a href="https://instagram.com/waruna_parakckrama" target="_blank">
            <button className="button is-white">
              <span className="icon">
                <img src="instagram.png" />
              </span>
              {/* <span> </span> */}
            </button>
          </a>
          <br />
          <br />
          <a href="www.linkedin.com/in/waruna-parakckrama" target="_blank">
            <button className="button is-white">
              <span className="icon">
                <img src="linkedin.png" />
              </span>
              {/* <span> </span> */}
            </button>
          </a>
          <br />
          <br />
          <a href="https://github.com/warunaparakckrama" target="_blank">
            <button className="button is-white">
              <span className="icon">
                <i className="fa fa-github fa-2x" aria-hidden="true" />
              </span>
              {/* <span> </span> */}
            </button>
          </a>
                    
        </div>

        <div className="columns is-mobile is-hidden-desktop" style={{marginLeft: "1rem"}}>
        <div className="column">
          <a href="https://www.facebook.com/waruna.parakckrama.7" target="_blank">
            <button className="button is-white">
              <span className="icon">
                <img src="/facebook.png" />
              </span>
            </button>
          </a>
        </div>
        <div className="column">
          <a href="https://instagram.com/waruna_parakckrama" target="_blank">
            <button className="button is-white">
              <span className="icon">
                <img src="/instagram.png" />
              </span>
            </button>
          </a>
        </div>
        <div className="column">
          <a href="www.linkedin.com/in/waruna-parakckrama" target="_blank">
            <button className="button is-white">
              <span className="icon">
                <img src="/linkedin.png" />
              </span>
            </button>
          </a>
        </div>
        <div className="column">
          <a href="https://github.com/warunaparakckrama" target="_blank">
            <button className="button is-white">
              <span className="icon">
                <i className="fa fa-github fa-2x" aria-hidden="true" />
              </span>
            </button>
          </a>
        </div>
      </div>

      </div>
    </section>

  );
}

export default HomeHero;
