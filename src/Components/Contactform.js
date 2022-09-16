import React from 'react'

const Contactform = () => {
    return (
        <>
            <div className="container" id='CONTACT'>
                <p>Do you want us to style your home? Fill out the form and fill me in with the details :) We love meeting new people!</p>
                <form className='container'>
                    <div className='container'>
                        <label className='form-label'>Name</label>
                        <input type="text" className='form-control form-control-lg  rounded-1' />
                    </div>
                    <div className='container'>
                        <label className='form-label'>Email</label>
                        <input type="emails" className='form-control form-control-lg rounded-1' />
                    </div>
                    <div className='container'>
                        <label className='form-label'>Message</label>
                        <input type="text" className='form-control form-control-lg rounded-1' />
                    </div>
                    <div className='container d-grid mt-3'>
                        <button className='btn btn-large btn-danger btn-block rounded-0 p-3'>Send Message</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contactform