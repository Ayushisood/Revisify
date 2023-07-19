import React from 'react';
import { LayoutWrapper, ChildWrapper } from './style';
import { Sidebar } from '../Sidebar/Sidebar';
import { Navbar } from '../Navbar/Navbar';

export const Layout = ({children}) => {
  return (
    <LayoutWrapper>
        <Sidebar />
        <ChildWrapper>{children}</ChildWrapper>
    </LayoutWrapper>
  )
}
