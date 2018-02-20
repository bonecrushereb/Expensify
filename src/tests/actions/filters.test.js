import moment from 'moment';
import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generte set end date action object', () => {
 const action = setEndDate(moment(0));
 expect(action).toEqual({
   type: 'SET_END_DATE',
   endDate: moment(0)
 });
});

test('should generate setTextFilter action object with text', () => {
  const action = setTextFilter('test text');
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text: 'test text'
  })
})

test('should generate setTextFilter action object with default text', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text: ''
  })
});

test('should generate sortByDate action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generate sortByAmount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_Amount'
  })
});
