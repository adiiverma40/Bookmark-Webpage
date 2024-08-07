import Jokes from "./jokesApi";
const UNSPLASH_ACCESS_KEY = "4Ugy7tvb3jrVl2ImXJsGtmgMIyjU5BDkUGZ9V9OPrfY";

export async function UnsplashAPI() {
  try {

    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=nature&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    
    return data.urls.regular;
  } catch (error) {
    console.error("Failed to fetch image from Unsplash:", error);
    return null
  }
}
