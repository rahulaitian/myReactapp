import { useState } from "react";

const PurchaseOrder = ({customers,addOrder}) => {
    const [pname,setPname]=useState("")
    const [quantity,setQuantity]=useState(0)
    const [price,setPrice]=useState(0)
    const [mrp,setMrp]=useState(0)
    const [custid,setCustid]=useState('0')
    const onSubmit =(e)=>{
        e.preventDefault()
        
        const id=Math.floor(Math.random()*1000) +1
        //console.log(id)
        addOrder({id:id,custId:Number(custid),pname:pname,quantity:quantity,price:price,mrp:mrp})
        setPname("")
        setQuantity(0)
        setPrice(0)
        setMrp(0)
        setCustid('0')
        //console.log({name:name,email:email,city:city,tel:tel})
    }
  return (
    <div className="container-contact100">
        <div className="wrap-contact100">
            <form className="contact100-form validate-form" onSubmit={onSubmit}>
                <span className="contact100-form-title">
                    Purchase Product
                </span>

                <div className="wrap-input100 validate-input" data-validate="Name is required">
                    <span className="label-input100">Product Name</span>
                    <input className="input100" type="text" placeholder="Enter your name" value={pname} onChange={(e)=>setPname(e.target.value)} />
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate = "Email is required">
                    <span className="label-input100">Quantity</span>
                    <input className="input100" type="number" name="email" placeholder="Enter your email addess" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                    <span className="focus-input100"></span>
                </div>
                <div className="wrap-input100 validate-input" data-validate = "Telephone is required">
                    <span className="label-input100">Price</span>
                    <input className="input100" type="number" name="email" placeholder="Enter your Phone number" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                    <span className="focus-input100"></span>
                </div>
                <div className="wrap-input100 validate-input" data-validate = "City is required">
                    <span className="label-input100">MRP</span>
                    <input className="input100" type="number" name="email" placeholder="Enter your city" value={mrp} onChange={(e)=>setMrp(e.target.value)}/>
                    <span className="focus-input100"></span>
                </div>
                <div className="select">
                    <select value={custid}   onChange={(e)=>setCustid(e.target.value)}>
                        <option value= "0" >Select Customer</option>
                        {customers.map((cust)=>(
                         <option value={`${cust.id}`} key={cust.id}>{cust.name}</option>   
                        ))}
                    </select>
                </div>

                <div className="container-contact100-form-btn">
                    <div className="wrap-contact100-form-btn">
                        <div className="contact100-form-bgbtn"></div>
                        <button className="contact100-form-btn">
                            <span>
                                Add
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>    
)
};

export default PurchaseOrder;
