const express = require('express');
const router = express.Router();
const cors = require('cors');
const user_route = express();
// const bodyparser = require('body-parser')


router.use(cors());
// user_route.use(bodyparser.urlencoded({ extended: true }))
router.use(express.static('public'))

//middleware




const auth_controller = require('../Controllers/authController');

router.get('/test',auth_controller.test)
router.post('/',auth_controller.login)
router.post('/register',auth_controller.register)
router.get('/profile',auth_controller.getprofile)
module.exports = router;