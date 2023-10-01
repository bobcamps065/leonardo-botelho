const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      Authorization: 'sha512-iaprtQuBUH2Bdz1jo57dKoxUXSSYDhz4ic1bxRGBJpoHGm9Py/JM4Ahqe5tlO06Hg7baQv1nMWVxHZweIxzRrQ==?r));',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Doa_missoes',
      site: 'https://leonardo-botelho-dos-passos.web.app/',
      description: 'Ajudá a obrado Senhor Jeus Cristo'
    })
  };
  
  fetch('https://sandbox.api.pagseguro.com/oauth2/application', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


  