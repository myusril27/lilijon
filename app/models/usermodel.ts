import { prisma } from "../lib/prisma";

export const userModel = {
  async getAll() {
    return await prisma.user.findMany();
  },
  async create(data: { name: string; email: string }) {
    return await prisma.user.create({ data });
  },
};
