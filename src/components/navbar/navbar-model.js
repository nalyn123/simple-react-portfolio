import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useNavbar = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();
  const [burgerActive, setBurgerActive] = useState(false);

  const onBurgerClick = () => {
    setBurgerActive((prev) => !prev);
  };

  const onClick = (hash) => {
    window.location.hash = hash;
  };

  return { hash, burgerActive, onBurgerClick, onClick };
};
