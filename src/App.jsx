import { useState } from 'react';
import styles from './App.module.scss';

function App() {
  const [userInput, setUserInput] = useState({
    user: '',
    password: ''
  })

  const handleInputChange = (event) => {
    console.log(event.target.name)
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className={styles.App}>
      <form action="">
        <label
          htmlFor="user"
          className={userInput.user !== '' ? styles.onInput : null} >
          <input
            id='user'
            type="text"
            autoComplete='off'
            name='user'
            onChange={handleInputChange}
            value={userInput.user} />
          <p id='user'>User name</p>
        </label>
        <label
          htmlFor="password"
          className={userInput.password !== '' ? styles.onInput: null} >
          <input
            id='password'
            type="password"
            autoComplete='off'
            name='password'
            onChange={handleInputChange}
            value={userInput.password} />
          <p id='password'>Password</p>
        </label>
      </form>
    </div>
  );
}

export default App;

