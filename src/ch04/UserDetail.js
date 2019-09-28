import React from 'react'

function UserDetail (props) {
  return (
    <div>
      {props.currentUser ? (
        <div>
          用户姓名:{props.currentUser.name}
          用户年龄:{props.currentUser.age}
          用户联系方式:{props.currentUser.phone}
          家庭地址:{props.currentUser.address}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default UserDetail
