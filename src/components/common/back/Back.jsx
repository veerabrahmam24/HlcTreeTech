import React from "react"

const Back = ({ title, desc }) => {
  return (
    <>
      <section className='back'>
        <h1>{title}</h1>
        {desc && <h2 className='back-desc'>{desc}</h2>}
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
