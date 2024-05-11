import React, { useState } from 'react'
import NavbarforCheckOut from '../components/navbarforCheckOut'
import Billing from '../components/Billing'
import PaymentMode from '../components/PaymentMode'
import MsgForPlaceOrder from '../components/MsgForPlaceOrder';

function Clearing() {
  const[isClicked,setClick] = useState(false);
  return <>
    <NavbarforCheckOut />
    {!isClicked && <Billing />}
    {!isClicked && <PaymentMode setClick={setClick} />}
    {isClicked && <MsgForPlaceOrder />}
  </>
}

export default Clearing