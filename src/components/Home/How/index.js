"use client";

import { BLACK } from "@/constants";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HowAccordion = ({ title, icon, name, handleChange, expanded }) => {
	// console.log(expanded === name);

	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		setIsExpanded(expanded === name);
	}, []);

	return (
		<Accordion
			sx={{
				boxShadow: "none",
				outline: "none!important",
				border: "0px!important"
				// backgroundColor: "rgba(216, 207, 255, 0.12)",
				// borderRadius: "20px!important"
				// backgroundColor: `${isExpanded} ? rgba(216, 207, 255, 0.12) : transparent`
			}}
			expanded={expanded === name}
			onChange={handleChange(name)}
		>
			<AccordionSummary
				sx={{
					display: "flex",
					alignItems: "center",
					gap: "10px"
				}}
			>
				<Box
					sx={{
						my: "auto",
						mr: "10px",
						backgroundColor: "rgba(216, 207, 255, 0.12)",
						p: "5px",
						borderRadius: "5px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						style={{
							width: "20px",
							height: "20px",
							color: "#753EE9"
						}}
					>
						{icon}
					</svg>
				</Box>
				<Typography sx={{ fontSize: "20px", fontWeight: 500, fontFamily: "Montserrat" }}>
					{title}
				</Typography>
			</AccordionSummary>
			<AccordionDetails
				sx={{
					ml: "30px"
				}}
			>
				<Typography
					sx={{
						fontSize: "16px",
						fontFamily: "Montserrat"
					}}
				>
					The Power of Data and AI With acces Power of Data and AI With access
				</Typography>
			</AccordionDetails>
		</Accordion>
	);
};

export const How = () => {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
		console.log(isExpanded, panel);
	};

	return (
		<Box
			sx={{
				width: "100%"
			}}
		>
			<Box
				sx={{
					px: ["20px", "149px"],
					py: ["100px", "138px"],
					display: "flex",
					alignItems: "center",
					flexDirection: ["column", "row"]
				}}
			>
				<Box
					sx={{
						flex: 1,
						display: "flex",
						alignItems: "flex-start",
						flexDirection: "column",
						gap: "30px"
					}}
				>
					<Typography
						sx={{
							color: BLACK,
							fontSize: ["30px", "45px"],
							fontWeight: 600
						}}
					>
						How it Works?
					</Typography>
					<Box
						sx={{
							pr: ["0px", "100px"],
							display: "flex",
							flexDirection: "column",
							gap: "30px"
						}}
					>
						<HowAccordion
							expanded={expanded}
							title={"Client Consultation"}
							handleChange={handleChange}
							name={"panel1"}
							icon={
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
								/>
							}
						/>
						<HowAccordion
							expanded={expanded}
							title={"Comprehensive Analysis"}
							handleChange={handleChange}
							name={"panel2"}
							icon={
								<>
									{" "}
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
									/>
								</>
							}
						/>
						<HowAccordion
							expanded={expanded}
							title={"Human Centered Approach"}
							handleChange={handleChange}
							name={"panel3"}
							icon={
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
								/>
							}
						/>
						<HowAccordion
							expanded={expanded}
							title={"Presonalised Outreach"}
							handleChange={handleChange}
							name={"panel4"}
							icon={
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
								/>
							}
						/>

						<HowAccordion
							expanded={expanded}
							title={"Campaign Management"}
							handleChange={handleChange}
							name={"panel4"}
							icon={
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
								/>
							}
						/>
					</Box>
				</Box>
				<Box
					sx={{
						flex: 1,
						display: ["none", "flex"],
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<Box
						sx={{
							backgroundColor: "#E8E2F4",
							borderRadius: "80px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<Image
							src={"/images/home/person3.svg"}
							width={481}
							height={556}
							style={{
								margin: "auto"
							}}
							alt={"Person"}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
