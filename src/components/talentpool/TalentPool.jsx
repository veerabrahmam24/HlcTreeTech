import React from "react"
import { Link } from "react-router-dom"
import Back from "../common/back/Back"
import "./talentpool.css"
import { team } from "../../dummydata"

const uniqueTeam = team.filter(
  (val, i, arr) => arr.findIndex((t) => t.name === val.name) === i
)
const photos = [
  "./images/stitch/talentpool-1.jpg",
  "./images/stitch/talentpool-2.jpg",
  "./images/stitch/talentpool-3.jpg",
]
const talent = uniqueTeam.slice(0, 3).map((val, i) => ({ ...val, cover: photos[i] }))

const TalentPool = () => {
  return (
    <>
      <Back
        title='Meet Your Future Team.'
        desc='Pre-vetted candidates ready to hit the ground running from day one. Browse our curated pool of top-tier talent equipped with the skills your institution needs to thrive.'
      />

      <section className='talentGrid-section'>
        <div className='container'>
          <div className='talent-grid'>
            {talent.map((val, i) => (
              <div className='talent-card shadow' key={val.name + i}>
                <img src={val.cover} alt={val.name} />
                <h3>{val.name}</h3>
                <p>{val.work}</p>
                <Link to='/contact' className='outline-btn'>Request Introduction</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default TalentPool
