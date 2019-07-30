const processMessage = err => {
  let message = err;
  if (err === 'Failed to fetch') {
    message = 'Lo sentimos, pero la API está caída';
  }
  return message;
};

export default async (queryInfo, params = '') => {
  try {
    const response = await fetch(`http://localhost:3001/${queryInfo.query}${params}`, {
      method: queryInfo.method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.log({ err });
    return {
      error: true,
      message: processMessage(err.message)
    };
  }
};

export const formatDate = date => {
  let formattedDate = null;
  if (date && typeof date === 'string') {
    const newDate = new Date(date);
    const day = newDate.getUTCDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    formattedDate = `${day}/${month < 10 ? '0' + month : month}/${year}`;
  }
  return formattedDate;
};
