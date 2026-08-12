import React from "react"
import { Link } from "react-router-dom"
import Back from "../common/back/Back"
import "./works.css"
import { blog } from "../../dummydata"

const featured = {
  ...blog[0],
  image: "./images/stitch/works-featured.jpg",
}

const secondary = [
  { ...blog[1], image: "./images/stitch/works-secondary-1.jpg" },
  { ...blog[2], image: "./images/stitch/works-secondary-3.jpg" },
  { ...blog[3], icon: "fa-solid fa-code-branch" },
  { ...blog[4], icon: "fa-solid fa-lightbulb" },
  { ...blog[5], icon: "fa-solid fa-rocket" },
]

const Works = () => {
  return (
    <>
      <Back
        title='Our Works & Success Stories'
        desc='Explore recent projects, student achievements, and enterprise partnerships that showcase the real-world impact of our educational programs.'
      />

      <section className='worksGrid-section'>
        <div className='container'>
          <article className='work-featured'>
            <div className='work-featured-media'>
              <img src={featured.image} alt={featured.title} />
              <span className='work-tag'>Featured</span>
            </div>
            <div className='work-featured-body'>
              <div className='work-meta'>
                <span><i className='fa fa-calendar-alt'></i> {featured.date}</span>
                <span><i className='fa fa-comments'></i> {featured.com}</span>
              </div>
              <h2>{featured.title}</h2>
              {featured.desc && <p>{featured.desc}</p>}
              <Link className='work-link' to='/courses#courses-catalog'>
                Read More <i className='fa fa-arrow-right'></i>
              </Link>
            </div>
          </article>

          <div className='works-grid'>
            {secondary.map((val) => (
              <article className='work-card' key={val.title + val.date}>
                <div className='work-card-media'>
                  {val.image ? (
                    <img src={val.image} alt={val.title} />
                  ) : (
                    <div className='work-card-icon'><i className={val.icon}></i></div>
                  )}
                </div>
                <div className='work-card-body'>
                  <div className='work-meta'>
                    <span><i className='fa fa-calendar-alt'></i> {val.date}</span>
                  </div>
                  <h3>{val.title}</h3>
                  {val.desc && <p>{val.desc}</p>}
                  <Link className='work-link' to='/courses#courses-catalog'>
                    Read More <i className='fa fa-arrow-right'></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Works
