import React, { useState } from 'react'
import "./Tabs.css"

const Tabs = () => {
    // Create a state to store index # of current tab. 1 is the default
    const [tabIndex, setTabIndex] = useState(1);

    // Passing index # as a param. This means that wherever we call this function, we need to pass it an argument
    const handleShowTab = (index) => {
        setTabIndex(index);
    }

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
                        {/* If tabIndex = 1, add active-tab & tab classes. Otherwise, add just tab class */}
                        {/* Using handleShowTab to update index # by passing in corresponding #. Must use an arrow function when passing in a parameter like this */}
                        <button className={tabIndex === 1 ? "tab active-tab" : "tab"} onClick={() => handleShowTab(1)}>
                            Who We Are
                        </button>

                        <button className={tabIndex === 2 ? "tab active-tab" : "tab"} onClick={() => handleShowTab(2)}>What We Do</button>

                        <button className={tabIndex === 3 ? "tab active-tab" : "tab"} onClick={() => handleShowTab(3)}>Get In Touch</button>
                    </div>

                    {/* Using logic to assign either class of active-content (display: block;) or content (display: none;) */}
                    <div className='tabs-content'>
                        <article className={tabIndex === 1 ? "active-content" : "content"}>
                            <h4>Who We Are</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </article>

                        <article className={tabIndex === 2 ? "active-content" : "content"}>
                            <h4>What We Do</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </article>

                        <article className={tabIndex === 3 ? "active-content" : "content"}>
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
