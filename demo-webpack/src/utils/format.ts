const rocDate = (value: string) => {
  if (value?.length === 7) {
    return [value.slice(0, 3), value.slice(3, 5), value.slice(5)].join('/');
  } else {
    return '';
  }
};

const currency = (value: string) => {
  if (Number.isNaN(parseInt(value))) {
    return value;
  } else {
    return new Intl.NumberFormat().format(parseInt(value));
  }
};

const util = {
  rocDate,
  currency,
};
export default util;
