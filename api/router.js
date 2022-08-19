/**
==========================================
 Title:  Tournament Item
 Author: Edward
 Date:   18 August 2022
==========================================
 */

const express = require('express');
const router = express.Router();
const data = require('./db');
const createTournament = require('./createTournament');

//  route:    Get:/tournaments/
//  desc:     Get All The data from Database
//  params:   none
router.get('/', (req, res) => {
  // console.log("get the request");
  try {
    return res.status(200).json({ status: 'Success', data: data.tournaments });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 'Failed' });
  }
});

//  route:    Post:/tournaments/add
//  desc:     Add One Item to the database
//  params:   name:string
router.post('/add', (req, res) => {
  try {
    const { name } = req.body;
    console.log(req.body);
    const newData = createTournament(name);

    data.tournaments.push(newData);
    return res.status(200).json({ status: 'Success', data: newData });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 'Failed' });
  }
});

//  route:    Delete:/tournaments/delete
//  desc:     Delete One Item from the database
//  params:   id:string
router.post('/delete', (req, res) => {
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

//  route:    Post:/tournaments/find
//  desc:     Find the items in the database
//  params:   query:string
router.post('/find', (req, res) => {
  try {
    let { query } = req.body;
    query = query.toLowerCase();
    const result = data.tournaments.filter((item) => {
      const lwrName = item.name.toLowerCase();
      return lwrName.includes(query) === true;
    });
    return res.status(200).json({ status: 'Success', data: result });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 'Failed' });
  }
});

//  route:    Post:/tournaments/update
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
    data.tournaments = newData
    return res.status(200).json({ status: 'Success'});
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 'Failed' });
  }
});

module.exports = router;
