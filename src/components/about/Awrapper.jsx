import React from "react"
import "./about.css"
import { awrapper } from "../../dummydata"

const Awrapper = () => {
  return (
    <section className='statsBanner'>
      <div className='container statsBanner-grid'>
        {awrapper.map((val) => (
          <div className='statsBanner-item' key={val.title}>
            <i className={val.icon}></i>
            <h3>{val.data}</h3>
            <p>{val.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Awrapper
