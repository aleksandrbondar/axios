import { createUseStyles } from "react-jss"

export const UseStyles = createUseStyles({
  list: {
    border: '1px solid black',
    margin: '10px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    transition: '0.5s',
    '&:hover': {
      backgroundColor: 'lightgray'
    }
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '20px'
  },
  text: {
    fontSize: '16px'
  }
})

