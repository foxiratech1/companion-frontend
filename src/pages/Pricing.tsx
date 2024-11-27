import Header from "../component/ui/Header"
import P from "../component/ui/P"
import { useForm } from "react-hook-form";

const Pricing = () => {

    const location = [
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'canada', label: 'Canada' },
        { value: 'india', label: 'India' },
        { value: 'australia', label: 'Australia' }
    ];

    const currencies = [
        { value: 'usd', label: 'USD' },
        { value: 'gbp', label: 'GBP' },
        { value: 'eur', label: 'EUR' },
        { value: 'cad', label: 'CAD' },
        { value: 'inr', label: 'INR' },
        { value: 'aud', label: 'AUD' }
    ];

    const plans = ["STANDARD", "VISITING", "VIP", "VISITING VIP"];
    const prices = ["$125.00", "$125.00", "$125.00", "$125.00"];

    const features = [
        { feature: "Maecenas euismod neque velit faucibus, eu dictum.", values: ["✓", "✓", "✓", "✓"] },
        { feature: "Vivamus sollicitudin lorem in tellus fringilla consequat.", values: ["✓", "✓", "✓", "✓"] },
        { feature: "Etiam eget elit a est malesuada lobortis vitae non magna.", values: ["✓", "✓", "✓", "✓"] },
        { feature: "Proin id justo ac dui blandit sollicitudin.", values: ["✓", "✓", "✓", "✓"] },
        { feature: "Nunc vehicula dolor quis neque consequat.", values: ["-", "✓", "-", "✓"] },
        { feature: "Nunc eget ligula lobortis, rhoncus arcu eget, feugiat mi.", values: ["-", "✓", "✓", "✓"] },
        { feature: "Maecenas id leo lobortis, ultricies orci non, placerat risus.", values: ["-", "-", "✓", "✓"] },
        { feature: "Vestibulum ut dolor euismod nulla a, elementum nisl.", values: ["✓", "✓", "✓", "✓"] },
        { feature: "Aenean fermentum turpis id turpis venenatis efficitur.", values: ["-", "-", "-", "✓"] },
        { feature: "Proin auctor ex pretium pharetra iaculis.", values: ["Minimum 18 years", "Minimum 18 years", "Minimum 15 years", "Minimum 15 years"] },
        { feature: "Quisque ferment sit amet mauris auctor cursus augue.", values: ["Max $15,000/mo", "Max $22,000/mo", "Max $30,000/mo", "Max $70,000/mo"] },
        { feature: "Integer sit amet tellus eget lectus imperdiet sollicitudin.", values: ["", "", "✓", "✓"] },
        { feature: "Donec quis nisi non dolor molestie condimentum.", values: ["-", "-", "-", "✓"] },
        { feature: "Etiam ullamcorper sapien in lectus mollis, eget sodales.", values: [" ", " ", "✓", "✓"] },
        { feature: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", values: ["-", "-", "-", "✓"] },
        { feature: "Morbi pulvinar eros ac porttitor tempor.", values: [" ", " ", "✓", "✓"] },
        { feature: "Nam  at est efficitur, quis eleifend bibendum.", values: ["-", "-", "-", "✓"] },

    ];

    const { register } = useForm();

    return (
        <>
            <div className="bg-black">
                <div className="py-16 text-center container mx-auto">
                    <Header variant={{ size: "3xl", theme: "white", weight: "semiBold" }} className="font-cormorant mb-3">Advertising Pricing</Header>
                    <P variant={{ theme: "white", weight: "normal" }} className="lg:text-lg text-md mx-auto xl:w-[50%] lg:w-[60%] w-[80%]">Complete access to Companion Ads, our unique, self-service account-management and ad-customization portal included</P>
                </div>
            </div>

            <div className="sm:px-6 px-3 my-10">
                <Header variant={{ size: "2xl", theme: "white", weight: "semiBold" }} className="font-cormorant mb-2">Select Location</Header>
                <P variant={{ size: "small", theme: "white", weight: "normal" }}>Please select your market below for pricing options in your area. We offer a wide range of advertising options, customizable to your volume, brand and business model. By choosing the companion Guide for your adult advertising, you are exposing your business to the highest quality and best targeted adult traffic on the Internet. Thank you for choosing the companion Guide, where quality makes the difference.</P>
                <div className="flex sm:flex-row flex-col w-full xl:gap-10 md:gap-8 gap-3 my-6">
                    <div className="sm:w-1/2 w-full">
                        <label className="block text-white">Location</label>
                        <select
                            {...register("style", { required: "Style is required" })}
                            className="w-full p-2 border border-gray-300 bg-transparent rounded mt-1 text-white"
                        >
                            <option value="" className="bg-black">Select Location</option>
                            {location.map((style, index) => (
                                <option key={index} className="bg-black" >
                                    {style.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="sm:w-1/2 w-full">
                        <label className="block text-white">Currency</label>
                        <select
                            {...register("style", { required: "Style is required" })}
                            className="w-full p-2 border border-gray-300 bg-transparent rounded mt-1 text-white"
                        >
                            <option value="" className="bg-black">Select Currency</option>
                            {currencies.map((currencies, index) => (
                                <option key={index} className="bg-black">
                                    {currencies.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse text-white">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-400"></th>
                                {plans.map((plan, index) => (
                                    <th key={index} className="px-4 py-3 text-center text-sm font-medium ">
                                        <p className="font-cormorant">{plan}</p>
                                        <p className="text-text_red">{prices[index]}</p>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {features.map((row, rowIndex) => (
                                <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-black" : "bg-transparent"}>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-300">{row.feature}</td>
                                    {row.values.map((value, colIndex) => (
                                        <td key={colIndex} className="px-4 py-3 text-center text-sm">
                                            {value === "✓" ? (
                                                <span className="text-green-500">✓</span>
                                            ) : (
                                                <span className="text-gray-400">{value}</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Pricing


