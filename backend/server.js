import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3050;
const API_URL = process.env.API_URL;

app.use(cors());
app.use(express.json());

app.post('/Account/SignIn', async (req, res) => {
  const inputData = req.body;
  try {
    const response = await axios.post(`${API_URL}/Account/SignIn`, inputData);
    const data = response.data;
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.get('/Territories/All', async (req, res) => {
  try {
    const { data: territories } = await axios.get(`${API_URL}/Territories/All`);
    return res.status(200).json({ territories });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is up and running on Port: ${PORT}`);
});
