import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGreeting } from './greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector(state => state);
  useEffect(() => {
    dispatch(loadGreeting());
  }, []);

  console.log(greeting);
  return (
    <h1>
      Greeting:
      {greeting}
    </h1>
  );
};

export default Greeting;
