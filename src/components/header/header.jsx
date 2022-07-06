import React, { useState } from "react";
import "./header.css";
import navBarImage from "../../Assets/images/navbar-image.png";
import Homepage from "../homepage/homepage";
import Sidebar from "../SideBar/Sidebar";
import { Navigate, useNavigate, Link } from "react-router-dom";

const Header = ({ openModal, setOpenModal }) => {
	const list = [
		{ id: 1, name: "About Us" },
		{ id: 1, name: "About Us" },
		{ id: 1, name: "About Us" },
		{ id: 1, name: "About Us" },
	];
	const [openDropDown1, setOpenDropDown1] = useState(false);
	const [openDropDown2, setOpenDropDown2] = useState(false);
	const navigate = useNavigate();
	const dropDownTask1 = () => {
		setOpenDropDown1(!openDropDown1);
		setOpenDropDown2(false);
	};
	const dropDownTask2 = () => {
		setOpenDropDown1(false);
		setOpenDropDown2(!openDropDown2);
	};
	return (
		<>
			<div className="navbar">
				<div className="navbar_child_div">
					<div className="navbar_image">
						<Link to='/'><img
							src={navBarImage}
							onClick={() => {
								navigate("/");
							}}
						></img></Link>
					</div>

					<div className="navbar_elements">
						<ul>
							<div className="drop-down">
								<Link to="/about-us">
									<li> About Us</li>
								</Link>
							</div>
							<div className="drop-down">
								<Link to='/services'><li> Services</li></Link>
								{openDropDown1 && (
									<DropDown1
										setOpenDropDown1={setOpenDropDown1}
										openDropDown1={openDropDown1}
										openDropDown2={openDropDown2}
									/>
								)}

								<img
									src="./images/icons8-chevron-24.png"
									onClick={() => dropDownTask1()}
								/>
							</div>
							<div className="drop-down">
								<li> Investor Corner</li>
								{openDropDown2 && (
									<DropDown2 setOpenDropDown2={setOpenDropDown2} />
								)}
								<img
									src="./images/icons8-chevron-24.png"
									onClick={() => dropDownTask2()}
								/>
							</div>
							<div className="drop-down">
								<Link to="/partner-with-us">
									<li> Partner With Us</li>
								</Link>
							</div>
							<div className="drop-down">
								<Link to="/blogs">
									<li> Blog</li>
								</Link>
							</div>
						</ul>
					</div>
					<div className="login_ipo_btn">
						<button onClick={() => navigate("/signup")}>Login</button>

						<button onClick={() => navigate("/ipo")}>IPO</button>
					</div>
					<div class="bread" onClick={() => setOpenModal(!openModal)}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</>
	);
};
const DropDown1 = ({ openDropDown1, setOpenDropDown1 }) => {
	const [openNested1, setOpenNested1] = useState(false);
	const [openNested2, setOpenNested2] = useState(false);
	const openNestedDropDown1 = () => {
		console.log("hell");
		setOpenNested1(!openNested1);
		setOpenNested2(false);
	};
	const openNestedDropDown2 = () => {
		console.log("hell");
		setOpenNested2(!openNested2);
		setOpenNested1(false);
	};
	const closingTask = () => {
		console.log("hell");
		setOpenDropDown1(false);
	};
	return (
		<>
			<div class="dropdown-box">
				<ul>
					<div className="nested-dropdown">
						<li>Mutual Fund Distributor</li>
						<img
							src="./images/gray-arrow.png"
							onClick={() => openNestedDropDown1()}
						/>
					</div>

					<div className="nested-dropdown">
						<Link to='/trading'><li>Trading</li></Link>
						<img
							src="./images/gray-arrow.png"
							onClick={() => openNestedDropDown2()}
						/>
					</div>
					<Link to="/depository">
						<li onClick={() => closingTask()}>Depository</li>
					</Link>
					<Link to="/slb">
						<li onClick={() => closingTask()}>SLB</li>
					</Link>
					<Link to="/ipo">
						<li onClick={() => closingTask()}>IPO</li>
					</Link>
					<Link to="/general-insurence">
						<li onClick={() => closingTask()}>General Insurance</li>
					</Link>
					<Link to="/pan-card">
						<li onClick={() => closingTask()}>Pan Card</li>
					</Link>
					<Link to="sgb">
						<li onClick={() => closingTask()}>SGB</li>
					</Link>
				</ul>
			</div>
			{openNested1 && (
				<NestedDropDown1
					openDropDown1={openDropDown1}
					setOpenDropDown1={setOpenDropDown1}
				/>
			)}
			{openNested2 && <NestedDropDown2 setOpenDropDown1={setOpenDropDown1} />}
		</>
	);
};
const DropDown2 = ({ setOpenDropDown2 }) => {
	return (
		<div class="dropdown-box" onClick={() => setOpenDropDown2(false)}>
			<ul>
				<Link to="/advisory">
					<li>Advisory For Investors</li>
				</Link>
				<Link to="/advisory">
					<li>List Of Charges</li>
				</Link>
				<Link to="/margin-calculator">
					<li>Margin Calculator</li>
				</Link>
				<Link to="/news">
					<li>News & Announcement</li>
				</Link>
				<Link to="/privacy-policy">
					<li>Privacy Policy</li>
				</Link>
				<Link to="/terms">
					<li>Terms Of Use</li>
				</Link>
				<Link to="/downloads">
					<li>Downloads</li>
				</Link>
			</ul>
		</div>
	);
};
const NestedDropDown1 = ({ setOpenDropDown1 }) => {
	return (
		<div class="nested-dropdown-box" onClick={() => setOpenDropDown1(false)}>
			<ul>
				<Link to="/apply-mutual">
					<li>Mutual Funds</li>
				</Link>
				<Link to="/nps">
					<li>NPS</li>
				</Link>
				<Link to="/bonds">
					<li>Bonds</li>
				</Link>
				<Link to="/margin-calculator">
					<li>Margin Calculator</li>
				</Link>
				<Link to="/tax-saving">
					<li>Tax Saving Schemes</li>
				</Link>
			</ul>
		</div>
	);
};
const NestedDropDown2 = ({ setOpenDropDown1 }) => {
	return (
		<div class="nested-dropdown-box" onClick={() => setOpenDropDown1(false)}>
			<ul>
				<Link to="/tax-saving">
					<li>Equity</li>
				</Link>
				<Link to="/tax-saving">
					<li>F&O</li>
				</Link>
				<Link to="/tax-saving">
					<li>Comodity</li>
				</Link>
				<Link to="/tax-saving">
					<li>SLB</li>
				</Link>
			</ul>
		</div>
	);
};

export default Header;
