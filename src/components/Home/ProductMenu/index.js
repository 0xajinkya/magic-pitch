import { BLACK, PURPLE } from "@/constants";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import React from "react";

const MenuButton = ({ title }) => {
	return (
		<Grid item md={3} lg={3}>
			<Button
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "flex-start",
					gap: "15px",
					color: "#555",
					":hover": {
						color: PURPLE,
						backgroundColor: "transparent"
					}
				}}
				disableRipple
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="26"
					height="16"
					viewBox="0 0 26 16"
					fill="none"
					style={{
						marginTop: "1vh"
					}}
				>
					<path
						d="M13.9258 1.93359H23.9258M23.9258 1.93359V11.9336M23.9258 1.93359L13.9258 11.9336L8.92578 6.93359L1.42578 14.4336"
						stroke="#753EE9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						gap: "0px"
					}}
				>
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: 600,
							color: "inherit",
							fontFamily: "Montserrat",
							textAlign: "left",
							textTransform: "none"
						}}
					>
						{title}
					</Typography>
					<Typography
						sx={{
							fontSize: "13px",
							fontFamily: "Montserrat",
							textTransform: "none",
							color: "inherit",
							textAlign: "left"
						}}
					>
						Grow your business by acquiring high
					</Typography>
				</Box>
			</Button>
		</Grid>
	);
};

export const ProductMenu = ({ open, onClose }) => {
	return (
		<Modal open={open} onClose={onClose} sx={{ outline: "none" }}>
			<Box
				sx={{
					width: "75vw",
					height: "70vh",
					backgroundColor: "white",
					borderRadius: "20px",
					mx: "auto",
					mt: "17vh"
				}}
			>
				<Box>
					<Grid
						container
						columnSpacing={"30px"}
						rowSpacing={"40px"}
						sx={{
							px: "100px",
							py: "70px",
							display: "flex"
						}}
					>
						<MenuButton title={"B2B Pitch"} />
						<MenuButton title={"B2B Pitch"} />
						<MenuButton title={"B2B Pitch"} />
						<MenuButton title={"B2B Pitch"} />
						<MenuButton title={"Sales Pitch"} />
						<MenuButton title={"Sales Pitch"} />
						<MenuButton title={"Sales Pitch"} />
						<MenuButton title={"View All Pitch"} />
						<MenuButton title={"Career Pitch"} />
						<MenuButton title={"Career Pitch"} />
						<MenuButton title={"Career Pitch"} />
					</Grid>
				</Box>
			</Box>
		</Modal>
	);
};