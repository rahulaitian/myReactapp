import { useState } from "react";

const ShipingAddres = ({customers,purchasedOrders,addSaddress}) => {
    const [custid,setCustid]=useState('0')
    const [address,setAddress]=useState('')
    const [city,setCity]=useState('')
    const [pinCode,setPinCode]=useState('')
    const [pId,setPId]=useState('0')
    const onSubmit =(e)=>{
        e.preventDefault()
        
        const id=Math.floor(Math.random()*1000) +1
        //console.log(id)
        addSaddress({id:id,
            address:address,
            city:city,
            pincode:pinCode,
            pid :Number(pId),})
        setCustid('0')
        setAddress('')
        setCity('')
        setPinCode('')
        setPId('')
       
    }
  return (
    <div className="container-contact100">
        <div className="wrap-contact100">
            <form className="contact100-form validate-form" onSubmit={onSubmit}>
                <span className="contact100-form-title">
                    Add Address
                </span>

                <div className="wrap-input100 validate-input" data-validate="Name is required">
                    <span className="label-input100">Address</span>
                    <input className="input100" type="text" placeholder="Enter your name" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate = "Email is required">
                    <span className="label-input100">City</span>
                    <input className="input100" type="text"  placeholder="Enter your email addess"  value={city} onChange={(e)=>setCity(e.target.value)} />
                    <span className="focus-input100"></span>
                </div>
                <div className="wrap-input100 validate-input" data-validate = "Telephone is required">
                    <span className="label-input100">Pin Code</span>
                    <input className="input100" type="text" placeholder="Enter your Phone number" value={pinCode} onChange={(e)=>setPinCode(e.target.value)} />
                    <span className="focus-input100"></span>
                </div>
                <div className="select mb-3">
                    <select value={custid}   onChange={(e)=>setCustid(e.target.value)}>
                        <option value= "0" >Select Customer</option>
                        {customers.map((cust)=>(
                         <option value={`${cust.id}`} key={cust.id}>{cust.name}</option>   
                        ))}
                    </select>
                </div>
                <div className="select">
                    <select value={pId} onChange={(e)=>setPId(e.target.value)}>
                        <option value= "0" >Select Order</option>
                        { purchasedOrders.map((o)=>(
                            <>
                            {custid==o.custId ? <option value={`${o.id}`} key={o.id}>{o.pName}</option> :""}
                            </>
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

export default ShipingAddres;
