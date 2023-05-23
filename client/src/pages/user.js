import React, { useEffect, useState } from 'react'
import userAPI from '../api/user';

const [users, setUsers] = useState([]);
const user = () => {

    useEffect(() => {

        const getUsers = async() => {
      
          try {
            const res = await userAPI.getUsersData();
            console.log(res);
            console.log(res.users);
            console.log(res.msg);
            setUsers(...users, res.users)
            console.log(users)
      
          }catch(err) {
            alert(err);
          }
      
          
      
        }

        getUsers();
        // getExpense();
      }, []);



  return (
    <div>user</div>
  )
}

export default user