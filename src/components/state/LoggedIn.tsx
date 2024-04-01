import { useState } from "react";

export default function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("Logging in...");
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("Logging out...");
  };
  return (
    <div>
      <h1>Welcome User!</h1>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      <div>User is {isLoggedIn} ? 'logged in' : 'logged out'</div>
    </div>
  );
}
