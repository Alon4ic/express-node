// app.httpMethod(requestPath, handlerFn);
//==========OR============
// app.method(path, handler1, handler2, ..)

/////////////Primer marshruta dlya get zaprosa
// app.get('/', (req, res) => {
// 	res.send('Hello World');
// })

//////////////Primer marshruta dlya post zaprosa
// app.post('/users', (req, res)=> {
// 	res.send('User was created')
// })

// /////////////////Parametri marshruta
// app.get('/users/:userId', (req, res) => {
// 	console.log(req.params) //{userId: '234'}
// 	console.log(req.params.userId); //234
// })

// //////////////Metodi http dlya odnogo i togoje puti

// app.get('/users', (req, res) => {
//     res.send('GET req at /users path');
// });
// app.post('/users', (req, res) => {
//     res.send('POST req at /users path');
// });
// //===============OR====================
// app.route('/users')
//     .get((req, res) => {
//         res.send('GET req at /users path');
//     })
//     .post((req, res) => {
//         res.send('POST req at /users path');
//     });

// //////////////////Wineseniye marshrutov w otdelynie fayli

// const express = require('express');
// const usersRouter = express.Router.Router();

// usersRouter.get('/', (req, res) => {
// 	// code
// })
// export default usersRouter;

// ================eEND FILE APP.JS====================
// const express = require('express');
// const userRouter = require('./routes/users.js');
// const app = express();
// app.use('/users', usersRouter);


// /////////////////////Middleware////////////////////
// function logger(req, res, next) {
// 	console.log(`${req.method} request at ${req.path}`);
// 	next()
// }
// //============ispolzovanie funkcii========================
// app.use(logger);

// //====================OR========================
// app.use((req, res, next) => {
// 	console.log(`${req.method} request at $(req.path)`);
// 	next();
})