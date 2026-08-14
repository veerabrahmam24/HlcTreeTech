import React, { useState } from "react"
import "./App.css"
import Header from "./components/common/header/Head"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import CourseDetails from "./components/allcourses/CourseDetails"
import Project from "./components/project/Project"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Works from "./components/works/Works"
import Partnership from "./components/partnership/Partnership"
import PartnershipModel from "./components/partnership/PartnershipModel"
import TalentPool from "./components/talentpool/TalentPool"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import PlacementPopup from "./components/home/PlacementPopup"

function App() {
  const [showPlacementPopup, setShowPlacementPopup] = useState(true)

  return (
    <>
      <Router>
        <Header />
        <div className="main-content">
        <Switch>
          <Route exact path='/' render={() => (
            <>
              {showPlacementPopup && <PlacementPopup onClose={() => setShowPlacementPopup(false)} />}
              <Home placementPopupOpen={showPlacementPopup} />
            </>
          )} />
          <Route exact path='/about' component={About} />
          <Route exact path='/project' component={Project} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/courses/:courseSlug' component={CourseDetails} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/works' component={Works} />
          <Route exact path='/partnership' component={Partnership} />
          <Route exact path='/partnership-model' component={PartnershipModel} />
          <Route exact path='/talent-pool' component={TalentPool} />
        </Switch>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
