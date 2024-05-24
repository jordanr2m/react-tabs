import React from 'react'
import "./Tabs.css"

const Tabs = () => {
  return (
    <section className='tabs-section --100vh --flex-center'>
      <div className='container'>
        <div className='tabs-heading --text-center'>
            <h2 className='--line'>More About Us</h2>
            <p className='--text-sm'>Click the Tab buttons to learn more</p>
        </div>

        {/* Tabs section is divided in 2: tab titles on left and content on the right */}
        <div className='tabs --flex-start --bg-light'>
            <div className='tabs-title'>
                <button className='tab active-tab'>Who We Are</button>
                <button className='tab'>What We Do</button>
                <button className='tab'>Get In Touch</button>
            </div>

            <div className='tabs-content'>
                <article className='content active-content'>
                    <h4>Who We Are</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </article>
                <article className='content'>
                    <h4>What We Do</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </article>
                <article className='content'>
                    <h4>Get In Touch</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Tabs
