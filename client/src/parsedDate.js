function parsedDate(date) {
  let pdate = new Date(date);
  let month = pdate.getMonth();
  let day = pdate.getDate();
  let year = pdate.getFullYear();
  let hours = pdate.getHours();
  let minutes = pdate.getMinutes();
  switch (month) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sept";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
  }
  return `${month}-${day}-${year}, ${
    hours > 12 ? hours - 12 : hours
  }:${minutes} ${hours < 12 ? "am" : "pm"}`;
}
