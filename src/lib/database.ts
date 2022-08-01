import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export const db = new PrismaClient()

export default prisma