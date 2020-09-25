import React, { useState, useEffect } from 'react';

const UserProfile = (props) => {
    const [userData, setUserData] = useState([]);
   
    useEffect(() => {
        const params = +props.match.params.profile;
        const localData =JSON.parse(localStorage.getItem("userData"))
        const user = JSON.stringify(localData.find((data, index) => data.id === params)
        );
        setUserData(JSON.parse(user));
    }, []);
    console.log(userData);
    return (
        <div>
            <img
              src={`https://picsum.photos/id/${userData.id * 33}/400/200`}
              alt="user profile"
              />
              <h1>{userData.name}</h1>
              <h1>{userData.email}</h1>
        </div>
    );
};
export default UserProfile;