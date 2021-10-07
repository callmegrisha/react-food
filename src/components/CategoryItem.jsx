import { Link } from 'react-router-dom';

function CategoryItem(props) {
  const { strCategory, strCategoryDescription, strCategoryThumb } = props;

  return (
    <article className="category-card">
      <div className="category-card__img card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="category-card__content card-content">
        <Link className="category-card__title" to={`/category/${strCategory}`}>
          {strCategory}
        </Link>
        <span className="category-card__description">
          {strCategoryDescription}
        </span>
      </div>
    </article>
  );
}

export { CategoryItem };
