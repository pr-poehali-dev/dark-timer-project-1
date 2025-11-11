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
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/files/f6a903cd-8c37-4ba3-9418-d60047c89d51.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.9)_100%)]" />
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="gothic-font text-4xl md:text-6xl lg:text-7xl mb-16 text-[#DC143C] text-glow-intense animate-flicker tracking-widest uppercase">
          Жду нашей встречи
        </h1>

        <div className="flex justify-center gap-4 md:gap-8 lg:gap-12 mb-16">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] to-[#3d0000] blur-xl opacity-50 rounded-lg" />
              <div className="relative bg-gradient-to-br from-[#1a0000] to-black border-2 border-[#8B0000] px-6 py-8 md:px-10 md:py-12 lg:px-14 lg:py-16 rounded-lg box-glow">
                <span className="gothic-font text-5xl md:text-7xl lg:text-8xl text-[#DC143C] text-glow-intense block font-bold animate-pulse-glow">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
              </div>
            </div>
            <span className="text-[#8B0000] text-sm md:text-base lg:text-lg uppercase tracking-[0.3em] mt-4 font-bold">
              Дней
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] to-[#3d0000] blur-xl opacity-50 rounded-lg" />
              <div className="relative bg-gradient-to-br from-[#1a0000] to-black border-2 border-[#8B0000] px-6 py-8 md:px-10 md:py-12 lg:px-14 lg:py-16 rounded-lg box-glow">
                <span className="gothic-font text-5xl md:text-7xl lg:text-8xl text-[#DC143C] text-glow-intense block font-bold animate-pulse-glow">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
              </div>
            </div>
            <span className="text-[#8B0000] text-sm md:text-base lg:text-lg uppercase tracking-[0.3em] mt-4 font-bold">
              Часов
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] to-[#3d0000] blur-xl opacity-50 rounded-lg" />
              <div className="relative bg-gradient-to-br from-[#1a0000] to-black border-2 border-[#8B0000] px-6 py-8 md:px-10 md:py-12 lg:px-14 lg:py-16 rounded-lg box-glow">
                <span className="gothic-font text-5xl md:text-7xl lg:text-8xl text-[#DC143C] text-glow-intense block font-bold animate-pulse-glow">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
              </div>
            </div>
            <span className="text-[#8B0000] text-sm md:text-base lg:text-lg uppercase tracking-[0.3em] mt-4 font-bold">
              Минут
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] to-[#3d0000] blur-xl opacity-50 rounded-lg" />
              <div className="relative bg-gradient-to-br from-[#1a0000] to-black border-2 border-[#8B0000] px-6 py-8 md:px-10 md:py-12 lg:px-14 lg:py-16 rounded-lg box-glow">
                <span className="gothic-font text-5xl md:text-7xl lg:text-8xl text-[#DC143C] text-glow-intense block font-bold animate-pulse-glow">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>
            <span className="text-[#8B0000] text-sm md:text-base lg:text-lg uppercase tracking-[0.3em] mt-4 font-bold">
              Секунд
            </span>
          </div>
        </div>

        <p className="text-2xl md:text-4xl lg:text-5xl text-[#8B0000] text-glow italic tracking-wider animate-flicker font-serif">
          Каждая свеча погаснет...
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

export default Index;
