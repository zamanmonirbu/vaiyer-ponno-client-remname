import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight ";

const Navbar = () => {
    return (
        <div className="bg-gray-900 p-2 flex justify-between items-center">
            <NavbarLeft />
            <NavbarRight />
        </div>
    );
};

export default Navbar;
