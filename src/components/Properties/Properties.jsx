"use client";
import { fetchData } from "@/utils/fetchData";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  useEffect(() => {
    const getProperties = async () => {
      try {
        const propertiesData = await fetchData(
          "/api/properties"
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
  const filterProperty = async (option) =>{
    const storedProperties = JSON.parse(localStorage.getItem('properties'))
    const filteredProperties = storedProperties.filter(property => property.status == option);
    setProperties(filteredProperties);
  }
  const handleAddProperties = (data) => {
    const newProperty = {
      id: `prop${properties.length + 1}`,
      ...data,
    };
    const allProperties = JSON.parse(localStorage.getItem("properties"));
    const newAllProperties = [newProperty, ...allProperties];
    setProperties(newAllProperties);
    const storeAllProperties = JSON.stringify(newAllProperties);
    localStorage.removeItem("properties");
    localStorage.setItem("properties", storeAllProperties);
    // console.log(JSON.parse(localStorage.getItem("properties")));
    reset();
  };
  return (
    <section className="mt-6">
        <div className="flex flex-col md:flex-row justify-between">
            <h2 className="text-3xl font-semibold text-purple-800">Filter your properties</h2>
            <div className="flex flex-row space-x-4">
                <button onClick={() => filterProperty('available')} className="border border-purple-800 hover:border-0 text-purple-800 hover:text-white font-semibold hover:bg-purple-800 px-4 py-3 rounded-md">Available</button>
                <button onClick={() => filterProperty('rented')} className="border border-purple-800 hover:border-0 text-purple-800 hover:text-white font-semibold hover:bg-purple-800 px-4 py-3 rounded-md">Rented</button>
            </div>
        </div>
      <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-semibold text-purple-800">
            Add new Properties
          </h2>
          <form
            onSubmit={handleSubmit(handleAddProperties)}
            className="border border-slate-800 p-2 rounded-md overflow-auto mt-4"
          >
            <div className="flex flex-col space-y-2 mt-2">
              <label className="text-xl font-semibold text-slate-800">
                Property Name
              </label>
              <input
                {...register("name")}
                type="text"
                className="border mt-2 rounded-md w-full border-slate-800 px-2 py-1"
              />
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="text-xl font-semibold text-slate-800">
                Property location
              </label>
              <input
                {...register("location")}
                type="text"
                className="border mt-2 rounded-md w-full border-slate-800 px-2 py-1"
              />
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="text-xl font-semibold text-slate-800">
                Property's Image
              </label>
              <input
                {...register("img")}
                type="text"
                className="border mt-2 rounded-md w-full border-slate-800 px-2 py-1"
              />
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="text-xl font-semibold text-slate-800">
                Rental Price
              </label>
              <input
                {...register("rentalPrice")}
                type="text"
                className="border mt-2 rounded-md w-full border-slate-800 px-2 py-1"
              />
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="text-xl font-semibold text-slate-800">
                Area (in Sq Ft)
              </label>
              <input
                {...register("sizeInSqFt")}
                type="text"
                className="border mt-2 rounded-md w-full border-slate-800 px-2 py-1"
              />
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="text-xl font-semibold text-slate-800">
                Description
              </label>
              <textarea
                {...register("description")}
                type="text"
                className="border mt-2 rounded-md w-full border-slate-800 p-2"
              ></textarea>
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="text-xl font-semibold text-slate-800">
                Property Name
              </label>
              <select
                {...register("status")}
                className="border mt-2 rounded-md w-full border-slate-800 px-2 p-1"
              >
                <option value="available">Available</option>
                <option value="rented">Rented</option>
              </select>
            </div>
            <input
              type="submit"
              value="Add Properties"
              className="bg-purple-800 mt-6 font-semibold text-white px-4 py-2 block w-full mx-auto rounded-md"
            />
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-semibold text-purple-800">
            All Properties : {properties.length}
          </h2>
          <div className="border border-purple-800 p-2 rounded-md overflow-auto mt-4">
          {
            properties?.length > 0 ?
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
                        Location: {property?.location}, Area:{" "}
                        {property?.sizeInSqFt} sq Ft
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
            </div> : <h2 className="text-center font-semibold text-slate-800">No properties yet please add</h2>
          }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
