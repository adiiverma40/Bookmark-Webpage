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
