const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router
    .route('/login')
    .get(viewsController.renderLoginSignup)

router
    .route('/profile')
    .get(viewsController.renderProfile)

router
    .route('/')
    .get(authController.isLoggedIn, viewsController.renderTimeline)

router
    .route('/user')
    .get(authController.isLoggedIn, viewsController.renderProfile)

router
    .route('/workout/:slug')
    .get(authController.isLoggedIn, viewsController.renderWorkout)
// .get(viewsController.renderProfile)

module.exports = router;
