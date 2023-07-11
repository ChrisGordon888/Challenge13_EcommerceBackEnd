const router = require('express').Router();
const { Category, Product } = require('../../models');

// `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // Retrieve all categories and include their associated products
    const categories = await Category.findAll({
      include: [Product],
    });

    res.status(200).json(categories);
  } catch (err) {
    // Handle errors by sending a 500 status and the error message
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // Retrieve a specific category by its `id` and include its associated products
    const category = await Category.findByPk(req.params.id, {
      include: [Product],
    });

    // If the category is not found, return a 404 status and an error message
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // Create a new category with the provided request body
    const categoryData = await Category.create(req.body);

    res.status(201).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // Update a category with the provided `id` using the request body
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // If the category is not found, return a 404 status and an error message
    if (!updatedCategory[0]) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // Delete a category with the provided `id`
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    // If the category is not found, return a 404 status and an error message
    if (!deletedCategory) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.status(200).json(deletedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
