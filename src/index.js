import add from './add';
import '../public/index.scss';

function component() {
    const element = document.createElement('div');
 

    element.innerHTML = add(1,1);
 
    return element;
}
 
document.body.appendChild(component());