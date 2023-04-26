import React from "react";
import "./Faqs.css";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import FaqCards from "./FaqCards";

const faqs = [
  {
    name: "What is Duplitrades?",
    info: "Duplitrades is a highly secure and trusted investment company used by thousands of people like you to take advantage of the highly volatile market",
  },
  {
    name: "Who Is Duplitrades Meant For?",
    info: "Duplitrades is meant for everyone and anyone that wants to earn a passive income",
  },
  {
    name: "Why Use Duplitrades",
    info: "<div class='faqc__parse'><p>Duplitrades is meant for everyone.</p><br/><ul><li>• Entrepreneurs</li><li>• Business owners</li><li>• Civil servants/workers</li><li>• Students</li><li>• Freelancers</li><li>• Parents</li><li>• Artisans</li><li>• Market men and women</li></ul><br /><p>On a deeper look</p><br/><ul><li>• An entrepreneur can start making profits to kick start that proposed business/project in the coming year.</li> <li>• A Civil servant can start earning without having to do literally nothing.</li><li>• Students can start earn up from us without losing concentration from academics.</li><li>• Freelancers can start making automatic earnings for their next venture using Duplitrades.</li><li>• Parents can start making investment for their children and get 25-50% returns Monthly as long as they want. Only Investment account pays up to 50% per month.</li><li>• Employees can earn extra other than their wages and salaries</li><br/></ul>",
  },
  {
    name: "Guaranteed interest returns,but how?",
    info: "Duplitrades trades the financial market for her investors by trading in real estate, investing the proceeds in the forex and crypto market to ensure 10x the initial profit and with this ROIs are paid and guaranteed.",
  },
  {
    name: "Are my funds safe",
    info: "Yes. All deposit done on our system go through various secure steps to ensure your details remain private.",
  },
  {
    name: "How do i know my deposit was successful",
    info: "When you make a payment/contribution to your Duplitrades Fund, there will be a confirmation email sent to your registered email address and your fund will reflect on your dashboard within 24 hours. In the event that this doesn’t happen, kindly send an email to Support@Duplitrades.io",
  },
];

const Faqs = () => {
  return (
    <div>
      <div className="faq__container">
        <div className="faq__head">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="faq__content">
          <div className="faqc__con">
            <h2>Overview</h2>
            {faqs.map((faq, index) => (
              <FaqCards name={faq.name} info={faq.info} key={index} />
            ))}
          </div>
          <div className="faq__cta">
            <div className="faq__cta__con">
              <h1>What Else?</h1>
              <p>
                Nothing else for now, but if you have urgent question that needs
                clarification, kindly call our customer care Hot line +1 (914)
                207‑3357 and your question will be answered. We are available
                24/7 to take your calls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
