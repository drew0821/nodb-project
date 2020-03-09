const express = require('express');
const cors = require('cors');
const ctrl = require('./controllers/roommateController')

const app = express()
const port = 4444

app.use(cors())
app.use(express.json())

app.get('/api/roomies', ctrl.getRoommates)
app.post('/api/roomie', ctrl.postRoommate)
app.put('/api/roomie/:id', ctrl.editRoommateRating)
app.delete('/api/roomie/:id', ctrl.deleteRoommate)

app.listen(port, () => console.log(`Server running on port: ${port}`));