export const scaleSize = (values) => {
  if (!values || typeof values !== 'object') {
    throw new Error('Invalid values object provided');
  }

  const formObject = values;

  const filterParams = Object.entries(formObject)
    .map(([key, value], index) => `filters[${index}]=${value}`)
    .join('&');

  const paginationParams = ''; // Add your pagination parameters here

  return {
    filterParams,
    paginationParams,
  };
};
