import { useState } from "react";

const AddCustomer = ({addCustomer}) => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [city,setCity]=useState("")
    const [tel,setTel]=useState(0)
    const onSubmit =(e)=>{
        e.preventDefault()
        const id=Math.floor(Math.random()*1000) +1
        addCustomer({id:id,name:name,email:email,city:city,tel:tel})
        setCity("")
        setEmail("")
        setTel(0)
        setName("")
        //console.log({name:name,email:email,city:city,tel:tel})
    }
  return(
    <div className="container-contact100">
        <div className="wrap-contact100">
            <form className="contact100-form validate-form" onSubmit={onSubmit}>
                <span className="contact100-form-title">
                    Add Customer
                </span>

                <div className="wrap-input100 validate-input" data-validate="Name is required">
                    <span className="label-input100">Name</span>
                    <input className="input100" type="text"  placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate = "Email is required">
                    <span className="label-input100">Email</span>
                    <input className="input100" type="email"  placeholder="Enter your email addess" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <span className="focus-input100"></span>
                </div>
                <div className="wrap-input100 validate-input" data-validate = "Telephone is required">
                    <span className="label-input100">Telephone</span>
                    <input className="input100" type="tel"  placeholder="Enter your Phone number" value={tel} onChange={(e)=>setTel(e.target.value)} />
                    <span className="focus-input100"></span>
                </div>
                <div className="wrap-input100 validate-input" data-validate = "City is required">
                    <span className="label-input100">City</span>
                    <input className="input100" type="text"  placeholder="Enter your city" value={city} onChange={(e)=>setCity(e.target.value)} />
                    <span className="focus-input100"></span>
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

export default AddCustomer;
