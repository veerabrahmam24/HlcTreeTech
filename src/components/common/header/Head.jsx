import React from "react";

const Head = () => {
  return (
    <>
      <section className="head" style={{ paddingLeft: "-10px" }}>
        <div className="container flexSB">
          <div
            className="logo"
            style={{ display: "flex", alignItems: "center", gap: "20px" }}
          >
            <img
              src="/images/logo.jpg"
              alt="Logo"
              style={{
                width: "120px",
                height: "80px",
                objectFit: "cover",
                marginLeft: "-85px",
                borderRadius: "10px"
               
              }}
            />

            <div>
              <h1>HLC Tree Technologies</h1>
              <span>ONLINE EDUCATION & LEARNING</span>
            </div>
          </div>

          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
