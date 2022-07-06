import React, { PureComponent } from "react";
import "./Applymutual.css";
import Ellipse1 from "../../Assets/Ellipse1.png";
import Ellipse2 from "../../Assets/Ellipse2.png";

export class Applymutual extends PureComponent {
	render() {
		return (
			<div className="Applymutual">
				<div className="card1">
					<h1>FUND PROFILE</h1>
				</div>

				<div className="card2">
					<div className="card">
						<h2>Mutual Funds Profile</h2>
					</div>
					<div className="table-details">
						<table>
							<tr>
								<th>Fund House</th>
								<th>Incep date</th>
								<th>Fund Type</th>
								<th>No Sch Open</th>
								<th>No Sch Close</th>
								<th>Date &nbsp;&nbsp;&nbsp;</th>
								<th>Total Assests</th>
							</tr>
							<tr>
								<td className="red">
									<a href="/mutual-funds">Baroda BNP Paribas Asset Management India Pvt. Ltd.</a>
								</td>
								<td>4-Nov 2003</td>
								<td>Pvt. Sector - Joint Ventures ( Foreign)</td>
								<td>188</td>
								<td>21</td>
								<td>31-March-2022</td>
								<td>21375</td>
							</tr>
							<tr>
								<td className="red"></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td className="red"></td>
								<td></td>
								<td> </td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td className="red"></td>
								<td></td>
								<td> </td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td className="red"></td>
								<td></td>
								<td> </td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</table>
					</div>
				</div>
				<br />
				<br />

				<BottomSection />
			</div>
		);
	}
}
const BottomSection = () => {
	return (
		<div className="column-container contact-box pp">
			<img classname='imageUpper' src="./images/Ellipse 2.svg" alt="" />
			<h1>Didn’t Find what you were Looking For?</h1>

			<button className="contact-button">Contact Us</button>
			<img classname='imageBottem' src="./images/Ellipse 2.svg" alt="" />
		</div>
	);
};

export default Applymutual;
