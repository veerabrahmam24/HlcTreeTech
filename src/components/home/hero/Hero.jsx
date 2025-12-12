import React, { useState } from "react";
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import Popup from "../popup";

const Hero = () => {
  const [popupOpen, setPopupOpen] = useState(true);

  function handlePopupSubmit(formData) {
    console.log("Form submitted from popup:", formData);

    setPopupOpen(false);
  }
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO HLC' title='Best Online Education Expertise' />
            <p>At HLC Tree Technologies, we provide hands-on training, expert guidance, and real-world learning to help you build a strong tech career.</p>
            {/* <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div> */}
          </div>
        </div>
      </section>
       <Popup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}          
        onAction={(formData) => handlePopupSubmit(formData)}
      />

      <div className='margin'></div>
    </>
  )
}

export default Hero
