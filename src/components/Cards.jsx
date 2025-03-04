import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

export default function Cards() {
  const data = useLoaderData();
  // console.log(data, 'hello')

  const { category } = useParams();
  //   console.log(category)

  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (filteredData) => filteredData.category === category
      );
      setCardData(filteredByCategory);
      // console.log(filteredByCategory);
    } else {
      setCardData(data);
    }
  }, [data, setCardData]);

//   console.log(cardData.length);
  //   console.log(data);
  return (
    <div className=" h-full  mb-6 lg:mb-0">
      {cardData.length === 0 ? (
        <div className="flex items-center justify-center h-full">
            <h1 className="h1 text-center text-red-500">Data not found</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card) => (
            <Card key={card.product_id} card={card}></Card>
          ))}
        </div>
      )}
    </div>
  );
}
