import React  , {useEffect,useState} from 'react';

const USERS_URL = 'https://example.com/api/users';

export default function Table () {
    console.log('test');
    const  [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    console.log(users);
    const [page,setPage]=useState(5);
    useEffect(()=>{
        fetch(`https://dummyapi.io/data/api/user?page=${page}`)
             .then(res=>res.json())
             .then(users=>{
                setUsers(users);
                setLoading(false);
             });  
    },[page]);

    const renderUsers =()=>{
         return <>
            { users.map(user=> (<tr key={user.id}>
                <td>{user.id} </td>
                <td>{user.firstName} </td>
                <td> {user.lastName} </td>

            </tr>)) }
           </>
    }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
           {users &&  renderUsers() }
        </tbody>
      </table>
      <section className="pagination">
        <button disabled={loading} onClick={()=>setPage(0)} className="first-page-btn">first</button>
        <button disabled={loading} onClick={()=>setPage(page-1)}  className="previous-page-btn">previous</button>
        <button disabled={loading} onClick={()=>setPage(page+1)} className="next-page-btn">next</button>
        <button disabled={loading} onClick={()=>setPage(0)}  className="last-page-btn">last</button>
      </section>
    </div>
  );
};
