export default function UtilityOfNavBar({
  classname,
  flexclass,
  center,
  profile,
}) {
  return (
    <div className={classname}>
      <LogoSection center={center} />
      <NavLinks flexclass={flexclass} profile={profile} />
    </div>
  );
}

const flexCenter = "flex items-center";
const textColorPink = "text-pink-500";
const LogoSection = ({ center }) => {
  return (
    <div className={`${flexCenter} ${center}`}>
      <img src="https://placehold.co/30x30" alt="logo" className="mr-2" />
      <span className={`${textColorPink} font-bold`}>MENUER</span>
    </div>
  );
};
const NavLinks = ({ flexclass, profile }) => {
  return (
    <div className={`${flexCenter} ${flexclass} space-x-4`}>
      <a href="#" className={textColorPink}>
        Home
      </a>
      <a href="#" className="text-zinc-400">
        Businesses
      </a>
      <a href="#" className="text-zinc-400">
        Items
      </a>
      {profile ? (
        <img src={profile} alt="profile" className="rounded-full" />
      ) : (
        ""
      )}
    </div>
  );
};
