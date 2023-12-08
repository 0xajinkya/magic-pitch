import { CustomButton } from "@/components/Global";
import { PURPLE } from "@/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Demo = () => {
	return (
		<Box
			sx={{
				width: "100%",
                borderBottom: "1px solid #D8DCE3"
			}}
		>
			<Box
				sx={{
					px: ["20px", "149px"],
				py: ["100px", "100px"],
				}}
			>
				<Box
					sx={{
						backgroundColor: "rgba(244, 246, 255, 1)",
						borderRadius: "50px",
						width: "100%"
					}}
				>
					<Box
						sx={{
							px: ["30px", "77px"],
							py: ["40px", "127px"],
							display: "flex",
							alignItems: "center",
							// backgroundImage: "url('/images/home/woman.svg') no-repeat center 10%",
							// backgroundSize: "50% 50%",
							background: ["none", `url('/images/home/woman.svg') no-repeat 110% 100%`],
							backgroundSize: "60%"
						}}
					>
						<Box
							sx={{
								pr: "450px",
								display: "flex",
								flexDirection: "column",
								gap: "20px"
							}}
						>
							<Typography
								sx={{
									fontSize: ["35px", "50px"],
									fontWeight: 700
								}}
							>
								Get your Ideal Customers Convert your Leads Increase Engagement
							</Typography>
							<Box>
								<CustomButton
									text={"Book A Demo"}
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
										":hover": {
											backgroundColor: PURPLE,
											color: "white"
										}
									}}
								/>
							</Box>
						</Box>
						{/* <Image src={"/images/home/woman.svg"} height={486} width={600} /> */}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
