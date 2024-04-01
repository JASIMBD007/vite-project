import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function User() {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "John Doe",
      email: "john@mail.com",
    });
    console.log("Logging in...");
  };

  const handleLogout = () => {
    setUser(null);
    console.log("Logging out...");
  };

  return (
    <div>
      <h1>Welcome User!</h1>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      <div>User Name:{user?.name}</div>
      <div>User Email:{user?.email}</div>
    </div>
  );
}
