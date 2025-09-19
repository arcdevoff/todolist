import Header from "@/components/ui/Header";
import Message from "@/components/ui/Message";
import type React from "react";
import type { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-3xl text-white mt-5 mx-auto px-4">
      <Header />
      <Message />

      {children}
    </div>
  );
};

export default RootLayout;
