console.log('hello');

const ratingsHTML = document.querySelectorAll(".rating");
console.log(ratingsHTML);
const rating = {};

const updateClass = (rating, id, element) => {
  if (Number(id) <= rating) {
    element.classList.remove("star-blank");
    element.classList.add("star-filled");
  } else {
    element.classList.remove("star-filled");
    element.classList.add("star-blank");
  }
};

const setRating = (e, idx) => {
  const {id} = e.target;
  rating[idx] = id;
  const stars = ratingsHTML[idx].children;
  console.log('id: ', id)
  console.log(stars);
  // stars.forEach((star, index) => {
  //   updateClass(id, index, star);
    
  // })
  for (let i = 0; i < stars.length; i++) {
    console.log(stars[i]);
    updateClass(id, i + 1, stars[i]);
  }
};

ratingsHTML.forEach((rating, idx) => {
  rating[idx] = false;
  // addEventListener("click", (e) => {console.log(e.target.id)})
  addEventListener("click", (e) => {setRating(e, idx)})
})