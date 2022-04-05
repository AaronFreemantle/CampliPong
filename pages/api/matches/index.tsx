import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const matches = prisma.match.findMany();
  res.status(200).json(matches);
}
