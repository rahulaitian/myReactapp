import { useState } from "react";
import ModalAddress from "./ModalAddress";

const CustomerList = ({customers,purchasedOrders,saddres}) => {
    const [custs,setCusts]=useState([...customers])
    const [search,setSearch]=useState("")
    const onSubmit =(e)=>{
        e.preventDefault()
        setCusts(customers.filter((cus)=>cus.city==search))
        console.log(custs)
    }
  return (
      <section className='container mt-5 '>
        <form className="form-inline  mb-3 " onSubmit={onSubmit}>
        <div className="float-end d-flex mb-3">
          <input className="form-control mr-sm-2" type="search" placeholder="Search by City"  value={search} onChange={(e)=>setSearch(e.target.value)} />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </div>
        </form>
    <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
    <thead>
      <tr>
        <th className="th-sm">Name</th>
        <th className="th-sm">Email</th>
        <th className="th-sm">City</th>
        <th className="th-sm">Telephone</th>
        <th className="th-sm">Orders list</th>
      </tr>
    </thead>
    <tbody>
    {custs.map((cust)=>(
        <tr key={cust.id}>
            <td>{cust.name}</td>
            <td>{cust.email}</td>
            <td>{cust.city}</td>
            <td>{cust.tel}</td>
            <td>
            {
              purchasedOrders.map((o)=>(
                <ul key={o.id}>
                  {o.custId===cust.id ? <ModalAddress pName={o.pName} pid={o.id} saddres={saddres}/> :""}
                </ul>
              ))
            }
            </td>
        </tr>
    ))}
    </tbody>
    
  </table>
  </section>
    )
};

export default CustomerList;
