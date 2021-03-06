const express = require('express');                                                          // Import d'express pour pouvoir utiliser son système de router;
const router = express.Router();                                                               // Import du router d'express
const { Posts } = require('../models')                                                        // Import du model Posts
const upload = require('../middlewares/multer-config')

const PostCtrl = require('../controllers/posts')


router.post('/', upload, PostCtrl.createPost);
router.get('/', PostCtrl.getAllPosts);

module.exports = router;
