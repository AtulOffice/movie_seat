import React from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { Datepicker } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";

const TheaterShowtimes = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const theaters = [
    {
      name: "Cinepolis: Orion East Mall, Banaswadi",
      showtimes: [{ time: "06:55 PM" }, { time: "10:00 PM" }],
      features: ["M-Ticket", "Food & Beverage"],
      status: "Non-cancellable",
    },
    {
      name: "Mukunda 4K Dolby Atmos: M.S.Nagar",
      showtimes: [
        { time: "02:15 PM", label: "" },
        { time: "05:30 PM", label: "" },
      ],
      features: ["M-Ticket"],
      status: "Cancellation Available",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-4 p-4 ">
      <div>
        <h2 className="text-3xl font-semibold px-3 border border-gray-200 rounded-lg">
          Movies{" "}
        </h2>
        <div className="flex gap-3 m-3 " onClick={() => navigate("/all-movie")}>
          {" "}
          <Button className="text-black border border-red-400">Action</Button>
          <Button className="text-black border border-red-400">Drama</Button>
          <Button className="text-black border border-red-400">
            {" "}
            Thriller
          </Button>
        </div>
        <div className="border border-gray-200"></div>
        <div className="mt-4">
          <Datepicker
            minDate={new Date(2023, 0, 1)}
            maxDate={new Date(2023, 3, 30)}
          />
        </div>
      </div>
      {theaters.map((theater, index) => (
        <Card key={index} className="overflow-hidden" onClick={() => navigate}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold">{theater.name}</h3>
            </div>
          </div>
          <div className="flex space-x-2 mb-4">
            {theater.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center text-xs text-green-600"
              >
                {feature === "M-Ticket" ? "🎟️" : "🍿"}
                <span className="ml-1">{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex space-x-4 mb-2">
            {theater.showtimes.map((showtime, idx) => (
              <div
                key={idx}
                className="text-center"
                onClick={() => navigate(`/Site-layout/${id}`)}
              >
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm">
                  {showtime.time}
                </button>
                {showtime.label && (
                  <div className="text-xs text-gray-500 mt-1">
                    {showtime.label}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-xs">
            <span
              className={`${
                theater.status === "Non-cancellable"
                  ? "text-orange-500"
                  : "text-green-500"
              }`}
            >
              ● {theater.status}
            </span>
          </div>
        </Card>
      ))}
      <div className="flex justify-end space-x-4 text-xs">
        <span className="flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>{" "}
          AVAILABLE
        </span>
        <span className="flex items-center">
          <span className="w-2 h-2 bg-orange-500 rounded-full mr-1"></span> FAST
          FILLING
        </span>
        <span className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>{" "}
          SUBTITLES LANGUAGE
        </span>
      </div>
    </div>
  );
};

export default TheaterShowtimes;
