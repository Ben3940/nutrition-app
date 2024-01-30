export function Nutrition_Field() {
  <div className='input-container'>
    <label htmlFor='calories'>Calories:</label>
    <input type='number' name='calories' id='calories' min='0' max='1000' />
    <div className='radio'>
      <input type='radio' name='ordering' id='radio-less' value='less' />
      <label htmlFor='radio-less'>&le;</label>
    </div>
    <div className='radio'>
      <input type='radio' name='ordering' id='radio-greater' value='greater' />
      <label htmlFor='radio-greater'>&ge;</label>
    </div>
  </div>;
}
