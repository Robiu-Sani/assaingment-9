import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLoaderData } from 'react-router-dom'
import Banner from './banner/Banner'
import MainComponents from './main/MainComponents'

export default function Home() { 

  const AllData = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Haven Ease</title>
      </Helmet>
      <Banner></Banner>
      <MainComponents AllData={AllData}></MainComponents>
    </div>
  )
}
