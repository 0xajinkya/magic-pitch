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
				px: "141px",
				py: "255px",
				borderTopLeftRadius: "57px",
				borderTopRightRadius: "57px",
				zIndex: zIndex,
				mt: marginTop || 0,
				display: "flex",
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
						position: "relative"
					}}
				>
					<Circle
						sx={{
							fontSize: "120px",
							position: "absolute",
							color: imgBack,
							top: "20%",
							left: "-26%"
						}}
					/>
					<Typography
						sx={{
							fontFamily: "Zen Tokyo Zoo",
							fontSize: "150px",
							transform: "rotate(-17.669deg)",
							color: "white"
						}}
					>
						{number}
					</Typography>
				</Box>

				<Typography
					sx={{
						fontSize: "64px",
						fontWeight: 700,
						fontFamily: "Montserrat",
						color: "white"
					}}
				>
					{title}
				</Typography>
				<Box
					sx={{
						pr: "150px"
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
						width: "484px",
						height: "654px",
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
