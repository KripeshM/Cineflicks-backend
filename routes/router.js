
const express = require('express')

// const server=require('../index')






const movieController = require('../controllers/movieController')

const registerController = require('../controllers/registerController')

const loginController = require('../controllers/loginController')

const watchlistController = require('../controllers/watchlistController')

const favouriteController = require('../controllers/favouriteController')

const reviewController = require('../controllers/reviewController')

const router = new express.Router()

const jwt = require('jsonwebtoken')



//application specific middleware
const appMiddleware = (req, res, next) => {
    next()
    console.log('Application specific middleware');
}
const server = express()
server.use(appMiddleware)

const jwtMiddleware = (req, res, next) => {
    console.log('Router specific middleware');

    const token = req.headers['verify-token'];
    console.log(token);

    try {
        const data = jwt.verify(token, 'superkey2023');
        console.log(data);
        next();
    } catch {
        res.status(401).json({ message: 'please login' });
    }
}

//api - get all movies
router.get('/movies/all-movies', movieController.getallmovies)


//api - register
router.post('/register', registerController.register)

//api - login
router.post('/login', loginController.login)

//api - add to watchlist
router.post('/watchlist/add-to-watchlist',jwtMiddleware,watchlistController.addtowatchlist)

//api - get watchlist
router.get('/watchlist/get-watchlist/:username', jwtMiddleware, watchlistController.getwatchlist)

//api - remove watchlist movie
router.delete('/watchlist/remove-watchlist/:username/:id',jwtMiddleware, watchlistController.removewatchlistmovie)

//api - add to favourite
router.post('/favourite/add-to-favourite',jwtMiddleware,favouriteController.addtofavourite)

//api - get favourites
router.get('/favourite/get-favourite/:username',jwtMiddleware,favouriteController.getfavourite)

//api - remove from favourite
router.delete('/favourite/remove-favourite/:username/:id',jwtMiddleware,favouriteController.removefavouritemovie)

//api - view movie
router.get('/movies/get-movie/:id',jwtMiddleware,movieController.viewmovie)

//api - post a review
router.post('/review/post-review',jwtMiddleware,reviewController.postreview)

//api - delete review
router.delete('/review/delete-review/:username/:id',jwtMiddleware, reviewController.deletereview)

//api - edit review
router.put('/review/edit-review', jwtMiddleware,reviewController.editreview)

//api - get review
router.get('/review/get-review/:username/:id',jwtMiddleware,reviewController.getreview)


server.use(router);

module.exports = router