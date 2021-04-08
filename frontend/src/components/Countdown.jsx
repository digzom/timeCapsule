import React, { useEffect, useState } from "react";

function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2021-11-9`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div>
      <p className="texto">Para abrir a nossa cápsula, faltam</p>
      {timerComponents.length ? (
        <span className="span-tempo">
          <p className="tempo">
            {timeLeft.dias < 10 ? "0" + timeLeft.dias : timeLeft.dias}
          </p>{" "}
          dias
          <p className="tempo">
            {timeLeft.horas < 10 ? "0" + timeLeft.horas : timeLeft.horas}
          </p>{" "}
          horas
          <p className="tempo">
            {timeLeft.minutos < 10 ? "0" + timeLeft.minutos : timeLeft.minutos}
          </p>{" "}
          minutos
          <p className="tempo">
            {timeLeft.segundos < 10
              ? "0" + timeLeft.segundos
              : timeLeft.segundos}
          </p>
          segundos
        </span>
      ) : (
        <span>Time's up!</span>
      )}
    </div>
  );
}

export default Countdown;
