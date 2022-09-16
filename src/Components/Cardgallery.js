import React from 'react'
import Card from './Card'

const Cardgallery = () => {
    var myCards = [
        {
            image: 'https://www.w3schools.com/w3images/team2.jpg',
            name: 'John Doe',
            position: 'CEO & Founder',
            details: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
            contact: 'No Contact'
        }, {
            image: 'https://www.w3schools.com/w3images/team1.jpg',
            name: 'Jane Doe',
            position: 'Designer',
            details: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
            contact: '+447911123456'
        }, {
            image: 'https://www.w3schools.com/w3images/team3.jpg',
            name: 'Architect',
            position: 'CEO & Founder',
            details: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
            contact: '+44 1332 412251'
        }

    ]
    return (
        <>
            <div className="container row  pt-4" id='DESIGNERS'>
                {
                    myCards.map(function (card, index) {
                        return <Card key={index} carddetails={card} />
                    })
                }
            </div>
        </>
    )
}

export default Cardgallery