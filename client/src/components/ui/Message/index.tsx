import React from "react";
import { setMessage } from "@/redux/reducers/ui/slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion } from "framer-motion";

const Message = () => {
  const msg = useAppSelector((state) => state.ui.message);
  const dispatch = useAppDispatch();

  const onCloseMessage = React.useCallback(() => {
    dispatch(setMessage({ text: null, status: null }));
  }, [dispatch]);

  React.useEffect(() => {
    console.log(msg);
    const timer = setTimeout(() => {
      onCloseMessage();
    }, 3000);
    return () => clearTimeout(timer);
  }, [msg?.text, onCloseMessage]);

  if (!msg?.text) {
    return "";
  } else {
    return (
      <AnimatePresence>
        <motion.div
          onClick={onCloseMessage}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-5 left-5 right-5 sm:right-5 sm:left-auto flex items-center gap-2 cursor-pointer px-6 py-3 rounded-lg shadow-lg text-white ${
            msg.status ? "bg-green-600" : "bg-red-500"
          }`}
        >
          {msg.status ? (
            <CheckCircleIcon className="w-5 h-5" />
          ) : (
            <XCircleIcon className="w-5 h-5" />
          )}
          {msg.text}
        </motion.div>
      </AnimatePresence>
    );
  }
};

export default Message;
