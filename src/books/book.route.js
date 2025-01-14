const express = require('express');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router();


router.post("/create-book", verifyAdminToken, postABook);

router.get("/", getAllBooks);

router.get("/:id", getSingleBook);

// update a book endpoint
router.put("/edit/:id", UpdateBook);

router.delete("/:id", deleteABook)


module.exports = router;