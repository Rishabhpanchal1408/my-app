import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className='container sidebar pt-5'>
                <ul>
                    <li>
                        <a className='a' href="#HOME">HOME</a>
                    </li>
                    <li>
                        <a className='a' href="#SHOWCASES">SHOWCASES</a>
                    </li>
                    <li>
                        <a className='a' href="#SERIVCES">SERIVCES</a>
                    </li>
                    <li>
                        <a className='a' href="#DESIGNERS">DESIGNERS</a>
                    </li>
                    <li>
                        <a className='a' href="#PACKAGES">PACKAGES</a>
                    </li>
                    <li>
                        <a className='a' href="#CONTACT">CONTACT</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar