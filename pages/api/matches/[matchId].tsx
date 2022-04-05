import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const match = prisma.match.findUnique({
    where: { id: Number(req.query.id) },
  });
  res.status(200).json(match);
}
