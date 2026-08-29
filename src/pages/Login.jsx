import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx"
import { logInApi } from '../API/Api.js'
import { useNavigate } from "react-router-dom";
import pics from "../utils/photo.js";

const Login = () => {
  const [currentForm, setCurrentForm] = useState(true);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [pName, setPName] = useState('')
  const [accountType, setAccountType] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [location, setLocation] = useState('')

  const {setUser} = useContext(AuthContext)

  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const data = await logInApi(email, password);

    setUser(data.user)

    console.log("Login response:", data);
    navigate('/farmer/dashboard')
  } catch (error) {
    console.error(error);
  }
  };

 const handleAccountRegistration = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/user/api/auth/register', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: pName,
        email: email,
        password: password,
        role: accountType,
        phone: phoneNumber,
        location: location
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    console.log('Registration successful:', data);

  } catch (error) {
    console.error('Registration error:', error.message);
  }
};
  
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] grid grid-cols-1 p-3 md:grid-cols-2 bg-gray-100">

      <div className="grid place-items-center p-6 h-full w-full">

        {currentForm ? (
          <form onSubmit={handleLogin} className="w-full max-w-md">
            <div className="flex flex-col gap-4 p-6 rounded-md shadow-md bg-white">

              <div className="text-center mb-2">
                <h1 className="text-2xl font-bold text-gray-700">
                  Welcome Back
                </h1>

                <p className="text-gray-500 text-sm mt-1">
                  Login to your Agric Connect account
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-medium">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-end">
                <p className="text-sm text-blue-600 cursor-pointer hover:underline">
                  Forgot password?
                </p>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"

              >
                Login
              </button>

              <div className="text-center text-sm">
                <span className="text-gray-500">
                  Don't have an account?{" "}
                </span>

                <button
                  type="button"
                  onClick={() => setCurrentForm(false)}
                  className="text-blue-600 cursor-pointer hover:underline font-medium"
                >
                  Create an account
                </button>
              </div>

            </div>
          </form>

        ) : (
          <form onSubmit={handleAccountRegistration} className="w-full max-w-md">
            <div className="flex flex-col gap-4 p-6 rounded-md shadow-md bg-white">

              <div className="text-center mb-2">
                <h1 className="text-2xl font-bold text-gray-700">
                  Create Account
                </h1>

                <p className="text-gray-500 text-sm mt-1">
                  Join the Agric Connect community
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-medium">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="e.g. Emma"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    value={pName}
                    onChange={(e)=> setPName(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-medium">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
              </div>

                <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-medium">
                  Location
                </label>

                <input
                  type="text"
                  placeholder="set location"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    value={location}
                    onChange={(e)=> setLocation(e.target.value)}
                />
                </div>
                
                <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-medium">
                  Phone-Number
                </label>

                <input
                  type="text"
                  placeholder="enter phone-number"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    value={phoneNumber}
                    onChange={(e)=> setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-medium">
                  Account Type
                </label>

                <select
                    className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    value={accountType}
                    onChange={(e)=> setAccountType(e.target.value)}
                >
                  <option value="">Select account type</option>
                  <option value="farmer">Farmer</option>
                  <option value="buyer">Buyer</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Create Account
              </button>

              <div className="text-center text-sm">
                <span className="text-gray-500">
                  Already have an account?{" "}
                </span>

                <button
                  type="button"
                  onClick={() => setCurrentForm(true)}
                  className="text-blue-600 cursor-pointer hover:underline font-medium"
                >
                  Login
                </button>
              </div>

            </div>
          </form>
        )}
      </div>

      <div className="hidden md:grid place-items-center bg-cover bg-center text-white p-10" style={{backgroundImage: `url(${pics[13]})`}}>

        <div className="max-w-md text-center bg-white/10 backdrop-blur-2xl border-white/10 p-6">
          <h2 className="text-4xl font-bold mb-4">
            Welcome to Agric Connect
          </h2>

          <p className="text-lg text-green-100 leading-relaxed">
            Connect with farmers, buyers, and agricultural experts.
            Discover agricultural products, access useful farming
            knowledge, and grow your opportunities through one
            connected agricultural platform.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Login;