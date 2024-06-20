/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import axios from 'axios'

const useEffectUsersAxios = () => {
  interface User { id: number, name: string, email: string, phone: string, website: string }

  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchData = async () => {
    const TRUE_URL = 'https://jsonplaceholder.typicode.com/users'
    const FALSE_URL = 'https://jsonplaceholder.typicode.com/wrongURL'
    const URL = Math.random() >= 0.5 ? TRUE_URL : FALSE_URL

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
      try {
        const data = await fetchData()
        setUsers(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }
    }
    fetchDataEndHandleLoading()
  }, [])

  const renderUsers = () => {
    return users?.map((user) => {
      const { id, name, email, phone, website } = user
      return (
        <li key={id} className="list-group-item">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{email}</p>
            <p className="card-text">{phone}</p>
            <p className="card-text">{website}</p>
          </div>
        </li>
      )
    })
  }

  const item = document.getElementsByClassName('list-group-item')
  console.dir(item[0])
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