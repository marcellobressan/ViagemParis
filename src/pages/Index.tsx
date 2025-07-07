import React from "react";
import { itineraryData, restaurantData, pointsOfInterestData } from "../constants.tsx";

const Index = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Planejamento da Viagem a Paris</h1>

      <section>
        <h2 className="text-2xl font-semibold mt-4">📅 Itinerário</h2>
        <ul className="list-disc pl-6">
          {itineraryData.map((day, index) => (
            <li key={index}>
              <strong>{day.date}</strong>: {day.activities.join(", ")}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-4">🍽️ Restaurantes</h2>
        <ul className="list-disc pl-6">
          {restaurantData.map((restaurant, index) => (
            <li key={index}>
              <strong>{restaurant.name}</strong>: {restaurant.description}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-4">📍 Pontos de Interesse</h2>
        <ul className="list-disc pl-6">
          {pointsOfInterestData.map((poi, index) => (
            <li key={index}>
              <strong>{poi.name}</strong>: {poi.description}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Index;
