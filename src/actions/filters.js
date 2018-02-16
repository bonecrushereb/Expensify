export const setTextFilter = (text ='') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const sortByAmount = () => ({
  type: 'SORT_BY_Amount'
});

export const setStartDate = (startDate) => ({
  type: 'SET_STATRT_DATE',
  startDate
});

export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});
