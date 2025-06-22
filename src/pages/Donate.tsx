import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Shield, Handshake, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm"; // ✅ corrected default import
import { PayPalDonationForm } from "@/components/PayPalDonationForm";

export const DonatePage = () => {
  const [activeForm, setActiveForm] = useState<"donate" | "volunteer" | "corporate">("donate");

  const bankDetails = {
    bankName: "Centenary Rural Development Bank Limited",
    swiftCode: "CERBUGKA",
    beneficiaryName: "Hands On Unemployment Uganda",
    accountNumber: "3204762297",
    bankBranch: "Centenary Kamuli Branch",
    intermediaryBank: "Citi Bank N.A, New York",
    intermediarySwift: "CITIUS33",
    intermediaryAccount: "36022172"
  };

  return (
    <div className="min-h-screen bg-houg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-houg-primary text-center">
            {activeForm === "donate" && "Make a Donation"}
            {activeForm === "volunteer" && "Volunteer With Us"}
            {activeForm === "corporate" && "Corporate Partnership"}
          </h2>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant={activeForm === "donate" ? "default" : "outline"}
              onClick={() => setActiveForm("donate")}
            >
              Donate
            </Button>
            <Button 
              variant={activeForm === "volunteer" ? "default" : "outline"}
              onClick={() => setActiveForm("volunteer")}
            >
              Volunteer
            </Button>
            <Button 
              variant={activeForm === "corporate" ? "default" : "outline"}
              onClick={() => setActiveForm("corporate")}
            >
              Corporate
            </Button>
          </div>

          {activeForm === "donate" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Bank Transfer</h3>
                <div className="space-y-4 bg-white p-6 rounded-lg shadow">
                  {Object.entries(bankDetails).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b pb-2">
                      <span className="font-medium">{key}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Online Payment</h3>
                <PayPalDonationForm />
              </div>
            </div>
          )}

          {(activeForm === "volunteer" || activeForm === "corporate") && (
            <div className="max-w-2xl mx-auto">
              <ContactForm 
                initialSubject={
                  activeForm === "volunteer" 
                    ? "Volunteer Application" 
                    : "Corporate Partnership Inquiry"
                } 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
