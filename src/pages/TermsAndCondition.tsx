import Header from "../component/ui/Header";
import P from "../component/ui/P";

const TermsAndCondition = () => {
  const termsData = [
    {
      head: "YOUR AGREEMENT",
      para: "By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.",
      note: "PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.",
    },
    {
      head: "PRIVACY",
      para: "Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.",
    },
    {
      head: "LINKED SITES",
      para: "This Site may contain links to other independent third-party Web sites ('Linked Sites'). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.",
    },
  ];

  return (
    <>
      <div className="container mx-auto h-[80vh] my-10 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-[50%]">
          <div className="p-6 h-96 overflow-y-scroll">
            <h2 className="text-text_red text-3xl font-semibold mb-2">
              Terms and Conditions
            </h2>
            <Header
              variant={{ theme: "white", weight: "semiBold" }}
              className="text-xl mb-4 text-black"
            >
              Your Agreement
            </Header>
            <p className="text-[#6B6B6B] text-sm">
              Last Revised: December 16, 2013
            </p>
            <p className="text-[#6B6B6B] text-sm">
              Welcome to www.lorem-ipsum.info. This site is provided as a
              service to our visitors and may be used for informational purposes
              only. Because the Terms and Conditions contain legal obligations,
              please read them carefully.
            </p>
            {termsData.map((item, index) => (
              <div key={index}>
                <Header
                  variant={{ size: "md", theme: "white", weight: "normal" }}
                  className="text-[#6B6B6B] uppercase"
                >
                  {item.head}
                </Header>
                <P
                  variant={{ size: "small", theme: "white", weight: "normal" }}
                  className="text-[#6B6B6B]"
                >
                  {item.para}
                </P>
                <P
                  variant={{ size: "small", theme: "white", weight: "normal" }}
                  className="text-[#6B6B6B]"
                >
                  {item.note}
                </P>
              </div>
            ))}
          </div>
          <div className="flex justify-end space-x-10 py-3 px-8">
            <button className="text-text_red">Cancel</button>
            <button className="px-12 py-1.5 bg-bg_red text-white rounded">
              Agree
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;
