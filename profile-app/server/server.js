const next = require("next");
const express = require("express");
const bodyParser = require("body-parser")
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const cloudinary = require('cloudinary').v2
const filePath = './data.json'
const fs = require('fs')
const path = require('path')
const  moviesData = require(filePath)
const fileupload = require('express-fileupload')


cloudinary.config({
  cloud_name: 'doumyycj0',
  api_key: '392485679499865',
  api_secret: 'G1H-ZkfoRQ_6VmdoibZWT8tw1Q8'
})


app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json())

  server.use(fileupload({
    useTempFiles: true
  }))

  server.get('/api/v1/movies', (req, res) => {
    return res.json(moviesData);
  });

  server.get('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    const movie = moviesData.find(m => m.id === id)
  return res.json(movie);
});

  server.post('/api/v1/upload', (req, res, next) => {
    const file = req.files.photo
    console.log(file)
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
      res.json(result)
    })
  })

  // server.get('/api/v1/upload/:id', (req, res, next) => {
  //   const { public_id } = req.params
  //   const movie = moviesData.find(m => m.id === public_id)
  //   clo
  // return res.json(movie);
  // })

  server.post("/api/v1/movies", (req, res) => {
    //Todo add ID movie
    const movie = req.body
    moviesData.push(movie)
    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(moviesData, null, 2)
    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if(err){
        return res.status(422).send(err)
      }
      return res.json('Movie has been successfully added!')
    })
  });

 

  server.delete("/api/v1/movies/:id", (req, res) => {
    const { id } = req.param
    const movieIndex = moviesData.findIndex(m => m.id === id)

    moviesData.splice(movieIndex, 1)

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(moviesData, null, 2)
    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if(err){
        return res.status(422).send(err)
      }
      return res.json('Movie has been successfully added!')
    })
  });

  server.get("/faq", (req, res) => {
    return res.send(
      "<html><head></head><body><h1>Hello World</h1></body></html>"
    );
  });
  // we are handling all of the request comming to our server
  server.get("*", (req, res) => {
    // next.js is handling requests and providing pages where we are navigating to
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log("> Ready on port " + PORT);
  });
});
