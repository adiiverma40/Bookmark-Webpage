import { useEffect, useState } from "react";
import searchImage from "../../API/searchImage";
import { useDominantColor } from "../../API/useDominantColor";

function Card({ text, link, description }) {
  let [background, setBackground] = useState(null);
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useEffect(() => {
    async function fetchBackgroundImage() {
      try {
        let data = await searchImage(text);
        if (data.results && data.results.length > 0) {
          let randomNumber = getRandomNumber(0, data.results.length - 1);
          let image = data.results[randomNumber].urls.regular;
         
          setBackground(image);
        } else {
          console.warn("No images found for the query:", text);
          setBackground(`https://placehold.co/600x400?text=${text}`); 
        }
      } catch (error) {
        console.error("Error fetching image:", error);
        setBackground(`https://placehold.co/600x400?text=${text}`);
       
      }
    }

    fetchBackgroundImage();
  }, [text]);

  const colors = [
    "rgb(0, 0, 255)", // Blue
    "rgb(128, 0, 32)", // Burgundy
    "rgb(0, 255, 255)", // Cyan
    "rgb(80, 200, 120)", // Emerald
    "rgb(255, 0, 255)", // Fuchsia
    "rgb(0, 255, 0)", // Green
    "rgb(75, 0, 130)", // Indigo
    "rgb(255, 0, 255)", // Magenta
    "rgb(152, 255, 152)", // Mint green
    "rgb(128, 0, 128)", // Purple
  ];

  const randomColor = colors[getRandomNumber(0, colors.length - 1)];
  let cardColor = useDominantColor(background);
 
  return (
    <div
      className="ag-courses_box"
      style={{
        color: cardColor,
      }}
    >
      <div className="ag-courses_item">
        <a
          target="_blank"
          href={link}
          className="ag-courses-item_link"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            color: cardColor,
          }}
          
        >
          <div
            className="ag-courses-item_bg"
            style={{ background: randomColor }}
          ></div>
          <div className="ag-courses-item_title " >{text}</div>
          <div className="ag-courses-item_date-box">
            Description:
            <span className="ag-courses-item_date">{description}</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card;
