// import React, { useState } from 'react';
// import DashMenu from '../../Components/DashMenu';
// import { Plus, MoveRight, ChevronDown, CircleDot, Check } from 'lucide-react';
// import '../../Components/Custom/CustomScroll.css';

// const DashSession = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [chat, setChat] = useState(false);
//     const [messages, setMessages] = useState([]); // Stores chat messages
//     const [inputText, setInputText] = useState(""); // Stores input field text
//     const [dbDropdownOpen, setDbDropdownOpen] = useState(false); // Controls DB dropdown visibility
//     const [selectedDb, setSelectedDb] = useState("Select Database"); // Stores selected database name

//     // List of available databases
//     const databases = ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "OracleDB"];

//     // Function to handle sending messages
//     const handleSendMessage = () => {
//         if (inputText.trim() !== "") {
//             setMessages([...messages, { text: inputText, sender: "user" }]);
//             setInputText(""); // Clear input field after sending
//             setChat(true); // Ensure chat box is shown
//         }
//     };

//     return (
//         <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full max-w-6xl mx-auto p-5">
//             {/* Sidebar Menu */}
//             <div className="md:w-1/4">
//                 <DashMenu />
//             </div>

//             {/* Main Chat Area */}
//             <div className="flex flex-col gap-5 md:w-3/4 lg:w-2/3 relative">
//                 {/* Database Selection & Query Button */}
//                 <div className='flex flex-col md:flex-row gap-3'>
//                     <button
//                         className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 text-lg font-medium bg-green-200 text-black rounded-badge flex gap-3 justify-between items-center transition cursor-pointer group"
//                         onClick={() => setDbDropdownOpen(!dbDropdownOpen)}
//                     >
//                         <span className={`text-green-600 transition-transform ${dbDropdownOpen ? "scale-50" : ""}`}><CircleDot /></span>
//                         {selectedDb}
//                         <span className={`transition-transform ${dbDropdownOpen ? "rotate-180" : ""}`}><ChevronDown /></span>
//                     </button>

//                     {/* Database Dropdown Menu */}
//                     {dbDropdownOpen && (
//                         <div className="absolute top-12 left-0 md:left-auto md:w-1/2 lg:w-1/3 bg-white border-2 rounded-badge shadow-lg z-10">
//                             <ul className="flex flex-col">
//                                 {databases.map((db, index) => (
//                                     <li
//                                         key={index}
//                                         className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
//                                         onClick={() => {
//                                             setSelectedDb(db);
//                                             setDbDropdownOpen(false);
//                                         }}
//                                     >
//                                         {db} {selectedDb === db && <Check className="text-green-600" />}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}

//                     {/* New Query Button */}
//                     <button
//                         className="w-full md:w-fit md:px-5 md:py-3 px-4 py-2 text-lg font-medium bg-black text-white rounded-badge flex gap-3 justify-center items-center transition cursor-pointer hover:bg-green-600 group"
//                         onClick={() => setIsOpen(!isOpen)}
//                     >
//                         New Query <span className="group-hover:translate-x-2 transition"><Plus /></span>
//                     </button>
//                 </div>

//                 {/* Chat Box (Scrollable Messages) */}
//                 {chat && (
//                     <div className="w-full border rounded-badge p-6 flex flex-col gap-3 transition-transform bg-white">
//                         <h2 className="text-lg md:text-xl font-semibold">Hi there. What can I do for you?</h2>
//                         <div className="flex flex-col gap-2 overflow-y-auto max-h-60 md:max-h-80 lg:max-h-96 pr-2 custom-scrollbar">
//                             {messages.map((msg, index) => (
//                                 <div
//                                     key={index}
//                                     className={`px-4 py-2 rounded-badge w-fit max-w-[80%] ${msg.sender === "user" ? "bg-green-500 text-white self-end" : "bg-gray-300 text-black self-start"}`}
//                                 >
//                                     {msg.text}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}

//                 {/* Input Box for Chat */}
//                 {isOpen && (
//                     <div className="w-full md:w-3/4 lg:w-2/3 flex items-center justify-start gap-3 transition-transform">
//                         <input
//                             type="text"
//                             placeholder="Type your message here . . ."
//                             className="w-2/3 md:w-3/4 lg:w-4/5 rounded-badge p-3 focus:outline-none focus:ring-2 focus:ring-green-500 border-2"
//                             value={inputText}
//                             onChange={(e) => setInputText(e.target.value)}
//                             onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} // Send on Enter key
//                         />
//                         <button
//                             className="w-1/3 md:w-1/4 lg:w-1/5 bg-black text-white rounded-badge p-3 flex justify-center items-center group transition hover:bg-green-600"
//                             onClick={handleSendMessage}
//                         >
//                             <MoveRight className="group-hover:translate-x-2 transition" />
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default DashSession;


import React, { useState } from 'react';
import DashMenu from '../../Components/DashMenu';
import { Plus, MoveRight, ChevronDown, CircleDot, Check } from 'lucide-react';
import '../../Components/Custom/CustomScroll.css';
import { DatabaseZap } from 'lucide-react';

const DashSession = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [chat, setChat] = useState(false);
    const [messages, setMessages] = useState([]); // Stores chat messages
    const [inputText, setInputText] = useState(""); // Stores input field text
    const [dbDropdownOpen, setDbDropdownOpen] = useState(false); // Controls DB dropdown visibility
    const [selectedDb, setSelectedDb] = useState("Select Database"); // Stores selected database name

    // List of available databases
    const databases = ["ACS", "UCS", "ICS"];

    // Function to handle sending messages
    const handleSendMessage = () => {
        if (inputText.trim() !== "") {
            setMessages([...messages, { text: inputText, sender: "user" }]);
            setInputText(""); // Clear input field after sending
            setChat(true); // Ensure chat box is shown
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full max-w-6xl mx-auto p-5">
            {/* Sidebar Menu */}
            <div className="md:w-1/4">
                <DashMenu />
            </div>

            {/* Main Chat Area */}
            <div className="flex flex-col gap-5 md:w-3/4 lg:w-2/3 relative">
                {/* Database Selection & Query Button */}
                <div className='flex flex-col md:flex-row gap-3'>
                    <button
                        className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 text-lg font-medium bg-green-200 text-black rounded-badge flex gap-3 justify-between items-center transition cursor-pointer group"
                        onClick={() => setDbDropdownOpen(!dbDropdownOpen)}
                    >
                        <span className="text-green-600 transition group"><DatabaseZap className='group-hover:text-black transition'/></span>
                        {selectedDb}
                        <span className={`transition-transform ${dbDropdownOpen ? "rotate-180" : ""}`}><ChevronDown /></span>
                    </button>

                    {/* Database Dropdown Menu */}
                    {dbDropdownOpen && (
                        <div className="absolute top-12 left-0 md:left-auto md:w-1/2 lg:w-1/3 bg-white p-5 rounded-badge shadow-xl z-10">
                            <ul className="flex flex-col">
                                {databases.map((db, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex justify-between items-center rounded-badge transition"
                                        onClick={() => {
                                            setSelectedDb(db);
                                            setDbDropdownOpen(false);
                                        }}
                                    >
                                        {db} {selectedDb === db && <Check className="text-green-600" />}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* New Query Button */}
                    <button
                        className="w-full md:w-fit md:px-5 md:py-3 px-4 py-2 text-lg font-medium bg-black text-white rounded-badge flex gap-3 justify-center items-center transition cursor-pointer hover:bg-green-600 group"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        New Query <span className="group-hover:translate-x-2 transition"><Plus /></span>
                    </button>
                </div>

                {/* Chat Box (Scrollable Messages - Scrolls Earlier) */}
                {chat && (
                    <div className="w-full border rounded-badge p-6 flex flex-col gap-3 transition-transform bg-white">
                        <h2 className="text-lg md:text-xl font-semibold">Hi there. What can I do for you?</h2>
                        <div className="flex flex-col gap-2 overflow-y-auto max-h-48 md:max-h-64 lg:max-h-72 pr-2 custom-scrollbar">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`px-4 py-2 rounded-badge w-fit max-w-[80%] ${msg.sender === "user" ? "bg-green-500 text-white self-end" : "bg-gray-300 text-black self-start"}`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Input Box for Chat */}
                {isOpen && (
                    <div className="w-full md:w-3/4 lg:w-2/3 flex items-center justify-start gap-3 transition-transform">
                        <input
                            type="text"
                            placeholder="Type your message here . . ."
                            className="w-2/3 md:w-3/4 lg:w-4/5 rounded-badge p-3 focus:outline-none focus:ring-2 focus:ring-green-500 border-2"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} // Send on Enter key
                        />
                        <button
                            className="w-1/3 md:w-1/4 lg:w-1/5 bg-black text-white rounded-badge p-3 flex justify-center items-center group transition hover:bg-green-600"
                            onClick={handleSendMessage}
                        >
                            <MoveRight className="group-hover:translate-x-2 transition" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashSession;
