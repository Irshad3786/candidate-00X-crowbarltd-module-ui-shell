import React from 'react'
import { useState } from 'react';



function Header() {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const menubar = ()=>{
    setShowMenuBar(prev => !prev);
    
  }

  const Cancelmenu = ()=>{
    setShowMenuBar(prev => !prev);
  }
  return (
    <div>
      
      <div className='Navhead'>
        <div className='menubar' onClick={menubar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="#000" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1" stroke-width="0.5" stroke="#000"/></svg>
      </div>
      <div className='mainlogo'>
          <h1 className="logoup">Crowbar</h1>
          <h1 className="logodown">Ventures</h1>
      </div>
      <div>
         <ul class="nav-links">
          <li className='buttons-nav'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19" stroke-width="0.5" stroke="#fff"/></svg> Home
          </li>
          <li className='buttons-nav'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" stroke-width="0.5" stroke="#fff"/></svg>About Us</li>
          <li className='buttons-nav'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path fill="#fff" d="m22.475 18.881l-8.891 4.925c-.525.259-.643.259-1.168 0l-8.89-4.925c-1.164-.644-.195-2.385.97-1.74L13 21.85l8.505-4.71c1.164-.645 2.133 1.096.97 1.74zm0-5l-8.891 4.925c-.525.259-.643.259-1.168 0l-8.89-4.925c-1.164-.644-.195-2.385.97-1.74L13 16.85l8.505-4.71c1.164-.645 2.133 1.096.97 1.74zM3.515 8.89a1 1 0 0 1-.002-1.749l9-5.015a1 1 0 0 1 .974 0l9 5.015a1 1 0 0 1-.003 1.749l-9.007 4.985a1 1 0 0 1-.97 0z" stroke-width="0.5" stroke="#fff"/></svg>Platforms</li>
          <li className='buttons-nav'> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#fff" d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9zm3-8V2H8v1z" stroke-width="0.5" stroke="#fff"/></svg>Portfolio</li>
          <li className='buttons-nav'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 11.96q.125 0 .234-.038q.108-.038.214-.093l7.229-4.733q.142-.086.185-.235t-.016-.297q-.038-.193-.252-.28q-.213-.086-.413.035L12 11L4.82 6.32q-.2-.122-.404-.052t-.262.276q-.058.154-.015.313t.184.24l7.229 4.732q.106.055.214.093q.109.037.234.037" stroke-width="0.5" stroke="#fff"/></svg>Contact</li>
        </ul>
      </div>
      <div className='discoverone'>
        <h1 className='discover'>Our Ventures</h1>
      </div>
      <div className={`MenuBar ${showMenuBar ? 'show' : ''}`}>
          <div className="cancel" onClick={Cancelmenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/></svg>
          </div>  

          <div>
            <ul className='nav-main-menu-bar'>
              <li className='buttons-nav-menu'>
                 Home
              </li>
              <li className='buttons-nav-menu'>About Us</li>
              <li className='buttons-nav-menu'>Platforms</li>
              <li className='buttons-nav-menu'> Portfolio</li>
              <li className='buttons-nav-menu'>Contact</li>


            </ul>
          </div>
      </div>
     </div>
    </div>
  )
}

export default Header