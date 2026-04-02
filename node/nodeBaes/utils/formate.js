export function formatDate(date, format) {
  if (!date instanceof Date) {
      throw new Error('Invalid date');
  }

  const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'UTC',
  };

  return date.toLocaleString('en-US', options).replace(',', format);
}

export function foo() {

}

function bar() {

}

export default bar


// export default formatDate