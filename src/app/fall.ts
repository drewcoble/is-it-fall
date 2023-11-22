export default function useFall() {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();

  const FALL_START = { month: 8, day: 23 };
  const FALL_END = { month: 11, day: 20 };

  let fall: boolean;

  switch (month) {
    case 8:
      fall = day >= FALL_START.day;
      break;
    case 9:
    case 10:
      fall = true;
      break;
    case 11:
      fall = day <= FALL_END.day;
      break;
    default:
      fall = false;
      break;
  }
  return fall;
}
