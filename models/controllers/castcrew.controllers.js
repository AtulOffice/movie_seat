import CastCrew from "../models/Cast.model.js";

export const addcastcrew = async (req, res) => {
  const { cast, crew } = req.body;
  try {
    const newCastCrew = await CastCrew.create({cast, crew});
    res.status(201).json({
      message: "Cast/Crew member added successfully",
      data: newCastCrew,
    });
  } catch (error) {
    res.status(500).json({ message: "Error saving to the database", error });
  }
};

export const getallcastcrew = async (req, res) => {
  try {
    const castcrew = await CastCrew.find();
    res.status(200).json(castcrew);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cast/crew data", error });
  }
};
