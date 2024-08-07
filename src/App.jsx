import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { UnsplashAPI } from "./API/UnsplashAPI";
import { useDominantColor } from "./API/useDominantColor";
function App() {
  const [background, setBackground] = useState(null);
  const [imageUrl, setImageUrl] = useState("rgb(#000)");
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const fetchBackground = async () => {
      console.log("fetch background");
      const url = await UnsplashAPI();
      if (url) {
        setBackground(url);
        localStorage.setItem("background", JSON.stringify(url));
      }
    };

    fetchBackground();
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = background;
    img.onload = () => {
      setImageUrl(img.src);
      setImageLoaded(true);
      console.log(imageUrl);
    };
    img.onerror = () => {
      console.error("Failed to load image.");
    };
  }, [background]);
  const fontColor = useDominantColor(background);

  return (
    <>
      <Header fontColor={fontColor} />
      <Outlet context={{ imageUrl, fontColor }} />
      <Footer fontColor={{ fontColor }} />
    </>
  );
}

export default App;
