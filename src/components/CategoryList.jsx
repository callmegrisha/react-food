import { CategoryItem } from './CategoryItem';

function CategoryList({ catalog = [] }) {
  return (
    <div className="catalog">
      {catalog.map((catalogItem) => (
        <CategoryItem key={catalogItem.idCategory} {...catalogItem} />
      ))}
    </div>
  );
}

export { CategoryList };
