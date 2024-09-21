
import React from 'react'
import Products from '../../components/product/Products'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <div className='h-16 bg-indigo-950 w-[1300px]'>
        <div className='flex justify-end p-4 mr-20'>
        <Link to="/auth/login"><h1 className='text-white text-2xl font-bold flex'>Login</h1></Link>
        <Link to="/auth/signup"><h1 className='text-white text-2xl font-bold flex ml-4'>Sign Up</h1></Link>
        </div>
      </div>
      <Products/>
    </div>
  )
}

export default Home