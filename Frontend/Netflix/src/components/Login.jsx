import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email or Mobile Number is Required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (res.status === 200 && res.data.message === "Login successful") {
        // alert("Login Successful!");
        navigate("/dashboard");
      } else {
        navigate("/notfound");
      }
    } catch (err) {
      console.error(err);
      navigate("/notfound");
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/92d0a4f4-3138-4c58-9f5f-80ec59186e99/6c48c2b8-7a7b-4cb2-a7b1-f33df7de4fb2/IN-en-20230731-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-md w-96 text-white">
        <h2 className="text-3xl font-bold mb-6">Sign In</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or Mobile Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-2 rounded bg-gray-800 text-white placeholder-gray-400"
          />
          {error && (
            <p className="text-red-500 text-sm mb-2">{error}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-bold"
          >
            Sign In
          </button>
        </form>

        <div className="text-sm mt-4">
          <p className="text-center mb-2 hover:underline cursor-pointer">
            Use a sign-in code
          </p>
          <p className="text-center mb-2 hover:underline cursor-pointer">
            Forgot Password?
          </p>
          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
          </div>
          <p className="mt-4">
            New to Netflix?{" "}
            <span className="text-white font-semibold hover:underline cursor-pointer">
              Sign up now
            </span>
          </p>
          <p className="text-xs text-gray-400 mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="text-blue-500 hover:underline">Learn more.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;