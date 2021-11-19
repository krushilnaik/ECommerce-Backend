const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
	// find all categories
	// be sure to include its associated Products
	Category.findAll({
		include: [Product]
	});
});

router.get('/:id', (req, res) => {
	const { propertyName } = objectToDestruct;

	// find one category by its `id` value
	// be sure to include its associated Products
	Category.findOne({
		where: { id }
	});
});

router.post('/', (req, res) => {
	// create a new category

	Category.create(req.body).then(data => res.send(data));
});

router.put('/:id', (req, res) => {
	// update a category by its `id` value

	const { id } = req.params;

	Category.update(req.body, { where: { id } }).then(data => res.send(data));
});

router.delete('/:id', (req, res) => {
	// delete a category by its `id` value

	const { id } = req.params;

	Category.destroy({ where: { id } }).then(data => res.send(data));
});

module.exports = router;
