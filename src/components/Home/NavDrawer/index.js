"use client";
import { CustomButton } from "@/components/Global";
import CustomMenuButton from "@/components/Global/CustomMenuButton";
import { GREEN, PURPLE } from "@/constants";
import { Close } from "@mui/icons-material";
import { Box, Divider, Drawer, Grow, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export const NavDrawer = ({ open, handleClose }) => {
	const pathname = usePathname();

	return (
		<Drawer anchor="top" open={open} onClose={handleClose}>
			<Grow in={open}>
				<Box
					sx={{
						width: "100vw"
					}}
				>
					<Box
						sx={{
							px: "20px",
							py: "40px",
							pt: "10px",
							display: "flex",
							flexDirection: "column",
							gap: "30px"
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								gap: "20px"
							}}
						>
							<Box
								sx={{
									display: "flex",
									gap: "10px",
									alignItems: "center",
									justifyContent: "center"
								}}
							>
								<Image
									src="/logo.svg"
									alt="Logo"
									layout="responsive"
									width={100}
									height={57}
								/>
								<Typography
									sx={{
										fontSize: "15px",
										color: PURPLE,
										fontWeight: 700,
										fontFamily: "Montserrat"
									}}
								>
									magicpitch
								</Typography>
							</Box>
							<IconButton onClick={handleClose}>
								<Close
									sx={{
										color: "black"
									}}
								/>
							</IconButton>
						</Box>
						<Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "space-between",
									gap: "16px",
									margin: "auto",
									paddingRight: "4px",
									justifyContent: "center",
									maxWidth: "100%"
								}}
							>
								<CustomMenuButton text={"Services"} items={["Prospecting Intelligence", "Outreach Intelligence", "Campaign Management", "Data Sourcing", "Server, Warm Up"]}/>
								<CustomMenuButton text={"Product"}  items={["B2B Pitch", "B2B Pitch", "B2B Pitch", "B2B Pitch", "Sales Pitch", "Sales Pitch", "Sales Pitch", "View All Pitch", "Career Pitch", "Career Pitch"]}/>
								<CustomButton text={"Pricing"} />
								<CustomMenuButton text={"Company"} items={["Why Magicpitch", "Blog", "Career", "Contact Us", "Client", "About Us"]}/>
							</Box>
						</Box>
						<Box
							sx={{
								px: "100px"
							}}
						>
							<Divider />
						</Box>
						<Box
							sx={{
								mx: "auto",
								display: "flex",
								alignItems: "center",
								gap: "20px"
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
					</Box>
				</Box>
			</Grow>
		</Drawer>
	);
};
