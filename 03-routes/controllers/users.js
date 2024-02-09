// users
const getUsersHandler = (req, res) => {
    res.send('Get users route');
};
const getSingleUserHandler = (req, res) => {
    res.send(`Get user route. CommentId ${req.params.userId}`);
};
const postUserHandler = (req, res) => {
    res.send('Post users route');
};

module.exports = {
    getUsersHandler,
    getSingleUserHandler,
    postUserHandler,
};
