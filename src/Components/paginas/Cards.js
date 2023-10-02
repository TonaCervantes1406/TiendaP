import React from 'react'
import Card from './Card'
import image1 from './play.png'
import image2 from './xbox.png'
import image3 from './switch.png'
import image4 from './pantalla.png'
import image5 from './watch.png'
import image6 from './phone.png'
import image7 from './controlp.png'
import image8 from './controlx.png'
import image9 from './audifonos.png'

const cards = [
{
    id: 1,
    title: 'PlayStation 5',
    image: image1,
    precio: '$6,999.0'
},
{
    id: 2,
    title: 'Xbox One',
    image: image2,
    precio: '$5,999.0'
},
{
    id: 3,
    title: 'Nintendo Switch',
    image: image3,
    precio: '$5,999.0'
},
{
    id: 4,
    title: 'Smart Tv',
    image: image4,
    precio: '$4,999.0'
},
{
    id: 5,
    title: 'SmartWatch',
    image: image5,
    precio: '$1,999.0'
},
{
    id: 6,
    title: 'SmartPhone',
    image: image6,
    precio: '$10,999.0'
},
{
    id: 7,
    title: 'Control Play',
    image: image7,
    precio: '$815.0'
},
{
    id: 8,
    title: 'Control Xbox',
    image: image8,
    precio: '$815.0'
},
{
    id: 9,
    title: 'Audifonos',
    image: image9,
    precio: '$799.0'
}
]

export default function Cards(){
    console.log()
    return(

    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map(c => (
                    <div className="col-md-4" key={cards.id}>
                        <Card
                        key = {c.id}
                        id = {c.id}
                        title = {c.title}
                        image = {c.image}
                        precio= {c.precio}
                        />
                        </div>
                    ))
            }
        </div>
    </div>
    );
}