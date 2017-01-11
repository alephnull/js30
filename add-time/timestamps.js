const timestamps = ["5:43", "2:33", "3:45", "0:47", "5:21", "6:56", "3:46", "5:25", "3:14", "3:31", "5:59", "3:07", "11:29", "8:57", "5:49", "5:52", "5:50", "9:13", "11:51", "7:58", "4:40", "4:45", "6:46", "7:24", "7:12", "5:23", "3:34", "8:22", "5:17", "3:10", "4:43", "19:43", "0:47", "0:47", "3:14", "3:59", "2:43", "4:17", "6:56", "3:05", "2:06", "1:59", "1:49", "3:36", "7:10", "3:44", "3:44", "4:36", "3:16", "1:10", "6:10", "2:14", "3:44", "5:05", "6:03", "12:39", "1:56", "4:04"];

const totSecs = timestamps
        .reduce((a, b) => {
          console.log({a, b});
          const [bmins, bsecs] = b.split(':').map(n => parseInt(n, 10));
          return bmins*60 + bsecs + a;
        }, 0);

function secsToDecimal(secs) {
  let mins = Math.trunc(secs/60);
  secs %= 60;
  let hrs = 0;
  
  if (mins) {
    hrs = Math.trunc(mins/60);
    mins %= 60;
  }

  return [hrs, mins, secs].join(':');
}

console.log(secsToDecimal(totSecs));
