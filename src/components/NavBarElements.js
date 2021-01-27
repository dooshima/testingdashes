import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaBeer } from 'react-icons/fa';


export const Nav = styled.nav`
background : #3395ff;
height:80px;
display : flex;
justify-content: space-between;
padding-left: 25px;
`

export const NavLink = styled(Link)`
    color: #000;
    display:flex;
    text-decoration: none;
    padding-left: 30px;
    height: 100%;
    cursor:pointer;
    size:60;


    &.active{
        color:#000;
        background:#000
    }
`
export const Bars = styled(FaBeer)`
    display: none;
    color:#000;

    @media screen and (max-width:768px){
        display:block;
        positin: absolute;
        top:0;
        right:0;
        transform:translate(-100%, 75%)
        font-size : 1.8rem;
        cursor: pointer;
    }

`


export const NavMenu = styled.div`
    display: flex;
    aligin-items:center;
    margin-right: 10px; 
    padding: 30px;
    @media screen and (max-width: 768px){
        display:none;
    }
`


export const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

export const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  font-weight: 500;
  font-size: 1.3rem;
  color: #fff;
  padding-left: 30px;

`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  padding:2rem;
`;
