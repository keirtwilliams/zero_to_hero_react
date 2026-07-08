function UserDashboard(){
    const username = "Alex"
    const notifications = 3;

    return (
        <>
          <p>Hello, {username}. You have {notifications} unread messages.</p>
        </>
    )
}

export default UserDashboard;