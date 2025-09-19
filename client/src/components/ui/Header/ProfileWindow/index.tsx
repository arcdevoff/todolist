import { motion, AnimatePresence } from "framer-motion";
import type { CurrentUser } from "@/@types/user";
import type React from "react";

type ProfileWindowProps = {
  data: CurrentUser;
  isUserWindowVisible: boolean;
  logout: () => void;
};

const ProfileWindow: React.FC<ProfileWindowProps> = ({
  data,
  isUserWindowVisible,
  logout,
}) => {
  return (
    <AnimatePresence>
      {isUserWindowVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute text-[16.5px] font-semibold flex flex-col right-0 top-12 rounded-xl shadow-xl p-3 z-50 bg-stone-900"
        >
          <span>👤 {data?.username}</span>
          <span>📬 {data?.email}</span>
          <span>
            🗓{" "}
            {data?.createdAt
              ? new Date(data?.createdAt).toLocaleDateString()
              : ""}
          </span>

          <button
            onClick={logout}
            className="cursor-pointer text-[16.2px] p-[5px] mt-4 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
          >
            🚪 Log Out
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileWindow;
