import Movie from "../models/movie.model.js";
import Seat from "../models/seat.model.js";

export const finddata = async (req, res) => {
  try {
    const data = await Movie.find().populate("castCrewId").exec();
    return res.status(200).json({
      success: true,
      message: "data fetches successfully",
      data,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

export const finddatabyid = async (req, res) => {
  try {
    const data = await Movie.findById(req.params.id)
      .populate("castCrewId")
      .exec();
    return res.status(200).json({
      success: true,
      message: "data fetches successfully",
      data,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

export const savedata = async (req, res) => {
  try {
    const data = await Movie.create(req.body);

    // Extract availability information from the request body
    const { avaibilityDate, avaibilityTimeSlot, noOfSeats } = req.body;

    // Define the default number of seats and seat numbers
    const defaultSeats = Array.from({ length: noOfSeats || 10 }, (_, index) => ({
      seatNumber: `${index + 1}`, // A1, A2, ..., A10
      status: 'available', // Initial status of the seat
    }));

    // Assuming avaibilityDate and avaibilityTimeSlot are arrays, loop through them
    for (let i = 0; i < avaibilityDate.length; i++) {
      for (let j = 0; j < avaibilityTimeSlot.length; j++) {
        // Create seat data for each date and time slot
        const seat = new Seat({
          movieId: data._id, // Reference to the created movie
          movieDate: avaibilityDate[i], // Use correct index for the date
          movieTimeSlot: avaibilityTimeSlot[j], // Use correct index for the time slot
          bookingStatus: defaultSeats, // Default seat configuration with 10 seats
        });

        await seat.save(); // Save each seat in the database
      }
    }

    return res.status(201).json({
      success: true,
      message: "Data and seats saved successfully",
      data,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

export const updateMovie = async (req, res) => {
  const { langauge: val, castCrewId, genre } = req.body;
  try {
    const data = await Movie.findByIdAndUpdate(
      req.params.id,
      { genre },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "update data successfully",
      data,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err,
    });
  }
};
