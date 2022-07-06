import React from "react";
import "./blog.css";
import main_img from "../../Assets/images/blog/blog_img.png";
import heart_img from "../../Assets/images/blog/heart.png";
import chatbox_img from "../../Assets/images/blog/chatbox.png";

const Blog = () => {
	return (
		<>
			<div className="blog_page_main_div">
				<div className="blog_page_main_div_title">
					<h1>Blogs</h1>
				</div>
				<div className="blog_page_main_div_main_img">
					<img src={main_img} alt="" />
				</div>
				<div className="blog_page_main_div_main_text">
					<p>
						To absolve you from this problem Kalpataru offers you Internet Share
						Trading through which you can trade and transact on your P.C.
						(Personal Computer) from anywhere like Office, Car Bus, Train, Plane
						or even from your living room. Not only this you can also trade in
						share Commodity Derivative, Currency Derivative. You can avail so
						many services and conveniences offered by Kalpataru.
					</p>
					<br />
					<br />
					<p>
						Perfect transparency in accounting personalized services,
						intelligent suggestions, satisfying solution, D.P. accounts holding,
						and Portfolio Investment advice just by one “Click”.
					</p>
				</div>
				<div className="blog_page_main_div_icons">
					<div className="blog_page_main_div_icons_child">
						<img src={heart_img} alt="" />
						<img src={chatbox_img} alt="" />
					</div>
				</div>
				<div className="blog_page_main_div_leave_a_reply_title">
					<h1>Leave a Reply</h1>
				</div>

				<div className="blog_page_main_div_leave_a_reply_title_input">
					<input type="text" />
				</div>

				<div className="blog_page_main_div_post_btn">
					<button>Post</button>
				</div>
			</div>
		</>
	);
};

export default Blog;
