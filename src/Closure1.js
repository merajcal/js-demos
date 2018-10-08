const getSecret = (secret) => {
    return {
      get: () => secret
    };
  };
  
  const msg = '.get() should have access to the closure.';
  const expected = 1;
  const obj = getSecret(1);

  const actual = obj.get();

  console.log(actual)