import axios from "axios";
import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get("https://rails-jonathanb-heroku-test.herokuapp.com/")
      .then((response) => {
        setUsers(response.data);
        console.log(users);
      });
    //eslint-disable-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {users &&
        users.map((user) => (
          <ul key={user.id}>
            <li>
              {" "}
              <h1>{user.name}</h1>
              <h3>{user.email}</h3>
              <h4>Bio: {user.bio}</h4>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default Fetch;
