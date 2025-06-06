import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    className="justify-start px-5"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
  >
    <Link to="/">
      <img src={Logo} alt="logo" className="w-12 h-12 my-0 mx-5" />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        className="no-underline text-[#3A1212] border-b-2 border-[#FF2625]"
      >
        Home
      </Link>
      <a href="#exercises" className="no-underline text-[#3A1212]">
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
