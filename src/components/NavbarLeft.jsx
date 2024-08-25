import logo from '../images/logo.jpg'

const NavbarLeft = () => {
    return (
        <div className="flex items-center space-x-4">
            {/* Amazon Logo */}
            <img 
                src={logo}
                alt="Amazon Logo"
                className="h-8 rounded-md"
            />
            {/* Location and Search Bar */}
            <div className="flex items-center space-x-2 space-y-2">
                <div className="text-white text-sm">
                    <p>Deliver to</p>
                    <p className="font-bold">Bangladesh</p>
                </div>
                <div className="flex">
                    <select className="bg-gray-200 border-none text-gray-700 p-1">
                        <option>All</option>
                        {/* Add more options here */}
                    </select>
                    <input 
                        type="text" 
                        placeholder="Search Amazon" 
                        className="p-2 w-80" 
                    />
                    <button className="bg-yellow-400 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M15.5 10.5a5 5 0 10-1.707 9.707A5 5 0 0015.5 10.5z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavbarLeft;
