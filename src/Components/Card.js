import React from 'react'
import CardBtn from './CardBtn'

const Card = (props) => {
    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-4 pt-2">
                <div className="card">
                    <img src={props.carddetails.image} />
                    <div className="card-body">
                        <h4>{props.carddetails.name}</h4>
                        <h5 className="text-muted">{props.carddetails.position + ' '}
                        (
                            {
                            props.carddetails.contact != '' ? props.carddetails.contact : 'No details'                     
                            }
                        )
                        </h5>
                        <p>{props.carddetails.details}</p>
                        {/* {props.carddetails.contact != '' && <CardBtn contactNumber={props.carddetails.contact} />} */}
                        {/* {
                            props.carddetails.contact != '' ? 
                            <CardBtn contactNumber={props.carddetails.contact} />
                            :
                            <CardBtn contactNumber={props.carddetails.contact} />
                        } */}
                        <CardBtn contactNumber={props.carddetails.contact} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card