export const SignupPage = () => {
  return (
    <div className="bg-bgPrimary min-h-screen text-center flex flex-col">
      {" "}
      <div className="font-primary text-headingPrimary text-[20px] w-[145px] mx-auto leading-[26.7px] pt-16 pb-6">
        Welcome to{" "}
        <span className="text-[36px] leading-[48.06px] font-normal text-headingSecondary">
          Khayalaat
        </span>
      </div>
      <p className="font-secondary font-normal text-[48px] text-headingSecondary">
        Create an Account
      </p>
      <p className="text-[#6C6B68] text-[15px] font-primary">
        Please enter the following details
      </p>
      <form className="font-primary text-headingPrimary mt-8 w-[297px] mx-auto">
        <div className="flex flex-col   mb-4">
          <label className=" text-start font-normal text-[18px] text-[#6C6B68] font-textAnother">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="rounded-[7px] bg-bgPrimary border-[1px] h-[45px] p-2 border-headingPrimary  "
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col   mb-4">
          <label className=" text-start font-normal text-[18px] text-[#6C6B68] font-textAnother">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded-[7px] bg-bgPrimary border-[1px] h-[45px] p-2 border-headingPrimary  "
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col  mb-4">
          <label className=" text-start font-normal text-[18px] text-[#6C6B68] font-textAnother">
            Password
          </label>
          <input
            type="Password"
            id="name"
            name="name"
            className="rounded-[7px] bg-bgPrimary border-[1px] h-[45px] p-2 border-headingPrimary"
            placeholder="Enter your name"
          />
        </div>

        <div className="text-end mb-4">
          {" "}
          <a href="/signup" className="underline text-[13px] font-primary ">
            I don't have an account :(
          </a>
        </div>

        <button className="bg-btnPrimary w-[297px] h-[40px] rounded-[9px] text-[#564D34] border-btnBorder self-center mb-4">
          Log In
        </button>
      </form>
    </div>
  );
};
``;
