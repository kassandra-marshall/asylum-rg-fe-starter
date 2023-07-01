import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

function ProfilePage() {
  const { user } = useAuth0();
  const { name, email } = user;
  return (
    <div className="main">
      <h2
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '2%',
        }}
      >
        Welcome, {name}
      </h2>
      <p
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {email}
      </p>
    </div>
  );
}

export default withAuthenticationRequired(ProfilePage, {});
