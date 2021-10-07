import { MealsItem } from './MealsItem';

function MealsList({ meals = [] }) {
  return (
    <div className="catalog">
      {meals.map((mealsItem) => (
        <MealsItem key={mealsItem.idMeal} {...mealsItem} />
      ))}
    </div>
  );
}

export { MealsList };
