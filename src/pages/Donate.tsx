import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { PayPalDonationForm } from "@/components/PayPalDonationForm";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Shield, ChevronDown, ChevronUp } from "lucide-react";

const Donate = () => {
  const [showBankDetails, setShowBankDetails] = useState(false);

  return (
    <div className="min-h-screen bg-houg-background">
      <Navbar />

      <PageHeader 
        title="Donate" 
        subtitle="Support our mission to create sustainable solutions for unemployment in Uganda."
        backgroundImage="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-houg-primary text-center">Make a Difference Today</h2>
          <p className="text-lg text-center mb-8">
            Your contribution helps us continue our work in empowering communities, creating sustainable livelihoods, and protecting the environment for future generations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">How Your Donation Helps</h3>

              <div className="space-y-6">
                {[ 
                  { title: "Support Youth Training", desc: "Your donation helps provide vocational and entrepreneurship training to unemployed youth." },
                  { title: "Fund Community Projects", desc: "Support sustainable agriculture, environmental conservation, and community development initiatives." },
                  { title: "Empower Women", desc: "Help women gain economic independence through training, microloans, and business support." },
                  { title: "Protect the Environment", desc: "Support tree planting, environmental education, and sustainable resource management." }
                ].map((item, index) => (
                  <div className="flex items-start space-x-4" key={index}>
                    <div className="bg-houg-primary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 text-green-800">Why Choose Monthly Giving?</h4>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-center"><Heart className="h-4 w-4 mr-2" />Provides reliable, ongoing support</li>
                  <li className="flex items-center"><Users className="h-4 w-4 mr-2" />Helps us plan long-term projects</li>
                  <li className="flex items-center"><Shield className="h-4 w-4 mr-2" />Cancel or modify anytime</li>
                </ul>
              </div>
            </div>

            <div>
              <PayPalDonationForm />
            </div>
          </div>
        </div>

        {/* Bank Transfer Dropdown */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-houg-primary text-center">Bank Transfer</h2>
          <div className="text-center mb-4">
            <button
              onClick={() => setShowBankDetails(!showBankDetails)}
              className="inline-flex items-center px-4 py-2 border border-houg-primary rounded-md text-houg-primary hover:bg-houg-primary hover:text-white transition"
            >
              {showBankDetails ? "Hide Bank Details" : "Show Bank Details"}
              {showBankDetails ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
            </button>
          </div>

          {showBankDetails && (
            <div className="bg-white shadow-md rounded-lg p-6 space-y-3 text-sm">
              <div className="flex justify-between"><span className="font-semibold">Bank Name:</span> <span>Centenary Rural Development Bank Limited</span></div>
              <div className="flex justify-between"><span className="font-semibold">Bank SWIFT Code:</span> <span>CERBUGKA</span></div>
              <div className="flex justify-between"><span className="font-semibold">Beneficiary Name:</span> <span>Hands On Unemployment Uganda</span></div>
              <div className="flex justify-between"><span className="font-semibold">Account Number:</span> <span>3204762297</span></div>
              <div className="flex justify-between"><span className="font-semibold">Bank Branch:</span> <span>Centenary Kamuli Branch</span></div>
              <div className="flex justify-between"><span className="font-semibold">Intermediary Bank:</span> <span>Citi Bank N.A, New York</span></div>
              <div className="flex justify-between"><span className="font-semibold">Intermediary SWIFT:</span> <span>CITIUS33</span></div>
              <div className="flex justify-between"><span className="font-semibold">Intermediary Account:</span> <span>36022172</span></div>
            </div>
          )}
        </div>

        {/* Other Ways to Support */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-houg-primary text-center">Other Ways to Support</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-md border-houg-secondary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Volunteer With Us</h3>
                <p className="mb-4">
                  Share your skills and time by volunteering with our projects in Uganda. We welcome both local and international volunteers.
                </p>
                <a href="/contact" className="text-houg-primary font-medium hover:underline">
                  Learn More
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-md border-houg-secondary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Corporate Partnerships</h3>
                <p className="mb-4">
                  Partner with us to create joint initiatives that align with your corporate social responsibility goals.
                </p>
                <a href="/contact" className="text-houg-primary font-medium hover:underline">
                  Contact Us
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-md border-houg-secondary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Make a Bank Transfer</h3>
                <p className="mb-4">
                  You can donate directly via bank transfer. Click the button above to view the full banking details.
                </p>
                <a href="#bank-transfer" className="text-houg-primary font-medium hover:underline">
                  Show Bank Details
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Donate;
