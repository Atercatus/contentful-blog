export function getLongdate(date) {
  const language = "en";
  const options = { year: "numeric", month: "short", day: "2-digit" };

  const dateFormat = new Intl.DateTimeFormat(language, options);

  const [month, , day, , year] = dateFormat.formatToParts(date);
  const result = `${month.value} ${day.value}, ${year.value}`;

  return result;
}
