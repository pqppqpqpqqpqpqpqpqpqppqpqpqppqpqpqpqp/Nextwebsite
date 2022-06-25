import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import LogoDark from "../../../assets/images/logos/logo-dark.svg";

const LogoIcon = () => {
  return (
    <Link href="/">
        <Image src='/FLORA.png' alt='' width={150} height={40} />
    </Link>
  );
};

export default LogoIcon;
