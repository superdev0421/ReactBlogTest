const express = require('express');
const router = express.Router();
const data = require('./db');
const createTournament = require('./createTournament');

//  route:    Get:/database/
//  desc:     Get All The data from Database
//  params:   none
router.get('/', (req, res) => {
  // console.log("get the request");
  try {
    if (data.tournaments.length === 0) {
      return res.status(404).json({ status: 'No Data Found!' });
    } else {
      return res
        .status(200)
        .json({ status: 'Success', data: data.tournaments });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 'Failed' });
  }
});

//  route:    Post:/database/add
//  desc:     Add One Item to the database
//  params:   name:string
router.post('/add', (req, res) => {
  try {
    const { name } = req.body;
    const newData = createTournament(name);

    data.tournaments.push(newData);
    return res.status(200).json({ status: 'Success' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 'Failed' });
  }
});

//  route:    Delete:/database/delete
//  desc:     Delete One Item from the database
//  params:   id:string
router.delete('/delete', (req, res) => {
  try {
    const { id } = req.body;

    const newData = data.tournaments.filter((item) => {
      return item.id !== id;
    });
    data.tournaments = newData;
    return res.status(200).json({ status: 'Success' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 'Failed' });
  }
});

//  route:    Post:/database/find
//  desc:     Find the items in the database
//  params:   keyword:string
router.post('/find', (req, res) => {
  try {
    let { keyword } = req.body;
    keyword = keyword.toLowerCase();

    const result = data.tournaments.filter((item) => {
      const lwrName = item.name.toLowerCase();
      return lwrName.includes(keyword) === true;
    });

    if (result.length === 0) {
      return res.status(404).json({ status: 'No data found!' });
    } else {
      return res.status(200).json({ status: 'Success', data: result });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 'Failed' });
  }
});

//  route:    Post:/database/update
//  desc:     Update specified item in the database
//  params:   { id:string, newName: string }
router.post('/update', (req, res) => {
  try {
    const { id, newName } = req.body;

    const newData = data.tournaments.map((item) => {
      if (item.id === id) {
        item.name = newName;
      }
      return item;
    });
    data.tournaments = newData;
    return res.status(200).json({ status: 'Success', data: data.tournaments });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 'Failed' });
  }
});

module.exports = router;
