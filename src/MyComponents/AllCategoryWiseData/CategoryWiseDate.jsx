import React, { useEffect, useState } from "react";
import img5 from "../../Images/d57.png";
import { useNavigate} from "react-router-dom";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import axios from "axios";
import Baseurl from "../../Baseurl";

const CategoryWiseDate = ({id}) => {
  const navigate = useNavigate();
  //uhf jh 
  const SlideLeft = ()=>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft-500
  }
  const SlideRight = ()=>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft+500
  }

  //api show catogery is calling
  const [category, setCategory] = useState([]);
  const getProducts = async() => {
    console.log("ls",(localStorage.getItem("boon")))
    let url = `${Baseurl()}api/v1/product/${id}`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("product from shoes section",res.data.products);
      setCategory(res.data.products);
    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(() => {  
    getProducts();    
  }, [id]);

  
  //filter category
  // const [categorySearch,setCategorySearch]=useState();
  const [minpriceSearch,setMinPriceSearch]=useState();
  const [maxpriceSearch,setMaxPriceSearch]=useState();
  const [brandSearch,setbrandSearch]=useState();

  const getSearchData = async() => {
    console.log("ls",(localStorage.getItem("boon")))
    let url = `${Baseurl()}api/v1/filters?minPrice=${minpriceSearch}&maxPrice=${maxpriceSearch}&categoryId=&brand=${brandSearch}`
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      // console.log("product from shoes section",res.data.products);
      setCategory(res.data.products)
     
    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(() => {  
    getSearchData();    
  }, [id,maxpriceSearch]);

  //category wise data

  //  const getSubCat = async () => {
  //   let url = `${Baseurl()}api/v1/admin/allSubCategory`;
  //   try {
  //     const res = await axios.get(url);
  //     setSubCat(res.data.categories);
  //     // setFilterData(res.data.categories);
  //     console.log(res.data, "subc");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getSubCat();
  // }, []);


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
                      <select onChange={(e)=>setMinPriceSearch(e.target.value)}>
                      <option value="0">₹5,000</option>
                      <option value="5000">₹10,000</option>
                      <option value="10000">₹15,000</option>
                      <option value="15000">₹20,000</option>
                      <option value="20000">₹25,000</option>
                      <option value="25000">₹30,000</option>
                    </select>
                    <p>to</p>
                    <select onChange={(e)=>setMaxPriceSearch(e.target.value)}>
                      <option value="5000">₹5,000</option>
                      <option value="10000">₹10,000</option>
                      <option value="15000">₹15,000</option>
                      <option value="20000">₹20,000</option>
                      <option value="25000">₹25,000</option>
                      <option value="30000">₹30,000</option>
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
                {/* <p>radmi</p>
                <p>appleeeee</p>
                <p>radmi</p>
                <p>radmi</p> */}
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
                    category.map((item)=>(
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
                    category.map((item)=>(
                        <div className="proditm">
                  <img src={item.images} onClick={()=>navigate(`/singleprodoctview/${item._id}`)}  alt="" />
                  <div className="proditmflex">
                    <h5>{item.name}</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
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

export default CategoryWiseDate;
