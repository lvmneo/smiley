
import './App.css';
import './modalwin.css';
import ColdestNight from './music/Coldest Night.mp3'
import React, { useState,useRef } from 'react';
import {sm1,sm2,sm3,sm4,sm5,sm6,sm7,sm8,sm9,sm10,sm11,sm12,sm13,panz,mus} from './images'

const smiles = [
  { id: 1, src: sm1, text: "иди нахуй" },
  { id: 2, src: sm2, text: "у тебя плохое настроение?иди нахуй" },
  { id: 3, src: sm3, text: "еще одно плохое настроение?вскройся" },
  { id: 4, src: sm4, text: "задумался вправо?" },
  { id: 5, src: sm5, text: "задумался влево?" },
  { id: 6, src: sm6, text: "хорошее настроение?иди нахуй,эти смайлики для суицидников" },
  { id: 7, src: sm7, text: "а сегодня не такой уж и плохой день,чтобы понюхать" },
  { id: 8, src: sm8, text: "улыбнись,завтра будет еще более хуевый день =)" },
  { id: 9, src: sm9, text: "ахуй" },
  { id: 10, src: sm10, text: "опущенный долбаеб" },
  { id: 11, src: sm11, text: "а мама говорила ЛУЧШЕ БЫ Я ТЕБЯ НЕ РОЖАЛА.правда" },
  { id: 12, src: sm12, text: "после первой дороги - с кайфом" },
  { id: 13, src: sm13, text: "заебись живется только тем,кто не живет" }
]

const App = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSmile, setSelectedSmile] = useState(null);
  const audioRef = useRef(new Audio(ColdestNight));

  const handleSmileClick = (smile) => {
    setSelectedSmile(smile);
    setModalOpen(true);
  };


  const closeModal = () => {
    setModalOpen(false);
    setSelectedSmile(null);
  };

  const toggleMusic = () => {
    if (audioRef.current.paused) {
      audioRef.current.play(); 
    } else {
      audioRef.current.pause(); 
    }
  };

  return (
    <div className='main-container'>
      <h1 className='text-item'></h1>
      <div className="smile-container">
        {smiles.map((smile) => (
          <img
            key={smile.id}
            src={smile.src}
            alt={`Смайл ${smile.id}`}
            className="smile"
            onClick={() => handleSmileClick(smile)}
           style={{ cursor: 'pointer' }}
          />
        ))}
        
      </div>
      <span onClick={toggleMusic} className="music-button">
      <img src={mus} alt="Включить музыку" style={{ width: '40px', height: '40px' }} />
      </span>

      <img className='panel-z' src={panz} alt='panz' width={700}/>  
      
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>{selectedSmile?.text}</p>
            <button className ='btn-ok'onClick={closeModal}>OK</button>
           
          </div>
        </div>
      )}
    </div>
    
  );

}

export default App;
