import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What kind of projects do you specialize in?",
    answer:
      "I specialize in full-stack web development, including custom web applications, e-commerce solutions, and responsive websites. I work with modern technologies like React, Next.js, Node.js, and various database systems.",
    value: "item-1",
  },
  {
    question: "What is your typical development process?",
    answer:
      "My process usually involves discovery and planning, design (if applicable), development sprints, rigorous testing, deployment, and post-launch support. I emphasize clear communication and collaboration throughout the project.",
    value: "item-2",
  },
  {
    question: "How do you handle project timelines and communication?",
    answer:
      "I use agile methodologies to manage projects, breaking them into manageable sprints. Communication is key, so I provide regular updates, conduct frequent check-ins, and am always available to discuss progress and address concerns.",
    value: "item-3",
  },
  {
    question: "Can you help with website maintenance and updates after launch?",
    answer:
      "Yes, I offer ongoing website maintenance, updates, and support packages to ensure your website remains secure, up-to-date, and performs optimally. This can include bug fixes, feature enhancements, and security monitoring.",
    value: "item-4",
  },
  {
    question: "What are your rates, and how do you structure payments?",
    answer:
      "My rates vary depending on the project's complexity and scope. I typically provide a detailed proposal with a fixed price or an estimated hourly rate. Payments are usually structured with an upfront deposit, milestone payments, and a final payment upon project completion.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQ
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion defaultValue={["item-1"]} className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
