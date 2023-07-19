import styled from 'styled-components';

export const AppWrapper = styled.div`
 .main-wrapper{
  display: flex;
  position: relative;
  background-color: blue;

  & .settings-container{
    position: fixed;
    right: 4px;
    bottom: 4px;
    z-index: 1000;

    & .button-style{
      font-size: xxx-large;
      padding: 3px;
      border: none;
      color : lightblue;
      &:hover{
        cursor: pointer;
        filter :drop-shadow(15px 15px 8px #a6a6a6);
      }
    }
  }

  & .sidebar-container{
    width: 18rem;
    position: fixed;
    background: #f5f5dc;
  }

  & .active{
 width: 100%;
 
  }

  & .not-active{

  }
 }

`;

