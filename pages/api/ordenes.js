import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const orden = await prisma.orden.create({
    data: {
      nombre: req.body.nombre,
      total: req.body.total,
      pedido: req.body.pedido,
      fecha: req.body.fecha,
    },
  });
  res.json(orden);
}
