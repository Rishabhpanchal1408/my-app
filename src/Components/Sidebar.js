import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div class="offcanvas offcanvas-start" data-bs-backdrop="false" data-bs-scroll="true" id="demo">
                <div class="offcanvas-body sidebar pt-5">
                <div className='text-end'>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
                    </div>
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
            </div>


        </>
    )
}

export default Sidebar