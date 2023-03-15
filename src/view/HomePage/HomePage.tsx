import { AsideBar } from "../../components/AsideBar";
import { Navbar } from "../../components/Nav/Navbar";
import { PageInitial } from "../../components/PageInitial";

export const HomePage = () => {
  return (
    <div className="flex flex-row justify-center items-start w-full">
      <AsideBar />
      <div className="w-full">
        <Navbar />
        <PageInitial />
      </div>
    </div>
  );
};
