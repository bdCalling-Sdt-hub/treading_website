import { Collapse, Input } from "antd";
import React from "react";
import { IoSearch } from "react-icons/io5";
import help_center from "./../assets/icon/help_center.png";
const faqs = [
  {
    question: "What is a product swap?",
    answer:
      "A product swap allows users to exchange items they no longer need for something they want, without using money.",
  },
  {
    question: "How do I list a product for swapping?",
    answer:
      "You can create a listing by uploading photos of your item, adding a description, and specifying what you are looking to swap it for.",
  },
  {
    question: "Is there a fee to use this platform?",
    answer: "No, our platform is free to use for listing and swapping items.",
  },
  {
    question: "How do I find products available for swapping?",
    answer:
      "Browse the available items by category, location, or search keywords to find what you're looking for.",
  },
  {
    question: "What types of products can I swap?",
    answer:
      "You can swap almost anything, such as electronics, clothing, furniture, books, or even services, as long as it complies with our terms and conditions.",
  },
  {
    question: "What happens if I don’t find a suitable swap?",
    answer:
      "You can keep your listing active until a suitable swap offer comes through. You may also explore other categories for options.",
  },
  {
    question: "How do I contact someone for a swap?",
    answer:
      "Use the chat feature on the platform to discuss the details and finalize the swap arrangement.",
  },
  {
    question: "Is there a rating or review system?",
    answer:
      "Yes, users can leave ratings and reviews for each other to ensure trust and transparency in the swapping process.",
  },
  {
    question: "What if the product I receive is not as described?",
    answer:
      "Please report the issue to our support team. We encourage users to share accurate descriptions and images of their items.",
  },
  {
    question: "Can I swap products with users in other locations?",
    answer:
      "Yes, but you’ll need to discuss and agree on shipping arrangements with the other user.",
  },
  {
    question:
      "Are there safety guidelines for meeting in person to exchange items?",
    answer:
      "Yes, we recommend meeting in public places and bringing a friend for added safety when exchanging items in person.",
  },
  {
    question: "What items are prohibited on this platform?",
    answer:
      "Prohibited items include illegal substances, weapons, stolen goods, and items that violate intellectual property rights. Please refer to our full list of prohibited items in the terms and conditions.",
  },
];

const HelpCenter = () => {
  return (
    <div className="container mx-auto p-4 rounded-md bg-white text-[#4E4E4E] min-h-[71vh]">
      {/* <p className="text-3xl font-medium ">How can we help you?</p>
      <Input className="w-48 mt-2" prefix={<IoSearch />} /> */}
      <p className="text-3xl font-medium text-center my-2">
        Frequently Asked Questions 
      </p>
      <div className="flex justify-start items-start md:grid grid-cols-2 mt-6 flex-col">
        {faqs.map((item, i) => {
          return (
            <Collapse
              key={i}
              className="w-full"
              items={[
                {
                  key: i,
                  label: (
                    <span className="" key={i}>
                      {item?.question}
                    </span>
                  ),
                  children: (
                    <div
                      className="flex flex-col justify-start items-start gap-2"
                      key={i}
                    >
                      <p key={i}>{item?.answer}</p>
                    </div>
                  ),
                },
              ]}
            />
          );
        })}
      </div>
      {/*
      <p className="text-3xl font-medium text-center my-2">Need More Help?</p>
      <div className="flex justify-center items-center gap-2 mt-4">
        <img src={help_center} alt="" />
        <div>
          <p className="text-xl">Call Us (+1-212-456-7890)</p>
          <p className="text-base">Our help line service is active: 24/7</p>
        </div>
      </div>
      */}
    </div>
  );
};

export default HelpCenter;
