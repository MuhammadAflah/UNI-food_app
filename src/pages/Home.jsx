import React from 'react'
import DishCategory from '../components/DishCategory/DishCategory'
import Dishes from '../components/Dishes/Dishes'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <DishCategory/>
    <Dishes/>
    </>
  )
}

export default Home