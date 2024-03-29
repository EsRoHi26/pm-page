
import Link from 'next/link';
import React from 'react'



const Home = () => {
  return (
    <div className="flex h-screen bg-white diagonal-split">
      <div className="w-40 bg-gray-800 text-white xs:w-1/6">
            <h1 className="text-2xl font-bold p-5">VISION</h1>
      </div>
      <div className="flex-1 px-4 pt-2">
        <div className='flex h-screen '>
          <div className="flex justify-center mb-8 w-100 bg-slate-400 rounded" style={{opacity:0.7}}>
            <div className='mt-5 p-5'>
              <h1 className="text-2xl font-bold ">Login</h1>
              <hr />
              <ul className="mt-5 space-y-2">
                <form className="mt-5 space-y-2">
                  <li><label htmlFor="email" >Email:</label></li>
                  <li><input type="email" className="rounded" id="email" required /></li>
                  <li><label htmlFor="password">Password:</label></li>
                  <li><input type="password" className="rounded" id="password" required /></li>
                  <button type="submit" className="bg-white text-black rounded">Login</button>
                </form>
                <li><h1 className="text-xs">¿No tiene usuario? <Link href={'/crear-usuario'} style={{ color: 'blue' }}>Registrarse</Link></h1></li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
      <div>
        <img src="/images/work.png" alt="working image" />
      </div>
    </div>
  );
};

export default Home;
