const darkenHexColor = (hexColor: string, factor: number): string => {
  factor = Math.min(1, Math.max(0, factor));

  const hexToRgb = (hex: string) => ({
    red: parseInt(hex.slice(1, 3), 16),
    green: parseInt(hex.slice(3, 5), 16),
    blue: parseInt(hex.slice(5, 7), 16),
  });

  const rgbColor = hexToRgb(hexColor);
  rgbColor.red = Math.round(rgbColor.red * (1 - factor));
  rgbColor.green = Math.round(rgbColor.green * (1 - factor));
  rgbColor.blue = Math.round(rgbColor.blue * (1 - factor));

  const rgbToHex = (rgb: { red: number; green: number; blue: number }) =>
    `#${((1 << 24) | (rgb.red << 16) | (rgb.green << 8) | rgb.blue)
      .toString(16)
      .slice(1)}`;

  return rgbToHex(rgbColor);
};

export default darkenHexColor;
