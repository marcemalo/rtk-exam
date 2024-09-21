import { BiLogIn } from "react-icons/bi"; 
import { Input } from 'antd';
const { Search } = Input;
import React from 'react'
import Products from '../../components/product/Products'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <div className='h-16 bg-indigo-950 w-[1300px]'>
        <div className='flex justify-between p-4 mr-20'>
          <div>
            <h1 className='text-blue-500 text-2xl font-bold'>EN/UZB</h1>
          </div>
        <div className='flex'>
        <Search className='w-96 mr-14' placeholder="input search text" enterButton="Search" size="large" loading />
        <Link to="/auth/login"><h1 className='text-white text-2xl font-bold flex'>Login <BiLogIn /></h1></Link>
        <Link to="/auth/signup"><h1 className='text-white text-2xl font-bold flex ml-7'>Sign Up <BiLogIn /></h1></Link>
        </div>
        </div>
      </div>
      <Products/>
    </div>
  )
}

export default Home