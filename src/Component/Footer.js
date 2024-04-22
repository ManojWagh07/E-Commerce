import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
<div className="Boxes">
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>HELP</Heading>
			<FooterLink href="#">Playment</FooterLink>
			<FooterLink href="#">Shipping</FooterLink>
			<FooterLink href="#">Cancellation & Returns</FooterLink>
            <FooterLink href="#">Report Infringement</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
        
        <Column>
			<Heading>CONSUMER POLICY</Heading>
			<FooterLink href="#">Return Policy</FooterLink>
			<FooterLink href="#">Terms Of Use</FooterLink>
			<FooterLink href="#">Security</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Sitemap</FooterLink>
		</Column>


		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>

        
		</Row>
	</Container>
	</Box>
 </div>   
);
};
export default Footer;
