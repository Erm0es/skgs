import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Excursions from "../src/pages/Excursions"
import Membership from "./pages/Membership"
import About from "../src/pages/About"
import Contact from "../src/pages/Contact"
import Meetings from "../src/pages/Meetings"
import Home from "../src/pages/Home"
import Topical from "./pages/Topical"
import { arr } from "./Data.js"



function App() {
  const cards = arr.map(item => {
    return (
      <Meetings
        key={item.id}
        header={item.header}
        img={item.coverImg}
        location={item.location}
        date={item.date}
        secondHeader={item.secondHeader}
        agenda={item.agenda}
        span={item.span}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <div className="component-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/meetings" element={<Meetings />}/>
          <Route path="/excursions" element={<Excursions />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/about" element={<About />} />
          <Route path="/topical" element={<Topical />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <section className="card-holder">{cards}</section>
      </div>
      <Footer />
    </div>
  )
}

export default App;
