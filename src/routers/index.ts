import { Router } from "express";
import { createEventController, deleteEventController, readEventController, updateEventController } from "../controllers/event.controller";

export const routes: Router = Router()

routes.post('/events', createEventController)
routes.get('/events', readEventController)
routes.patch('/events/:id', updateEventController)
routes.delete('/events/:id', deleteEventController)