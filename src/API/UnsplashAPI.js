import Jokes from "./jokesApi";
import useWindowSize from "../hooks/useWindowsize";
const UNSPLASH_ACCESS_KEY = "api";
let setupLine = "";
let punchLine = "";
export async function UnsplashAPI() {
  try {
    const joke = await Jokes();
   
    if (joke) {
      setupLine = joke.setup;
      punchLine = joke.punchline;
      const{width,height } = useWindowSize()
      
    }
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
      // return `https://placehold.co/600x400?text=${setupLine}/n${punchLine}`
    }

    const data = await response.json();
    n += 1;
    console.log(data, n);

    return data.urls.regular;
  } catch (error) {
    console.error("Failed to fetch image from Unsplash:", error);
    // return `https://placehold.co/800?text=Hello\nWorld&font=roboto`
    // return `https://placehold.co/800@3x.png`
    // return `https://placehold.co/1920x1080?text=${setupLine}\n${punchLine}`
    console.log("jokedfsdfssdfs : ",setupLine, punchLine ,width ,height)
    return `https://placehold.jp/3d4070/ffffff/${width}x${height}.png?text=${setupLine}%0A${punchLine}`
  }
}
