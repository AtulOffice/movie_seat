import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    seatNumbers: {
        type: [String],
        required: true,
    },
    bookingStatus: {
        type: String,
    },
    paymentStatus: {
        type: String,
    },
    paymentDetails: {
        id: {
            type: String,
        },
        status: {
            type: String,
        },
        update_time: {
            type: String,
        },
        email_address: {
            type: String,
        },
    },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
