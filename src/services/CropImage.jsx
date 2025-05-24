function CropImage(url) {
  if (!url) return ""; // if any game does not have an image URL, then return empty string and no image
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default CropImage;
