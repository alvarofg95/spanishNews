export default async (queryInfo, params = null) => {
  try {
    const response = await fetch(`http://localhost:3001/${queryInfo.query}`, {
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
      message: 'Hay problemas para recuperar el listado de medios de comunicación'
    };
  }
};
