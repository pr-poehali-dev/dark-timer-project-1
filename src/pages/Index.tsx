import { useEffect, useState } from 'react';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-28T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-[#0a0000] to-[#1a0000] flex items-center justify-center">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/files/f6a903cd-8c37-4ba3-9418-d60047c89d51.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.95)_100%)]" />
      
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <h1 className="gothic-modern text-3xl md:text-5xl lg:text-6xl mb-24 text-[#DC143C] text-glow-subtle tracking-[0.2em] uppercase animate-flicker">
          Жду нашей встречи
        </h1>

        <div className="flex justify-center items-end gap-8 md:gap-16 lg:gap-24 mb-24">
          <div className="flex flex-col items-center group">
            <div className="relative neon-line pb-6">
              <span className="numbers-font text-7xl md:text-8xl lg:text-9xl text-white block transition-all duration-500 group-hover:text-[#DC143C] group-hover:text-glow-number">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[#8B0000] text-xs md:text-sm lg:text-base uppercase tracking-[0.4em] mt-6 font-light" style={{fontFamily: 'Cinzel, serif'}}>
              Дней
            </span>
          </div>

          <div className="flex flex-col items-center group">
            <div className="relative neon-line pb-6">
              <span className="numbers-font text-7xl md:text-8xl lg:text-9xl text-white block transition-all duration-500 group-hover:text-[#DC143C] group-hover:text-glow-number">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[#8B0000] text-xs md:text-sm lg:text-base uppercase tracking-[0.4em] mt-6 font-light" style={{fontFamily: 'Cinzel, serif'}}>
              Часов
            </span>
          </div>

          <div className="flex flex-col items-center group">
            <div className="relative neon-line pb-6">
              <span className="numbers-font text-7xl md:text-8xl lg:text-9xl text-white block transition-all duration-500 group-hover:text-[#DC143C] group-hover:text-glow-number">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[#8B0000] text-xs md:text-sm lg:text-base uppercase tracking-[0.4em] mt-6 font-light" style={{fontFamily: 'Cinzel, serif'}}>
              Минут
            </span>
          </div>

          <div className="flex flex-col items-center group">
            <div className="relative neon-line pb-6">
              <span className="numbers-font text-7xl md:text-8xl lg:text-9xl text-white block transition-all duration-500 group-hover:text-[#DC143C] group-hover:text-glow-number">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[#8B0000] text-xs md:text-sm lg:text-base uppercase tracking-[0.4em] mt-6 font-light" style={{fontFamily: 'Cinzel, serif'}}>
              Секунд
            </span>
          </div>
        </div>

        <div className="relative inline-block">
          <p className="text-xl md:text-3xl lg:text-4xl text-[#8B0000] italic tracking-wide animate-flicker font-light" style={{fontFamily: 'Cormorant, serif'}}>
            Каждая свеча погаснет...
          </p>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#DC143C] to-transparent opacity-60"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

export default Index;