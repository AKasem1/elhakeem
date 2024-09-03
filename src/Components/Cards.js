import React from 'react';
import { IoTimerOutline } from "react-icons/io5";
import { MdQuiz } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai";
import { MdOutlinePermIdentity } from "react-icons/md";
import './Cards.css';
const Cards = () => {
  return (
  <div className="flip-card">
    <div className="flip-card-inner-one">
      <div className="flip-card-front-one">
        <AiOutlineRetweet className="faicon" />
      </div>
      <div className="flip-card-back-one">
        <h1 className='caption'>متابعة دورية مع ولي الأمر</h1>
      </div>
    </div>
    <div className="flip-card-inner-two">
      <div className="flip-card-front-two">
        <MdQuiz className="faicon" />
      </div>
      <div className="flip-card-back-two">
        <h1 className='caption'>امتحانات و واجبات تفاعلية</h1>
      </div>
    </div>
    <div className="flip-card-inner-three">
      <div className="flip-card-front-three">
        <IoTimerOutline className="faicon" />
      </div>
      <div className="flip-card-back-three">
        <h1 className='caption'>توفير للوقت والمجهود</h1>
      </div>
    </div>
    <div className="flip-card-inner-four">
      <div className="flip-card-front-four">
        <MdOutlinePermIdentity className="faicon" />
      </div>
      <div className="flip-card-back-four">
        
        <ul className='aboutme'>
          <li>أخصائي ميكروبيولوجي علوم سوهاج</li>
          <li>معلم أول بوزارة التربية والتعليم</li>
          <li>خبرة ١٣ عام في التدريس للثانوية العامة والأزهرية</li>
          </ul>
        </div>
    </div>
  </div>
  );
};

export default Cards;
