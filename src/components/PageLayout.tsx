import { ReactNode } from "react";
import Navbar from "./Navbar";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default PageLayout;