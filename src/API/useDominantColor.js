import { useState, useEffect } from "react";
import Vibrant from "node-vibrant";

export function useDominantColor(imageUrl) {
  const [fontColor, setFontColor] = useState("#000");

  useEffect(() => {
    if (!imageUrl) return;

    const fetchDominantColor = async () => {
      try {
        const palette = await Vibrant.from(imageUrl).getPalette();
        const dominantColor = palette.Vibrant.rgb;

        // Calculate brightness of the dominant color
        const brightness = (dominantColor[0] * 299 + dominantColor[1] * 587 + dominantColor[2] * 114) / 1000;
        const newFontColor = brightness > 125 ? '#000' : '#fff';
        // const newFontColor = brightness > 125 ? '#000' : '#fff';
        setFontColor(newFontColor);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDominantColor();
  }, [imageUrl]);
  console.log(fontColor)
  return fontColor;
}