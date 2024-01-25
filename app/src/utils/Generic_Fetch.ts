export async function generic_fetch(json_body: string, property_name: string) {
  const res = await fetch('http://localhost:4000/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query: json_body,
    }),
  });
  let data = await res.json();
  data = data.data[property_name];
  return data;
}
