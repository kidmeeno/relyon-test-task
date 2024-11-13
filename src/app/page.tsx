"use client"

import { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import { GridContainer, PageContainer, PageTitle } from '@/styles/styled-components';


const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users?limit=10');
        const data = await response.json();
        setUsers(data.users);
      } catch (err) {
        setError('Failed to fetch users'); 
      } finally {
        setLoading(false); 
      }
    };
    fetchData(); 
  }, []); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <PageContainer>
      <PageTitle>User List</PageTitle>
      <GridContainer>
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            image={user.image}
            firstName={user.firstName}
            lastName={user.lastName}
            age={user.age}
          />
        ))}
      </GridContainer>
    </PageContainer>
  );
};

export default HomePage;
