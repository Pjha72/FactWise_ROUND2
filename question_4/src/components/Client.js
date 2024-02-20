import React, {useState} from 'react';
import {createRoot} from 'react-dom/client'
;
const Client = () => {
    const [visible, setVisible] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setVisible(true);
    };
    return (
        <React.Fragment>
            <a href="#" onClick={handleClick}>Want TO Buy a New car</a>
            {visible ? <p>Call +11 22 33 44
                now!</p> : null
            }
        </React.Fragment>
    );
};

document.body.innerHTML = "div id='root'></div>";
const root =  createRoot(document.getElementById('root'));

root.rnder(<Client />);

const rootElement = document.getElementById('root');

setTimeout(()=>{
    console.log('Before CLick:' + rootElement.innerHTML);
    document.querySelector('a').click();
    setTimeout(()=>{
        console.log('After Click:' + rootElement.innerHTML);
    },1000);
},1000);
export default Client;