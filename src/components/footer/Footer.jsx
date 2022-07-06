import React from "react";
import "../footer/footer.css";
import { Link, useNavigate } from "react-router-dom";

export const Footer = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="footer-container">
				<img src="./images/Vector 12.svg"></img>
				<img src="./images/Vector 9.svg" />
				<img src="./images/Vector 10.png" />
				<img src="./images/Vector 11.svg" />
			</div>
			<div className="footer">
				<div className="top-section">
					<img src="./images/image 2.svg" />
					<ul>
						<li onClick={() => navigate("/about-us")}>About Us</li>
						<li onClick={() => navigate("/services")}>Services</li>
						<li onClick={() => navigate("/contact-us")}>Contact Us</li>
						<li onClick={() => navigate("/downloads")}>Downloads</li>
						<li onClick={() => navigate("/about-us")}>Careers</li>
						<li onClick={() => navigate("/privacy-policy")}>Privacy Policy</li>
						<li onClick={() => navigate("/terms-of-use")}>Terms of Use</li>
						<li onClick={() => navigate("/disclaimer")}>Disclaimer</li>
						<li onClick={() => navigate("/nse")}>NSE</li>
						<li onClick={() => navigate("/bse")}>BSE</li>
						<li onClick={() => navigate("/cdsl")}>CDSL</li>
						<li onClick={() => navigate("/sebi")}>SEBI</li>
						<li onClick={() => navigate("/scores")}>SCORES</li>
						<li onClick={() => navigate("/investor-charter")}>
							Investor Charter
						</li>
					</ul>
				</div>
				<div className="bottom-section">
					<div className="first-col">
						<h1>Kalpataru Multiplier Ltd. </h1>
						<h2>
							Kalpataru is a wishful Divine Tree and in present context a widely
							Trusted, Time tested and Transparent Share Broker, Mutual Fund
							Distributor and D.P. of this region.
						</h2>
						<h1>Address</h1>
						<h2>Hall No. 2, 1st Floor Western Block,</h2>
						<h2>Above Central Bank, GTB Complex</h2>
						<h2>T. T. Nagar, Bhopal-462003</h2>
					</div>
					<div className="second-col">
						<Link to='/'>Seurity Policy</Link>
						<Link to='/'>Policies and Procedure</Link>
						<Link to='/'>PMLA Policy</Link>
						<Link to='/'>Surveillance Policy</Link>
						<Link to='/'>Branch Supervision Policy</Link>
						<Link to='/'>Sebi Complaint</Link>
						<Link to='/'>Investor Charter</Link>
					</div>
					<div className="third-col">
						<Link to='/</div>'>Disclaimer</Link>
						<Link to='/'>RMS Ploicy</Link>
						<Link to='/'>Useful Links</Link>
						<Link to='/'>Careers</Link>
						<Link to='/'>Internal Office Automation Software</Link>
						<Link to='/' >Investor Complaints</Link>
					</div>
					<div className="fourth-col">
						
					</div>
				</div>
				<div className="social-icons">
					<img src="./images/Vector (4).svg" />
					<img src="./images/Vector (5).svg" />
					<img src="./images/Vector (6).svg" />
					<img src="./images/Vector (7).svg" />
				</div>
			</div>
		</>
	);
};
export default Footer;
