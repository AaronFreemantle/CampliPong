import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Nav, Logo, Links, User, Title } from "./styles/Header.styles";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let user = null;

  if (status === "loading") {
    user = (
      <>
        <p>Validating session ...</p>
      </>
    );
  }

  if (!session) {
    user = (
      <>
        <Link href="/api/auth/signin">
          <a data-active={isActive("/signup")}>Log in</a>
        </Link>
      </>
    );
  }

  if (session) {
    user = (
      <>
        <p>
          {session.user.name} ({session.user.email})
        </p>
        <button onClick={() => signOut()}>
          <a>Log out</a>
        </button>
      </>
    );
  }

  return (
    <Nav>
      <Logo src="/pong.png" alt="logo" width="40" height="40" />
      <Title>Camplipong</Title>
      <Links>
        <Link href="/leaderboard">
          <a>Leaderboard</a>
        </Link>
        <Link href="/api/matches">
          <a>Matches</a>
        </Link>
      </Links>
      <User>{user}</User>
    </Nav>
  );
};

export default Header;
