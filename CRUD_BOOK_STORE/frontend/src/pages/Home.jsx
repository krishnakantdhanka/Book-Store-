import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'


const Home = () => {
  return (

    <>

    <div className='Home-Page bg-dark text-white container-fluid justify-content-center align-items-center ' >
        <div className='row container'>
            <div
            className='col-lg-6 d-flex justify-content-center align-items-start flex-column '
            style={{height:"91.5vh"}}
            >
            <h2 style={{fontSize:" 80px"}}>BOOK STORE </h2>
            <h3 style={{fontSize:" 50px"}}>FOR YOU </h3>
            <p className='mb-0'>Checkout The Books From Here.</p>

            <Link to="/books" className='viewBook my-3'>View Books</Link>

            </div>
            <div 
             className='col-lg-6 d-flex justify-content-center align-items-center flex-column'
             style={{height:"91.5vh"}}
             >
             <img className='img-fluid homeimg' 
             src="https://plus.unsplash.com/premium_photo-1681681082147-1156b531577d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
             alt="Web page is not  load"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home