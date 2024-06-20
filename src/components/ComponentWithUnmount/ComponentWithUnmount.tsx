/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import styled from 'styled-components';

function ComponentWithUnmount() {
  const [visible, setVisible] = useState(false);
  const [showChild, setShowChild] = useState('ChildComponent unmounted');

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const Test = styled.div`
    color: red;
    font-size: 24px;
    transition: 0.5s;
    &:hover {
      color: blue;
    };
    & .btn {
      background: red;
      transition: 0.5s;
      &:hover {
        background: blue;
      }
    }
  `;


  return (
    <Test className="text-center">
      <button
        className="btn btn-primary me-3"
        onClick={toggleVisibility}>
        {visible ? 'Скрыть' : 'Показать'} компонент
      </button>{showChild}
      {visible && <ChildComponent setShowChild={setShowChild} />}
    </Test>
  );
}

function ChildComponent({ setShowChild }: { setShowChild: (message: string) => void }) {
  useEffect(() => {
    setShowChild('ChildComponent mounted');
  }, []);
  useEffect(() => {
    return () => {
      setShowChild('ChildComponent unmounted');
    };
  }, []);

  return <div className="alert alert-info mt-3 text-center">ChildComponent</div>;
}

export default ComponentWithUnmount;