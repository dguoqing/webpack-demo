import './assets/style/base.css'
import './assets/style/index.less'
import ReactDOM from 'react-dom'
import Img from './assets/images/img.jpg'



let image = new Image()
image.src = Img
document.body.appendChild(image)
console.log(22222)
const fn = () => console.log(555)
let arr = []
console.log(arr.includes(1))


function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
  }
  var hw = helloWorldGenerator();
const log = target => {
    console.log(target)
}
@log
class Person{
    b= 2
}
class B{

}

// let fun = async () => {
//     await 2
// }

let isHas = [1,2,3].includes(2);

new Promise((resolve, reject) => {
    resolve(100);
});

const App = () => (
    <div>
        <div>暗示的发生大幅</div>
        <div className='bg'></div>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))

