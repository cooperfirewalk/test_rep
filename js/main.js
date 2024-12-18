import {getthis} from './git-test.js'

console.log('hi')
console.log(document.querySelector('ul').children)

document.querySelector('.test').innerHTML = `<li class="social__comment">
  <img
    class="social__picture"
    src=""
    alt=""
    width="35" height="35">
  <p class="social__text">{{текст комментария}}</p>
</li>`;

let x = document.createElement('li');
x.innerHTML = `<img
    class="social__picture"
    src="{{аватар}}"
    alt="{{имя комментатора}}"
    width="35" height="35">
  <p class="social__text">{{текст комментария}}</p>`
  x.classList.add('social__comment')

  document.querySelector('.test').appendChild(x);
  getthis();

