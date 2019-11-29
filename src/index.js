import './base.css'
import './index.less'

import Img from './img.jpg'
let image = new Image()
image.src = Img
document.body.appendChild(image)
console.log(22222)
const fn = () => console.log(555)
let arr = []
console.log(arr.includes(1))
class Person{
    b= 2
}

function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
  }
  var hw = helloWorldGenerator();
