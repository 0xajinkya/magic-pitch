"use client";

import React, { useState } from "react";
import { AppBar, Toolbar, Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { CustomButton } from "@/components/Global";
import { GREEN, PURPLE } from "@/constants";
import { ExpandMore, Menu } from "@mui/icons-material";
import { NavDrawer } from "../NavDrawer";
import { usePathname, useRouter } from "next/navigation";
import CustomMenuButton from "@/components/Global/CustomMenuButton";
import { ServicesMenu } from "../ServicesMenu";
import { ProductMenu } from "../ProductMenu";
import { CompanyMenu } from "../CompanyMenu";
export const Navbar = () => {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	const router = useRouter();

	const [servicesMenu, setServicesMenu] = useState(false);
	const [productMenu, setProductMenu] = useState(false);
	const [companyMenu, setCompanyMenu] = useState(false);

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
						gap: "5px"
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
						{/* <CustomMenuButton text={"Services"} handleHover={() => setServicesMenu((sm) => true)} /> */}
						<CustomButton
							text={"Services"}
							icon={
								<ExpandMore
									sx={{
										fontSize: "14px",
										ml:"4px"
									}}
								/>
							}
							onClick={() => setServicesMenu((sm) => true)}
						/>
						<ServicesMenu open={servicesMenu} onClose={() => setServicesMenu((sm) => !sm)} />
						{/* <CustomMenuButton
							text={"Product"}
							handleHover={() => setProductMenu((sm) => true)}
						/> */}
						<CustomButton
							text={"Product"}
							icon={
								<ExpandMore
									sx={{
										fontSize: "14px",
										ml:"4px"
									}}
								/>
							}
							onClick={() => setProductMenu((sm) => true)}
						/>
						<ProductMenu open={productMenu} onClose={() => setProductMenu((sm) => !sm)} />
						<CustomButton text={"Pricing"} />
						{/* <CustomMenuButton
							text={"Company"}
							handleHover={() => setCompanyMenu((sm) => true)}
						/> */}
						<CustomButton
							text={"Company"}
							icon={
								<ExpandMore
									sx={{
										fontSize: "14px",
										ml:"4px"
									}}
								/>
							}
							onClick={() => setCompanyMenu((sm) => true)}
						/>
						<CompanyMenu open={companyMenu} onClose={() => setCompanyMenu((sm) => !sm)} />
					</Box>
				</Box>
				<Box
					sx={{
						display: ["none", "flex"],
						alignItems: "center",
						justifyContent: "space-between",
						gap: "5px",
						paddingLeft: "6px",
						justifyContent: "center"
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
