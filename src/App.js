import './App.css';
import Header from './components/Header'; 
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AddCustomer from './components/AddCustomer';
import PurchaseOrder from './components/PurchaseOrder';
import ShipingAddres from './components/ShipingAddres';
import CustomerList from './components/CustomerList';
import { useState } from 'react';
function App() {
  const [customers , setCustomers]=useState([
    {
      id :1,
      name:"Shubham",
      email:"shubham@gamil.com",
      city:"noorpur",
      tel:8888888888
    },
    {
      id:2,
      name:"Rahul",
      email:"shubham@gamil.com",
      city:"bijnor",
      tel:8888888888
    },
  ])
  const [products , setProducts]=useState([
    {
      name:"Boat earphone",
     id:0
    },
    {
      name:"realme Charger",
     id:1
    },
    {
      name:"Back cover",
     id:2
    },
    {
      name:"Trimmer",
     id:3
    },
  ])
  const [purchasedOrders , setPurchasedOrders]=useState([
    {
      id:1,
      custId:1,
      pName :"boat 141 earbuds",
      price : 999,
      mrp : 1299,
      quantity:1,
    },
    {
      id:2,
      custId:1,
      name:"shubham",
      pName :"Philips Trimmer",
      price : 899,
      mrp : 1099,
      quantity:1,
    },
    {
      id:3,
      custId:2,
      name:"rahul",
      pName :"Philips LED bulb",
      price : 99,
      mrp : 129,
      quantity:1,
    },
  ])

  const [saddres , setSaddres]=useState([
    {
      id:1,
      address:"Noorpur , bijnor, Up",
      city:"noorpur",
      pincode:"12344",
      pid :1,
    },
    {
      id:2,
      address:"Rampur , bijnor, Up",
      city:"Dhampur",
      pincode:"12344",
      pid :2,
    },
    
  ])

  
  const addSaddress =(newAdd)=>{
    setSaddres((saddres)=>[...saddres,newAdd])
    console.log(saddres)
  }
  const addCustomer =(newCustomer)=>{
    setCustomers([...customers,newCustomer])
    console.log(customers)
  }
  const addOrder =(newOrder)=>{
    setPurchasedOrders((purchasedOrders)=>[...purchasedOrders,newOrder])
    console.log(purchasedOrders)
  }
  return (
    <>
    <Router>
      <Header  />
      <Routes>
        <Route exact path='/addcustomer' element={<AddCustomer  addCustomer={addCustomer}/>}></Route>
        <Route exact path='/purchase' element={<PurchaseOrder customers={customers} addOrder={addOrder} />}></Route>
        <Route exact path='/shipping' element={<ShipingAddres customers={customers} purchasedOrders={purchasedOrders} addSaddress={addSaddress} />}></Route>
        <Route exact path='/customer' element={<CustomerList customers={customers} purchasedOrders={purchasedOrders} saddres={saddres}/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;