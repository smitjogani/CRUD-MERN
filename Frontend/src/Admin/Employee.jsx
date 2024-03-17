/* eslint-disable no-undef */
import Navbar from "../Components/Navbar/Nav";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

const Employee = () => {
  const [data, setData] = useState([]);
  // const data = [
  //   {
  //     img: "img1",
  //     name: "Smit",
  //     email: "smit@gmail.com",
  //     tel: "9824242254",
  //     designation: "HR",
  //     gender: "Male",
  //     course: "MCA",
  //     date: "11-02-2024",
  //   },
  //   {
  //     img: "img1",
  //     name: "Smit",
  //     email: "smit@gmail.com",
  //     tel: "9824242254",
  //     designation: "HR",
  //     gender: "Male",
  //     course: "MCA",
  //     date: "11-02-2024",
  //   },
  //   {
  //     img: "img1",
  //     name: "Smit",
  //     email: "smit@gmail.com",
  //     tel: "9824242254",
  //     designation: "HR",
  //     gender: "Male",
  //     course: "MCA",
  //     date: "11-02-2024",
  //   },
  //   {
  //     img: "img1",
  //     name: "Smit",
  //     email: "smit@gmail.com",
  //     tel: "9824242254",
  //     designation: "HR",
  //     gender: "Male",
  //     course: "MCA",
  //     date: "11-02-2024",
  //   },
  //   {
  //     img: "img1",
  //     name: "Smit",
  //     email: "smit@gmail.com",
  //     tel: "9824242254",
  //     designation: "HR",
  //     gender: "Male",
  //     course: "MCA",
  //     date: "11-02-2024",
  //   },
  // ];
  useEffect(() => {
    axios.get(`http://localhost:5454/api/employee/`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <section className="min-w-full">
        <div className="w-[100%] bg-yellow-200 px-3 py-1 flex items-center justify-between">
          <h1 className="text-black font-semibold text-[1.5vw]">Employee</h1>
          <input
            type="text"
            name="search"
            placeholder="Search here"
            className="rounded-md p-1"
          />
        </div>
        <div className="p-2 w-full flex flex-row-reverse items-center">
          <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 flex items-center rounded-lg">
            <Link to="/admin/createEmployee">Create Employee</Link>
          </button>
          <p className="px-2 cursor-pointer">
            Total Count: <span className="font-bold">5</span>
          </p>
        </div>
        <div className="w-full overflow-scroll mt-1]">
          <table className="w-full">
            <tbody>
              <tr className="bg-black text-white font-semibold text-center text-[18px]">
                <td className="py-2">Id</td>
                <td>Profile</td>
                <td>Name</td>
                <td>Email</td>
                <td>Mobile No.</td>
                <td>Designation</td>
                <td>Gender</td>
                <td>Course</td>
                <td>Create Date</td>
                <td></td>
                <td></td>
              </tr>

              {data.map((item, index = 0) => {
                return (
                  <tr className="text-center" key={item._id}>
                    <td className="py-2">{index + 1}</td>
                    <td className="py-2 justify-center flex items-center">
                    <img src={`${item.image}`} alt="" className="w-[40px] h-[40px] object-cover rounded-full"/>
                    </td>
                    <td className="py-2">{item.name}</td>
                    <td className="py-2">{item.email}</td>
                    <td className="py-2">{item.mobileNo}</td>
                    <td className="py-2">{item.designation}</td>
                    <td className="py-2">{item.gender}</td>
                    <td className="py-2">{item.course}</td>
                    <td className="py-2">{item.createdAt}</td>

                    <td className="flex gap-6 items-center justify-center">
                      <Link to="/admin/employee/edit" className="text-blue-700 pb-4">
                        <MdModeEdit />
                      </Link>

                      <button className="text-red-600 text-xl pb-4">
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Employee;
