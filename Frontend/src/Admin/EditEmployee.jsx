import { useState } from "react";
import Navbar from "../Components/Navbar/Nav";

const EditEmployee = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [course1, setCourse1] = useState(true);
  const [course2, setCourse2] = useState(true);
  const [course3, setCourse3] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image)
  };

  const handleChange = (data) => {
    if (data == "MCA") {
      setCourse1(data);
    } else if (data == "BCA") {
      setCourse2(data);
    } else {
      setCourse3(data);
    }
  };

  return (
    <>
      <Navbar />
      <section className="w-full h-[120vh] max-w-screen">
        <div className="min-h-[120vh] flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 flex items-center justify-between flex-col">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
                Edit Employee
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    name="course"
                    value={course1}
                    onChange={() => handleChange("MCA")}
                  />
                  MCA
                  <input
                    type="checkbox"
                    value={course2}
                    name="course"
                    className="ml-6 mr-1"
                    onChange={() => handleChange("BCA")}
                  />
                  BCA
                  <input
                    type="checkbox"
                    name="course"
                    className="ml-6 mr-1"
                    value={course3}
                    onChange={() => handleChange("BSC")}
                  />
                  BSC
                </div>

                <div className="w-full mb-5">
                  <label className="mr-[4%]">Profile Picture</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/png, image/jpg"
                    className="w-[60%]"
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      setImage(event.target.files[0]);
                    }}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditEmployee;
