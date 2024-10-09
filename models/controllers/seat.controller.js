import Booking from "../models/booking.model.js";
import Seat from "../models/seat.model.js";

import mongoose from 'mongoose';

export const findSeatData = async (req, res) => {
    try {
        const { movieId, movieDate, movieTimeSlot } = req.body;


        // Check if all required data is provided
        if (!movieId || !movieDate || !movieTimeSlot) {
            return res.status(500).json({ success: false, message: 'Invalid data' });
        }

        // Convert movieId string to ObjectId
        const objectId = new mongoose.Types.ObjectId(movieId);

        // Use 'new' keyword here
        // Find the seat data using ObjectId

        const data = await Seat.findOne({ movieId: objectId, movieDate, movieTimeSlot }).select('-_id').exec();


        if (!data) {
            return res.status(404).json({ success: false, message: 'No seat data found' });
        }

        return res.status(200).json({
            success: true,
            message: "Data fetched successfully",
            data,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

export const bookSeat = async (req, res) => {
    try {
        const { movieId, movieDate, movieTimeSlot, seats } = req.body;

        // these will be also addes 
        // userId, paymentDetails 

        // Check if all required data is provided
        if (!movieId || !movieDate || !movieTimeSlot || !seats) {
            return res.status(400).json({ success: false, message: 'Invalid data provided' });
        }

        // Convert movieId string to ObjectId
        const objectId = new mongoose.Types.ObjectId(movieId);

        // Find seat data for the specified movie, date, and time slot
        const seatData = await Seat.findOne({ movieId: objectId, movieDate, movieTimeSlot }).exec();

        if (!seatData) {
            return res.status(404).json({ success: false, message: 'No seat data found for the specified movie, date, and time slot' });
        }

        // Check seat availability
        const unavailableSeats = seats.filter(seat => {
            const bookedSeat = seatData.bookingStatus.find(
                (status) => status.seatNumber === seat && status.status === "booked"
            );
            return bookedSeat !== undefined; // Return true if seat is booked
        });

        if (unavailableSeats.length > 0) {
            return res.status(400).json({
                success: false,
                message: `The following seats are already booked: ${unavailableSeats.join(", ")}`,
            });
        }

        // If all seats are available, proceed with booking
        seats.forEach((seat) => {
            seatData.bookingStatus[seat - 1].status = "booked";

        });
        await seatData.save(); // Save the updated seat data

        // Create a new booking entry
        const booking = new Booking({
            movieId,
            // userId: new mongoose.Types.ObjectId(userId),
            seatNumbers: seats,
            bookingStatus: "confirmed",
            // paymentStatus: "con",


        });

        await booking.save(); // Save the booking

        // Respond with success and booking details
        return res.status(201).json({
            success: true,
            message: 'Booking confirmed',
            booking,
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};