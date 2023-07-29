import moment from "moment/moment";

export const formatDate = (timestamp) => {
  const messageDate = moment.unix(timestamp);
  const today = moment().startOf('day');
  const yesterday = moment().subtract(1, 'days').startOf('day');

  if (messageDate.isSame(today, 'd')) {
    return messageDate.format('[Today at] h:mm A');
  } else if (messageDate.isSame(yesterday, 'd')) {
    return messageDate.format('[Yesterday at] h:mm A');
  } else {
    return messageDate.format('MM/DD/YYYY h:mm A');
  }
  };