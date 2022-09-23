const express = require('express');
const router = express.Router();

/* const contactsFromController = require('../controllers/contacts');

router.get('/', contactsFromController.getAll); */

router.get("/contacts", (req, res) => {
    res.send("All contacts");
});

router.get("/contacts/:id", (req, res) => {
    res.send("one contact");
});

module.exports = router;