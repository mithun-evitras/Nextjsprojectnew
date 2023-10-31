import React,{useState}from 'react'
import {phonesData} from './Mobiledata'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Mobileproduct() {
    const [item,setItem]=useState(phonesData)
    const decQty=(id)=>{
        const newItem=item.map((items)=>(
           items.id===id && items.Qty>1?{...items,Qty:items.Qty-1}:items
        ))
setItem(newItem)
    }
    const incQty=(id)=>{
        const newItem=item.map((items)=>(
           items.id===id?{...items,Qty:items.Qty+1}:items
        ))
setItem(newItem)
    }


    return (
        <div>
            <h1 className='bg-danger'>Products</h1>
            {
                item.map((items) => (

                    <div className='d-inline-flex' key={items.id}>


                        <Card className='shadow p-2 m-1 bg-body-tertiary rounded' style={{ width: '13rem' }}>
                            <Card.Img style={{ height: '15rem' }} className='p-5' variant="top" src={items.image} />
                            <Card.Body>
                                <Card.Title>{items.Name}</Card.Title>
                                <Card.Text>
                                    {items.Model}
                                </Card.Text>
                                <h5>₹ {items.Price}</h5>
                                <div>
                                    <p>Qty{items.Qty}
                                        <br></br>
                                        <Button onClick={() => decQty(items.id)} className='m-1'>-</Button>

                                        <Button onClick={() => incQty(items.id)} className='m-1'>+</Button>
                                    </p>

                                </div>
                                <Button variant="primary">Add Cart</Button>
                            </Card.Body>
                        </Card>
                    </div>


                ))

            }























        </div>
    )
}

export default Mobileproduct