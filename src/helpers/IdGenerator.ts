type IdGeneratorFunction = () => () => number;

export const generateId: IdGeneratorFunction = () => {
  let id = 0;

  return () => {
    id += 1;

    return id;
  };
};
