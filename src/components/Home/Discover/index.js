import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ReviewCard = ({ imgPath, name, position, review }) => {
	return (
		<Grid item md={4} lg={4}>
			<Box
				sx={{
					backgroundColor: "#F9F9F9",
					p: "30px",
					borderRadius: "20px",
					display: "flex",
					flexDirection: "column",
					gap: "20px"
				}}
			>
				<Image src={imgPath} width={40} height={40} alt={name} />
				<Typography
					sx={{
						fontFamily: "Montserrat",
						fontWeight: 600
					}}
				>
					{name}
				</Typography>
				<Typography
					sx={{
						fontFamily: "Montserrat",
						fontSize: "13px",
						color: "grey"
					}}
				>
					{position}
				</Typography>
				<Typography>&ldquo;{review}&rdquo;</Typography>
			</Box>
		</Grid>
	);
};

export const Discover = () => {
	return (
		<Box
			sx={{
				px: ["20px", "149px"],
				py: ["100px", "138px"],
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "60px"
			}}
		>
			<Typography
				sx={{
					fontSize: ["30px", "55px"],
					fontWeight: 600,
					fontFamily: "Montserrat",
					textAlign: "center"
				}}
			>
				Discover the Reasons Behind Our
				<br /> Clients Enthusiasm for MagicPitch
			</Typography>
			<Typography
				sx={{
					fontSize: "16px",
					fontFamily: "Montserrat",
					textAlign: "center"
				}}
			>
				Delve into the MagicPitch Experience: Client Testimonials
			</Typography>
			<Grid
				container
				rowSpacing={"20px"}
				columnSpacing={"50px"}
				sx={{
					display: "flex"
				}}
			>
				<ReviewCard
					imgPath={"/images/home/person4.svg"}
					name={"John Doe"}
					position={"CEO at techForward"}
					review={
						"Magicpitch has truly transformed our outreach campaigns. The precision they bring with their AI and the level of personalization is simply unmatched. Our B2B sales have soared like never before"
					}
				/>
				<ReviewCard
					imgPath={"/images/home/person5.svg"}
					name={"Sophie Turner"}
					position={"Head of Sales at InnovateNow"}
					review={
						"Never did I believe that outreach could be this effective. With Magicpitch, every email feels like it's tailor-made, and the results speak for themselves. It's pure magic!"
					}
				/>
				<ReviewCard
					imgPath={"/images/home/person4.svg"}
					name={"Liam O'Neil "}
					position={"Marketing Manager at SkyPulse"}
					review={
						"Data compliance was always a concern for us. But with Magicpitch, we sleep easy. Not only do they ensure our outreach is top-notch, but they also handle our data with utmost responsibility. A big thumbs up!"
					}
				/>
			</Grid>

			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: "10px"
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="132"
					height="3"
					viewBox="0 0 132 3"
					fill="none"
				>
					<path d="M0.394531 1.92676H39.4457" stroke="#989898" stroke-width="2" />
					<path d="M47.2552 1.92676H86.3064" stroke="#989898" stroke-width="2" />
					<path d="M92.5543 1.92676H131.605" stroke="#989898" stroke-width="2" />
				</svg>
			</Box>
		</Box>
	);
};
