import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaDog } from "react-icons/fa";
import { RiFileCopyLine } from "react-icons/ri";
import { IoIosHome } from "react-icons/io";
import { AiFillFileAdd, AiFillSetting } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { GoListUnordered } from "react-icons/go";
import { darkThemeColor } from "../../utils";

const DashboardSidebar = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
        <Title>PetShop</Title>
      </LogoContainer>
      <LinkContainer>
        <LinkItems>
          <LinkItem to="/admin">
            <IoIosHome />
            <h3>Dashboard</h3>
          </LinkItem>
          <LinkItem to="/admin">
            <RiFileCopyLine />
            <h3>Products</h3>
          </LinkItem>
          <LinkItem to="/admin">
            <AiFillFileAdd />
            <h3>Add Product</h3>
          </LinkItem>
          <LinkItem to="/admin">
            <FiUsers />
            <h3>Users</h3>
          </LinkItem>
          <LinkItem to="/admin">
            <GoListUnordered />
            <h3>Orders</h3>
          </LinkItem>
          <LinkItem to="/admin">
            <AiFillSetting />
            <h3>Settings</h3>
          </LinkItem>
        </LinkItems>
      </LinkContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Logo = styled(FaDog)`
  height: 6rem;
  border-radius: 6rem;
  color: white;
  width: 6rem;
  margin-top: 20%;
`;
const Title = styled.h1`
  color: white;
  font: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinkContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const LinkItems = styled.div`
  height: 90%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
`;

const LinkItem = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 4rem 0 0;
  gap: 1rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  padding-left: 25%;
  }
  &:hover {
    color: #01bf71;
    svg {
      margin-left: 1rem;
    }
  }
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 2%;
    transition: all 300ms ease;
  }
`;

export default DashboardSidebar;
