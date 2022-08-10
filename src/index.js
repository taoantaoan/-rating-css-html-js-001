const ratingsHTML = document.querySelectorAll(".rating");
const rating = {};
const hover = {};

const updateClass = (rating = 0, id, element, hover = false) => {
  if (hover && Number(id) <=  Number(hover)) {
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

const setRating = (e, idx) => {
  const {id} =  e.target;
  rating[idx] = id;
  const stars = ratingsHTML[idx].children;
  for (let i = 0; i < stars.length; i++) {
    updateClass(id, i + 1, stars[i]);
  }
};

const setHover = (ratingIndex, hoverId, type) => {
  if (type === "mouseenter") {
    hover[ratingIndex] = hoverId;
  } else {
    hover[ratingIndex] = false;
  }

  const stars = ratingsHTML[ratingIndex].children;
  for (let i = 0; i < stars.length; i++) {
    updateClass(rating[ratingIndex], i + 1, stars[i], hover[ratingIndex]);
  }
} 

ratingsHTML.forEach((rating, ratingIndex) => {
  rating[ratingIndex] = false;
  
  rating.addEventListener("click", (e) => {setRating(e, ratingIndex)});
  
  rating.querySelectorAll(".star").forEach((star, starIndex) => {
    star.addEventListener("mouseenter", (e) => {setHover(ratingIndex, e.target.id, "mouseenter")});
    star.addEventListener("mouseleave", (e) => {setHover(ratingIndex, e.target.id, "mouseleave")});
  })
})