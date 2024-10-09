import React, { useState } from "react";

const SeatSelection = ({
  seatCount,
  bookedSeats,
  onSeatSelect,
  setMySeats,
  mySeats,
}) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // To store error messages

  // Check if seat is available (not booked)
  const handCheckSeatAvailable = (seatNumber) => {
    const seat = bookedSeats.find((seat) => seat.seatNumber === seatNumber);
    return seat?.status === "available";
  };

  // Handle selecting or deselecting a seat
  const handleSeatClick = (seatNumber) => {
    setErrorMessage(""); // Clear error message

    if (!handCheckSeatAvailable(seatNumber)) {
      return;
    }

    // Check if the seat is already selected
    if (selectedSeats.includes(seatNumber)) {
      // Deselect the seat
      setSelectedSeats((prevSeats) =>
        prevSeats.filter((seat) => seat !== seatNumber)
      );
      setMySeats((prevSeats) =>
        prevSeats.filter((seat) => seat !== seatNumber)
      );
    } else {
      // Check if the seat limit is reached
      if (selectedSeats.length < seatCount) {
        // Select the seat
        setSelectedSeats((prevSeats) => [...prevSeats, seatNumber]);
        setMySeats((prevSeats) => [...prevSeats, seatNumber]);
      } else {
        // Show error message if limit is reached
        setErrorMessage(`You can select only up to ${seatCount} seats.`);
      }
    }
  };

  const handleSeatSubmit = () => {
    onSeatSelect();
  };

  // Check if seat is already booked
  const isAlreadyBooked = (seatNumber) => {
    const seat = bookedSeats.find((seat) => seat.seatNumber === seatNumber);
    return seat?.status === "booked";
  };

  // Check if seat is selected
  const isSelected = (seatNumber) => selectedSeats.includes(seatNumber);

  return (
    <div>
      <div className="grid grid-cols-10 gap-2">
        {bookedSeats.map((seat, index) => (
          <button
            key={seat._id?.$oid || index}
            disabled={isAlreadyBooked(seat.seatNumber)} // Disable if already booked
            className={`border rounded p-2 ${
              isAlreadyBooked(seat.seatNumber)
                ? "bg-red-500 select-none cursor-not-allowed" // Booked seats style
                : isSelected(seat.seatNumber)
                ? "bg-gray-500" // Selected seats style
                : ""
            }`}
            onClick={() => handleSeatClick(seat.seatNumber)} // Handle seat click
          >
            {seat.seatNumber}
          </button>
        ))}
      </div>

      {/* Submit Button */}
      <button
        className="px-6 py-2 w-[200px] flex justify-center items-center mx-auto bg-black border-2 text-white cursor-pointer mt-4"
        onClick={handleSeatSubmit}
      >
        Confirm Booking
      </button>

      {/* Error Message */}
      {errorMessage && (
        <div className="text-red-500 mt-2 text-center">{errorMessage}</div>
      )}
    </div>
  );
};

export default SeatSelection;
