import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState();

  const handleCitySearch = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
    setCity("");
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      toast.info("Fetching user location...");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({ lat, lon });
      });
    }
  };

  const handleUnit = (e) => {
    const selectedUnit = e.target.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          placeholder="search for city..."
          className="text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
        />
        <UilSearch
          size={25}
          onClick={handleCitySearch}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          onClick={handleLocation}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          onClick={handleUnit}
          className="text-xl text-white font-light hover:scale-125"
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          onClick={handleUnit}
          className="text-xl text-white font-light hover:scale-125"
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
