import { AsideBar } from "../../components/AsideBar";
import { Navbar } from "../../components/Nav/Navbar";
import { Initial } from "../../components/Initial";

export const HomePage = () => {
  return (
    <div
      aria-label="Home Page"
      className="flex flex-row justify-center items-start w-full"
    >
      <AsideBar />
      <div className="w-full">
        <Navbar />
        <Initial />
      </div>
    </div>
  );
};
