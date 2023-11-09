const handlePickClick = async () => {
  try {
    if ("EyeDropper" in window) {
      //@ts-ignore
      const eyeDropper = await new EyeDropper();

      const { sRGBHex } = await eyeDropper.open();

      return sRGBHex;
    } else {
      console.warn("EyeDropper API is not supported in this browser.");
    }
  } catch (error) {
    console.error("Error opening EyeDropper:", error);
  }
};

export default handlePickClick;
