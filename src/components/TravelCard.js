import React from 'react'
import {ImLocation} from 'react-icons/im'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from "react"

const TravelCard = (props) =>{

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return(
    <>
      <div data-aos="fade-right" className="card">
          <img src={props.item.image} alt="intramuros" width="270" height="350" className="card-img"/>
          <div className="card-info">
              <div className="card-info-location">
                  <div className="icon-location">
                      <ImLocation className="locicon" />
                      <h4 className="city">{props.item.city}</h4>
                  </div>
                  <a href={props.item.address} target='_blank' rel="noreferrer noopener">View on Google Maps</a>
              </div>
              <h1 className="attraction">{props.item.attraction}</h1>
              <p className="date">{props.item.date}</p>
              <p className="description">{props.item.description}</p>
          </div>
      </div>
    </>
  )
}

export default TravelCard
