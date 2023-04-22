import { useEffect, useState } from 'react'
import UserDetail from './UserDetail/UserDetail'
import BeatLoader from 'react-spinners/BeatLoader'
import './Userdata.css'

const Userdata = () => {
  const [userInfo, setUserInfo] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const fetchuserdata = async () => {
        try {
          const res = await fetch('https://jsonplaceholder.typicode.com/users')
          const data = await res.json()
          setUserInfo(data)
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      }
      fetchuserdata()
    }, 1000)
  }, [])

  return (
    <div className="user-card">
      {loading ? (
        <div className="center_loading">
          {/* <span>Loading...</span> */}
          <BeatLoader color={'#333'} loading={loading} size={25} />
        </div>
      ) : (
        <UserDetail userInfo={userInfo} />
      )}
    </div>
  )
}

export default Userdata
