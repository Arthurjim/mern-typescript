import { RequestHandler } from "express";
import video from "./Video";

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await video.find();
    res.json(videos);
  } catch (error) {
    res.json(error);
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  const oneVideo = await video.findById(req.params.id);
  if (!oneVideo) return res.status(204).json();
  return res.json(oneVideo);
};
export const deleteVideo: RequestHandler = async (req, res) => {
  try {
    const deleteVideo = await video.findByIdAndDelete(req.params.id);
    if (!deleteVideo) return res.status(204).json();
    return res.json(deleteVideo);
  } catch (error) {
    res.json(error);
  }
};
export const updateVideo: RequestHandler = async (req, res) => {
  try {
    console.log(req.body);
    const videoUpdate = await video.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!videoUpdate) return res.json(204).json();
    return res.json(videoUpdate);
  } catch (error) {
    res.json(error);
  }
};

export const createVideo: RequestHandler = async (req, res) => {
  const videoFound = await video.findOne({ url: req.body.url });
  if (videoFound)
    return res.status(301).json({ message: "The URL already exist" });

  const newVideo = new video(req.body);
  const savedVideo = await newVideo.save();
  res.json(savedVideo);
};
