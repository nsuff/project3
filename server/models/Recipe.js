const { Schema, model } = require('mongoose');
const ingredientSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const recipeSchema = new Schema(
  {
    recipeText: {
      type: String,
      required: 'You need to leave a recipe!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    ingredients: [ingredientSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

recipeSchema.virtual('ingredientCount').get(function() {
  return this.ingredients.length;
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
