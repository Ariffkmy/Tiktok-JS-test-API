const express = require('express');
const axios = require('axios');

const app = express();

app.get('/api/tiktok', async (req, res) => {
    try {
        const url = 'https://api.tiktok.com/api/item_list/?count=1&is_random=true';
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
