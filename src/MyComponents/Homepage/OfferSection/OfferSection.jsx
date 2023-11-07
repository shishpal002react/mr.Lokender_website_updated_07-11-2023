import React, { useEffect, useState } from 'react'
import { OfferData } from '../../../ArrayData/ArrayData'
import Baseurl from '../../../Baseurl';
import axios from 'axios';


const OfferSection = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async() => {
    console.log("ls",(localStorage.getItem("boon")))
    let url = `${Baseurl()}api/v1/product/650c3b22438e63e219b68ae6`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("produts",res.data.products);
      setProducts(res.data.products);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {  
    getProducts();    
  }, []);


  return (
    <>
      <div className="hidden md:grid grid-cols-3 mx-3 ">
          {products.length>0 && products.map((product)=>{
              return(
                <div className='mx-4'><img src={product.images[0]} alt="" /></div>
              )
          })}
            
      </div>
    </>
  )
}

export default OfferSection
