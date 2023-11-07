import React from "react";
import img from "../../Images/d41.png";
const ReactCont = ()=>{
    return (
        <>
            <div className="rentcont">
                <h3>My Payment</h3>
                <div className="rentitem">
                    <img src={img} alt="" />
                    <p>Lorem Ipsum</p>
                    <button>Pay</button>
                </div>
                <h3>Recent Payments</h3>
                <div className="rentitem">
                    <img src={img} alt="" />
                    <p>Lorem Ipsum</p>
                    <button>Pay</button>
                </div>
                <div className="rentitem">
                    <img src={img} alt="" />
                    <p>Lorem Ipsum</p>
                    <button>Pay</button>
                </div>
                <div className="rentitem">
                    <img src={img} alt="" />
                    <p>Lorem Ipsum</p>
                    <button>Pay</button>
                </div>
            </div>
        </>
    )
}

export default ReactCont;