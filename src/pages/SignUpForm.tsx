// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

interface SignUpFormProps {
    name : string; 
    setName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  }
  
  const SignUpForm: React.FC<SignUpFormProps> = ({
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,

    }) => {
      return (
        <>
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white">
                        Name
                        </label>
                          <input
                          type="name"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-2 mt-1 border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white">
                        Email
                        </label>
                          <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2 mt-1 border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                    </div>
                    <div>
                        <label
                        htmlFor="password"
                        className="block text-sm font-medium text-white"
                        >
                        Password
                        </label>
                        <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 mt-1 border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
                        SignUp
                    </button>
              </form>
        </>
      );
    };


    export default SignUpForm
