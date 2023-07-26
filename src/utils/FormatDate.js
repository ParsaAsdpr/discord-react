import moment from "moment/moment";

export const formatDate = (timestamp) => {
  const messageDate = moment.unix(timestamp);
  const today = moment().startOf('day');
  const yesterday = moment().subtract(1, 'days').startOf('day');

  if (messageDate.isSame(today, 'd')) {
    return messageDate.format('[Today at] HH:mm');
  } else if (messageDate.isSame(yesterday, 'd')) {
    return messageDate.format('[Yesterday at] HH:mm');
  } else {
    return messageDate.format('MM/DD/YYYY h:mm A');
  }
  };