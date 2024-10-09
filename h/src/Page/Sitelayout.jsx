import React, { useState, useEffect } from "react";
import SeatPopup from "../Components/NoSPopUp";
import SeatSelection from "../Components/SeatSelection";
import { useParams } from "react-router-dom";
import axios from "axios";

const Sitelayout = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [seatCount, setSeatCount] = useState(1);
  const [bookedSeats, setBookedSeats] = useState([]); // from API
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [mySeats, setMySeats] = useState([]);

  const { id } = useParams();

  const handleSeatSelect = (seats) => {
    setSelectedSeats(seats);
    // check that the seats are selected or not

    if (mySeats.length !== seatCount) {
      return alert("Please select " + seatCount + " seats");
    }

    // call API to store selected seats
    axios
      .post("http://localhost:5000/api/v1/book-seats/" + id, {
        movieId: id,
        movieDate: "19/09/2024",
        movieTimeSlot: "07:00PM",
        seats: mySeats,
      })
      .then((res) => {
        setBookedSeats(res.data.data.bookingStatus);
      })
      .catch((err) => {
        console.error("Error fetching booked seats:", err);
      });
  };

  useEffect(() => {
    // Fetch booked seats from API
    axios
      .post("http://localhost:5000/api/v1/get-booked-seats/" + id, {
        movieId: id,
        movieDate: "19/09/2024",
        movieTimeSlot: "07:00PM",
      })
      .then((res) => {
        setBookedSeats(res.data.data.bookingStatus);
      })
      .catch((err) => {
        console.error("Error fetching booked seats:", err);
      });
  }, []);

  return (
    <div>
      {showPopup && (
        <SeatPopup
          setSeatCount={setSeatCount}
          closePopup={() => setShowPopup(false)}
        />
      )}
      {!showPopup && (
        <SeatSelection
          seatCount={seatCount}
          bookedSeats={bookedSeats}
          onSeatSelect={handleSeatSelect}
          setMySeats={setMySeats}
          mySeats={mySeats}
        />
      )}
    </div>
  );
};

export default Sitelayout;
