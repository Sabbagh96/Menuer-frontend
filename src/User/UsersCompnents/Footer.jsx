import UtilityOfNavBar from "./UtitltyOfNavBar";

export default function Footer() {
  return (
    <div className="Footer flex flex-col gap-5 items-center p-5">
      <UtilityOfNavBar
        classname={"flex flex-col gap-5"}
        flexclass={"gap-7"}
        center={"justify-center"}
      />
      <span>
        All Copyrights reserved © Helwan University Computer Science Graduation
        Project
      </span>
    </div>
  );
}
