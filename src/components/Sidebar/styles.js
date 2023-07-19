import styled from "styled-components";
import { setVariables } from "../../styles/variables";

export const SidebarWrapper = styled.div`
  width: ${({ isOpen }) => (!isOpen ? `auto` : setVariables.sidebarWidth)};
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  padding: ${setVariables.lgSpacing};

  position: relative;

  .sidebar-button {
    border: none;
    padding: 0;
    position: absolute;
    top: ${setVariables.xxlSpacing};
    right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
      0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: inherit;
    transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
  }

  .logo {
    width: 52px;

    img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    cursor: pointer;
    margin-bottom: ${setVariables.lgSpacing};
  }

  .divider {
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
    margin: ${setVariables.lgSpacing} 0;
  }

  .sidebar-content {
    background: ${({ theme, isActive }) =>
      !isActive ? `transparent` : theme.bg3};
    border-radius: ${setVariables.borderRadius};
    margin: 8px 0;

    &:hover {
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    }

    & .link-style {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: inherit;
      font-size: 16px;
      padding: calc(${setVariables.smSpacing} - 2px) 0;

      & .link-icon {
        padding: ${setVariables.smSpacing} ${setVariables.mdSpacing};
        display: flex;

        svg {
          font-size: 20px;
        }
      }

      & .link-label {
        display: block;
        margin-left: ${setVariables.smSpacing};
      }

      & .dropdown-link {
        display: flex;
        align-items: center;

        & .dropdown-icon {
          margin-left: 100%;
        }
      }
    }
  }

  .dropdown-content {
    background: ${({ theme, isActive }) =>
      !isActive ? `transparent` : theme.bg3};
    border-radius: ${setVariables.borderRadius};
    margin: 8px;

    &:hover {
      background: ${({ theme }) => theme.bg3};
    }

    & .dropdown-content-link {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-decoration: none;
      color: inherit;
      font-size: 16px;
      padding: calc(${setVariables.smSpacing} - 2px) 0;
      margin-left: 52px;
    }
  }

  .theme-class {
    display: flex;
    align-items: center;
    font-size: 16px;

    & .theme-toggle-container {
      border: none;
      padding: 0;
      margin: 0 auto;
      cursor: pointer;
      width: 36px;
      height: 20px;
      border-radius: 10px;
      position: relative;
      background: ${({ theme, isActive }) =>
        !isActive ? theme.bg3 : theme.primary};

      & .theme-toggle {
        height: 18px;
        width: 18px;
        position: absolute;
        top: 1px;
        bottom: 1px;
        transition: 0.2s ease right;
        right: calc(100% - 18px - 1px);
        border-radius: 50%;
        background: ${({ theme }) => theme.bg};
      }
    }
  }
`;
