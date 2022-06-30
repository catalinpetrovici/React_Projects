import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();

  const [loading, setLoading] = React.useState(false);
  const [cocktail, seCocktail] = React.useState(null);

  const fetchCocktail = async () => {
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();

      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        seCocktail(newCocktail);
        setLoading(false);
      } else {
        seCocktail(null);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchCocktail();
  }, [id]);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>;
  }

  const { name, image, category, info, glass, ingredients, instructions } =
    cocktail;

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        Back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>Name :</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>Category :</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>Info :</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>Glass :</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>Instructions :</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {ingredients.map((item, index) => {
              if (!item) return;
              return <span key={index}>{item}</span>;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
