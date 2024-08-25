import { useNavigate } from "react-router-dom";

export const WelcomePage = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    const isLoggedIn = false;
    if (isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-bgPrimary min-h-screen text-center flex flex-col">
      <div className="font-primary text-headingPrimary text-[20px] w-[145px] mx-auto leading-[26.7px] pt-16 flex-1">
        Welcome to{" "}
        <span className="text-[36px] leading-[48.06px] font-normal text-headingSecondary">
          Khayalaat
        </span>
      </div>
      <div className="mb-12">
        <p className="font-secondary font-normal text-[48px] text-headingSecondary mb-2">
          Poems By People
        </p>
        <p className="text-[16px] text-[#53514B] font-primary w-[47%] mx-auto">
          "Poetry is the clear expression of mixed feelings"
        </p>
        <p className="font-primary text-headingPrimary text-[16px]">
          -W.H. Auden
        </p>
      </div>
      <button
        onClick={handleExplore}
        className="bg-btnPrimary w-[297px] h-[67px] rounded-[9px] text-[#564D34] border-btnBorder self-center mb-16"
      >
        Explore Poems
      </button>
    </div>
  );
};
