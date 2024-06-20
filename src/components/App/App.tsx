import style from './App.module.css'
import UseEffectUsersAxios from '../useEffectUsersAxios/UseEffectUsersAxios';
import ComponentWithUnmount from '../ComponentWithUnmount/ComponentWithUnmount';

const App = () => {
  return (
    <>
      <div className="container">
        <h1 className="mt-5">React + TS</h1>
      </div>
      <div className={[style.container, 'container'].join(' ')}>
        <ComponentWithUnmount />
      </div>
      <div className={[style.container, 'container'].join(' ')}>
        <UseEffectUsersAxios />
      </div>
    </>
  );
};

export default App
