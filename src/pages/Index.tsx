import { useEffect, useState, useRef } from 'react';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

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

  useEffect(() => {
    const particles = [];
    const container = document.getElementById('particles-container');
    if (!container) return;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.setProperty('--drift', `${(Math.random() - 0.5) * 100}px`);
      particle.style.setProperty('--rotate', `${Math.random() * 360}deg`);
      particle.style.animationDuration = `${15 + Math.random() * 20}s`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

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
        <h1 className="gothic-unified text-3xl md:text-5xl lg:text-6xl mb-24 text-[#DC143C] text-3d-gothic tracking-[0.2em] uppercase animate-flicker">
          Жду нашей встречи
        </h1>

        <div className="flex justify-center items-end gap-8 md:gap-16 lg:gap-24 mb-24">
          <div className="flex flex-col items-center group">
            <div className="relative neon-line pb-6">
              <span className="gothic-unified text-7xl md:text-8xl lg:text-9xl text-white block transition-all duration-500 text-3d-number group-hover:text-[#DC143C] group-hover:text-3d-number-hover">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
            </div>
            <span className="gothic-unified text-[#8B0000] text-xs md:text-sm lg:text-base uppercase tracking-[0.4em] mt-6 font-light">
              Дней
            </span>
          </div>

          <div className="flex flex-col items-center group">
            <div className="relative neon-line pb-6">
              <span className="gothic-unified text-7xl md:text-8xl lg:text-9xl text-white block transition-all duration-500 text-3d-number group-hover:text-[#DC143C] group-hover:text-3d-number-hover">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
            </div>
            <span className="gothic-unified text-[#8B0000] text-xs md:text-sm lg:text-base uppercase tracking-[0.4em] mt-6 font-light">
              Часов
            </span>
          </div>

          <div className="flex flex-col items-center group">
            <div className="relative neon-line pb-6">
              <span className="gothic-unified text-7xl md:text-8xl lg:text-9xl text-white block transition-all duration-500 text-3d-number group-hover:text-[#DC143C] group-hover:text-3d-number-hover">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
            </div>
            <span className="gothic-unified text-[#8B0000] text-xs md:text-sm lg:text-base uppercase tracking-[0.4em] mt-6 font-light">
              Минут
            </span>
          </div>

          <div className="flex flex-col items-center group">
            <div className="relative neon-line pb-6">
              <span className="gothic-unified text-7xl md:text-8xl lg:text-9xl text-white block transition-all duration-500 text-3d-number group-hover:text-[#DC143C] group-hover:text-3d-number-hover">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
            <span className="gothic-unified text-[#8B0000] text-xs md:text-sm lg:text-base uppercase tracking-[0.4em] mt-6 font-light">
              Секунд
            </span>
          </div>
        </div>

        <div className="relative inline-block">
          <p className="gothic-unified text-xl md:text-3xl lg:text-4xl text-[#8B0000] italic tracking-wide animate-flicker font-light">
            Каждая свеча погаснет...
          </p>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#DC143C] to-transparent opacity-60"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div id="particles-container" className="fixed inset-0 pointer-events-none"></div>

      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-[#1a0000] to-black border-2 border-[#8B0000] px-6 py-3 rounded-lg hover:border-[#DC143C] transition-all duration-300 text-[#8B0000] hover:text-[#DC143C] gothic-unified text-sm uppercase tracking-widest"
      >
        {isMusicPlaying ? '🔇 Тишина' : '🎵 Музыка'}
      </button>

      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_4dc70e0e09.mp3"
      />
    </div>
  );
};

export default Index;