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
      <p className="texto">Para abrir a nossa cápsula, faltam:</p>
      {timerComponents.length ? (
        <span className="span-tempo">
          <div className="time-div" id="dias-horas-div">
              <p className="tempo" id="dias-num">
                {timeLeft.dias < 10 ? "0" + timeLeft.dias : timeLeft.dias}
              </p>{" "}
              <p id="dias">dias</p>
              <p className="tempo" id="horas-num">
                {timeLeft.horas < 10 ? "0" + timeLeft.horas : timeLeft.horas}
              </p>{" "}
              <p id="horas">horas</p>
          </div>
          <div className="time-div" id="minutos-segundos-div">
              <p className="tempo" id="minutos-num">
                {timeLeft.minutos < 10
                  ? "0" + timeLeft.minutos
                  : timeLeft.minutos}
              </p>{" "}
              <p id="minutos">minutos</p>
              <p className="tempo" id="segundos-num">
                {timeLeft.segundos < 10
                  ? "0" + timeLeft.segundos
                  : timeLeft.segundos}
              </p>
              <p id="segundos">segundos</p>
          </div>
        </span>
      ) : (
        <span>Time's up!</span>
      )}
    </div>
  );
}

export default Countdown;
