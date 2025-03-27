// // DYNAMIC CODE

// import { useState, useEffect } from 'react';
// import DashMenu from '../../Components/DashMenu';
// import { Plus, MoveRight, ChevronDown, Check } from 'lucide-react';
// import '../../Components/Custom/CustomScroll.css';
// import { DatabaseZap } from 'lucide-react';
// import API_ENDPOINTS from '../../../config';

// const DashSession = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [chat, setChat] = useState(false);
//     const [messages, setMessages] = useState([]); // Stores chat messages
//     const [inputText, setInputText] = useState(""); // Stores input field text
//     const [dbDropdownOpen, setDbDropdownOpen] = useState(false); // Controls DB dropdown visibility
//     const [selectedVersion, setSelectedVersion] = useState(""); // Stores selected dataset version
//     const [datasetVersions, setDatasetVersions] = useState([]); // Stores fetched dataset versions
//     const [loadingDatasets, setLoadingDatasets] = useState(true); // Track dataset fetch status
//     const [error, setError] = useState(null); // Track API errors

//     // Fetch dataset versions from API on component mount
//     useEffect(() => {
//         const fetchDatasets = async () => {
//             try {
//                 const response = await fetch(API_ENDPOINTS.GET_DATASET);
//                 const data = await response.json();
//                 if (data && data.names) {
//                     setDatasetVersions(data.names); // Assuming response is { "datasets": ["v0", "v1", "v2"] }
//                     setSelectedVersion(data.names[0]); // Default to first dataset
//                 }
//             } catch (err) {
//                 console.error("Error fetching datasets:", err);
//                 setError("Failed to load datasets. Please try again.");
//             } finally {
//                 setLoadingDatasets(false);
//             }
//         };
//         fetchDatasets();
//     }, []);

//     // Function to send query and fetch AI response
//     const handleSendMessage = async () => {
//         if (inputText.trim() !== "" && selectedVersion) {
//             const newMessages = [...messages, { text: inputText, sender: "user" }];
//             setMessages(newMessages);
//             setInputText(""); // Clear input field after sending
//             setChat(true); // Ensure chat box is shown

//             try {
//                 const response = await fetch(API_ENDPOINTS.GET_ANS_V0, {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({ query: inputText }),
//                 });

//                 const data = await response.json();

//                 setMessages([...newMessages, { text: data.answer || "No response from AI.", sender: "bot" }]);
//             } catch (error) {
//                 console.error("Error fetching response:", error);
//                 setMessages([...newMessages, { text: "Error fetching response. Please try again.", sender: "bot" }]);
//             }
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
//                 {/* Dataset Selection Dropdown */}
//                 <div className='flex flex-col md:flex-row gap-3'>
//                     <button
//                         className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 text-lg font-medium bg-green-200 text-black rounded-badge flex gap-3 justify-between items-center transition cursor-pointer group"
//                         onClick={() => setDbDropdownOpen(!dbDropdownOpen)}
//                     >
//                         <span className="text-green-600 transition group"><DatabaseZap className='group-hover:text-black transition'/></span>
//                         {selectedVersion ? selectedVersion.toUpperCase() : "Loading..."}
//                         <span className={`transition-transform ${dbDropdownOpen ? "rotate-180" : ""}`}><ChevronDown /></span>
//                     </button>

//                     {/* Dataset Dropdown Menu */}
//                     {dbDropdownOpen && (
//                         <div className="absolute top-12 left-0 md:left-auto md:w-1/2 lg:w-1/3 bg-white p-5 rounded-badge shadow-xl z-10">
//                             {loadingDatasets ? (
//                                 <p className="text-center text-gray-500">Loading datasets...</p>
//                             ) : error ? (
//                                 <p className="text-center text-red-500">{error}</p>
//                             ) : (
//                                 <ul className="flex flex-col">
//                                     {datasetVersions.map((version, index) => (
//                                         <li
//                                             key={index}
//                                             className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex justify-between items-center rounded-badge transition"
//                                             onClick={() => {
//                                                 setSelectedVersion(version);
//                                                 setDbDropdownOpen(false);
//                                             }}
//                                         >
//                                             {version.toUpperCase()} {selectedVersion === version && <Check className="text-green-600" />}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
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
//                         <div className="flex flex-col gap-2 overflow-y-auto max-h-48 md:max-h-64 lg:max-h-72 pr-2 custom-scrollbar">
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


import { useState, useEffect } from 'react';
import DashMenu from '../../Components/DashMenu';
import { Plus, MoveRight, ChevronDown, Check, Ellipsis } from 'lucide-react';
import '../../Components/Custom/CustomScroll.css';
import { DatabaseZap } from 'lucide-react';
import API_ENDPOINTS from '../../../config';

const DashSession = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [chat, setChat] = useState(false);
    const [messages, setMessages] = useState([]); // Stores chat messages
    const [inputText, setInputText] = useState(""); // Stores input field text
    const [dbDropdownOpen, setDbDropdownOpen] = useState(false); // Controls DB dropdown visibility
    const [selectedVersion, setSelectedVersion] = useState(""); // Stores selected dataset version
    const [datasetVersions, setDatasetVersions] = useState([]); // Stores fetched dataset versions
    const [loadingDatasets, setLoadingDatasets] = useState(true); // Track dataset fetch status
    const [error, setError] = useState(null); // Track API errors
    const [loadingMessage, setLoadingMessage] = useState(false); // Track loading state for message

    // Fetch dataset versions from API on component mount
    useEffect(() => {
        const fetchDatasets = async () => {
            try {
                const response = await fetch(API_ENDPOINTS.GET_DATASET);
                const data = await response.json();
                if (data && data.names) {
                    setDatasetVersions(data.names); // Assuming response is { "datasets": ["v0", "v1", "v2"] }
                    setSelectedVersion(data.names[0]); // Default to first dataset
                }
            } catch (err) {
                console.error("Error fetching datasets:", err);
                setError("Failed to load datasets. Please try again.");
            } finally {
                setLoadingDatasets(false);
            }
        };
        fetchDatasets();
    }, []);

    // Function to send query and fetch AI response
    const handleSendMessage = async () => {
        if (inputText.trim() !== "" && selectedVersion) {
            const newMessages = [...messages, { text: inputText, sender: "user" }];
            setMessages(newMessages);
            setInputText(""); // Clear input field after sending
            setChat(true); // Ensure chat box is shown
            setLoadingMessage(true); // Start loading animation

            try {
                const response = await fetch(API_ENDPOINTS.GET_ANS_V0, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ query: inputText }),
                });

                const data = await response.json();
                setMessages([...newMessages, { text: data.answer || "No response from AI.", sender: "bot" }]);
            } catch (error) {
                console.error("Error fetching response:", error);
                setMessages([...newMessages, { text: "Error fetching response. Please try again.", sender: "bot" }]);
            } finally {
                setLoadingMessage(false); // Stop loading animation after response is received
            }
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
                {/* Dataset Selection Dropdown */}
                <div className='flex flex-col md:flex-row gap-3'>
                    <button
                        className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 text-lg font-medium bg-green-200 text-black rounded-badge flex gap-3 justify-between items-center transition cursor-pointer group"
                        onClick={() => setDbDropdownOpen(!dbDropdownOpen)}
                    >
                        <span className="text-green-600 transition group"><DatabaseZap className='group-hover:text-black transition'/></span>
                        {selectedVersion ? selectedVersion.toUpperCase() : "Loading..."}
                        <span className={`transition-transform ${dbDropdownOpen ? "rotate-180" : ""}`}><ChevronDown /></span>
                    </button>

                    {/* Dataset Dropdown Menu */}
                    {dbDropdownOpen && (
                        <div className="absolute top-12 left-0 md:left-auto md:w-1/2 lg:w-1/3 bg-white p-5 rounded-badge shadow-xl z-10">
                            {loadingDatasets ? (
                                <p className="text-center text-gray-500">Loading datasets...</p>
                            ) : error ? (
                                <p className="text-center text-red-500">{error}</p>
                            ) : (
                                <ul className="flex flex-col">
                                    {datasetVersions.map((version, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex justify-between items-center rounded-badge transition"
                                            onClick={() => {
                                                setSelectedVersion(version);
                                                setDbDropdownOpen(false);
                                            }}
                                        >
                                            {version.toUpperCase()} {selectedVersion === version && <Check className="text-green-600" />}
                                        </li>
                                    ))}
                                </ul>
                            )}
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

                {/* Chat Box (Scrollable Messages) */}
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

                            {/* Loading dots animation */}
                            {loadingMessage && (
                                <div className="px-4 py-2 rounded-badge w-fit max-w-[80%] bg-gray-300 text-black self-start">
                                    <span className="animate-pulse"><Ellipsis/></span>
                                </div>
                            )}
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
