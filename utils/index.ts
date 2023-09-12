export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "911855d3c7mshad0b2bd87b40fbcp17982ajsn2d5548fd177e",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}
