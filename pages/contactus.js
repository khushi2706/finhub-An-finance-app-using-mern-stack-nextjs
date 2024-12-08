import Header from "@/components/header";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function contactUs() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleForm = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contactUs/contactus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (res.ok) {
      alert(data.message);
      router.push("/");
    } else {
      alert(data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <Header />
      <div className="w-full h-[15rem] bg-green-100 flex flex-col justify-center items-center">
        <h1 className="text-black font-bold text-[2rem]">Contact Us</h1>
        <p className="w-[80%] p-5 font-medium text-md">
          We believe every financial journey is unique. Our certified financial
          advisors and experts are here to support you every step of the way.
          From comprehensive risk assessments and personalized financial plans
          to wealth management and ongoing guidance, we’re dedicated to helping
          you achieve your financial goals. Our team is here to provide the
          expert advice and support you need for a secure and prosperous future.
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex border border-gray-300 w-[35rem] h-[20rem] rounded-lg overflow-hidden shadow-md ">
          <div className="w-1/2 p-6 bg-white flex flex-col justify-center">
            <h1 className="text-lg text-green-600 font-semibold">
              Get in touch
            </h1>
            <p className="text-sm mt-2 text-gray-700">
              Need advice or have questions? Contact us to schedule a
              consultation with our Financial Advisory Team. We'll assess your
              financial needs and create a personalized plan tailored just for
              you.
            </p>
          </div>
          <div className="w-1/2 bg-green-600 p-6 flex flex-col justify-center items-center">
            <h2 className="text-lg font-semibold text-white">
              Contact the Financial Advisory Team
            </h2>
            <form className="mt-4 w-full" onSubmit={handleForm}>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter your Name"
                className="w-full p-2 mb-3 rounded focus:outline-none"
              />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your Email"
                className="w-full p-2 mb-3 rounded focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="w-full p-2 mb-3 rounded focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-white text-black font-semibold p-2 rounded hover:bg-green-400 hover:text-white">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
