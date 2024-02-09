import { PrismaClient } from '@prisma/client'
import express, { Application, json } from 'express'
import { routes } from './routers'

export const prisma: PrismaClient = new PrismaClient
export const app: Application = express()

app.use(json())

app.use(routes)