import React, { useState } from 'react';

function StopWatch() {
  const [timer, setTimer] = useState({ H:0, M:0, S:0, MS:0 });
  const [inverv, setInterv] = useState();

  const startTimer = () => {
    run();
    setInterv(setInterval(run(),10));
  }

  const run = () => {
    let = updateH = timer.H;
    let = updateM = timer.M;
    let = updateS = timer.S;
    let = updateMS = timer.MS;

    if( timer.M === 60 ) {
      updateH ++;
      updateM = 0;
    }
    if( timer.S === 60 ) {
      updateM ++;
      updateS = 0;
    }
    if( timer.MS === 100 ) {
      updateS ++;
      updateMS = 0;
    }
    setTimer({ H: updateH, M: updateM, S: updateS, MS: updateMS })
  }

  return (
    <div>
      <span>timer.H</span>
      <span>:</span>
      <span>timer.M</span>
      <span>:</span>
      <span>timer.S</span>
      <span>:</span>
      <span>timer.MS</span>
      <button onClick={startTimer}>Start</button>
    </div>
  );
}

export default StopWatch;



import React, { useState } from 'react';

function StopWatch() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInsterv] = useState();
  const [status, setStatus] = useState(0);

  const startTimer = () => {
    run();
    setStatus(1);
    setInsterv(setInterval(run(), 10));
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(0);
  }

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  }

  let updateMs = time.ms;
  let updateS = time.s;
  let updateM = time.m;
  let updateH = time.h;

  const run = () => {
    if(updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if(updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if(updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs++
    return setTime({ms:updateMs, s:updateS, m:updateM, h:updateH})
  }

  return (
    <div>
      <span>{(time.h >= 10) ? time.h : "0" + time.h}</span>
      <span>:</span>
      <span>{(time.m >= 10) ? time.m : "0" + time.m}</span>
      <span>:</span>
      <span>{(time.s >= 10) ? time.s : "0" + time.s}</span>
      <span>:</span>
      <span>{(time.ms >= 10) ? time.ms : "0" + time.ms}</span>
      {status === 0?
        <button onClick={ startTimer }>start</button> : ''
      }
      {status === 1?
        <div>
          <button onClick={ stop }>Stop</button>
          <button onClick={ reset }>reset</button>
        </div>
        : ''
      }

    </div>
  )
}

export default StopWatch;
