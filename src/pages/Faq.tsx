import Header from "../component/ui/Header";
import P from "../component/ui/P";
import faq from "../jsons/faq.json";

const Faq = () => {
  return (
    <>
      <div className="bg-black">
        <div className="py-16 text-center container mx-auto">
          <Header
            variant={{ size: "3xl", theme: "white", weight: "semiBold" }}
            className="font-cormorant mb-3"
          >
            Faq
          </Header>
          <P
            variant={{ theme: "white", weight: "light" }}
            className="lg:text-lg text-md mx-auto xl:w-[50%] lg:w-[60%] w-[80%]"
          >
            Complete access to Companion Ads, our unique, self-service
            account-management and ad-customization portal included
          </P>
        </div>
      </div>

      <div className="container mx-auto sm:px-6 px-3">
        <ul className=" text-white">
          {faq.map((item, index) => (
            <li key={index} className="my-10">
              <Header
                variant={{ size: "xl", theme: "white", weight: "semiBold" }}
              >
                {item.que}
              </Header>
              <P
                variant={{ size: "md", theme: "white", weight: "normal" }}
                className="text-[#B6B6B6]"
              >
                {item.ans}
              </P>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Faq;
