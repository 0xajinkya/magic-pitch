import { BLACK, PURPLE } from "@/constants";
import { Email } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

export const Edge = () => {
	return (
		<Box
			sx={{
				width: "100%"
			}}
		>
			<Box
				sx={{
					pl: "149px",
					py: "138px",
					display: "flex",
					alignItems: "center"
				}}
			>
				<Box
					sx={{
						flex: 0.8
					}}
				>
					<Typography
						sx={{
							fontSize: "50px",
							fontFamily: "Montserrat",
							fontWeight: 600,
							colo: BLACK
						}}
					>
						The Magicpitch Edge
					</Typography>
					<Box
						sx={{
							pr: "175px"
						}}
					>
						<Typography
							sx={{
								fontFamily: "Montserrat",
								fontWeight: 400,
								fontSize: "16px"
							}}
						>
							The Power of Data and AI With access to an exclusive database of 750M+ contacts
							and 70M+ companies, our AI-driven approach ensures precision in every prospect
							selection.
						</Typography>
					</Box>
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
							width: "100%",
							height: "90vh",
							backgroundColor: PURPLE,
							borderTopLeftRadius: "50px",
							borderBottomLeftRadius: "50px"
						}}
					>
						<Box
							sx={{
								pl: "64px",
								py: "72px"
							}}
						>
							<Box
								sx={{
									backgroundColor: "#F5F5F5",
									width: "100%",
									height: "70vh",
									borderTopLeftRadius: "65px",
									borderBottomLeftRadius: "65px"
								}}
							>
								<Box
									sx={{
										py: "150px",
										pl: "110px",
										display: "flex",
										flexDirection: "column",
										gap: "20px"
									}}
								>
									<Box
                    sx={{
                      backgroundColor: "#E5E3E3",
                      width: "63px",
                      height: "63px",
                      borderRadius: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
											<Email 
                        sx={{
                          color: "white",
                          fontSize: "32px"
                        }}
                      />
									</Box>

									<Typography sx={{fontSize: "32px", fontFamily: "Montserrat", fontWeight: 600}}>Impressive Outreach Success Rates</Typography>
									<Typography
                    sx={{
                      fontFamily: "Montserrat"
                    }}
                  >
										Our commitment to excellence reflects in our numbers - an astounding
										82% open rate and a 10% reply rate. Outreach was never this effective.
									</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
