const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-white shadow-md h-16 ">
        <div className=" w-[5%] mx-12">
          <img
            src="/src/assets/koinx-logo.png"
            alt="Koinx Logo"
            className="w-screen m-1"
          />
        </div>
        <div className="flex text-nowrap gap-10 mx-12 items-center text-sm">
          <ul className="font-semibold flex text-start  gap-4 ">
            <li>Crypto Taxes</li>
            <li>Free Tools</li>
            <li>Resource Center</li>
          </ul>
          <button className="bg-gradient-to-r from-[#276eea] to-[#1c4cef] p-2 text-white rounded-md w-32 ">
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
