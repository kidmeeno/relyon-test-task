import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Card, UserImages } from "@/styles/styled-components";

const UserCard: React.FC<UserCardProps> = ({
  id,
  image,
  firstName,
  lastName,
  age,
}) => {
  return (
    <Link href={`/user/${id}`}>
      <Card>
        <UserImages src={image} alt={`${firstName} ${lastName}`} />
        <h2 className="text-lg font-semibold mt-2">
          {firstName} {lastName}
        </h2>
        <p>Age: {age}</p>
      </Card>
    </Link>
  );
};

export default UserCard;
