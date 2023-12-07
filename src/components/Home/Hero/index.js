import { CustomButton } from "@/components/Global";
import { PURPLE } from "@/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Hero = () => {
	return (
		<Box
			sx={{
				py: "80px",
				display: "flex",
				flexDirection: "column",
				position: "relative"
			}}
		>
			{/* Absoute Components Starts */}

			{/* Absoute Components End */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "30px",
					position: "relative",
					px: "100px"
				}}
			>
				<Box
					sx={{
						position: "absolute",
						top: "80%",
						left: "30%"
					}}
				>
					<Box
						sx={{
							position: "relative"
						}}
					>
						<Image src={"/images/home/person1.svg"} width={50} height={50} alt={"Person1"} />
						<Image
							src={"/icons/home/or-arrow.svg"}
							width={30}
							height={30}
							alt="Arrow"
							style={{ position: "absolute", bottom: "-50%", left: "-70%" }}
						/>
						<Typography
							sx={{
								fontFamily: "Montserrat",
								backgroundColor: "#FF725E",
								color: "white",
								px: "20px",
								borderRadius: "3px",
								py: "5px",
								position: "absolute",
								width: "140px",
								left: "-450%",
								top: "150%"
							}}
						>
							Head Of Finance
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						position: "absolute",
						top: "50%",
						right: "20%"
					}}
				>
					<Box
						sx={{
							position: "relative"
						}}
					>
						<Image src={"/images/home/person2.svg"} width={50} height={50} alt={"Person1"} />
						<Image
							src={"/icons/home/pu-arrow.svg"}
							width={30}
							height={30}
							alt="Arrow"
							style={{ position: "absolute", bottom: "-50%", left: "90%" }}
						/>
						<Typography
							sx={{
								fontFamily: "Montserrat",
								backgroundColor: PURPLE,
								color: "white",
								px: "20px",
								borderRadius: "3px",
								py: "5px",
								position: "absolute",
								width: "105px",
								left: "150%",
								top: "150%"
							}}
						>
							HR Manager
						</Typography>
					</Box>
				</Box>
				<Typography
					sx={{
						fontSize: "64px",
						textAlign: "center",
						fontFamily: "Open Sans",
						color: PURPLE,
						fontWeight: 700
					}}
				>
					Revolutionize your Outreach with AI enhanced precision
				</Typography>
				<Box
					sx={{
						px: "400px"
					}}
				>
					<Typography
						sx={{
							fontSize: "17px",
							fontFamily: "Montserrat",
							textAlign: "center",
							color: "#555555"
						}}
					>
						Grow your business by acquiring high quality leads through AI-powered, hyper
						personalized effective
					</Typography>
				</Box>
				<Box sx={{}}>
					<CustomButton
						text={"Find your Product"}
						icon={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								style={{
									width: "15px",
									height: "15px",
									color: "white",
									transform: "rotate(-30deg)"
								}}
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
								/>
							</svg>
						}
						styles={{
							backgroundColor: PURPLE,
							color: "white",
							px: "25px",
							py: "10px",
							display: "flex",
							alignItems: "center",
							gap: "10px",
							fontWeight: 400,
							fontSize: "15px",
							mx: "auto",
							":hover": {
								backgroundColor: PURPLE,
								color: "white"
							}
						}}
					/>
				</Box>
			</Box>
			<Box
				sx={{
					mt: "200px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center"
				}}
			>
				<Image
					src={"/images/home/dash1.svg"}
					width={1440}
					height={1200}
                    alt="Dashboard"
					// style={{ backgroundColor: "red" }}
				/>
				<Box
					sx={{
						width: "1400px",
						height: "800px",
						backgroundColor: PURPLE,
						borderRadius: "43px",
						mt: "-650px",
						zIndex: -1
					}}
				>
					<Box
						sx={{
							display: "flex",
                            height: "100%",
                            mt: "500px",
                            px: "400px",
                            position: "relative"
						}}
					>
                        <Image 
                            src={"/images/home/circle.svg"}
                            width={150}
                            height={150}
                            style={{
                                position: "absolute",
                                zIndex: -1,
                                top: "-3%",
                                left: "28%"
                            }}
                        />
						<Typography
							sx={{
								fontSize: "72.5px",
								fontWeight: 600,
								color: "white",
                                textAlign: "center"
							}}
						>
							Get you ideal customers
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
