import React from 'react'

const BooksSection = ({data}) => {
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap '>
      {data && data.map((item, index) => (
      <div className='my-3' 
                    style={{
                    width: '200px', 
                    height: '350px',
                    border: '1px solid white'}}>
        <div>
          <img style={{width:"200px" , height: "210px", borderTopLeftRadius: '20px'}} 
          className='img-fluid' src="{item.image}" alt="/" />

        </div>

        <h6 style={{fontSiz: "15px"}} 
        className='px-2 m-0'>
        {item.bookname.slice(0, 20)}...</h6> 

        <b style={{fontSize: "30px", color: "red"}}>Rs.{item.price}</b>
        <div className='d-flex justify-content-around align-items-center my-2'>
        <button className='btn btn-primary'>UPDATE</button>
        <button className='btn btn danger'>DELETE</button>
        </div>
      </div>
      ))}
    </div>
  )
}

export default BooksSection