import React, { ReactNode } from "react";
import Header from "./Header";
import { StyledLayout } from "./styles/Layout.styles";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header />
    <StyledLayout className="layout">{props.children}</StyledLayout>
  </div>
);

export default Layout;
