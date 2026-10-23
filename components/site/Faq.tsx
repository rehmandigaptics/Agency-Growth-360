"use client";

import { useState } from "react";

const faqs = [
  {
    id: "q1",
    num: "01",
    question: "Who does Agency Growth 360 work with?",
    answer:
      "Our services are designed for US-based digital agencies, freelancers, consultants, and growing service businesses that need better marketing, sales, or operational systems.",
  },
  {
    id: "q2",
    num: "02",
    question: "Can you work with the tools I already use?",
    answer:
      "We can start by reviewing your current tools and workflows, then recommend which systems to keep, connect, or improve based on your needs.",
  },
  {
    id: "q3",
    num: "03",
    question: "Do I need a large team to get started?",
    answer:
      "No. Clear processes and lightweight automation can be useful for solo operators and small teams as well as established agencies.",
  },
  {
    id: "q4",
    num: "04",
    question: "How do we get started?",
    answer:
      "Reach out with your business goals and current challenges. We can explore potential solutions and what a practical engagement could look like.",
  },
];

export function Faq() {
  const [openId, setOpenId] = useState("q1");

  return (
    <section className="section-pad faq faq-premium" id="faq">
      <div className="container">
        <div className="row g-4 g-xl-5 align-items-start faq-premium-layout">
          <div className="col-lg-5 faq-intro">
            <span className="eyebrow">GOOD TO KNOW</span>
            <h2 className="faq-title">
              Questions? <span className="lime">We&apos;ve got answers.</span>
            </h2>
            <p className="faq-subtitle">
              Tell us where you are today and what you&apos;re trying to build.
              We&apos;ll help you identify a sensible next step.
            </p>
            <div className="faq-help">
              <span className="faq-help-icon">
                <i aria-hidden="true" className="bi bi-chat-dots" />
              </span>
              <span>
                Still have a question?
                <small>Tell us what you’re building.</small>
              </span>
              <a
                aria-label="Email Agency Growth 360"
                href="/contact"
              >
                <i aria-hidden="true" className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-7 faq-answers">
            <div className="accordion" id="faqs">
              {faqs.map((item) => {
                const open = openId === item.id;
                return (
                  <div className="accordion-item faq-premium-item" key={item.id}>
                    <h3 className="accordion-header">
                      <button
                        aria-controls={item.id}
                        aria-expanded={open}
                        className={`accordion-button${open ? "" : " collapsed"}`}
                        type="button"
                        onClick={() => setOpenId(open ? "" : item.id)}
                      >
                        <span className="faq-num">{item.num}</span>
                        {item.question}
                        <span aria-hidden="true" className="faq-toggle">
                          <i className="bi bi-plus-lg" />
                        </span>
                      </button>
                    </h3>
                    <div
                      className={`accordion-collapse collapse${open ? " show" : ""}`}
                      id={item.id}
                    >
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
