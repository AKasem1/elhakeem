import React, {Component, useState} from 'react';
import { Element } from 'react-scroll';
import photo from '../assets/ElHakeem-photo.png';
import BrainAnimation from '../Components/BrainAnimation';
import VirusAnimation from '../Components/VirusAnimation';
import DNAAnimation from '../Components/DNAAnimation';
import NeuroAnimation from '../Components/NeuroAnimation';
import Cards from '../Components/Cards';
import PricingPackage from '../Components/Pricing Package';
import GradeCard from '../Components/GradeCard';
import WaveAnimation from '../Components/WaveAnimation';
import sec1 from '../assets/1sec.jpg';
import sec2 from '../assets/2sec.jpg';
import sec3 from '../assets/3sec.jpg';
const Home = () => {
    const [selectedGrade, setSelectedGrade] = useState('');
    const cards = [
        {
          title: 'الصف الأول الثانوي',
          subtitle: 'حكومي - لغات',
          description: '05',
          Component: sec1,
          color: '#E97451'
        },
        {
          title: 'الصف الثاني الثانوي',
          subtitle: 'حكومي - لغات',
          description: '06',
          Component: sec2,
          color: '#003153'
        },
        {
            title: 'الصف الثالث الثانوي',
            subtitle: 'حكومي - لغات',
            description: '06',
            Component: sec3,
            color: '#003153'
          },
      ];

    
    const pricingDetails = [
        "شامل جميع فروع الرياضيات",
        "درسين في الأسبوع",
        "اختبار بعد كل درس",
        "اختبار شهري",
        "تقييم للطالب",
        "متابعة دورية مع ولي الأمر"
      ];

      const handleCardClick = (grade) => {
        setSelectedGrade(grade);
    };
    
    return (
        <div className="landing-page">
            <Element name="home" className="home-section">
                <div className="home-content">
                    <BrainAnimation />
                    <VirusAnimation />
                    <DNAAnimation />
                    <NeuroAnimation />
                    <div className="photo-container">
                        <img src={photo} alt="أ/ أحمد خلاف" className="home-photo" />
                    </div>
                    <div className="home-details">
                        <h1 className='firstName'>أ/ أحمد <span className='secondName'>عبد الحكيم</span></h1>
                        <p>الحكيم في الأحياء</p>
                    </div>
                </div>
            </Element>
            <div className="separator">
                <WaveAnimation />
            </div>
            <Element name="grades" className="section">
                <h2>المراحل التعليمية</h2>
                <div className="card-container">
            {cards.map((card, index) => (
                <GradeCard
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                Component={card.Component}
                color={card.color}
                onClick={() => handleCardClick(card.title)}
                />
            ))}
            </div>
            </Element>
            <div className="separator">
                <WaveAnimation />
            </div>
            <Element name="aboutus" className="about-section">
                {/* <WhyUs /> */}
                <Cards />
                {/* <Arrow /> */}
                {/* <NotesAnimation /> */}
            </Element>
            <div className="separator">
                <WaveAnimation />
            </div>
            <div className="separator">
                <WaveAnimation />
            </div>
            <Element className="pricing-section" name='courses'>
            {selectedGrade && (<PricingPackage grade={selectedGrade} price="180 ج.م / شهر" details={pricingDetails} />)}
            </Element>
            
        </div>
    );
};

export default Home;
