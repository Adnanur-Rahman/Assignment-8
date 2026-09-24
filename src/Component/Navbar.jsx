
import { Link, NavLink } from "react-router";
import Container from "./Container";
import { FaGithub } from "react-icons/fa6";
import logoImage from "../images/logo.png"
const Navbar = () => {
  

    return (
        <div className=" shadow-md border-b-[0.5px] border-gray-300">
      <Container>
      <nav className="px-4 flex justify-between items-center flex-1 md:px-8 py-4">
<Link to="/">
    <div className="flex gap-2 items-center">
      <span><img className="h-10" src={logoImage}alt="logo image"/></span>
          <h1 className=" text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  bg-clip-text text-transparent">HERO.IO</h1>

    </div>
</Link>
        <div className="hidden md:flex justify-center items-center gap-4 font-semibold ">
    
          <NavLink to='/'> Home</NavLink>
          <NavLink to='/apps'>Apps</NavLink>
          <NavLink to='/installation' >  Installation</NavLink>

        </div>
        
     <div className="hidden md:block">
     <Link to="https://github.com/Adnanur-Rahman/Assignment-8">
     <button className="flex justify-center items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg hover:cursor-pointer">
            <FaGithub /><span>Contribute</span>
          </button></Link>
     </div>
                  <div className="md:hidden">
  <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <NavLink to='/'> Home</NavLink>
          <NavLink to='/apps'>Apps</NavLink>
          <NavLink to='/installation' >  Installation</NavLink>
        <li>
            <a>   <button className="flex justify-center items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg hover:cursor-pointer">
            <FaGithub /><span>Contribute</span>
          </button></a> </li>

      </ul>
    </div>
  </div>

</div>
      </nav>
      </Container>
    </div>
    );
};

export default Navbar;