import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import {HiOutlineMenuAlt1} from "react-icons/hi"
function Header() {
  return (
    <>
    <div className="sticky-top pe-0 me-0 border border-2 h-100 bg-white">
        <div className="d-flex justify-content-around list-unstyled align-items-center">
        <div className="fw-bold fs-1" style={{ color: "#012478" }}>
          LearnVern
        </div>
        <span>
          {" "}
          <span>
          <div className=" fs-5">
            <a
              class="nav-link dropdown-toggle"
              href="aa"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ><BsFillGrid3X3GapFill />
              Categories
            </a>
          </div>
          </span>
        </span>
        <div>
          <input type="text" placeholder="Search Course"  style={{ width :"300px", padding : "6px"}} />
        </div>
        <span >
        
          <div className=" fs-5 "> <FaShare/>Share</div>
        </span>
        <div>
          <button type="button" className="text-white p-2 rounded" style={{ border: '2px solid #3785d7', background: '#3785d7' }}>
            Join For Free
          </button>
        </div>
        <div className="fs-1 mb-2"><HiOutlineMenuAlt1/></div>
      </div>
    </div>
     
    </>
  );
}

export default Header;
