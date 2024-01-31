interface field {
  name: string;
  max_val?: number;
  unit: string;
}

export function Nutrition_Field({ name, max_val = 1000, unit }: field) {
  return (
    <div className='input-container'>
      <label htmlFor='{name}'>{name}:</label>
      <input type='number' name={name} id={name} min='0' max={max_val} />
      <div className='radio'>
        <input type='radio' name='ordering' id='radio-less' value='less' />
        <label htmlFor='radio-less'>&le;</label>
      </div>
      <div className='radio'>
        <input
          type='radio'
          name='ordering'
          id='radio-greater'
          value='greater'
        />
        <label htmlFor='radio-greater'>&ge;</label>
      </div>
    </div>
  );
}
