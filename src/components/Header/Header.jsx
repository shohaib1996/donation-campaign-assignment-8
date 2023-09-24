import { NavLink } from "react-router-dom";


const Header = () => {
    const link = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline text-green-400 font-bold mr-3" : "mr-3"
                }
            >
                Home
            </NavLink>
        </li>


        <li>
            <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline text-green-400 font-bold mr-3" : "mr-3"
                }
            >
                Donation
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline text-green-400 font-bold mr-3" : "mr-3"
                }
            >
                Statistics
            </NavLink>
        </li>

    </>

    return (
        <div>
            <div className="navbar max-w-screen-xl mx-auto pt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <img src="/image/Logo.png" alt="" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className=" menu-horizontal px-1">
                    {link}
                </ul>
            </div>

        </div>
        </div>
    );
};

export default Header;