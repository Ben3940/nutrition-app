export function Food({ food }) {
  return (
    <section className='card'>
      <div className='card-heading'>
        <h3 className='card-food-number'>{food.No}</h3>
        <h2 className='card-food-name'>{food.name}</h2>
        <h3 className='card-serving-size'>Serving Size: {food.serving_size}</h3>
      </div>
      <section className='card-section'>
        <h2>Nutrition Facts</h2>
        <div className='card-nutrition-facts'>
          <h5>Calories: {food.nutrition.calories} cals</h5>
          <h5>Sodium: {food.nutrition.sodium}</h5>
          <h5>Fat: {food.nutrition.total_fat}</h5>
          <h5>Sugar: {food.nutrition.sugars}</h5>
          <h5>Cholesterol: {food.nutrition.cholesterol}</h5>
          <h5>Protein: {food.nutrition.protein}</h5>
        </div>
      </section>
    </section>
  );
}
