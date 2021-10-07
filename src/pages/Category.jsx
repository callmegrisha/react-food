import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Preloader } from '../components/Preloader';
import { MealsList } from '../components/MealsList';

import { getFilteredCategory } from '../api';

function Category() {
  const [meals, setMeals] = useState([]);
  const { name } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className="btn indigo darken-2" type="button" onClick={goBack}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
  );
}

export { Category };
