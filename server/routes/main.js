const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

/** 
 * GET /
 * HOME
*/

router.get('', async (req, res) => {
const locals = {
    title: "NodeJs Blog",
    description: "Simple Blog create with NodeJs, Express & MongoDb."
}

try {
    const data = await Post.find();
    res.render('index', { locals, data });
} catch (error) {
    console.log(error);
}

});

function insertPostData () {
    Post.insertMany([
        {
            title: "Building a Blog",
            body: "This is the body text"
        },
    ])
}
// insertPostData();












router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;