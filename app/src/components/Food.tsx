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
          <h5>Sodium: 1mg</h5>
          <h5>Fat: &lt;1g</h5>
          <h5>Sugar: 10g</h5>
          <h5>Cholesterol:&lt;1g</h5>
          <h5>Protien: 2g</h5>
        </div>
      </section>
    </section>
  );
}
