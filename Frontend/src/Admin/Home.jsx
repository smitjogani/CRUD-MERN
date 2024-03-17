import Nav from "../Components/Navbar/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <section className="flex items-center justify-center bg-[#f5f5f5] w-screen h-screen">
        <h1 className="text-3xl font-semibold">Welcome Admin Panel</h1>
      </section>
    </>
  );
};

export default Home;
