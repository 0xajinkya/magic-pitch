import { CustomButton } from "@/components/Global";
import { ArrowForward, Circle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Points = ({
	backgroundColor,
	imgBack,
	number,
	title,
	desc,
	imgPath,
	zIndex,
	marginTop
}) => {
	return (
		
		<Box
			sx={{
				backgroundColor: backgroundColor,
				px: ["30px", "141px"],
				py: ["100px", "255px"],
				borderTopLeftRadius: "57px",
				borderTopRightRadius: "57px",
				zIndex: zIndex,
				mt: marginTop || 0,
				display: "flex",
				flexDirection: ["column-reverse", "row"],
				alignItems: "center"
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					flex: 1
				}}
			>
				<Box
					sx={{
						position: "relative",
						px: ["00px", 0]
					}}
				>
					<Circle
						sx={{
							fontSize: ["85px", "120px"],
							position: "absolute",
							color: imgBack,
							top: ["20%", "25%"],
							left: ["-25%", "-26%"]
						}}
					/>
					<Typography
						sx={{
							fontFamily: "Zen Tokyo Zoo",
							fontSize: ["100px", "150px"],
							transform: "rotate(-17.669deg)",
							color: "white"
						}}
					>
						{number}
					</Typography>
				</Box>
				<Box
					sx={
						{
							// pl: ["30px"]
						}
					}
				>
					<Typography
						sx={{
							fontSize: ["40px", "64px"],
							fontWeight: 700,
							fontFamily: "Montserrat",
							color: "white"
						}}
					>
						{title}
					</Typography>
				</Box>
				<Box
					sx={{
						pr: ["0px", "150px"]
					}}
				>
					<Typography
						sx={{
							fontSize: "16px",
							fontWeight: 400,
							fontFamily: "Montserrat",
							mt: "20px",
							color: "white"
						}}
					>
						{desc}
					</Typography>
				</Box>
				<CustomButton
					text={"Learn More"}
					icon={<ArrowForward sx={{ ml: "20px" }} />}
					styles={{
						mt: "30px",
						color: "white",
						display: "flex"
					}}
				/>
			</Box>
			<Box
				sx={{
					flex: 1,
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<Box
					sx={{
						width: ["300px", "484px"],
						height: ["300px", "654px"],
						backgroundColor: imgBack,
						borderRadius: "20px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<Image src={imgPath} width={361} height={239} alt={title} />
				</Box>
			</Box>
		</Box>
	);
};
