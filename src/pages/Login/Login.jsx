import React from "react";
import Banner from "./Banner";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <section className="p-2 md:p-5 bg-gradient-to-r relative from-[#072971] w-screen  md:h-screen to-[#0E4FDA] flex flex-col md:flex-row justify-between gap-5 md:gap-8">
      <div className="w-12 h-12 md:w-32 md:h-32 bg-black absolute md:fixed top-48 md:top-1/2   left-0 rounded-full"></div>
      <div className="w-10 top-36 left-32 h-10 lg:w-24 lg:h-24 bg-gradient-to-r from-[#2E68E6] to-[#133F9F] rounded-full absolute md:top-72 md:left-52"></div>
      {/* left */}
      <Banner />
      {/* right */}
      <LoginForm />
    </section>
  );
};

export default Login;
