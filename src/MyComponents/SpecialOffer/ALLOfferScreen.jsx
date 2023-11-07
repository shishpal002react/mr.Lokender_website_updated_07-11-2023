import React, { useEffect, useState } from "react";

import img5 from "../../Images/d57.png";
import { useNavigate} from "react-router-dom";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import axios from "axios";
import Baseurl from "../../Baseurl";
// import { OfferData } from './../../ArrayData/ArrayData';

const ALLOfferScreen = () => {

  const navigate = useNavigate();
  const SlideLeft = ()=>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft-500
  }
  const SlideRight = ()=>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft+500
  }

  //api show catogery is calling
  const [offerData, setOfferData] = useState([]);
  const getProducts = async() => {
    console.log("ls",(localStorage.getItem("boon")))
    let url = `${Baseurl()}api/v1/my/products/offers`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("offer product",res.data.data);
      setOfferData(res.data.data);
    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(() => {  
    getProducts();    
  }, []);

//   //filter offerData
//   const [searchData, setSearchData] = useState([]);
//   const [searchofferData,setSearchofferData]=useState([]);
//   const getSearchData = async() => {
//     console.log("ls",(localStorage.getItem("boon")))
//     let url = `${Baseurl()}api/v1/filters?minPrice=0000&maxPrice=3999&offerDataId=64a2d0a125dba018a6e0a5c6&brand=`
//     try {
//       const res = await axios.get(url, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("boon")}`,
//         },
//       });
//       console.log("product from shoes section",res.data.products);
//       setSearchData(res.data.products);
//     } catch (error) {
//       console.log(error)
//     }
//   }
  
// //depandance is required to add
//   useEffect(() => {  
//     getSearchData();    
//   }, []);


  return (
    <>
      <div className="fashviewcont">
      <div className="fashviewcontl">
          <h3>Filters</h3>
          <div className="filtercont ft">
            <div className="filteritem">
              <div class="dropdown" tabIndex="0">
                <div className="dpc">
                  <span>CATEGORIES</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
                <div className="dropDownContent">
                  <p>Mobiles & Accessories</p>
                  <p>Mobiles & Accessories</p>
                </div>
              </div>
            </div>

            <div className="filteritem">
              <div class="dropdown" tabIndex="0">
                <div className="dpc">
                  <span>PRICE</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
                <div className="dropDownContent">
                  <div className="selectoption">
                    <select>
                      <option>Min</option>
                    </select>
                    <p>to</p>
                    <select>
                      <option>₹5,000</option>
                      <option>₹10,000</option>
                      <option>₹15,000</option>
                      <option>₹20,000</option>
                      <option>₹25,000</option>
                      <option>₹30,000</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>BRAND</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>RATINGS</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>RAM</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>INTERNAL STORAGE</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>NETWORK TYPE</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>SCREEN SIZE</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>SIM TYPE</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span> offers</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>TYPE</span>
                  <i class="fa-solid fa-caret-down dpci"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>AVAILABILITY</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fashviewcontr">
        <div className="relative flex items-center">
            <MdChevronLeft onClick={SlideLeft} size={40} />
            <div
              id="slider"
              className=" fashrightcont w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
               
              <div className="fashrightlabel w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300">
              {
                    offerData.map((item)=>(
                        <h3>{item?.productId?.brand}</h3>
                    ))
                }
              </div>
              
            </div>
            <MdChevronRight onClick={SlideRight} size={40} />
          </div>
          <div className="fashrightprod">
            
            <div className="fashrightproditm">
              <div className="rff">
                {
                    offerData.map((item)=>(
                        <div className="proditm">
                  <img src={item?.images?.[0]} onClick={()=>navigate(`/singleprodoctview/${item._id}`)}  alt="" />
                  <div className="proditmflex">
                    <h5>{item.name}</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>{item.description}</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; {item.price}</h6>
                    <img src={img5} alt="" />
                  </div>
                  {/* <p className="lsttxt">Free delivery Shubharambh99</p> */}
                </div>
                    ))
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ALLOfferScreen;
