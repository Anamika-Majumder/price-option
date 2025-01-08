import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
   const [open,setOpen] = useState(false)
   

    const routes = [{ id: 1, path: "/", name: "Home" }, { id: 2, path: "/about", name: "About Us" }, { id: 3, path: "/services", name: "Our Services" }, { id: 4, path: "/contact", name: "Contact Us" }, { id: 5, path: "/faq", name: "FAQ" }];


    return (
        <nav>
          <div className="md:hidden"
          onClick={()=> setOpen(!open)}>
       {   

        open === true ? 
        <HiOutlineMenuAlt2></HiOutlineMenuAlt2>

        
        :  <HiOutlineMenuAlt2 className=""></HiOutlineMenuAlt2>

        
       }



         
          </div>
            <ul className="md:flex">
            {
                routes.map(route => <Link  key={route.id} route ={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;