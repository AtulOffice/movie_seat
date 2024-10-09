import React, { useState } from "react";

const SeatPopup = ({ setSeatCount, closePopup }) => {
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleSeatNumberSelect = () => {
    setSeatCount(selectedNumber);
    closePopup(); // close popup after selection
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-md text-center">
        <h2 className="text-lg font-bold">Select Number of Seats</h2>
        <select
          value={selectedNumber}
          onChange={(e) => setSelectedNumber(parseInt(e.target.value))}
          className="border border-gray-300 rounded-md p-2 mt-2"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <button
          onClick={handleSeatNumberSelect}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SeatPopup;
