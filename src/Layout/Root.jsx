import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-poppins max-w-full mx-auto lg:px-20 px-4 mb-10">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;