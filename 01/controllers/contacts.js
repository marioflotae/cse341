const mongodb = require('../connection/db');
/* const ObjectId = require('mongodb').ObjectId;
console.log(ObjectId); */

const getAll = async (req, res, next) => {

    const result = mongodb().then(() => {
        console.log(result);
    });

    /* const result = await mongodb.collection('contacts').find();
    console.log(result);
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
    console.log(result); */
  };

getAll()
  module.exports = getAll;