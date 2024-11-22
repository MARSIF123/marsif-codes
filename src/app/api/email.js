export default async function handler(req, res) {
  const data = req.body;
  const name = data.name;
  res.status(200).json({ name });
}
