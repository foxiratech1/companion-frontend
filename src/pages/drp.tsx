// import React, { useState, useEffect } from 'react';
// import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
// import { Country, State, City } from 'country-state-city'; // Import the necessary functions

// const Drp = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [countries, setCountries] = useState([]);
//   const [locations, setLocations] = useState([]);
//   const [cities, setCities] = useState([]);

//   // Fetch the list of countries when the component is mounted
//   useEffect(() => {
//     const fetchedCountries = Country.getAllCountries(); // Get all countries
//     setCountries(fetchedCountries);
//   }, []);

//   // Fetch locations (states) when a country is selected
//   useEffect(() => {
//     if (selectedCountry) {
//       const fetchedLocations = State.getStatesOfCountry(selectedCountry);
//       setLocations(fetchedLocations);
//       setSelectedLocation(null); // Reset location and city
//       setSelectedCity(null);
//     }
//   }, [selectedCountry]);

//   // Fetch cities when a location is selected
//   useEffect(() => {
//     if (selectedLocation && selectedCountry) {
//       const fetchedCities = City.getCitiesOfState(selectedCountry, selectedLocation);
//       setCities(fetchedCities);
//       setSelectedCity(null); // Reset city when location changes
//     }
//   }, [selectedLocation, selectedCountry]);

//   // Toggle the dropdown
//   const toggleDropdown1 = () => setIsDropdownOpen(!isDropdownOpen);

//   // Handle country selection
//   const handleCountryChange = (countryIsoCode) => {
//     setSelectedCountry(countryIsoCode);
//   };

//   // Handle location (state) selection
//   const handleLocationChange = (stateIsoCode) => {
//     setSelectedLocation(stateIsoCode);
//   };

//   return (
//     <div>
//       <h2
//         className="text-2xl font-thin mb-4 font-cormorant text-text_red cursor-pointer inline-flex w-full justify-between"
//         style={{ borderBottom: '1.4px solid white' }}
//         onClick={toggleDropdown1}
//       >
//         {selectedCountry ? Country.getCountryByCode(selectedCountry)?.name : 'Select a Country'}
//         {isDropdownOpen ? (
//           <IoIosArrowUp className="text-text_red ml-3" />
//         ) : (
//           <IoIosArrowDown className="text-text_red ml-3" />
//         )}
//       </h2>

//       {isDropdownOpen && (
//         <div className="container mx-auto grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 col-2 gap-4">
//           {countries.map((country) => (
//             <div key={country.isoCode} className="mb-4">
//               <div
//                 className="flex items-center cursor-pointer text-white hover:text-gray-300"
//                 onClick={() => handleCountryChange(country.isoCode)}
//               >
//                 <span>{country.name}</span>
//               </div>

//               {country.isoCode === selectedCountry && locations.length > 0 && (
//                 <ul className="ml-8 mt-1 list-none list-disc text-gray-300">
//                   {locations.map((location) => (
//                     <li key={location.isoCode}>
//                       <div
//                         className="cursor-pointer"
//                         onClick={() => handleLocationChange(location.isoCode)}
//                       >
//                         {location.name}
//                       </div>
//                       {location.isoCode === selectedLocation && cities.length > 0 && (
//                         <ul className="ml-8 mt-1 list-none list-disc text-gray-300">
//                           {cities.map((city) => (
//                             <li
//                               key={city.name}
//                               className="cursor-pointer"
//                               onClick={() => setSelectedCity(city.name)}
//                             >
//                               {city.name}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Drp;



import  { useState, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { Country, State, City } from 'country-state-city'; // Import the necessary functions

const Drp = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [countries, setCountries] = useState<any[]>([]); // Country array
  const [locations, setLocations] = useState<any[]>([]); // State array
  const [cities, setCities] = useState<any[]>([]); // City array
console.log(selectedCity);

  // Fetch the list of countries when the component is mounted
  useEffect(() => {
    const fetchedCountries = Country.getAllCountries(); // Get all countries
    setCountries(fetchedCountries);
  }, []);

  // Fetch locations (states) when a country is selected
  useEffect(() => {
    if (selectedCountry) {
      const fetchedLocations = State.getStatesOfCountry(selectedCountry);
      setLocations(fetchedLocations);
      setSelectedLocation(null); // Reset location and city
      setSelectedCity(null); // Reset city
    }
  }, [selectedCountry]);

  // Fetch cities when a location is selected
  useEffect(() => {
    if (selectedLocation && selectedCountry) {
      const fetchedCities = City.getCitiesOfState(selectedCountry, selectedLocation);
      setCities(fetchedCities);
      setSelectedCity(null); // Reset city when location changes
    }
  }, [selectedLocation, selectedCountry]);

  // Toggle the dropdown
  const toggleDropdown1 = () => setIsDropdownOpen(!isDropdownOpen);

  // Handle country selection
  const handleCountryChange = (countryIsoCode: string) => {
    setSelectedCountry(countryIsoCode);
  };

  // Handle location (state) selection
  const handleLocationChange = (stateIsoCode: string) => {
    setSelectedLocation(stateIsoCode);
  };

  // Handle city selection
  const handleCityChange = (cityName: string) => {
    setSelectedCity(cityName);
  };

  return (
    <div>
      <h2
        className="text-2xl font-thin mb-4 font-cormorant text-text_red cursor-pointer inline-flex w-full justify-between"
        style={{ borderBottom: '1.4px solid white' }}
        onClick={toggleDropdown1}
      >
        {selectedCountry ? Country.getCountryByCode(selectedCountry)?.name : 'Select a Country'}
        {isDropdownOpen ? (
          <IoIosArrowUp className="text-text_red ml-3" />
        ) : (
          <IoIosArrowDown className="text-text_red ml-3" />
        )}
      </h2>

      {isDropdownOpen && (
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 col-2 gap-4">
          {countries.map((country) => (
            <div key={country.isoCode} className="mb-4">
              <div
                className="flex items-center cursor-pointer text-white hover:text-gray-300"
                onClick={() => handleCountryChange(country.isoCode)}
              >
                <span>{country.name}</span>
              </div>

              {country.isoCode === selectedCountry && locations.length > 0 && (
                <ul className="ml-8 mt-1 list-none list-disc text-gray-300">
                  {locations.map((location) => (
                    <li key={location.isoCode}>
                      <div
                        className="cursor-pointer"
                        onClick={() => handleLocationChange(location.isoCode)}
                      >
                        {location.name}
                      </div>
                      {location.isoCode === selectedLocation && cities.length > 0 && (
                        <ul className="ml-8 mt-1 list-none list-disc text-gray-300">
                          {cities.map((city) => (
                            <li
                              key={city.name}
                              className="cursor-pointer"
                              onClick={() => handleCityChange(city.name)}
                            >
                              {city.name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Drp;
