import React, { useState } from 'react';
import { ChevronRight, Menu } from 'lucide-react';
import { CircleHelp } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';

const DashMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-auto">
            {/* Mobile Menu Toggle Button */}
            <button
                className="md:hidden flex items-center gap-2 px-4 py-2 text-lg font-medium bg-gray-100 rounded-badge shadow-sm"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Menu size={20} /> Menu
            </button>

            {/* Menu Content */}
            <div className={`absolute md:static top-full left-0 w-64 md:w-full bg-white  rounded-badge shadow-lg md:shadow-none md:bg-gray-200 md:p-10 p-4 z-10 transition-all duration-300 
                ${isOpen ? "block" : "hidden"} md:flex md:flex-col`}
            >
                <h2 className="text-xl font-semibold mb-3">Menu</h2>
                <ul className="space-y-3 text-gray-500 font-medium">
                    <li className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer  hover:text-black transition">
                        Query List <ChevronRight size={16} />
                    </li>
                    <li className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer  hover:text-black transition">
                        Need Help <CircleHelp size={16} />
                    </li>
                    <li className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer  hover:text-black transition">
                        Settings <SlidersHorizontal size={16} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashMenu;
