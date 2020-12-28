const express = require('express')
const router = express.Router()

const usersControll = require(`../controllers/users.controllers`)

router.get('/', usersControll.getUsers)
router.get('/:name/:id', usersControll.getUserswithID)

router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`<h3 style= "color:Blue">Update User with id: ${id}</h3>`);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`<h3 style= "color:Blue">Delete Users with id: ${id}</h3>`);

})

module.exports = router