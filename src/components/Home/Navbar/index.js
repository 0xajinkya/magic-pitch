"use client";

import React, { useState } from "react";
import { AppBar, Toolbar, Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { CustomButton } from "@/components/Global";
import { GREEN, PURPLE } from "@/constants";
import { Menu } from "@mui/icons-material";
import { NavDrawer } from "../NavDrawer";
import { usePathname, useRouter } from "next/navigation";
import CustomMenuButton from "@/components/Global/CustomMenuButton";
export const Navbar = () => {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	const router = useRouter();

	return (
		<AppBar
			position="static"
			color="default"
			elevation={0}
			sx={{ backgroundColor: "white", px: ["20px", "120px"], py: "10.5px" }}
		>
			<Toolbar
				sx={{
					p: "0!important",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between"
				}}
			>
				<Box
					sx={{
						// flexGrow: 0,
						maxWidth: "100%",
						display: "flex",
						alignItems: "center",
						gap: "20px"
					}}
				>
					<Image src="/logo1.svg" alt="Logo" layout="responsive" width={123} height={57} />
					<Typography
						sx={{
							color: "#404040",
							fontWeight: 700
						}}
					>
						magicpitch
					</Typography>
				</Box>
				<Box
					sx={{
						display: ["none", "flex"],
						alignItems: "center",
						justifyContent: "space-between",
						gap: "5px",
						// margin: "auto",
						// flexWrap: "wrap"
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							gap: "16px",
							margin: "auto",
							paddingRight: "4px",
							justifyContent: "center",
							maxWidth: "100%"
						}}
					>
						<CustomMenuButton text={"Services"} />
						<CustomMenuButton text={"Product"} />
						<CustomButton
							text={"Pricing"}
						/>
						<CustomMenuButton text={"Company"} />
					</Box>
				</Box>
				<Box
					sx={{
						display: ["none", "flex"],
						alignItems: "center",
						justifyContent: "space-between",
						gap: "5px",
						paddingLeft: "6px",
						justifyContent: "center",
						// maxWidth: "100%"
					}}
				>
					<CustomButton
						text={"Book A Demo"}
						styles={{
							backgroundColor: "transparent",
							color: "black",
							px: "20px",
							":hover": {
								backgroundColor: "transparent",
								color: "black"
							}
						}}
					/>
					<CustomButton
						text={"Get Started"}
						styles={{
							backgroundColor: PURPLE,
							borderRadius: "15px",
							color: "white",
							px: "20px",
							":hover": {
								backgroundColor: pathname === "/provider" ? "#0C5D56" : GREEN,
								color: "white"
							}
						}}
					/>
				</Box>
				<IconButton
					sx={{
						ml: "auto",
						display: ["flex", "none"]
					}}
					onClick={() => setOpen(true)}
				>
					<Menu
						sx={{
							color: "black"
						}}
					/>
				</IconButton>
			</Toolbar>
			<NavDrawer open={open} handleClose={() => setOpen(!open)} />
		</AppBar>
	);
};
