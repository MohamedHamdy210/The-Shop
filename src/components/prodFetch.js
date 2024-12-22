async function prodFetch(url) {
  const result = await fetch(url).then((res) => res.json());
  return result;
}
export default prodFetch;