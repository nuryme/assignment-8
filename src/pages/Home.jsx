import React from "react";
import Banner from "../components/Banner";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import Cards from "../components/Cards";

export default function Home() {
  const categories = useLoaderData();
//   console.log(categories);
  return (
    <div className=" mx-8">
      <Banner></Banner>
      <div className="mt-44 lg:mt-[600px]">
        <h1 className="text-[40px] text-center mb-12 font-bold text-secondaryColor">
          Explore Cutting-Edge Gadgets
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="h-full border border-secondaryColor/10 rounded-2xl p-6 flex flex-col gap-6 lg:w-[25%]">
            {categories.map((category) => (
              <Categories key={category.id} category={category}></Categories>
            ))}
          </div>
          <div className="w-full">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}
