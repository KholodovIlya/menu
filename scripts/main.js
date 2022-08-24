const tags = ["шашлык", "закуски", "десерты"]
let current_tag = 0;
const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
const title = document.querySelector('.slider .title')
let count = 0;
let width;

function init() {
  goodsOut(goods, tags[0]);

  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
  });
  rollSlider();
}

function goodsOut(data, tag) {
  let out = "";
  title.innerHTML = tag;
  for(let key in data) {
    if(data[key].tag !== tag) continue;
    out += '<div class="cart">';
    out += '<img src="resources/images/goods/' + data[key].img + '">';
    out += '<div class="cost">' + data[key].cost + '&#8381;</div>';
    out += '<p class="name">' + data[key].name + '</p>';
    out += '</div>';
  }

  document.getElementsByClassName("goods-out")[0].innerHTML = out;
}

window.onload = function() { init(); };

window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) count = 0;
    current_tag++; if (current_tag >= tags.length) current_tag = 0; goodsOut(goods, tags[current_tag]);
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) count = images.length - 1;
    current_tag--; if (current_tag < 0) current_tag = tags.length-1; goodsOut(goods, tags[current_tag]);
    rollSlider();
});

function rollSlider() { sliderLine.style.transform = 'translate(-' + count * width + 'px)'; }
