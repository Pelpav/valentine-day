"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({ years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

    const calculateTimeLeft = () => {
        const targetDate = new Date('2025-01-10T23:10:00'); // Date cible
        const now = new Date();
        const difference = now.getTime() - targetDate.getTime();

        const seconds = Math.floor((difference / 1000) % 60);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const years = Math.floor(days / 365);

        setTimeLeft({ years, days: days % 365, hours, minutes, seconds });
    };

    useEffect(() => {
        const interval = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex h-screen flex-col items-center justify-center" style={{ background: 'linear-gradient(120.3deg, #FFD6A5 31.56%, rgba(255, 255, 255, 0) 94.83%)', overflow: 'hidden', textAlign: 'center' }}>
            <h1 className="my-4 text-4xl text-pink-600">💖 Temps écoulé depuis qu&apos;on est ensemble : 💖</h1>
            <div className="text-2xl text-red-500">
                {timeLeft.years > 0 && <span>{timeLeft.years} an{timeLeft.years !== 1 ? 's' : ''} 💕 </span>}
                {timeLeft.days > 0 && <span>{timeLeft.days} jour{timeLeft.days !== 1 ? 's' : ''} 🌼 </span>}
                {timeLeft.hours > 0 && <span>{timeLeft.hours} heure{timeLeft.hours !== 1 ? 's' : ''} ⏰ </span>}
                {timeLeft.minutes > 0 && <span>{timeLeft.minutes} minute{timeLeft.minutes !== 1 ? 's' : ''} 🕒 </span>}
                <span>{timeLeft.seconds} seconde{timeLeft.seconds !== 1 ? 's' : ''} 💞 </span>
            </div>
        </div>
    );
}
