import adult from "../../assets/images/adult.png";
import Button from "../ui/Button";
import Header from "../ui/Header";
import P from "../ui/P";

const Adult = () => {
  return (
    <div className="flex items-center w-[65%] mx-auto bg-black p-6 gap-10 my-10">
      <img src={adult} alt="adult image" />
      <div>
        <Header
          variant={{ size: "4xl", theme: "red", weight: "semiBold" }}
          className="font-garamond mb-8"
        >
          Adults only !
        </Header>

        <P
          variant={{ size: "base", theme: "white", weight: "normal" }}
          className="mb-4"
        >
          This website should be accessed only by people who are at least
          eighteen (18) years of age and the age of majority in their
          jurisdiction. By accessing this website, you represent to us that you
          are not a minor. By accessing any portion of this website beyond this
          pop-up display, you agree to our{" "}
          <span className="text-text_red">Terms & Conditions.</span> Any
          unauthorized use of this website may violate applicable law.
        </P>

        <P
          variant={{ size: "base", theme: "white", weight: "normal" }}
          className="mb-4"
        >
          While Companion does not create, produce or edit any content listed on
          the advertisements, all the posted advertisements must company with
          our age and content standards.
        </P>

        <P
          variant={{ size: "base", theme: "white", weight: "normal" }}
          className="mb-4"
        >
          Eros has a zero-tolerance policy toward human trafficking,
          prostitution, and any other illegal conduct. We cooperate with law
          enforcement, pursuant to appropriate process, such as a subpoena, in
          investigating criminal activity. Activity that violates our
          zero-tolerance policy may result in a referral to law enforcement. I
          have no intention to, and will not, use this site in violation of
          Eros’s policies or any federal, state, or local law, and I agree to {" "}
          <span className="text-text_red">report violations </span>to the
          appropriate authorities.
        </P>

        <P variant={{ size: "base", theme: "white", weight: "normal" }}>
          I also agree to {" "}
          <span className="text-text_red">
            report suspected exploitation of minors and/or human trafficking to
            the appropriate authorities.
          </span>
          For Germany: In order to contact the YPA, please click on this link or
          on the Report Abuse link at the bottom of the page. This site uses
          cookies. By continuing to browse the site you are agreeing to our use
          of cookies.
        </P>

        <div className="flex gap-4 items-center mb-6 mt-2">
          <input type="checkbox" id="terms" name="terms" />
          <P
            variant={{
              size: "base",
              theme: "white",
              weight: "light",
            }}
            className="rounded-lg"
          >
            I have read and accept the
            <span className="text-white ml-2 border-b border-white">
              terms and conditions.
            </span>
            listed here and in the Terms & Conditions of Use.
          </P>
        </div>

        <div className="flex justify-between gap-4 items-center mb-6 mt-2">
          <Button variant={{ fontSize: "base", theme: "dark" }}>
            Visit Website
          </Button>

          <Button variant={{ fontSize: "base" }} className="border-none">
            Exit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Adult;
