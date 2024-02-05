export function parse_fields(form: FormData, field_names: string[]) {
  let query: string = 'WHERE';
  //const calories: FormDataEntryValue | null = form.get('Calories');
  //`${name}-ordering`
  console.log(field_names);
  field_names.forEach((name: string) => {
    const field_value: FormDataEntryValue | null = form.get(name);
    const operator: FormDataEntryValue | null = form.get(`${name}-ordering`);
    if (operator === 'less') {
      query += ` ${name.toLowerCase()} <= ${field_value} AND`;
      console.log(query);
    } else if (operator === 'greater') {
      console.log('GREATER');
    }
    // query += `${name}`
  });
}
