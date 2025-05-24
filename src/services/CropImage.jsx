import noImage from "../assets/no-image.webp";

function CropImage(url) {
  if (!url) return noImage; // if any game does not have an image URL, then 'noImage' is returned
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default CropImage;
