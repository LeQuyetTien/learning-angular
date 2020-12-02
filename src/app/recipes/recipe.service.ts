import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Recipe Test 1',
      'This is simple a test 1',
      'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg'
    ),
    new Recipe(
      'Recipe Test 2',
      'This is simple a test 2',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg'
    ),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
