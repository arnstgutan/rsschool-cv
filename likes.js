let heart = document.querySelector('.heart');
let hearticon = document.querySelector('.hearticon');
let likesNumber = document.querySelector('.likes-number');

heart.onclick = function () {
  if (heart.classList.contains('added')) {
    likesNumber.textContent--;  
  } else {
    likesNumber.textContent++;
  }

  heart.classList.toggle('added');
  hearticon. classList.toggle('added');
  
};
