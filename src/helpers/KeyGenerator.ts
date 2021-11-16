type KeyGeneratorFunction = () => () => number;

const KeyGenerator: KeyGeneratorFunction = () => {
  let id = 0;

  return () => {
    id += 1;

    return id;
  };
};

export const generateUniqueKey = KeyGenerator();
