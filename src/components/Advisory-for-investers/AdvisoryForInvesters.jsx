import React, { useState, useEffect } from "react";
import "../Advisory-for-investers/advisoryforinvesters.css";

export const AdvisoryForInvesters = () => {
  const list = [
    {
      id: 1,
      title: "Beware of Fixed/Gauranteed/Regular Returns",

      image: "Rectangle 1140.svg",
      paragraph:
        "Avoid fixed-return, guaranteed-return, regular-return, and capital-protection programs. Brokers, their authorized representatives, or any of their colleagues are not permitted to provide fixed, guaranteed, consistent returns on your investment, or capital protection, nor are they permitted to engage in any loan agreements with you to cover the interest on the funds you offer.Please be aware that the relevant Committee of the Exchange, in accordance with the authorized rules, will not accept a claim for monies or securities delivered to the broker under any arrangement or agreement of indicative return in the event of a member's default.",
    },
    {
      id: 2,
      title: "Do not keep funds idle with the Stock Broker",
      image:
        "a-sweeping-panorama-of-mount-everest-at-the-last-light-in-sagarmatha-national-park-nepal.jpg",
      paragraph:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
    },
    {
      id: 3,
      title:
        "Brokers are not permitted to accept transfer of securities as margin",
      image: "Rectangle 1140.svg",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 4,
      title:
        "Always Keep Your Contact Details via Mobile number/Email ID updated",
      image: "Rectangle 1140.svg",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  const [current, setCurrent] = useState(list[0]);
  console.log(current);
  const changeItem = (id) => {
    //console.log(list.indexOf());
    setCurrent(list[id - 1]);
  };
  return (
    <>
      <TopSection />
      <MiddleSection list={list} current={current} setCurrent={setCurrent} />
      <h1 className="aware-h1">{current.title}</h1>
      <BottomSection current={current} />
    </>
  );
};

const TopSection = () => {
  return (
    <div className="row-container">
      <div className="leftside-content">
        <div>
          <h1>Expert Advisory for Investors!</h1>
          <h2>
            Rules and Regulations set by Regulatory Authorities! Investors must
            beware of fixed guaranteed/regular returns - Do not keep funds Idle
            with the Stock Broker - Brokers are not permitted to accept,
            transfer of securities as margin - Always keep your contact details
            via current/updated mobile number/email id
          </h2>
        </div>
      </div>
      <img src="./images/Bitcoin P2P-pana 1.svg" className="main-img" />
    </div>
  );
};
const MiddleSection = ({ current, setCurrent, list }) => {
  const changeItem = (id) => {
    console.log(list.indexOf());
    setCurrent(list[id - 1]);
  };
  return (
    <div className="container-2">
      <h1>Attention Investors!</h1>
      <div className="card-container">
        {list.map((item) => (
          <div
            key={item.id}
            className={current.id === item.id ? "card blue" : "card"}
            onClick={(e) => changeItem(item.id)}
          >
            <p className={current.id == item.id && "hell"}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const BottomSection = ({ current }) => {
  return (
    <div className="container-3">
      <img src={`images/${current.image}`} />

      <p>{current.paragraph}</p>
    </div>
  );
};
export default AdvisoryForInvesters;
