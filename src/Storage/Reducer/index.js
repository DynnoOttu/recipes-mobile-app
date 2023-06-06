import { combineReducers } from 'redux';
import Auth_Login from './Login/loginReduc';
import Register from './Register/registerReducer';
import RecipeReducers from './Recipes/recipesReduc';
import DetailReducers from './Recipes/detailReduc';
import InputReducers from './Recipes/inputReduc';
import MyRecipeReducers from './Recipes/myRecipesReduc';

const appReducers = combineReducers({
  Auth_Login: Auth_Login,
  Register,
  recipes: RecipeReducers,
  DetailReducers: DetailReducers,
  InputReducers: InputReducers,
  MyRecipeReducers: MyRecipeReducers
});

export default appReducers;
