import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <section className="w-full h-[3.5vw] bg-black px-20 flex items-center justify-between text-[#f5f5f5] max-w-screen overflow-hidden">
        <div className="text-[1.6vw] font-semibold">
          <Link to="/admin">Logo</Link>
        </div>
        <div className="flex items-center justify-between gap-5">
          <Link to="/admin" className="hover:opacity-[0.9] opacity-[1]">Home</Link>
          <Link to="/admin/employee" className="hover:opacity-[0.9] opacity-[1]">Employee List</Link>
        </div>
        <div className="flex items-center justify-between gap-5">
          <h3 className="cursor-pointer">Admin</h3>
          <Link to="/" className="cursor-pointer hover:opacity-[0.8] opacity-[1]">Logout</Link>
        </div>
      </section>
    </>
  );
};

export default Nav;
