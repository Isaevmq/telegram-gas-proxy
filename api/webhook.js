export default async function handler(req, res) {
if (req.method === 'POST') {
const gasUrl = process.env.GAS_WEBHOOK_URL;

const forward = await fetch(gasUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(req.body),
});
const text = await forward.text();
if (forward.ok) {
  res.status(200).send('OK: ' + text);
} else {
  res.status(forward.status).send('Error from GAS: ' + text);
}


} else {
res.status(405).send('Method Not Allowed');
}
}
