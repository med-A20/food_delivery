import { client } from "../../lib/client";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const newOrder = await JSON.parse(req.body);
      try {
        await client
          .create({
            _type: "order",
            key : newOrder.key,
            name: newOrder.name,
            phone: newOrder.phone,
            adresse: newOrder.adresse,
            total: parseFloat(newOrder.total),
            methode: parseInt(newOrder.methode),
            status: newOrder.status || 1,
          })
          .then((data) => {
            console.log("document created", data._id);
            res.status(200).json(data._id);
          });
      } catch (error) {
        res.status(500).json({ msg: "we have an error" });
      }
      break;
  }
}
