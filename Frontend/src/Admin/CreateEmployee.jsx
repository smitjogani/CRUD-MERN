import { useState } from "react";
import Navbar from "../Components/Navbar/Nav";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [course, setCourse] = useState("");
  // const navigateTo = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, mobileNo, designation, gender, course, image);

    axios.post("http://localhost:5454/api/employee/addEmployee", {
      name,
      email,
      mobileNo,
      designation,
      gender,
      course,
      image,
    });
  };

  return (
    <>
      <Navbar />
      <section className="w-full h-[120vh] max-w-screen">
        <div className="min-h-[120vh] flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 flex items-center justify-between flex-col">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
                Add Employee
              </h2>
            </div>
            <form
              className="mt-8 space-y-6 bg-[#f5f5f5] p-4 rounded-md shadow-lg w-[35vw]"
              onSubmit={handleSubmit}
            >
              <div className="rounded-md shadow-sm p-2">
                <div>
                  <input
                    id="email-address"
                    name="name"
                    type="name"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                    placeholder="Enter Employee Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="emial"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    id="tel"
                    name="mobileNo"
                    type="tel"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                    placeholder="Enter Contact No"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                  />
                </div>

                <div className="w-full mb-5">
                  <label className="w-[40%] mr-8">Designation</label>

                  <select
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    className="w-[60%]"
                    name="designation"
                    required
                  >
                    <option>HR</option>
                    <option>Manager</option>
                    <option>Sales</option>
                  </select>
                </div>

                <div className="w-full mb-5 flex items-center  gap-[16%]">
                  <label>Gender</label>

                  <div className="flex items-center gap-1 justify-center">
                    <input
                      className="mt-1"
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    Male
                    <input
                      className="mt-1"
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    Female
                  </div>
                </div>

                <div className="w-full mb-5">
                  <label className="mr-[11%]">Course</label>
                  <input
                    type="checkbox"
                    className="ml-6 mr-1"
                    value={course}
                    name="course"
                    onChange={(e) => setCourse(e.target.value)}
                  />
                  MCA
                  <input
                    type="checkbox"
                    value={course}
                    name="course"
                    className="ml-6 mr-1"
                    onChange={(e) => setCourse(e.target.value)}
                  />
                  BCA
                  <input
                    type="checkbox"
                    className="ml-6 mr-1"
                    value={course}
                    name="course"
                    onChange={(e) => setCourse(e.target.value)}
                  />
                  BSC
                </div>

                <div className="w-full mb-5">
                  {/* <label className="mr-[4%]">Profile Picture Url</label> */}
                  <input
                    type="text"
                    name="image"
                    placeholder="Enter image url"
                    // accept="image/png, image/jpg"
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                    onChange={(e) => {
                      // console.log(event.target.files[0]);
                      setImage(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateEmployee;
