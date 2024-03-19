import { useState} from 'react'
import "./styles.css";
import Slideshow from './Slideshow'
import { cards, message } from './constants';
import Card from './componets/Card';

function Topo () {

    const [secaoAtual, setSecaoAtual] = useState('home');

    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    };
    return (
        <header>
        <img src = "logo.png" alt="Logo" className="logo" />

        <nav>
            <ul>
                <li onClick={() => cliqueSecao('home')} className='botao-menu'>Home</li>
                <li onClick={() => cliqueSecao('produtos')} className='botao-menu'>Produtos</li>
                <li onClick={() => cliqueSecao('promoção')} className='botao-menu'>Promoção</li>
                <li onClick={() => cliqueSecao('contato')} className='botao-menu'>
                <a href={message} target='_blank'>contato</a>
                </li>
            </ul>
        </nav>

        <Slideshow />
        <div>
            {secaoAtual==='home' && (
                <div className='secao'>
                    <h1>Alagoinhas Express </h1>
                    {}
                </div>
            )}
            {secaoAtual==='produtos' && (
                <div className='secao'>
                    <h1> produtos</h1>
                      <div className='card_container'> {
                        cards.map((item,idx) => <Card src={item.src} price={item.price} key={idx} title={item.title}/>)}
                      </div>
                    
                </div>
        
    )}
    {secaoAtual==='servicos' && (
                <div className='secao'>
                    <h1> Produtos </h1>
                    {}
                </div>
    )}
    {secaoAtual==='contato' && (
                <div className='secao'>
                   
                    {}
                </div>
    )}
    </div>
        </header>
    );
}

export default Topo;