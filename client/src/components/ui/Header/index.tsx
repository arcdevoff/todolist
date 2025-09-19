import useUser from "@/hooks/useUser";
import { UserIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileWindow from "./ProfileWindow";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();
  const [isUserWindowVisible, setIsUserWindowVisible] =
    useState<boolean>(false);

  return (
    <div className="mb-10 flex justify-between items-center relative">
      <Link to="/">
        <h1 className="text-3xl text-white font-bold">To-Do List</h1>
      </Link>

      <button
        onBlur={() => setIsUserWindowVisible(false)}
        onClick={() =>
          user?.id
            ? setIsUserWindowVisible(!isUserWindowVisible)
            : navigate("/auth/login")
        }
        className="cursor-pointer bg-stone-900 hover:bg-stone-700 p-2.5 transition-colors rounded-full"
      >
        <UserIcon className="size-6 text-white" />
      </button>

      {user?.id && (
        <ProfileWindow
          data={user}
          logout={logout}
          isUserWindowVisible={isUserWindowVisible}
        />
      )}
    </div>
  );
};

export default Header;
