console.log('hello');

const ratingsHTML = document.querySelectorAll(".rating");
console.log(ratingsHTML);
const rating = {};
const hover = {};

const updateClass = (rating, id, element, hover) => {
  console.log('-----------: ', hover)
  if (hover && Number(hover <= rating)) {
    element.classList.remove("star-blank");
    element.classList.add("star-filled");
  } else if (Number(id) <= rating) {
    element.classList.remove("star-blank");
    element.classList.add("star-filled");
  } else {
    element.classList.remove("star-filled");
    element.classList.add("star-blank");
  }
};

const setRatingAndHover = (e, idx, type, starIndex = 0) => {
  console.log(type)
  console.log(hover)
  let id = starIndex ? starIndex : e.target;
  rating[idx] = id;
  // debugger;
  hover[idx] = type === "mouseenter" ? id : false;
  console.log('hover----', hover)
  const stars = ratingsHTML[idx].children;
  console.log('id: ', id)
  console.log(stars);
  for (let i = 0; i < stars.length; i++) {
    console.log(stars[i]);
    updateClass(id, i + 1, stars[i], hover[idx]);
  }
};

ratingsHTML.forEach((rating, ratingIndex) => {
  rating[idx] = false;
  hover[idx] = false;
  console.log(hover)
  // addEventListener("click", (e) => {console.log(e.target.id)})
  rating.addEventListener("click", (e) => {setRatingAndHover(e, ratingIndex, "click")})
  
  rating.querySelectorAll(".star").forEach((star, starIndex) => {
    console.log(rating);
    star.addEventListener("mouseenter", (e) => {setRatingAndHover(e, ratingIndex, "mouseenter", starIndex)})
    star.addEventListener("mouseleave", (e) => {setRatingAndHover(e, ratingIndex, "mouseleave"), starIndex})
  })
  // rating.addEventListener("mouseenter", (e) => {console.log('runnning mouse enter')})
  // addEventListener("mouseleave", (e) => {setRatingAndHover(e, idx, "mouseleave")})
})