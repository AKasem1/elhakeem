import React from 'react';
import { IoTimerOutline } from "react-icons/io5";
import { MdQuiz } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai";

const WhyUs = () => {
  return (
    <div className="why-us-card">
      <div className="why-us-heading">
        <span className="why-us-highlight">بنقدملك</span>
      </div>
      <div className="why-us-content">
        <div className="why-us-item why-us-create">
          <AiOutlineRetweet size={24} className="why-us-icon" />
          <span className="why-us-text">متابعة دورية مع ولي الأمر</span>
        </div>
        <div className="why-us-item why-us-post">
          <MdQuiz size={24} className="why-us-icon" />
          <span className="why-us-text">امتحانات و واجبات
          تفاعلية</span>
        </div>
        <div className="why-us-item why-us-inspire">
          <IoTimerOutline size={24} className="why-us-icon" />
          <span className="why-us-text">توفير
          للوقت و المجهود</span>
        </div>
      </div>
      <button className="why-us-button">حلمك يستاهل</button>
    </div>
  );
};

export default WhyUs;
