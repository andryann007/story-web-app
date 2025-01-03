import moment from 'moment';

const convertDateFormat = (oldDateFormat) => {
  moment.updateLocale();
  const newFormattedDate = moment(oldDateFormat).format('MM/DD/YYYY');
  return newFormattedDate;
};

export { convertDateFormat };