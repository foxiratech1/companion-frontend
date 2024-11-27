import P from "../ui/P";
import aldrea from "./assets/aldrea.png";
import search from "./assets/ic-eva_search-fill.png";
import btn from "./assets/btn.png";
import country from "./assets/ic-en.png";
import bell from "./assets/ic-bell.png";
import user from "./assets/user.png";
import stack from "./assets/stack.png";

const Dashboardnavbar = () => {
 
  return (
    <div className="flex justify-between items-center bg-black py-3 px-6">
      <div className="flex items-center gap-2">
        <img src={aldrea} alt="header icon" />
        <P variant={{ size: "base", theme: "white", weight: "semiBold" }}>
          Aldrea Watson
        </P>
      </div>
      <div className="flex items-center gap-5">
        <div className="bg-gray-900 rounded-lg  flex gap-2 items-center p-1">
          <img src={search} alt="search" className="cursor-pointer" />
          <img src={btn} alt="search" className="cursor-pointer" />
        </div>
        <img src={country} alt="country" className="cursor-pointer" />
        <img src={bell} alt="bell" className="cursor-pointer" />
        <img src={user} alt="bell" className="cursor-pointer" />
        <img src={stack} alt="bell" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Dashboardnavbar;
