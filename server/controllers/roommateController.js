let roommates = [{id:0, name: 'Eric Pip', img: 'https://ca.slack-edge.com/T039C2PUY-URQ2FGTD3-e0fb7f2d9423-192', favColor: 'Blue' , favFood: 'Pizza',  rating: 5}, {id: 1, name: 'Noah Orr', img: 'https://ca.slack-edge.com/T039C2PUY-USC65PTNG-4a88f398db9d-192', favColor: 'Gray', favFood:'Pizza',  rating: 5}]
id = 2

module.exports = {
    getRoommates: (req, res) => {
        console.log('hit get all roommates')
        return res.status(200).send(roommates)
    },
    postRoommate: (req, res) => {
        // console.log(req.body)
        const {roommate} = req.body
        roommate.id = id
        id++
        roommates.push(roommate)
        res.status(200).send(roommates)
    },
    editRoommateRating: (req, res) => {
        console.log('hit', req.params, req.body)
        const {id} = req.params
        const {rating} = req.body
        const index = roommates.findIndex(element => element.id === +id)
        roommates[index].rating = rating
        res.status(200).send(roommates)
    },
    deleteRoommate: (req, res) => {
        const {id} = req.params
        const index = roommates.findIndex(element => element.id === +id)
        if (index !== -1){
            roommates.splice(index, 1)
            
        } else {
          console.log('index not found')
        }
        res.status(200).send(roommates)
    }
}