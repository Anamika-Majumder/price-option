import { useState } from "react";
import Link from "../Link/Link";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

const Navbar = () => {
   const [open,setOpen] = useState(false)
   

    const routes = [{ id: 1, path: "/", name: "Home" }, { id: 2, path: "/about", name: "About Us" }, { id: 3, path: "/services", name: "Our Services" }, { id: 4, path: "/contact", name: "Contact Us" }, { id: 5, path: "/faq", name: "FAQ" }];


    return (
        <nav className="text-slate-950  p-6">
          <div className="md:hidden  "
          onClick={()=> setOpen(!open)}>
       {   

        open === true ? 
        <BsFillMenuButtonWideFill></BsFillMenuButtonWideFill>

        
        : <BsFillMenuButtonWideFill className="text-sky-300"></BsFillMenuButtonWideFill>
        
       }



         
          </div>
            <ul className={`md:flex duration-1000 px-6
                shadow-lg
                ${open ? 'top-16' : '-top-40' }
                
                absolute md:static bg-slate-400     shadow-lg`}>
            {
                routes.map(route => <Link  key={route.id} route ={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;