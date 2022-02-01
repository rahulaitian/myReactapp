import React from 'react';

const ModalAddress = ({pName,pid,saddres}) => {
    
    const handlealert = () => {
        
        //
    }
  return (
      <>
    <li> <button  type="button" className="btn  btn-primary m-1" onClick={()=>{
        document.getElementById("this"+pid).style.display = "block"
        }} >{pName}</button></li>
    {saddres.map((sd)=>(sd.pid===pid ? 
    <div class="card" id={"this" +pid} style={{width : "18rem", display:"none"}}>
        <div class="card-body" id={"this" +pid}>
            <h5 class="card-title">Shipping Address</h5>
            <p class="card-text">
                <ul>
                    <li>Address : {sd.address}</li>
                    <li>city : {sd.city}</li>
                    <li>Pin Code : {sd.pincode}</li>
                </ul>
            </p>
        </div>
    </div> :""))}
    
    </>
)
};

export default ModalAddress;
