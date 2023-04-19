import { SideBar } from "../../components/SideBar";
import { Navbar } from "../../components/Nav/Navbar";
import { Initial } from "../../components/Initial";

export const HomePage = () => {
  return (
    <div
      aria-label="Home Page"
      className="flex flex-row justify-center items-start w-full"
    >
      <SideBar />
      <div className="w-full">
        <Navbar />
        <Initial />
      </div>
    </div>
  );
};
