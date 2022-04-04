import styled, { css } from "styled-components";

export const ComponentWrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.colors.black};
  `}
`;

export const ComponentAboutBox = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);
  `}
`;

export const ComponentTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    margin-bottom: ${theme.spacings.small};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;

export const ComponentText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const MagicMenuWrapper = styled.div`
  ${({ theme }) => css`
    width: 40rem;
    height: 7rem;
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 1rem;
    justify-content: center;
    background-color: ${theme.colors.white};
  `}
`;

export const MagicMenuList = styled.ul`
  width: 35rem;
  display: flex;
`;

export const ItemIcon = styled.span`
  ${({ theme }) => css`
    width: 3rem;
    display: block;
    transition: 0.5s;
    position: relative;
    text-align: center;
    line-height: 7.5rem;
    color: ${theme.colors.black};
  `}
`;

export const ItemText = styled.span`
  ${({ theme }) => css`
    opacity: 0;
    transition: 0.5s;
    font-size: 0.75em;
    position: absolute;
    letter-spacing: 0.05em;
    transform: translateY(2rem);
    color: ${theme.colors.black};
    font-weight: ${theme.font.regular};
  `}
`;

export const Indicator = styled.div`
  ${({ theme }) => css`
    top: -50%;
    width: 7rem;
    height: 7rem;
    transition: 0.5s;
    border-radius: 50%;
    position: absolute;
    border: 0.6rem solid ${theme.colors.black};
    background-color: ${theme.colors.secondary};

    &::before {
      content: "";
      top: 50%;
      width: 2rem;
      height: 2rem;
      left: -2.2rem;
      position: absolute;
      background-color: transparent;
      border-top-right-radius: 2rem;
      box-shadow: 1px -10px 0 0 ${theme.colors.black};
    }

    &::after {
      content: "";
      top: 50%;
      width: 2rem;
      height: 2rem;
      right: -2.2rem;
      position: absolute;
      border-top-left-radius: 2rem;
      background-color: transparent;
      box-shadow: -1px -10px 0 0 ${theme.colors.black};
    }
  `}
`;

type MagicMenuListItemProps = {
  active?: boolean;
};

const magicMenuListItemModifiers = {
  active: () => css`
    ${ItemIcon} {
      transform: translateY(-3.2rem);
    }

    ${ItemText} {
      opacity: 1;
      transform: translateY(1rem);
    }

    &:nth-child(1) ~ ${Indicator} {
      transform: translateX(calc(7rem * 0));
    }

    &:nth-child(2) ~ ${Indicator} {
      transform: translateX(calc(7rem * 1));
    }

    &:nth-child(3) ~ ${Indicator} {
      transform: translateX(calc(7rem * 2));
    }

    &:nth-child(4) ~ ${Indicator} {
      transform: translateX(calc(7rem * 3));
    }

    &:nth-child(5) ~ ${Indicator} {
      transform: translateX(calc(7rem * 4));
    }
  `,
};

export const MagicMenuListItem = styled.li<MagicMenuListItemProps>`
  ${({ active }) => css`
    z-index: 1;
    width: 7rem;
    height: 7rem;
    list-style: none;
    position: relative;

    ${!!active && magicMenuListItemModifiers.active()};
  `}
`;

export const ItemLink = styled.a`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    text-align: center;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-weight: ${theme.font.medium};
  `}
`;
