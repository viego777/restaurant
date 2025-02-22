import { PrismaClient } from '@prisma/client';

declare global {
    //eslint-disable-next-line no-var
    var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
    if (!(global as any).cachedPrisma) {
        global.cachedPrisma = new PrismaClient();
    }
    prisma = global.cachedPrisma;
}

//usar para chamar meu banco de dados
export const db = prisma;