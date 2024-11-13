import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin: auto;
`;

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem;
  text-align: center;
  background-color: #f7f8fa;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const BackButton = styled.button`
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #0070f3;
  background-color: transparent;
  border: 2px solid #0070f3;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0070f3;
    color: #ffffff;
  }
`;

export const UserImages = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const UserName = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333333;
  margin: 0.5rem 0;
`;

export const UserInfo = styled.p`
  font-size: 1rem;
  color: #555555;
  margin: 0.25rem 0;
`;