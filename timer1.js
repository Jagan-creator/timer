const timerAlarm = function(timeInput) {
  
  if (timeInput < 0 || isNaN(timeInput) || timeInput === undefined) {
    return;
  }

  setTimeout(() => {
    process.stdout.write(".  ");
  }, timeInput * 1000);

};

for (let i = 0; i < process.argv.length; i++) {
  timerAlarm(process.argv[i]);
};