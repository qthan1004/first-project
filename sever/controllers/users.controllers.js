const users = [
    { id: `1`, name: "Thanh" },
    { id: `2`, name: "Hieu" },
    { id: `3`, name: "Minh" },
    { id: `4`, name: "Quang" },
]


module.exports.getUsers = (req, res) => {
    res.render('users', { users })
}

module.exports.getUserswithID = (req, res) => {
    const { name, id } = req.params;
    res.send(`<h3 style= "color:Blue">Users with: ${name} and id: ${id}</h3>`);
}