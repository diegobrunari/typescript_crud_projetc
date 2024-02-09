import { Request, Response } from "express";
import { EventReturn, createEventService, deleteEventService, readAllEventsService, updateEventService } from "../services/event.service";

export const createEventController = async (req: Request, res: Response): Promise<Response> => {
  const newEvent: EventReturn = await createEventService(req.body)

  return res.status(201).json(newEvent)
}

export const readEventController = async (req: Request, res: Response): Promise<Response> => {
  const events: EventReturn[] = await readAllEventsService()

  return res.status(200).json(events)
}

export const updateEventController = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params

  const event: EventReturn = await updateEventService(Number(id), req.body)

  return res.status(200).json(event)
}

export const deleteEventController = async (req: Request, res: Response): Promise<Response> => {
  await deleteEventService(Number(req.params.id))

  return res.status(204).json()
}