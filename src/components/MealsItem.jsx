import { Link } from 'react-router-dom';

function MealsItem(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <article className="category-card">
      <div className="category-card__img card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="category-card__content card-content">
        <Link class="category-card__title" to={`/meal/${idMeal}`}>
          {strMeal}
        </Link>
      </div>
    </article>
  );
}

export { MealsItem };
