import express from 'express';
import morgan from 'morgan';
//import qs from 'querystring'

const app = express();


// logs info about request
app.use(morgan('tiny'));

// const logger = (req, res, next) => {
//     console.log(req.method, req.path);
//     next();
// };

// app.use(logger);

//cod dlya peredachi loggera tolko odnomu puti
// app.get('/', logger, () => { res.send(...)})

// app.use((req, res, next) => {
//     let data = '';
//     req.on('data', (chunk) => (data += chunk));
//     req.on('end', () => {
//         const parsedJSON = JSON.parse(data);
//         req.body = parsedJSON;
//         next();
//     });
// });
//OR
//converts JSON to JS Object in POST, PUT, PATCH requests
app.use(express.json());
// converts form data to JS Object in POST, PUT, PATCH requests
app.use(express.urlencoded({ extended: true}))
//////////////OR////////////////////
// app.use((req, res, next) => {
//     if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//         let data = '';
//         req.on('data', (chunk) => (data += chunk.toString()));
//         req.on('end', () => {
// 			const parsedFromData = qs.parse(data)
// 			console.log(parsedFromData);
// 			req.body = parsedFromData
			
// 		});
//     } else {
// 		next();
// 	}
// });

app.use((req, res) => {
    console.log(req.body);
    return res.send('Thies is Express server');
});

app.listen(5000, () => {
    console.log('Server is listenning at port 5000');
});
