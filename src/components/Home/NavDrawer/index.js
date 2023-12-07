"use client";
import { CustomButton } from "@/components/Global";
import { GREEN } from "@/constants";
import { Close } from "@mui/icons-material";
import { Box, Divider, Drawer, Grow, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const NavDrawer = ({ open, handleClose }) => {
	return (
		<Drawer anchor="top" open={open} onClose={handleClose}>
			<Grow in={open}>
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
						<Box sx={{ flexGrow: 0, maxWidth: "100%" }}>
							<Image
								src="/logos/Logo.svg"
								alt="Logo"
								layout="responsive"
								width={100}
								height={57}
							/>
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
							<CustomButton text={"Home"} styles={{ py: "2px" }} />
							<CustomButton text={"Provider"} styles={{ py: "2px" }} />
							<CustomButton text={"About"} styles={{ py: "2px" }} />
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
							text={"Provider Login"}
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
							text={"Client Login"}
							styles={{
								backgroundColor: GREEN,
								color: "white",
								px: "20px",
								":hover": {
									backgroundColor: GREEN,
									color: "white"
								}
							}}
						/>
					</Box>
				</Box>
			</Grow>
		</Drawer>
	);
};
