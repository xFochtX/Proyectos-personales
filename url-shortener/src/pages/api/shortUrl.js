import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const { url } = req.body;
    const shortUrl = Math.random().toString(36).substr(2, 5);
    
    try{
      const data = await prisma.link.create({
        data: {url,shortUrl},
      });
      return res.status(200).send(data);
    }catch(error){
      return res.status(500).send({error});
    }
  }else{
    res.status(405).end(); // Método no permitido
  }
}
