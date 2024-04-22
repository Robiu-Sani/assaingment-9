import React from 'react'
import AboutUs from './AboutUs'
import Faq from './Faq'
import IntroDuction from './IntroDuction'
import Provide from './Provide'
import Review from './Review'
import Servicess from './Servicess'

export default function MainComponents(props) {
  return (
    <div>
      <IntroDuction></IntroDuction>
      <Provide></Provide>
      <AboutUs></AboutUs>
      <Review ></Review>
      <Servicess AllData={props.AllData}></Servicess>
      <Faq></Faq>
    </div>
  )
}
