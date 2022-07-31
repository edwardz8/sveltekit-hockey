/* import prisma from '@prisma/client'
 */

import pkg from '@prisma/client';
const { PrismaClient } = pkg;

// import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export const db = new PrismaClient()

export default prisma