import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"terms" | "privacy">("terms");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="py-6 bg-tedred shadow-md">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              TEDx<span className="font-light">AtriaIT</span>
            </h1>
            <p className="text-white mt-2 text-sm md:text-base">Terms & Conditions</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-8 flex-grow">
        {/* Tab Navigation */}
        <div className="flex mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("terms")}
            className={`px-4 py-2 font-medium ${
              activeTab === "terms" ? "text-tedred border-b-2 border-tedred" : "text-gray-600"
            }`}
          >
            Terms & Conditions
          </button>
          <button
            onClick={() => setActiveTab("privacy")}
            className={`px-4 py-2 font-medium ${
              activeTab === "privacy" ? "text-tedred border-b-2 border-tedred" : "text-gray-600"
            }`}
          >
            Privacy Policy
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {activeTab === "terms" ? "Terms and Conditions" : "Privacy Policy"}
          </h2>
          
          {activeTab === "terms" ? (
            <div className="space-y-6">
              <div className="prose max-w-none">
                <p className="mb-4">
                  TED is a global platform dedicated to sharing ideas worth spreading. By accessing or using any TED sites—including 
                  TED.com, TED applications, TED Connect, TED's browser extension, and any other sites managed by TED Conferences, 
                  LLC ("TED") (collectively, "TED Sites")—you agree to comply with these Terms and Conditions, the Privacy Policy, 
                  and the Community Guidelines. These govern your use of all content ("Content") provided, accessed, or distributed on TED Sites.
                </p>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">1. Acceptance of Terms</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      By visiting or using TED Sites, you accept and agree to be bound by these Terms and Conditions. If you do not agree, 
                      please do not use TED Sites.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">2. Eligibility</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>You must be at least 13 years old to create a TED account.</li>
                      <li>If you are under 13, you may not create an account but may still watch TED Talks and use the site.</li>
                      <li>For users under 16 from the European Union (EU), account creation requires verifiable parental consent.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">3. Use of Content</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>TED content is provided for personal, non-commercial use unless otherwise authorized.</li>
                      <li>If you wish to use TED Talks or other TED content in projects, you must follow TED's usage policies and obtain appropriate permissions.</li>
                      <li>Respect the intellectual property rights of TED and third parties.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">4. User Conduct</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Users must use TED Sites lawfully and respectfully.</li>
                      <li>Content that is inflammatory, divisive, or pseudoscientific is prohibited.</li>
                      <li>Users must not engage in behavior that disrupts the community or violates TED's Community Guidelines.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-medium">5. Account Security</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                      <li>You agree to notify TED immediately of any unauthorized use of your account.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-lg font-medium">6. Modifications and Termination</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>TED reserves the right to modify these Terms and Conditions at any time without prior notice.</li>
                      <li>TED may suspend or terminate your access to TED Sites or revoke licenses if you violate these terms.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-lg font-medium">7. Governing Law and Dispute Resolution</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>These Terms and Conditions are governed by applicable laws and TED's policies.</li>
                      <li>Any disputes will be resolved according to TED's specified legal framework.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="prose max-w-none">
                <p className="mb-4">
                  TED is committed to protecting your privacy and safeguarding your personal data. This Privacy Policy explains what information 
                  we collect on TED Sites—including TED.com, mobile apps, and related platforms—how we use it, and the measures we take to protect it. 
                  It also outlines your rights to access, update, or delete your personal information.
                </p>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">1. Information We Collect</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p className="font-medium">a. Information You Provide Directly</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Personal details you submit when creating an account, registering for events, subscribing to newsletters, or contacting TED.</li>
                        <li>Information related to participation in TED online events.</li>
                      </ul>
                      
                      <p className="font-medium">b. Subscriber Information</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Email addresses, preferences, and other contact information for TED newsletters and communications.</li>
                      </ul>
                      
                      <p className="font-medium">c. Member Information</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Data related to your TED account, including profile details and usage history.</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">2. How We Use Your Information</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>To provide and improve TED services and content.</li>
                      <li>To communicate with you about TED events, updates, and offers.</li>
                      <li>To ensure compliance with TED policies and legal obligations.</li>
                      <li>To protect the security and integrity of TED Sites.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">3. Data Protection</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>TED implements administrative, technical, and physical safeguards to protect your personal data.</li>
                      <li>We do not sell or share your personal information with third parties without your consent, except as required by law.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">4. Your Rights</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>You may access, update, or request deletion of your personal data by contacting TED.</li>
                      <li>For users in the EU, TED complies with GDPR requirements regarding data protection and privacy.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-medium">5. Cookies and Tracking</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>TED Sites use cookies and similar technologies to enhance your experience.</li>
                      <li>You can manage cookie preferences through your browser settings.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-lg font-medium">6. Children's Privacy</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>TED does not knowingly collect personal data from children under 13 without parental consent.</li>
                      <li>If you are under 13, you may use TED Sites only to watch content and not to create accounts.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-lg font-medium">7. Changes to This Policy</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>TED may update this Privacy Policy periodically.</li>
                      <li>Changes will be posted on this page with an updated effective date.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-lg font-medium">8. Contact Us</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      For questions or requests regarding your personal data or this Privacy Policy, please contact TED through the official website.
                    </p>
                    <p className="mt-3 font-medium">
                      Effective Date: April 21, 2025
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">
                TEDx<span className="font-light">AtriaIT</span>
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                &copy; {new Date().getFullYear()} TEDx, a program of TED
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                This independent TEDx event is operated under license from TED.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
