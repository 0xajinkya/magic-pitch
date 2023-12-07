import { PURPLE } from "@/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
	return (
		<Box
			sx={{
				px: "149px",
				py: "80px",
				display: "flex",
				alignItems: "flex-start",
				justifyContent: "space-between"
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "30px"
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "20px"
					}}
				>
					<Image src={"/logo.svg"} width={20} height={20} />
					<Typography
						sx={{
							fontWeight: 700,
							fontFamily: "Montserrat",
							color: PURPLE
						}}
					>
						magicpitch
					</Typography>
				</Box>
				<Box>
					<Typography
						sx={{
							fontFamily: "Montserrat"
						}}
					>
						One Central, The Offices 4 Dubai,
						<br /> United Arab Emirates
					</Typography>
					<Typography
						sx={{
							fontFamily: "Montserrat",
							mt: "15px"
						}}
					>
						info@magicpitch.ai
					</Typography>
				</Box>
				<Box
					sx={{
						mt: "100px"
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "10px"
						}}
					>
						<Image src={"/insta.svg"} width={20} height={20} />
						<Image src={"/linkedin.svg"} width={20} height={20} />
						<Image src={"/x.svg"} width={20} height={20} />
					</Box>
					<Typography
						sx={{
							fontFamily: "Montserrat",
							mt: "20px"
						}}
					>
						&copy;2023 Magicpitch All Right Reversed
					</Typography>
				</Box>
			</Box>

			<Box
				sx={{
					display: "flex",
					alignItems: "flex-start",
					gap: "150px"
				}}
			>
				<Box>
					<Typography
						sx={{
							fontFamily: "Montserrat",
							fontWeight: 600
						}}
					>
						Platform
					</Typography>
				</Box>
				<Box>
					<Typography
						sx={{
							fontFamily: "Montserrat",
							fontWeight: 600
						}}
					>
						Solution
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "20px"
					}}
				>
					<Typography
						sx={{
							fontFamily: "Montserrat",
							fontWeight: 600
						}}
					>
						Company
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "20px"
						}}
					>
						<Typography
							sx={{
								fontFamily: "Montserrat"
							}}
						>
							About Us
						</Typography>
						<Typography
							sx={{
								fontFamily: "Montserrat"
							}}
						>
							Blog
						</Typography>
						<Typography
							sx={{
								fontFamily: "Montserrat"
							}}
						>
							Careers
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "20px"
					}}
				>
					<Typography
						sx={{
							fontFamily: "Montserrat",
							fontWeight: 600
						}}
					>
						Resources
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "20px"
						}}
					>
						<Typography
							sx={{
								fontFamily: "Montserrat"
							}}
						>
							Contact
						</Typography>
						<Typography
							sx={{
								fontFamily: "Montserrat"
							}}
						>
							Terms Of Service
						</Typography>
						<Typography
							sx={{
								fontFamily: "Montserrat"
							}}
						>
							Privacy Policy
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
