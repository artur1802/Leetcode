function timeConversion(s) {
    let hours = parseInt(s.slice(0, 2));
    let minutes = parseInt(s.slice(3, 5));
    let seconds = parseInt(s.slice(6, 8));
    let am_pm = s.slice(-2).toUpperCase();
  
    if (am_pm === "AM") {
      if (hours === 12) {
        hours = 0;
      }
    } else {
      if (hours !== 12) {
        hours += 12;
      }
    }
}