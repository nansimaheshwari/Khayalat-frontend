import { useNavigate } from "react-router-dom";

export  const WelcomePage=()=> {
    const navigate = useNavigate();

    const handleExplore = () => {
      const isLoggedIn = false;
      if (isLoggedIn) {
        navigate('/home');
      } else {
        navigate('/login');
      }
    };
  
    return (
      <div>
        <h1>Welcome to My Poetry App</h1>
        <button onClick={handleExplore}>Explore Poems</button>
      </div>
    );
  };

  