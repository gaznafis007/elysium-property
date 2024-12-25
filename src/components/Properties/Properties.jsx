"use client";
import { fetchData } from "@/utils/fetchData";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const getProperties = async () => {
      try {
        const propertiesData = await fetchData(
          "http://localhost:3000/api/properties"
        );
        localStorage.setItem("properties", JSON.stringify(propertiesData));
        setProperties(propertiesData);
      } catch (error) {
        console.log("error occurred");
      }
    };
    const storedProperties = localStorage.getItem("properties");
    if (storedProperties) {
      setProperties(JSON.parse(storedProperties));
    } else {
      getProperties();
    }
  }, []);
  return (
    <section className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-between">
      <div className="w-full md:w-1/2">
        <h2 className="text-lg font-semibold text-purple-800">
          Add new Properties
        </h2>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-lg font-semibold text-purple-800">
          All Properties
        </h2>
        <div className="border border-purple-800 p-2 rounded-md overflow-auto">
          <div className="grid grid-cols-1 gap-3">
            {properties.map((property) => (
              <div
                key={property?.id}
                className="flex flex-row justify-between items-center"
              >
                <div className="flex flex-row space-x-6">
                  <img
                    alt="property-image"
                    // width={40}
                    // height={40}
                    className="rounded-md w-32 h-32"
                    src={property?.img}
                  />
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {property?.name}
                    </h3>
                    <p className="mt-1 text-slate-700">
                      Location: {property?.location}, Area: {property?.sizeInSqFt} sq Ft
                    </p>
                    <button
                      className={`mt-2 rounded-full text-sm text-white px-2 py-1 ${
                        property?.status == "available"
                          ? "bg-green-400"
                          : "bg-rose-400"
                      }`}
                    >
                      {property?.status}
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-purple-600">${property?.rentalPrice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
