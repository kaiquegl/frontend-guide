import { useState } from "react";
import { Home, Photo, Settings, Message, Person } from "@styled-icons/material-outlined";

import * as S from "./styles";

const MagicMenuTemplate = () => {
  const [currentActive, setCurrentActive] = useState("home");

  return (
    <S.ComponentWrapper>
      <S.ComponentAboutBox>
        <S.ComponentTitle>Magic Menu</S.ComponentTitle>
        <S.ComponentText>A magic menu for future projects?</S.ComponentText>
      </S.ComponentAboutBox>
      <S.MagicMenuWrapper>
        <S.MagicMenuList>
          <S.MagicMenuListItem active={currentActive === "home"} onClick={() => setCurrentActive("home")}>
            <S.ItemLink href="#">
              <S.ItemIcon>
                <Home />
              </S.ItemIcon>
              <S.ItemText>Home</S.ItemText>
            </S.ItemLink>
          </S.MagicMenuListItem>

          <S.MagicMenuListItem active={currentActive === "profile"} onClick={() => setCurrentActive("profile")}>
            <S.ItemLink href="#">
              <S.ItemIcon>
                <Person />
              </S.ItemIcon>
              <S.ItemText>Profile</S.ItemText>
            </S.ItemLink>
          </S.MagicMenuListItem>

          <S.MagicMenuListItem active={currentActive === "photos"} onClick={() => setCurrentActive("photos")}>
            <S.ItemLink href="#">
              <S.ItemIcon>
                <Photo />
              </S.ItemIcon>
              <S.ItemText>Photos</S.ItemText>
            </S.ItemLink>
          </S.MagicMenuListItem>

          <S.MagicMenuListItem active={currentActive === "message"} onClick={() => setCurrentActive("message")}>
            <S.ItemLink href="#">
              <S.ItemIcon>
                <Message />
              </S.ItemIcon>
              <S.ItemText>Message</S.ItemText>
            </S.ItemLink>
          </S.MagicMenuListItem>

          <S.MagicMenuListItem active={currentActive === "settings"} onClick={() => setCurrentActive("settings")}>
            <S.ItemLink href="#">
              <S.ItemIcon>
                <Settings />
              </S.ItemIcon>
              <S.ItemText>Settings</S.ItemText>
            </S.ItemLink>
          </S.MagicMenuListItem>

          <S.Indicator />
        </S.MagicMenuList>
      </S.MagicMenuWrapper>
    </S.ComponentWrapper>
  );
};

export default MagicMenuTemplate;
