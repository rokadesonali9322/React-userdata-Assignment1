import './UserDetail.css'

const UserDetail = ({ userInfo }) => {
  return (
    <div className="container">
      <div className="row">
        {userInfo.map((curele) => {
          const {
            id,
            name,
            email,
            website,
            phone,
            company,
            address,
            username,
          } = curele
          return (
            <div className="col-lg-12 col-md-12 col-12 m-auto py-5" key={id}>
              <div className="card">
                <div className="row">
                  <img
                    src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
                    alt={name}
                  />

                  <div className="card-body">
                    <h4>{name}</h4>
                    <p>
                      <span>Email:</span>
                      {email}
                    </p>
                    <p>
                      <span>Phone:</span>
                      {phone}
                    </p>
                    <p>
                      <span>Company:</span>
                      {company.name}
                    </p>
                    <p>
                      <span>Website:</span>
                      {website}
                    </p>
                    <p>
                      <span>Address:</span>
                      {address.street},{address.suite},{address.city},
                      {address.zipcode}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default UserDetail
