export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / (3600)); //convert seconds to hours
  const minutes = Math.floor(duration % 3600 / 60);
  const seconds = duration % 60;

  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':') //put a 0 in front of the unit

  return timeString;
}