import React from 'react'

const Packages = (props) => {
    return (
        <>
            <div className="container row  mt-5" id='PACKAGES'>
                <div className='form container col-sm-12 col-md-6'>
                    <ul className='text-center plan ps-0'>
                        <li className='text-center text-light bg-secondary p-4'><b>Basic</b></li>
                        <li className='text-center pt-3'>Floor Planning</li><hr />
                        <li className='text-center'>10 Hours Support</li><hr />
                        <li className='text-center'>Photography</li><hr />
                        <li className='text-center'>20% Furniture Discount</li><hr />
                        <li className='text-center'>Good Deals</li><hr />
                        <li className='text-center'>$199</li><hr />
                        <li className='text-center'><button className='btn btn-light btn-lg rounded-0'>Sign-up</button></li><hr />
                    </ul>
                </div>
                <div className='form container col-sm-12 col-md-6'>
                    <ul className='text-center plan ps-0'>
                        <li className='text-center text-light bg-danger p-4'><b>Pro</b></li>
                        <li className='text-center pt-3'>Floor Planning</li><hr />
                        <li className='text-center'>50 Hours Support</li><hr />
                        <li className='text-center'>Photography</li><hr />
                        <li className='text-center'>50% Furniture Discount</li><hr />
                        <li className='text-center'>Great Deals</li><hr />
                        <li className='text-center'>$249</li><hr />
                        <li className='text-center'><button className='btn btn-danger btn-lg rounded-0'>Sign-up</button></li><hr />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Packages