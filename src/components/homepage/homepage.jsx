import React from "react";
import getStartedIMage from "../../Assets/images/Investment-data-img.png";
import welcomeImage from "../../Assets/images/welcome_img.png";
import "../homepage/homepage.css";
import featureImage from "../../Assets/images/features_img.png";
import arrowImage from "../../Assets/images/arrow _img.png";
import productOfferedImage from "../../Assets/images/product_offered_img.png";
import drop_your_details_img from "../../Assets/images/dropYourDetails_img.png";
import know_more_img from "../../Assets/images/know_more_img.png";
import our_services_main_image from "../../Assets/images/our_services_main_image.png";

import img11 from "../../Assets/images/our_services/11.png";
import img12 from "../../Assets/images/our_services/12.png";
import img13 from "../../Assets/images/our_services/13.png";
import img14 from "../../Assets/images/our_services/14.png";

import img21 from "../../Assets/images/our_services/21.png";
import img22 from "../../Assets/images/our_services/22.png";
import img23 from "../../Assets/images/our_services/23.png";
import img24 from "../../Assets/images/our_services/24.png";

import right_arrow_img from "../../Assets/images/right_arrow.png";
import left_arrow_img from "../../Assets/images/left_arrow.png";

import testimonial_image1 from "../../Assets/images/clint_testimonials_images/i1.png";
import srinidhi_img from "../../Assets/images/clint_testimonials_images/srinidhi_img.png";
import amansingh_img from "../../Assets/images/clint_testimonials_images/aman singh.png";
import sandeep_img from "../../Assets/images/clint_testimonials_images/sandeep patel.png";
import rahul_img from "../../Assets/images/clint_testimonials_images/rahul tomar.png";
import play_btn_img from "../../Assets/images/clint_testimonials_images/play_vector.png";

import faq_arrow from "../../Assets/images/faq/faq_arrow.png";
import faq_i1 from "../../Assets/images/faq/faq_image1.png";
import faq_i2 from "../../Assets/images/faq/faq_image2.png";
import faq_i3 from "../../Assets/images/faq/faq_image3.png";
import faq_i4 from "../../Assets/images/faq/faq_image4.png";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const Homepage = () => {
	const navigate = useNavigate();
	const [investInText, setinvestInText] = useState("Mutual Funds");

	return (
		<>
			<div className="homepage">
				<div className="get_started">
					<div className="get_started_img">
						<img src={getStartedIMage} alt="" />
					</div>

					<div className="get-started-btn">
						<div>
							<h1>
								Invest in <span>Mutual Funds</span>
							</h1>

							<p>Trusted by Millions for multiplying their investment!</p>

							<button onClick={() => navigate("/signup")}>
								Get Started
							</button>
						</div>
					</div>
				</div>

				{/* welcome to kalpataru div*/}

				<div className="welcome_kalpataru">
					<div className="welcome_kalpataru_des">
						<div>
							<h1>Kalpataru Multiplier Ltd. </h1>

							<div className="welcome_kalpataru_des_card">
								<p>
									The desired Devine Tree, Kalpataru is a widely regarded,
									time-tested, and transparent Share Broker, Investment
									Distributor, and D.P. in the current setting of this region.
									All of your investment needs and concerns can be met by
									Kalpataru, which has been in business since 1992. Derivative
									(F&O) trading, currency trading, IPO, mutual fund, and pan
									card services are all part of our business.
								</p>

								<button>Read More</button>
							</div>
						</div>
					</div>

					<div className="welcome_kalpataru_img">
						<img src={welcomeImage} alt="" />
					</div>
				</div>

				{/* features */}

				<div className="feature">
					<div className="feature_img">
						<img src={featureImage} alt="" />
					</div>

					<div className="feature_features">
						<h1>Features</h1>

						<div className="feature_features_boxes">
							<div className="feature_features_box">
								<p>
									Expert <br />
									Advidsory{" "}
								</p>
							</div>

							<img src={arrowImage} alt="" />

							<div className="feature_features_box">
								<p>
									Transparent <br /> Pricing
								</p>
							</div>

							<img src={arrowImage} alt="" />

							<div className="feature_features_box">
								<p>
									Flexible <br /> Brokerage Plans{" "}
								</p>
							</div>

							<img src={arrowImage} alt="" />

							<div className="feature_features_box">
								<p>
									Offers Both <br />
									Online and Offline
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* product offered */}

				<div className="product_offered">
					<div className="product_offered_headline">
						<h1>Offered Products with Exchanges</h1>
					</div>

					<div className="product_offered_div">
						<div className="product_offered_div_img">
							<img src={productOfferedImage} alt="" />
						</div>

						<div className="product_offered_types">
							<div className="product_offered_types_div">
								<div className="product_offered_types_div_div1">
									<button className="product_offered_types_div_div1_btn1">
										NSE
									</button>
									<button className="product_offered_types_div_div1_btn2">
										BSE
									</button>
									<button className="product_offered_types_div_div1_btn3">
										MCX
									</button>
								</div>

								<div className="product_offered_types_div_div2">
									<button>Equities</button>
									<button>Derivatives</button>
									<button>Fixed Income & Debt </button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* drop your details */}

				<div className="drop_your_details">
					<div className="drop_your_details_heading">
						<h1>Choose the correct path to Multiplying your wealth</h1>
					</div>
					<div>
						<h2>Drop Your Details</h2>
					</div>

					<div className="drop_your_details_main_div">
						<div>
							<div className="drop_your_details_main_div_inputs">
								<input placeholder="Name"></input>
								<input placeholder="Mobile Number"></input>
								<input placeholder="Email Id"></input>
							</div>
						</div>

						<div className="drop_your_details_main_div_img">
							<img src={drop_your_details_img} alt="" />
						</div>
					</div>

					<div className="drop_your_details_btn">
						<button>Submit</button>
					</div>
				</div>

				{/* know more */}
				<div className="know_more">
					<div>
						<div className="know_more_btn">
							<h1>Find out more about us!</h1>
							<p>
								Just click on the button to <br />
								know more
							</p>
							<button onClick={() => navigate("/about-us")}>About Us</button>
						</div>
						<div className="know_more_img">
							<img src={know_more_img} alt="" />
						</div>
					</div>
				</div>

				{/* our services */}

				<div className="our_services">
					<div className="our_services_child">
						<div className="our_services_heading">
							<h1>Our Services</h1>
						</div>

						<div className="our_services_content">
							<div className="our_services_content_child">
								<div className="our_services_content_child_cards">
									<div className="our_services_content_child_cards_1">
										<div className="our_services_content_child_cards_1_card">
											<div>
												<div className="our_services_content_child_cards_1_card_title">
													<h4>Mutual Fund</h4>
												</div>
												<div className="our_services_content_child_cards_1_card_img">
													<img src={img11} alt="" />
												</div>
											</div>
										</div>
										<div className="our_services_content_child_cards_1_card">
											<div>
												<div className="our_services_content_child_cards_1_card_title">
													<h4>Trading</h4>
												</div>
												<div className="our_services_content_child_cards_1_card_img">
													<img src={img12} alt="" />
												</div>
											</div>
										</div>
										<div className="our_services_content_child_cards_1_card">
											<div>
												<div className="our_services_content_child_cards_1_card_title">
													<h4>Equity</h4>
												</div>
												<div className="our_services_content_child_cards_1_card_img">
													<img src={img13} alt="" />
												</div>
											</div>
										</div>

										<div className="our_services_content_child_cards_1_card">
											<div>
												<div className="our_services_content_child_cards_1_card_title">
													<h4>Depository</h4>
												</div>

												<div className="our_services_content_child_cards_1_card_img">
													<img src={img14} alt="" />
												</div>
											</div>
										</div>
									</div>

									<div className="our_services_content_child_cards_2">
										<div className="our_services_content_child_cards_1_card">
											<div>
												<div className="our_services_content_child_cards_1_card_title">
													<h4>IPO</h4>
												</div>

												<div className="our_services_content_child_cards_1_card_img">
													<img src={img21} alt="" />
												</div>
											</div>
										</div>

										<div className="our_services_content_child_cards_1_card">
											<div>
												<div className="our_services_content_child_cards_1_card_title">
													<h4>General Insurance</h4>
												</div>

												<div className="our_services_content_child_cards_1_card_img">
													<img src={img22} alt="" />
												</div>
											</div>
										</div>

										<div className="our_services_content_child_cards_1_card">
											<div>
												<div className="our_services_content_child_cards_1_card_title">
													<h4>PAN CARD</h4>
												</div>

												<div className="our_services_content_child_cards_1_card_img">
													<img src={img23} alt="" />
												</div>
											</div>
										</div>

										<div className="our_services_content_child_cards_1_card">
											<div>
												<div className="our_services_content_child_cards_1_card_title">
													<h4>SGB</h4>
												</div>

												<div className="our_services_content_child_cards_1_card_img">
													<img src={img24} alt="" />
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="our_services_content_child_img">
									<img src={our_services_main_image} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* testimonials */}

				<div className="testimonials">
					<div className="testimonials_heading">
						<h1>Clients’ Testimonials</h1>
					</div>

					<div className="testimonials_content">
						<div className="testimonials_content_child">
							<div className="testimonials_content_child_2arrow_img">
								<div>
									<img src={right_arrow_img} alt="" />
									<img src={left_arrow_img} alt="" />
								</div>
							</div>

							<div className="testimonials_content_child_all_cards">
								<div className="testimonials_content_child_all_cards_crd">
									<div className="testimonials_content_child_all_cards_crd_img">
										<img src={testimonial_image1} alt="" />
										<p>
											<img src={play_btn_img} alt="" />
										</p>
									</div>

									<div className="testimonials_content_child_all_cards_crd_txt">
										<div>
											<h2>Akash Singh</h2>

											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										</div>
									</div>
								</div>
								<div className="testimonials_content_child_all_cards_crd">
									<div className="testimonials_content_child_all_cards_crd_img">
										<img src={srinidhi_img} alt="" />
										<p>
											<img src={play_btn_img} alt="" />
										</p>
									</div>

									<div className="testimonials_content_child_all_cards_crd_txt">
										<div>
											<h2>Srinidhi Shetty</h2>

											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										</div>
									</div>
								</div>
								<div className="testimonials_content_child_all_cards_crd">
									<div className="testimonials_content_child_all_cards_crd_img">
										<img src={sandeep_img} alt="" />
										<p>
											<img src={play_btn_img} alt="" />
										</p>
									</div>

									<div className="testimonials_content_child_all_cards_crd_txt">
										<div>
											<h2>Sandeep Patel</h2>

											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										</div>
									</div>
								</div>
								<div className="testimonials_content_child_all_cards_crd">
									<div className="testimonials_content_child_all_cards_crd_img">
										<img src={amansingh_img} alt="" />
										<p>
											<img src={play_btn_img} alt="" />
										</p>
									</div>

									<div className="testimonials_content_child_all_cards_crd_txt">
										<div>
											<h2>Aman Singh</h2>

											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										</div>
									</div>
								</div>
								<div className="testimonials_content_child_all_cards_crd">
									<div className="testimonials_content_child_all_cards_crd_img">
										<img src={rahul_img} alt="" />
										<p>
											<img src={play_btn_img} alt="" />
										</p>
									</div>

									<div className="testimonials_content_child_all_cards_crd_txt">
										<div>
											<h2>Rahul Tomer</h2>

											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
											<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* faq */}

				<div className="faq">
					<h1>FAQ</h1>
					<div className="faq-card-main">
						<div className="faq-card card-containerr">
							<div className="the-card">
								<div className="flip-card-front">
									<h2>Why Should you Invest</h2>
									<img className="faq_card_img1" src={faq_i1} alt="" />
									<img className="faq_card_img2" src={faq_arrow} alt="" />
								</div>
								<div class="flip-card-back">
									<p>
										Making wise financial decisions now will protect your Assets
										for the foreseeable future. It's a great way to build your
										wealth while also generating returns that outpace inflation.
										Compounding also works in your favor.
									</p>
								</div>
							</div>
						</div>
						<div className="faq-card card-containerr">
							<div className="the-card">
								<div className="flip-card-front">
									<h2>What are the offering between saving and investing?</h2>
									<img className="faq_card_img1" src={faq_i2} alt="" />
									<img className="faq_card_img2" src={faq_arrow} alt="" />
								</div>
								<div class="flip-card-back">
									<p>
										Savings can also refer to the placement of funds in products
										such as time deposits at a bank (CD). Investing is the
										process of purchasing Assets with the hope of seeing their
										value rise, such as stocks, real estate, or units in a
										mutual fund.
									</p>
								</div>
							</div>
						</div>
						<div className="faq-card card-containerr">
							<div className="the-card">
								<div className="flip-card-front">
									<h2>Inflation and its relationship with Investment?</h2>
									<img className="faq_card_img1" src={faq_i1} alt="" />
									<img className="faq_card_img2" src={faq_arrow} alt="" />
								</div>
								<div class="flip-card-back">
									<p>
										Increasing inflation lowers the present value of a bond's
										future fixed cash flows by decreasing the buying power of
										its future fixed coupon income. Inflation that picks up
										steam is much more of a problem for long-term bonds since it
										reduces the purchasing power of future cash flows.
									</p>
								</div>
							</div>
						</div>
						<div className="faq-card card-containerr">
							<div className="the-card">
								<div className="flip-card-front">
									<h2>Which asset classes you should invest in?</h2>
									<img className="faq_card_img1" src={faq_i1} alt="" />
									<img className="faq_card_img2" src={faq_arrow} alt="" />
								</div>
								<div class="flip-card-back">
									<p>
										There have traditionally been three basic asset classes:
										stocks, bonds, and cash equivalents or other money market
										products. As of now, most investing professionals
										incorporate real estate, commodities and futures, as well as
										financial derivatives, in their asset class mix.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Homepage;
