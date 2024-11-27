import service from "../component/Dashboard/assets/my service.png";
import stories from "../component/Dashboard/assets/stories.png";
import ads from "../component/Dashboard/assets/create ad.png";
import price from "../component/Dashboard/assets/pricing.png";
import documents from "../component/Dashboard/assets/document.png";
import account from "../component/Dashboard/assets/setting.png";
import contact from "../component/Dashboard/assets/support.png";

export const sidebar = [
  {
    key: "myservice",
    label: "My Service",
    icon: service,
    path: "my-service",
  },
  {
    key: "stories",
    label: "Stories",
    icon: stories,
    path: "stories",
  },
  {
    key: "create ads",
    label: "Create Ads",
    icon: ads,
    path: "create-ads",
  },
  {
    key: "pricing",
    label: "Pricing",
    icon: price,
    path: "priceandplan",
  },
  {
    key: "documents",
    label: "Documents",
    icon: documents,
    path: "document",
  },
  {
    key: "account",
    label: "Account & Settings",
    icon: account,
    path: "account-setting",
  },
  {
    key: "contact",
    label: "Contact & Support",
    icon: contact,
    path: "contact",
  },
];
