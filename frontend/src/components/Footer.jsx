import React from 'react'



function Footer() {
  return (
    <div>
      <div className='Footer'>

      
        <div className='MainFooter'>
            <div className='mainlogofooter'>
            <h1 className="logoupfooter">Crowbar</h1>
            <h1 className="logodownfooter">Ventures</h1>
            </div>

             <div className="footer-links">
              <ul className='navlinks-footer'>
                <li>Home</li>
                <li>About Us</li>
                <li>Platforms</li>
                <li>Portfolio</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="footer-links">
              <ul className='navlinks-footer'>
                <li>Blog</li>
                <li>FAQs</li>
                <li>Parthships</li>
                <li>Support</li>
                <li>Help Center</li>
              </ul>
            </div>
            <div className="footer-links">
              <ul className='navlinks-footer'>
                <li>Events</li>
                <li>Community</li>
                <li>Social Media</li>
                <li>Newsletter</li>
                <li>Subscribe</li>
              </ul>
            </div>
        </div>
        <div className='Subscribe-div'>
          <input type="text" placeholder='Enter your email' className='input-bar' />
          <button className='Subscribe'>Subscribe</button>
        </div>

        <div className='finalfooter'>
          <div>
            <a className='copy-right'>
              2025 Crowbar Ventures. All rights reserved.
            </a>
          </div>

          <div className='social-med'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" className='svgicons' width="30" height="30" viewBox="0 0 24 24"><path fill="#000" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" stroke-width="0.5" stroke="#000"/></svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className='svgicons' width="30" height="30" viewBox="0 0 24 24"><path fill="#000" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" stroke-width="0.5" stroke="#000"/></svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className='svgicons' width="30" height="30" viewBox="0 0 24 24"><path fill="#000" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" stroke-width="0.5" stroke="#000"/></svg>
            </div>

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className='svgicons' width="28" height="28" viewBox="0 0 448 512"><path fill="#000" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z" stroke-width="13" stroke="#000"/></svg>
            </div>

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className='svgicons' width="30" height="30" viewBox="0 0 24 24"><path fill="#000" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" stroke-width="0.5" stroke="#000"/></svg>
            </div>

          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Footer