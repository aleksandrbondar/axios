/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import axios from 'axios'
import { UseStyles } from './UserStyles.ts'

const useEffectUsersAxios = () => {
  const TRUE_URL = 'https://jsonplaceholder.typicode.com/users'
  const FALSE_URL = 'https://jsonplaceholder.typicode.com/wrongURL'
  const URL = Math.random() >= 0.5 ? TRUE_URL : FALSE_URL

  interface User { id: number, name: string, email: string, phone: string, website: string }

  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get(URL)
      return data
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const fetchDataEndHandleLoading = async () => {
      setIsLoading(true)
      try {
        const data = await fetchData()
        setUsers(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchDataEndHandleLoading()
  }, [])

  const renderUsers = () => {
    const classes = UseStyles()
    return users?.map((user) => {
      const { id, name, email, phone, website } = user
      return (
        <li key={id} className={classes.list}>
          <div className={classes.item}>
            <p className={classes.title}>Name: {name}</p>
            <p className={classes.text}>Email: {email}</p>
            <p className={classes.text}>Phone: {phone}</p>
            <p className={classes.text}>Website: {website}</p>
          </div>
        </li>
      )
    })
  }

  return (
    <div>
      <h1>Use Axios</h1>
      <ul className="list-group">
        {isLoading ? <p className="alert alert-info">Loading...</p> :
          error ? <p className="alert alert-danger">{error}</p> :
            <p className="alert alert-success">Users loaded</p>}
        {renderUsers()}
      </ul>
    </div>
  )
}

export default useEffectUsersAxios