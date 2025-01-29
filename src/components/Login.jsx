import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

const Login = () => {
    const naviate = useNavigate();
   
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    
    

    const handleSubmit = async(event) => {
        event.preventDefault();
        setLoading(true);
        setError(null)

        // Handle form submission
        try {
            const response = await fetch(`${process.env.URL}/api/user/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: event.target.email.value,
                    password: event.target.password.value
                })
            })
            const data = await response.json();
            if(!response.ok){
                setError(data.message || 'Login failed');
                return;
            }
            alert('login succesfull')
            naviate('/')
            setError(null);
        } catch (error) {
            setLoading(false);
        }
    }
  

  const handleSignupRedirect = () => {
    navigate("/signup"); // Redirect to the signup page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 text-black">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
           
            <Link  onClick={handleSignupRedirect}
              className="text-gray-800 hover:text-gray-700 font-semibold" to='/Signup'>
            Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;