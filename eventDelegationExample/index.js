document.getElementById('listToDestroy').addEventListener('click', function (e) { 
  console.log(e.target);
  const elm = e.target.parentNode; 
  elm.parentNode.removeChild(elm);
  // e.preventDefault();
});
console.log('document ready');