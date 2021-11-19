const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
	// find all tags
	// be sure to include its associated Product data

	Tag.findAll({
		include: Product
	}).then(data => res.send(data));
});

router.get('/:id', (req, res) => {
	// find a single tag by its `id`
	// be sure to include its associated Product data

	const { id } = req.params;

	Tag.findOne({
		where: { id },
		include: Product
	}).then(data => res.send(data));
});

router.post('/', (req, res) => {
	// create a new tag

	Tag.create(req.body).then(data => res.send(data));
});

router.put('/:id', (req, res) => {
	// update a tag's name by its `id` value

	const { id } = req.params;

	Tag.update(req.body, {
		where: { id }
	}).then(data => res.send(data));
});

router.delete('/:id', (req, res) => {
	// delete on tag by its `id` value

	const { id } = req.params;

	Tag.destroy({ where: { id } }).then(data => res.send(data));
});

module.exports = router;
