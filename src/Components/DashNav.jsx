import { useUser } from "@clerk/clerk-react";
import { ArrowRightFromLine } from 'lucide-react';
import { Link } from "react-router";

const DashNav = () => {
    const { user } = useUser();

    return (
        <div className="w-auto mx-10 my-10 h-16 bg-white text-white flex items-center justify-between border-2 border-gray-200 py-5 px-4 gap-20 rounded-badge">
            {/* <h1>Welcome, {user?.firstName}!</h1> */}
            {/* <p>Email: {user?.primaryEmailAddress?.emailAddress}</p> */}
            <img src="Logo-text.svg" alt="logo-text" width={150} className='md:w-200' />
            <div className="flex gap-5 items-center">
                {user?.imageUrl && (
                    <img
                        src={user.imageUrl}
                        alt="Profile"
                        className="rounded-full w-10 h-10 cursor-pointer hover:border-2 border-green-600 hover:transition-transform hover:scale-110"
                    />
                )}
                {/* <div className="group flex w-fit p-3 hover:transition-transform rounded-badge hover:bg-red-600 cursor-pointer text-black"><span className="">Logout</span><LogOut className="text-black group-hover:translate-x-1 transition group-hover:text-white w-10/12" /></div> */}
                <Link to="/">
                    <div className="group flex gap-3 w-fit px-5 py-2 hover:transition-transform rounded-badge hover:bg-red-600 cursor-pointer text-black bg-red-50">
                        <span className="hidden md:block group-hover:text-white font-medium">Logout</span>
                        <ArrowRightFromLine className="text-red-500 group-hover:translate-x-1 transition group-hover:text-white w-10/12" />
                    </div>
                </Link>
            </div>


        </div>
    );
};

export default DashNav;
