import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import MyService from "./DashboardMenu/MyService";
import Stories from "./DashboardMenu/Stories";
// import CreateAd from "./DashboardMenu/CreateAd";
import AccountSetting from "./DashboardMenu/AccountSetting";
import Contact from "./DashboardMenu/Contact";
import PriceAndPlan from "./DashboardMenu/PriceAndPlan";
import UploadDoc from "./DashboardMenu/UploadDoc";
// import Step2 from "./DashboardMenu/CreatedAdStep/Step2";
import { useEffect } from "react";
import CreateAds from "./DashboardMenu/CreatedAdStep/Step1";

const Dashboard = () => {
   useEffect(()=>{
    localStorage.removeItem('token')
  })
  return (
    <div className=" flex w-full">
      <Sidebar />
      <div className="flex-1 sm:px-10 p-3 bg-[#101010]">
        <Routes>
          <Route index element={<MyService />} />
          <Route path="my-service" element={<MyService />} />
          <Route path="stories" element={<Stories />} />
          <Route path="create-ads" element={<CreateAds />} />
          <Route path="account-setting" element={<AccountSetting />} />
          <Route path="contact" element={<Contact />} />
          <Route path="document" element={<UploadDoc />} />
          <Route path="priceandplan" element={<PriceAndPlan />} />
          {/* <Route path="dashboard/createAd/step" element={<Step2 />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
