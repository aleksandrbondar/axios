import style from './App.module.css'
import UseEffectUsersAxios from '../useEffectUsersAxios/UseEffectUsersAxios';

const App = () => {
  return (
    <>
      <div className="container">
        <div className={style.container}>
          <UseEffectUsersAxios />
        </div>
      </div>
    </>
  );
};

export default App
