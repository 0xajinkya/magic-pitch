"use client";

import React from "react";
import { LoadingButton } from "@mui/lab";
import { GREEN, PURPLE } from "@/constants";
import { usePathname, useRouter } from "next/navigation";

export const CustomButton = ({ text, icon, styles, onClick }) => {
	const router = useRouter();
	const pathname = usePathname();
	const isHome = text === "Home" && pathname === "/";
	const isCurrentPage = new RegExp(`^${text.toLowerCase()}$`).test(pathname?.split("/")[1]);

	return (
		<LoadingButton
			sx={{
				// backgroundColor: PURPLE,
				// color: "white",
					color: "black",
					textTransform: "none",
					fontSize: "13px",
					fontWeight: 600,
					borderRadius: "30px",
					fontFamily: "Montserrat",
				...styles
			}}
			onClick={onClick}
		>
			{text}
			{icon}
		</LoadingButton>
	);
};
