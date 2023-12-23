const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const theatreRoutes = require('./routes/theatreRoutes');
const showRoutes = require('./routes/showRoutes');
require('dotenv').config();
require('./db/config');


const app = express();
const PORT = 8080;


app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/theatres", theatreRoutes);
app.use("/api/shows", showRoutes);

app.listen(PORT, () => {
    console.log('Server running')
})