function RatingEmoji({ rating }) {
  return (
    <>
      <span>
        {rating === 5 ? "🎯" : rating === 4 ? "👍" : rating === 3 ? "😑" : ""}
      </span>
    </>
  );
}

export default RatingEmoji;

/*
rating < 3, return null
rating = 3, return meh emoji
rating = 4, return thumbs up
rating = 5, return bullseye
*/

/* In case of Images :

function RatingEmoji({ rating }) {

if(rating < 3) return null;

const emojiMap = {
3 : {src : "meh", alt: "average", boxSize: "20px"},
4 : {src : "thumbsUp", alt: "recommended", boxSize: "20px"},
5 : {src : "bullsEye", alt: "exceptional", boxSize: "20px"},
}
  return (
    <>
      <Image {...emojiMap[rating]}  // spreading specific rating object
       For eg : if rating = 2
      <Image {{{src : "thumbsUp", alt: "recommended", boxSize: "20px"}}}/>
      
      />      
    </>
  );
}

export default RatingEmoji;
*/

// In 'PlatformListIcons', we mapped 'icons' with 'game.platform' in 'iconMap' object
// In 'SortSelector', we stored 'values' and 'labels' in 'sortOrders' array of objects
// In 'emojiMap', we mapped 'emoji image' with 'game.rating' in object of objects
