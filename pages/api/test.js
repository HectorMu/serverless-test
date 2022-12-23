export default function handler(req, res) {
  res.status(200).json({ number: Math.random() });
}

export const config = {
  runtime: "edge", // this is a pre-requisite
};
