const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('सर्वर चल रहा है!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`सर्वर पोर्ट ${PORT} पर चल रहा है`);
}); 