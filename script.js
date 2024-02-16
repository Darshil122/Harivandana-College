//navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  //Courses
  const undergraduateButton = document.getElementById('undergraduateButton');
  const postgraduateButton = document.getElementById('postgraduateButton');
  const undergraduateSection = document.getElementById('undergraduateSection');
  const postgraduateSection = document.getElementById('postgraduateSection');

  undergraduateButton.addEventListener('click', () => {
      undergraduateSection.style.display = 'block';
      undergraduateSection.style.display = 'flex';
      postgraduateSection.style.display = 'none';
  });

  postgraduateButton.addEventListener('click', () => {
      undergraduateSection.style.display = 'none';
      postgraduateSection.style.display = 'block';
      postgraduateSection.style.display = 'flex';
      postgraduateSection.style.marginLeft = '300px';
      postgraduateSection.classList.add(graduate);
  });