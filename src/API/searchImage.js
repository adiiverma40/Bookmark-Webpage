const UNSPLASH_ACCESS_KEY = "4Ugy7tvb3jrVl2ImXJsGtmgMIyjU5BDkUGZ9V9OPrfY";

async function searchImage(query) {
    let query_search;
    if(query){
        query_search = query
    }
    else {
        query_search = "nature"
    }
  const promise = await fetch(
    `https://api.unsplash.com/search/photos?query=${query_search}&per_page=10&client_id=${UNSPLASH_ACCESS_KEY}`
  );
  let data = await promise.json();
  return data;
}
export default searchImage;
