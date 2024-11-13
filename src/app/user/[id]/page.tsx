"use client";

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { BackButton, Container, UserImage, UserInfo, UserName } from '@/styles/styled-components';

const UserDetails = ({ params }: { params: { id: string } }) => {
  const [user, setUser] = useState<UserDetailsProps['user'] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = use(params); 

  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUser(data); 
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false); 
      }
    };

    fetchUserData(); 
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>; 
  }

  if (!user) {
    return <div>User not found</div>; 
  }

  return (
    <Container>
      <BackButton onClick={() => router.back()}>Back</BackButton>
      <UserImage src={user.image} alt={`${user.firstName} ${user.lastName}`} />
      <UserName>{user.firstName} {user.lastName}</UserName>
      <UserInfo>Age: {user.age}</UserInfo>
      <UserInfo>Email: {user.email}</UserInfo>
      <UserInfo>Phone: {user.phone}</UserInfo>
      <UserInfo>Location: {user.address.city}, {user.address.state}</UserInfo>
    </Container>
  );
};

export default UserDetails;
