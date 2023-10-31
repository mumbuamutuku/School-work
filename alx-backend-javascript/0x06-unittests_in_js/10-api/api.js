const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.listen(port, () => {
	console.log(`API available on localhost port ${port}`);
});

app.get('/', (req, res) => {
	res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
	const id = req.params.id;
	if (!/^\d+$/.test(id)) {
		return res.status(404).send('Card ID must be a number');
	}
	res.status(200).send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.status(200).send(`Welcome ${userName}`);
});

module.exports = app;
