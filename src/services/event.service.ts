import moment from "moment"
import { prisma } from ".."

export interface EventCreate {
  name: string
  location: string
  participants_quantity: number
  date: Date
  responsible: string
}

export interface EventReturn extends EventCreate {
  id: number
}

interface EventUpdate {
  name: string
  location: string
  participants_quantity: number
  date: Date
}

export const createEventService = async ({name, location, participants_quantity, date, responsible}: EventCreate): Promise<any> => {
  const eventDate = moment().utcOffset('-03:00')
   const newEvent: EventReturn = await prisma.event.create({
    data: {
      name, 
      location,
      participants_quantity,
      date: eventDate.toDate(),
      responsible
    }
   })
   return formatObj(newEvent)
}

export const readAllEventsService = async (): Promise<any[]> => {
  const events = await prisma.event.findMany()
  return events.map((item)=>{
    return formatObj(item)
  })
}

export const updateEventService = async (id: number, data: EventUpdate): Promise<EventReturn> => {
  const event: EventReturn = await prisma.event.update({
    where: {
      id
    },
    data
  })

  return event
}

export const deleteEventService = async (id:number): Promise<void> => {
  await prisma.event.delete({
    where: {
      id
    }
  })
}


function formatObj(object: any) {
  //const formatDate = moment(object.date)
  const response = {
    id: object.id,
    name: object.name,
    location: object.location,
    participants_quantity: object.participants_quantity,
    date: moment(object.date).format('DD-MM-YYYY HH:mm:ss'),
    responsible: object.responsible
   }
   return response
}