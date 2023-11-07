import React, { useEffect, useState } from "react";
import Footer from "../Homepage/Footer/Footer";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Baseurl from "../../Baseurl";
import axios from "axios";
import { toast } from "react-toastify";

const SingleProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("boon");
  // const data = location.state;
  const [rev, setReview] = useState("");
  //   const [pop, setPop] = useState(false);

  //   Add
  // const addCart = async (id) => {
  //   let url = `${Baseurl()}api/v1/cart`;
  //   const payload = {
  //     product: id,
  //   };
  //   try {
  //     const res = await axios.post(url, payload, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     console.log("post request cart" ,res);
  //     toast.success("SuccessFully ! Added to cart");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Internal Server Error");
  //   }
  //   navigate("/cart")
  // };

  // add to cart
  const addToCartHandler = async () => {
    console.log("add to cart clicked");
    let url = `${Baseurl()}api/v1/cart`;
    try {
      const body = { productId: "64a539f0b111507123d83845", quantity: 1 };
      const res = await axios.post(url, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("cart response", res);
      toast.success("Added to Cart");
    } catch (error) {
      console.log(error);
    }
  };

  //handle add product
  const handleAddProduct = () => {
    addToCartHandler();
    navigate("/cart");
  };

  // Post review
  const review = async () => {
    let url = `${Baseurl()}api/review/me/review`;
    const payload = {
      description: rev,
    };
    try {
      const res = await axios.post(url, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res);
      setReview("");
      toast.success("Thank you for review ", { autoClose: 500 });
    } catch (error) {
      console.log(error);
      console.log("Internal Server Error");
    }
  };

  //Same categary data api call
  const [categaryData, setCategaryData] = useState([]);
  const getCategaryProducts = async () => {
    console.log("ls", localStorage.getItem("boon"));
    let url = `${Baseurl()}api/v1/product/${id}`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("product from categary in single section", res.data.products);
      setCategaryData(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategaryProducts();
  }, []);

  ///single data api and  get all products
  const [singleData, setSingleData] = useState("");
  const getSingleProducts = async () => {
    console.log("ls", localStorage.getItem("boon"));
    let url = `${Baseurl()}api/v1/product/single/${id}`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("product from product section", res.data.product);
      setSingleData(res.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProducts();
  }, []);

  return (
    <>
      <Navbar />
      <NavbarCategory />
      <div className="mobileviewcont">
        <div className="mobileviewcontl">
          <div className="singlecont">
            <div className="singlecontl">
              <div className="singleitem">
                <img src={singleData?.images?.[0]} alt="image not found" />
              </div>
              <div className="singleitem">
                <img src={singleData?.images?.[0]} alt="image not found" />
              </div>
              <div className="singleitem">
                <img src={singleData?.images?.[0]} alt="image not found" />
              </div>
              <div className="singleitem">
                <img src={singleData?.images?.[1]} alt="image not found" />
              </div>
            </div>
            <div className="singlecontr">
              <div className="mobileimg">
                <img src={singleData?.images?.[1]} alt="image not found" />
              </div>
              <div className="mobilebtn">
                <button
                  className="bt1"
                  onClick={() => addToCartHandler(singleData._id)}
                >
                  Add To Cart
                </button>
                <button
                  className="bt2"
                  onClick={() => handleAddProduct(singleData._id)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mobileviewcontr">
          <div className="mobileviewdetail">
            <h6>
              {singleData.name} ({singleData?.color?.join(",")})
            </h6>
            <h6>Extra &#x20B9;1190 off</h6>
            <div className="detaillst">
              <h6>
                &#x20B9; {singleData.price} &#x20B9;{singleData.discountAmount}{" "}
                off
              </h6>
            </div>
            <h6>+&#x20B9; 29 Packaging Charges</h6>
            {singleData?.features?.map((item, i) => (
              <h6 key={i}>{item}</h6>
            ))}
            {/* <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6> */}
            <div className="mobileviewdetailbtn">
              <div></div>
              <button className="btt">Check Delivery</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileviewcont2">
        <div className="mobileviewcont2l"></div>
        <div className="mobileviewcont2r">
          <div className="mobileviewcont2r2">
            <h4>Sold By</h4>
            <div className="flex1">
              <img src={"img6"} alt="" />
              <h3>{singleData?.sellerId?.name}</h3>
              <button onClick={() => navigate("/")}>View Shop</button>
            </div>
            <div className="flex2">
              <div className="flex2l">
                <div className="flex2lc">
                  <h6>Rating</h6>
                  <div className="staricon">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <h6>{singleData.ratings}</h6>
              </div>
              <div className="flex2r">
                <div className="flex2ritem">
                  <h4>2</h4>
                  <h5>Followers</h5>
                </div>
                <div className="flex2ritem">
                  <h4>2</h4>
                  <h5>Products</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileviewcont3">
        <h3>You might be Interested in </h3>
        <div className="flex3">
          <div className="boxitm">
            {categaryData.map((item, i) => (
              <img
                style={{ margin: "10% 2%", width: "90%" }}
                src={item?.images?.[0]}
                alt="image is not found"
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProductView;
