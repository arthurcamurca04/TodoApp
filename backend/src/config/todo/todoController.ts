import { Request, Response } from "express";
import TodoSchema from "./todo";

export default {
  index: async (req: Request, res: Response) => {
    const todos = await TodoSchema.find();
    return res.status(200).json(todos);
  },
  add: async (req: Request, res: Response) => {
    const { description, done } = req.body;

    const data = {
      description,
      done,
    };

    const response = new TodoSchema(data);
    response.save();
    return res.status(201).json(response);
  },
  remove: async (req: Request, res: Response) => {
    const { id } = req.params;
    await TodoSchema.findByIdAndDelete(id);
    return res.status(204).send();
  },

  findOne: async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await TodoSchema.findById(id);
    return res.status(200).json(response);
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { description, done } = req.body;

    const data = {
      description,
      done,
    };
    const response = await TodoSchema.findOneAndUpdate({_id: id, }, data);
    return res.status(204).send();
  },
};
