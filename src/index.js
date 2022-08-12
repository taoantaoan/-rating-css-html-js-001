const ratingsHTML = document.querySelectorAll(".rating");
let rating = {};
const hover = {};

const updateClass = (rating, id, element, hover = false) => {
  console.log('hover')
  if (hover && Number(id) <=  Number(hover)) {
    element.classList.remove("star-blank");
    element.classList.add("star-filled");
  } else if (hover && Number(id) >  Number(hover)) {
    element.classList.remove("star-filled");
    element.classList.add("star-blank");
  } else if (Number(id) <= rating) {
    element.classList.remove("star-blank");
    element.classList.add("star-filled");
  } else {
    element.classList.remove("star-filled");
    element.classList.add("star-blank");
  }
};

const setRating = (e, idx, altId) => {
  const id = e ?  e.target.id : altId;
  rating[idx] = id;
  const stars = ratingsHTML[idx].children;
  for (let i = 0; i < stars.length; i++) {
    updateClass(id, i + 1, stars[i]);
  }
  localStorage.setItem('ratings', JSON.stringify(rating));
};

const setHover = (ratingIndex, hoverId, type) => {
  if (type === "mouseenter") {
    hover[ratingIndex] = hoverId;
  } else {
    hover[ratingIndex] = false;
  }

  const stars = ratingsHTML[ratingIndex].children;
  Array.from(stars).forEach(start => console.log('running'))
  for (let i = 0; i < stars.length; i++) {
    updateClass(rating[ratingIndex], i + 1, stars[i], hover[ratingIndex]);
  }
} 

window.onload = (event) => {
  rating =  localStorage.getItem('ratings');
  if (rating === null) {
    rating = {}
  } else {
    rating = JSON.parse(rating);
    Object.entries(rating).forEach((rating) => {
      setRating(undefined, Number(rating[0]), Number(rating[1]))
    })
  }
  console.log(rating);
};

ratingsHTML.forEach((rating, ratingIndex) => {
  rating[ratingIndex] = false;
  
  rating.addEventListener("click", (e) => {setRating(e, ratingIndex)});
  
  rating.querySelectorAll(".star").forEach((star, starIndex) => {
    star.addEventListener("mouseenter", (e) => {setHover(ratingIndex, e.target.id, "mouseenter")});
    star.addEventListener("mouseleave", (e) => {setHover(ratingIndex, e.target.id, "mouseleave")});
  })
})