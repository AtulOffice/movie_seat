import mongoose from "mongoose";

const CastCrewSchema = new mongoose.Schema({
  cast: [
    {
      name: String,
      role: String,
      image: String,
    },
  ],
  crew: [
    {
      name: String,
      role: String,
      image: String,
    },
  ],
});

const Cast = mongoose.model("Cast", CastCrewSchema);

export default Cast;
