import React, { useState } from 'react';
import SideBar from '../../Components/Sidebar/SideBar';

function Home({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className={`fixed inset-0 z-30 lg:relative lg:translate-x-0 lg:flex lg:w-64 bg-gray-800 text-white transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      </div>

      {sidebarOpen && <div className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden" onClick={() => setSidebarOpen(false)}></div>}

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-4 bg-gray-100 shadow-md ">
          <button
            className="text-gray-800"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <h1 className="text-xl font-semibold">AB<span className='text-red-500'>stats</span> </h1>
        </header>
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Home;
