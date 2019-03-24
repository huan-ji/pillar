const express = require('express');
const bodyParser = require('body-parser');
const accountSid = 'AC67dd70f16379fbc2e1e26f19a05d5a14';
const authToken = '4bb1bd19fae1711ee737c9b3897f7f5b';
const client = require('twilio')(accountSid, authToken);
const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/text', (req, res) => {
  const number = '+1' + req.body.number.replace(/\D+/g, '')
  client.messages
        .create({from: '+16314860553', body: req.body.text, to: number})
        .then(message => console.log(message.sid))
        .catch(err => console.log(err))

  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
