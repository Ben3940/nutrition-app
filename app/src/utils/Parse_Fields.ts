export function parse_fields(
  form: FormData,
  field_names: string[]
): string[][] {
  let fields: string[][] = [];
  //const calories: FormDataEntryValue | null = form.get('Calories');
  //`${name}-ordering`
  field_names.forEach((name: string) => {
    const field_value: FormDataEntryValue | null = form.get(name);
    const operator: FormDataEntryValue | null = form.get(`${name}-ordering`);
    if (field_value && operator) {
      fields.push([name, field_value.toString(), operator.toString()]);
    }
  });
  return fields;
}
