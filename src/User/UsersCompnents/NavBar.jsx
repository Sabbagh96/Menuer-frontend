import UtilityOfNavBar from "./UtitltyOfNavBar";

export default function Navbar() {
  return (
    <nav className=" text-white p-4 flex justify-between items-center w-full">
      <UtilityOfNavBar
        classname="flex items-center justify-between w-full"
        profile={"https://placehold.co/30x30"}
      />
    </nav>
  );
}
