export async function generic_fetch(json_body: string, property_name: string) {
  const data = await fetch('http://localhost:4000/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query: json_body,
    }),
  })
    .then((res) => res.json())
    // .then((data) => { return data.data});
    .then((data) => {
      return data.data;
    });

  return data.property_name;
}
