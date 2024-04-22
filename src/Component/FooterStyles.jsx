import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: aliceblue;
position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
// margin-left: 20px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(170px,2fr));
grid-gap:30px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color:black;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: rgb(227, 159, 104);
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: black;
margin-bottom: 40px;
font-weight: bold;
`;
