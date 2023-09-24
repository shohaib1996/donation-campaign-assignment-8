import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";


const MainLayout = () => {
    const location = useLocation();


    const isHomeRoute = location.pathname === '/';
    return (
        <div className="">
            <div className={isHomeRoute ? "bg-[url('https://i.ibb.co/fC771DX/Clothing.png')]  bg-no-repeat bg-cover bg-center  bg-blend-multiply h-[480px]" : ""}>
                <div className=" bg-white opacity-90 ">
                    <Header></Header>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;

