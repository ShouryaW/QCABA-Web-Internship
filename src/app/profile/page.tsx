'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Profile = () => {
  const { data: session } = useSession();
  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
    // Fetch user data including memberships from the API
    const fetchUserData = async () => {
      const res = await fetch('/api/profile'); // Your custom API to fetch memberships
      const data = await res.json();
      setMemberships(data.memberships);
    };
    if (session) fetchUserData();
  }, [session]);

  if (!session) return <p>Access Denied</p>;

  return (
    <div>
      <h1>Welcome, {session.user.email}</h1>
      <h2>Your Memberships:</h2>
      <ul>
        {memberships.map((membership, index) => (
          <li key={index}>{membership.type} (Expires on: {membership.expiresAt})</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
