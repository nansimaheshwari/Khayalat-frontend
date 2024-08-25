import { useLocation } from "react-router-dom";
import { FORM_CONSTANTS } from "../utils/Constants";
import { useState } from "react";

const AuthForm = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const { heading, subheading, buttonText, linkText, linkPath } = isLogin
    ? FORM_CONSTANTS.login
    : FORM_CONSTANTS.signup;

  // State for form fields
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isLogin ? console.log(formData, "login") : console.log(formData, "Signup");
  };

  return (
    <div className="bg-bgPrimary min-h-screen text-center flex flex-col pt-12">
      <div className="font-primary text-headingPrimary text-[20px] w-[145px] mx-auto leading-[26.7px] pt-16">
        {!isLogin && "Welcome to"}
        <p className="text-[36px] leading-[48.06px] font-normal text-headingSecondary">
          Khayalaat
        </p>
      </div>
      <p className="font-secondary font-normal text-[48px] text-headingSecondary pt-10">
        {heading}
      </p>
      <p className="text-[#6C6B68] text-[15px] font-primary">{subheading}</p>
      <form
        className="font-primary text-headingPrimary mt-8 w-[297px] mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col mb-4">
          <label className="text-start font-normal text-[18px] text-[#6C6B68] font-textAnother">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="rounded-[7px] bg-bgPrimary border-[1px] h-[45px] p-2 border-headingPrimary text-[#6C6B68]"
            placeholder="Enter your username"
          />
        </div>

        {!isLogin && (
          <div className="flex flex-col mb-4">
            <label className="text-start font-normal text-[18px] text-[#6C6B68] font-textAnother">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-[7px] bg-bgPrimary border-[1px] h-[45px] p-2 border-headingPrimary text-[#6C6B68]"
              placeholder="Enter your name"
            />
          </div>
        )}

        <div className="flex flex-col mb-4">
          <label className="text-start font-normal text-[18px] text-[#6C6B68] font-textAnother">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            autoComplete="current-password"
            onChange={handleChange}
            className="rounded-[7px] bg-bgPrimary border-[1px] h-[45px] p-2 border-headingPrimary text-[#6C6B68]"
            placeholder="Enter your password"
          />
        </div>

        <div className="text-end mb-4">
          <a href={linkPath} className="underline text-[13px] font-primary">
            {linkText}
          </a>
        </div>

        <button
          type="submit"
          className="bg-btnPrimary w-[297px] h-[40px] rounded-[9px] text-[#564D34] border-btnBorder self-center my-4"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
