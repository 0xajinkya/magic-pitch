import { BLACK, PURPLE } from "@/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const PerkCard = ({ color, icon, size, percent, desc }) => {
	return (
		<Box
			sx={{
				backgroundColor: "rgba(188, 174, 246, 0.12)",
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				alignItems: "center",
				py: "40px",
				px: "50px",
				minWidth: "150px",
				maxWidth: "200px",
				borderRadius: "40px"
			}}
		>
			<Box
				sx={{
					backgroundColor: color,
					p: "10px",
					borderRadius: "5px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<Image src={icon} width={size} height={size} />
			</Box>
			<Typography
				sx={{
					textAlign: "center",
					fontSize: "36px",
					fontWeight: 800,
					color: BLACK
				}}
			>
				{percent}
			</Typography>
			<Typography
				sx={{
					textAlign: "center",
					fontSize: "16px",
					fontFamily: "Montserrat"
					// fontWeight: 700
				}}
			>
				{desc}
			</Typography>
		</Box>
	);
};

export const Perks = () => {
	return (
		<Box
			sx={{
				py: "60px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
				flexDirection: ["column", "row"],
					gap: "40px"
				}}
			>
				<Box
					sx={{
						mt: ["0px", "60px"],
						ml: ["60px", 0]
					}}
				>
					<PerkCard
						color={PURPLE}
						icon={"/icons/email.svg"}
						size={29}
						percent={"98%"}
						desc={"Delivery rate"}
					/>
				</Box>
				{/* FF9F81 */}
				<Box>
					<PerkCard
						color={"#FF9F81"}
						icon={"/icons/email-open.svg"}
						size={29}
						percent={"78%"}
						desc={"Average Open rate"}
					/>
				</Box>
				<Box
					sx={{
						mt: ["0px", "60px"],
						ml: ["60px", 0]
					}}
				>
					<PerkCard
						color={PURPLE}
						icon={"/icons/lead.svg"}
						size={29}
						percent={"3%"}
						desc={"Average Lead rate"}
					/>
				</Box>
				<Box>
					<PerkCard
						color={"#FF9F81"}
						icon={"/icons/bounce.svg"}
						size={29}
						percent={"0.001%"}
						desc={"Bounce rate"}
					/>
				</Box>
			</Box>
		</Box>
	);
};
