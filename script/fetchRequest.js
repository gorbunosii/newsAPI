const URL = 'https://newsapi.org/v2/';

const fetchRequest = async (postfix, {
  method = 'get',
  callback,
  body,
  inputValue = null,
}) => {
  try {
    const options = {
      method,
      headers: {
        'X-Api-Key': '791750fb73ea47fe97eac6b8172793be',
      },
    };

    if (body) options.body = JSON.stringify(body);

    const response = await fetch(`${URL}${postfix}`, options);
    if (response.ok) {
      const data = await response.json();
      if (callback) return callback(null, data, inputValue);
      return;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {
    return callback(err);
  }
};

export default fetchRequest;
