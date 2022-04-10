import { Prisma } from "@prisma/client";
import React from "react";
import prisma from "../lib/prisma";

type UsersWithScores = Prisma.UserGetPayload<{
  include: { userScores: true };
}>;

function Table({ users }: { users: UsersWithScores[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Wins</th>
          <th>Losses</th>
          <th>Played</th>
          <th>Win Rate</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.rating}</td>
            <td>{user.userScores.filter((score) => score.userWon).length}</td>
            <td>{user.userScores.filter((score) => !score.userWon).length}</td>
            <td>{user.userScores.length}</td>
            <td>
              {(user.userScores.filter((score) => score.userWon).length /
                user.userScores.length) *
                100}
              %
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

export async function getServerSideProps() {
  const users = await prisma.user.findMany({
    include: { userScores: true },
  });
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}
