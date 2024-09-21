import { Outlet, Link, useNavigate } from 'react-router-dom'



const Auth = () => {


  

  return (
    <div className='flex items-center justify-center min-h-screen bg-blue-600 w-full'>
        <div className='max-w-[400px] flex-1 flex flex-col items-center bg-white rounded-3xl'> 
          
            <Outlet/>
        </div>
    </div>
  )
}

export default Auth