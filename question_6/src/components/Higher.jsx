import React, {useState, useEffect}  from 'react';

const Higher = (WrappedComponent, fetchData) => {
    return () => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(()=>{
            const fetchDataHandle = async () =>{
                try{
                    const res = await fetchData();
                    setData(res);
                } catch(error){
                    console.log('Error Fetching data : ',error);
                } finally{
                    setLoading(false);
                }
            };
            fetchDataHandle();
        },[]);
        
        return (
            <div className='spinner'>
                <h1>Question - 6</h1>
                {loading ? (
                    <div>Loading...</div>
                ):(
                    <WrappedComponent data={data} />
                )}
            </div>
        );
    };
};  
const userList = ({data}) =>{
    return (
        <ul>
            {data.map((user, index)=>(
                <li key={index}>{user.name}</li>
            ))}
        </ul>
    )
};

const fetchUserData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = res.json();
    return data;
};

const userListWithLoading = Higher(userList, fetchUserData);
export default userListWithLoading;