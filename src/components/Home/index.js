import { Box } from "@mui/material";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Perks } from "./Perks";
import { Points } from "./Points";
import { PURPLE } from "@/constants";
import { How } from "./How";
import { Edge } from "./Edge";
import { Discover } from "./Discover";
import { Demo } from "./Demo";
import { Footer } from "./Footer";

export const HomePage = () => {
	return (
		<Box>
			<Navbar />
			<Hero />
			<Perks />
			<Points
				backgroundColor={PURPLE}
				number={"01"}
				title={"Prospect Intelligence"}
				desc={
					"Dive deep into AI-powered precision with our unique ICP scoring mechanism. We meticulously match the Ideal Customer Profile (ICP) of our clients to every company within our extensive database of 70 Million+ companies using advanced AI algorithms ."
				}
				imgBack={"#8551F1"}
				imgPath={"/images/home/1.svg"}
			/>
			<Points
				backgroundColor={"#A83EE9"}
				number={"02"}
				title={"Data Sourcing"}
				desc={
					"Dive deep into AI-powered precision with our unique ICP scoring mechanism. We meticulously match the Ideal Customer Profile (ICP) of our clients to every company within our extensive database of 70 Million+ companies using advanced AI algorithms ."
				}
				imgBack={"#B84FF9"}
				imgPath={"/images/home/2.svg"}
                marginTop={"-100px"}
			/>
            <Points
				backgroundColor={"#FF916E"}
				number={"03"}
				title={"Outreach Intelligence"}
				desc={
					"Dive deep into AI-powered precision with our unique ICP scoring mechanism. We meticulously match the Ideal Customer Profile (ICP) of our clients to every company within our extensive database of 70 Million+ companies using advanced AI algorithms ."
				}
				imgBack={"#F8AB93"}
				imgPath={"/images/home/3.svg"}
                marginTop={"-100px"}
			/>
            <Points
				backgroundColor={"#933EE9"}
				number={"04"}
				title={"Servers, Warm - Up And Deliverability"}
				desc={
					"Dive deep into AI-powered precision with our unique ICP scoring mechanism. We meticulously match the Ideal Customer Profile (ICP) of our clients to every company within our extensive database of 70 Million+ companies using advanced AI algorithms ."
				}
				imgBack={"#A146FD"}
				imgPath={"/images/home/4.svg"}
                marginTop={"-100px"}
			/>
            <Points
				backgroundColor={"#6E85FF"}
				number={"05"}
				title={"Servers, Warm - Up And Deliverability"}
				desc={
					"Dive deep into AI-powered precision with our unique ICP scoring mechanism. We meticulously match the Ideal Customer Profile (ICP) of our clients to every company within our extensive database of 70 Million+ companies using advanced AI algorithms ."
				}
				imgBack={"#617AFF"}
				imgPath={"/images/home/5.svg"}
                marginTop={"-100px"}
			/>
            <How />
            <Edge />
            <Discover />
            <Demo />
            <Footer />
		</Box>
	);
};
