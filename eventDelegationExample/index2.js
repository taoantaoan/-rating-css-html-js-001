document.getElementById('doubleHolder').addEventListener('click', function (e) {   
  console.log(e.target);
  if(e.target.classList.contains('double')){
      var btn = document.createElement('button');
      btn.setAttribute('class', 'double');
      btn.innerHTML = 'double';

      var btn2 = document.createElement('button');
      btn2.setAttribute('class', 'double');
      btn2.innerHTML = 'double';
    
      this.appendChild(btn);
      this.appendChild(btn2);
      this.removeChild(e.target);   
    }
  }); 