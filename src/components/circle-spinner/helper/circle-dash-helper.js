export function getDashValue(radius, percentage) {
  const circumference = 2 * 3.1415927 * radius;

  const result = circumference * percentage;

  return result;
}
