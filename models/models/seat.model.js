import mongoose from "mongoose";


const seatSchema = new mongoose.Schema({
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
    },
    movieDate: {
        type: String,
        required: true,
    },
    movieTimeSlot: {
        type: String,
        required: true,
    },
    bookingStatus: {
        type: [
            {
                seatNumber: {
                    type: String,
                    required: true,
                },
                status: {
                    type: String,
                    required: true,
                },
            }
        ],
        default: [],
    }

}, { timestamps: true });

const Seat = mongoose.model("Seat", seatSchema);

export default Seat;