import React, {useState} from 'react';
import { useEffect } from 'react';
import arrow1 from '../public/icons/arrowright.svg'
import arrow2 from '../public/icons/arrowleft.svg'
function Slideshow () {
    const imagens = ['slide1.png', 'slide2.png'];
    const [indiceAtual, setIndiceAtual] = useState(0);

    useEffect(() => {
        const interval = setInterval(proximoSlide, 5000);
        return() => clearInterval(interval);
    }, []);

    const proximoSlide = () => {
        setIndiceAtual((prevIndice) =>(prevIndice + 1) % imagens.length);
    };

    const voltarSlide = () => {
        setIndiceAtual((prevIndice) =>(prevIndice - 1 + imagens.length)% imagens.length);
    };  

    return (
        <div className='slide_container' > 
            <img src={imagens[indiceAtual]} alt = {`Imagem ${indiceAtual + 1}`} />
            <div className="slide_controls">
                <button onClick={voltarSlide}>
                    <img src={arrow2} alt="" />
                </button>
                <button onClick={proximoSlide}>
                    <img src={arrow1} alt="" />
                </button>
            </div>
            
        </div>
    );
}

export default Slideshow;