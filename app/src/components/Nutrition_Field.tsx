interface field {
  name: string;
  max_val?: number;
  unit: string;
}

export function Nutrition_Field({ name, max_val = 1000, unit }: field) {
  return (
    <div className='input-container'>
      <label htmlFor={name}>{name}:</label>
      <input
        className='input-field-quantity'
        type='number'
        name={name}
        id={name}
        min='0'
        max={max_val}
      />
      <div className='unit'>{unit}</div>
      <div className='radio'>
        <input
          type='radio'
          name={`${name}-ordering`}
          id={`${name}-radio-less`}
          value='less'
        />
        <label htmlFor={`${name}-radio-less`}>&le;</label>
      </div>
      <div className='radio'>
        <input
          type='radio'
          name={`${name}-ordering`}
          id={`${name}-radio-greater`}
          value='greater'
        />
        <label htmlFor={`${name}-radio-greater`}>&ge;</label>
      </div>
    </div>
  );
}
