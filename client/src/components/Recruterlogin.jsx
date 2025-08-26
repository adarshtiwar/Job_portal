import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext"; // ✅ import your context

const RecruiterLogin = () => {
  const [state, setState] = useState("Login"); // Login | Sign Up
  const [step, setStep] = useState(1); // Step 1: basic info, Step 2: logo upload
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logo, setLogo] = useState(null);

  const handleFileChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Final Submit
      console.log({ name, email, password, logo });
      alert("Account Created Successfully!");
    }
  };

  const { setShowReacuter } = useContext(AppContext); // ✅ now it works

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Login / SignUp Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md z-10"
      >
        <h1 className="text-2xl font-bold text-center mb-2">
          Recruiter {state}
        </h1>
        <p className="text-gray-500 text-center mb-6">
          {state === "Login"
            ? "Welcome back! Please sign in to continue"
            : "Create your recruiter account"}
        </p>

        {/* Multi-Step Form */}
        <form className="space-y-4" onSubmit={handleNext}>
          {state === "Login" ? (
            <>
              {/* Email */}
              <div className="flex items-center border rounded-lg px-3 py-2">
                <img src={assets.email_icon} alt="email" className="w-5 h-5 mr-2" />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Email Id"
                  className="w-full outline-none text-sm"
                />
              </div>

              {/* Password */}
              <div className="flex items-center border rounded-lg px-3 py-2">
                <img src={assets.lock_icon} alt="password" className="w-5 h-5 mr-2" />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  className="w-full outline-none text-sm"
                />
              </div>

              {/* Forgot Password */}
              <div className="text-right text-sm text-blue-500 cursor-pointer hover:underline">
                Forgot password?
              </div>

              {/* Login Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Login
              </motion.button>
            </>
          ) : (
            <>
              {/* Step 1 → Company Info */}
              {step === 1 && (
                <>
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <img src={assets.person_icon} alt="profile" className="w-5 h-5 mr-2" />
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type="text"
                      placeholder="Company Name"
                      className="w-full outline-none text-sm"
                    />
                  </div>

                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <img src={assets.email_icon} alt="email" className="w-5 h-5 mr-2" />
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      placeholder="Email Id"
                      className="w-full outline-none text-sm"
                    />
                  </div>

                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <img src={assets.lock_icon} alt="password" className="w-5 h-5 mr-2" />
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      placeholder="Password"
                      className="w-full outline-none text-sm"
                    />
                  </div>

                  {/* Next Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                  >
                    Next
                  </motion.button>
                </>
              )}

              {/* Step 2 → Logo Upload */}
              {step === 2 && (
                <>
                  <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition">
                    <label htmlFor="image" className="cursor-pointer">
                      <img
                        src={assets.upload_area}
                        alt="upload"
                        className="mx-auto w-16 h-16 opacity-70"
                      />
                      <input
                        type="file"
                        id="image"
                        hidden
                        onChange={handleFileChange}
                      />
                      <p className="mt-2 text-gray-600">
                        Upload Company <br /> Logo
                      </p>
                    </label>
                  </div>

                  {logo && (
                    <p className="text-green-600 text-sm mt-2 text-center">
                      {logo.name} selected ✅
                    </p>
                  )}

                  {/* Final Submit */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-lg shadow-md hover:bg-green-700 transition"
                  >
                    Create Account
                  </motion.button>
                </>
              )}
            </>
          )}
          
          {/* Close button (fixed typo) */}
          <img
            onClick={() => setShowReacuter(false)}
            className="absolute top-5 right-5 cursor-pointer"
            src={assets.cross_icon}
            alt="close"
          />
        </form>

        {/* Switch Between Login / Signup */}
        {state === "Login" ? (
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
                setStep(1);
              }}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
                setStep(1);
              }}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default RecruiterLogin;
