var express = require('express');
var router = express.Router();
const Card = require('../models').Card;

/* Handler function to wrap each route. */
function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(error){
      res.status(500).send(error);
    }
  }
}

/* GET Cards listing. */
router.get('/', asyncHandler(async (req, res) => {
  const cards = await Card.findAll();
  res.render("cards/index", { cards });
}));

/* Create a new card form. */
router.get('/new', (req, res) => {
  res.render("cards/new", { card: {} });
});

/* POST create card. */
router.post('/', asyncHandler(async (req, res) => {
  const card = await Card.create(req.body);
  res.redirect("/cards/" + card.id);
}));

/* Edit card form. */
router.get("/:id/edit", asyncHandler(async(req, res) => {
  const card = await Card.findByPk(req.params.id);
  res.render("cards/edit", { card });
}));

/* GET individual card. */
router.get("/:id", asyncHandler(async (req, res) => {
  const card = await Card.findByPk(req.params.id);
  res.render("cards/show", { card }); 
})); 

/* GET individual card answer. */
router.get("/:id/answer", asyncHandler(async (req, res) => {
  const card = await Card.findByPk(req.params.id);
  res.render("cards/answer", { card }); 
})); 

/* Update an card. */
router.post('/:id/edit', asyncHandler(async (req, res) => {
  const card = await Card.findByPk(req.params.id);
  await card.update(req.body);
  res.redirect("/cards/" + card.id);
}));

/* Delete card form. */
router.get("/:id/delete", asyncHandler(async (req, res) => {
  const card = await Card.findByPk(req.params.id);
  res.render("cards/delete", { card });
}));

/* Delete individual card. */
router.post('/:id/delete', asyncHandler(async (req ,res) => {
  const card = await Card.findByPk(req.params.id);
  await card.destroy();
  res.redirect("/cards");
}));

module.exports = router;
