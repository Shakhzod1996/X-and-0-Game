let ul = document.querySelector(".ul");
let som = 0;
let result = '';

let x = "<i class='bx bx-x'></i>"
ul.addEventListener("click", (e) => {
  if ((e.target.className = "li")) {
    som % 2 === 0
    ? e.target.innerHTML = "x"  
    : e.target.innerHTML = "o";
    som++;
    check()
  }
});

let count = 0;
let li = document.querySelectorAll("li");
li.forEach(item => {
  item.addEventListener('click', () => {
    count++
    if (count % 2 === 1) {
      item.style.background = 'rgb(252, 207, 8)'
      item.style.color = '#fff'
    } else {
      item.style.background = 'rgb(148, 57, 32)'
      item.style.color = '#fff'
    }
    
  })
})

function check() {
  let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < arr.length; i++) {
    if (li[arr[i][0]].innerHTML == "x" &&
    li[arr[i][1]].innerHTML == "x" &&
    li[arr[i][2]].innerHTML == "x") {
      result = 'Player 1 wins'
      prepareResult(result)
    } else if (li[arr[i][0]].innerHTML == "o" &&
    li[arr[i][1]].innerHTML == "o" &&
    li[arr[i][2]].innerHTML == "o") {
      result = 'Player 2 wins'
      prepareResult(result)
    }
  }
}


let modal = document.querySelector('.modal')
function prepareResult(winner) {
  let player = document.querySelector('.player')
  player.innerHTML = winner

  modal.classList.add('modal-show')
}

let button = document.querySelector('.restart')
button.addEventListener('click', () => {
  modal.classList.remove('modal-show')
  location.reload()
})
