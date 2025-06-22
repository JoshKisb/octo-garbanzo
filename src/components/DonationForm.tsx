
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import DpoPayment from "./DpoPayment";

const DonationForm = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPayment, setShowPayment] = useState(false);

  const presetAmounts = [10, 25, 50, 100];

  const handlePresetAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const handleContinueToPayment = () => {
    if (!customAmount || parseFloat(customAmount) <= 0) {
      toast({
        title: "Error",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    if (!name || !email) {
      toast({
        title: "Error",
        description: "Please provide your name and email.",
        variant: "destructive",
      });
      return;
    }

    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    toast({
      title: "Thank you for your donation!",
      description: `Your donation of $${customAmount} will help us make a difference.`,
    });
    // Reset form
    setSelectedAmount(null);
    setCustomAmount("");
    setName("");
    setEmail("");
    setShowPayment(false);
  };

  return (
    <Card className="shadow-lg border-houg-secondary/20">
      <CardContent className="pt-6">
        {!showPayment ? (
          <div className="space-y-6">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium mb-1">
                Select Donation Amount
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                {presetAmounts.map((amount) => (
                  <Button
                    key={amount}
                    type="button"
                    onClick={() => handlePresetAmountClick(amount)}
                    variant={selectedAmount === amount ? "default" : "outline"}
                    className={selectedAmount === amount ? "bg-houg-primary text-white" : ""}
                  >
                    ${amount}
                  </Button>
                ))}
              </div>
              <div className="mt-3 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <Input
                  id="amount"
                  type="text"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="pl-7"
                  placeholder="Enter custom amount"
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
              />
            </div>

            <Button 
              onClick={handleContinueToPayment}
              className="w-full bg-houg-primary hover:bg-houg-secondary"
            >
              <span className="flex items-center">
                Continue to Payment <Check className="ml-2 h-4 w-4" />
              </span>
            </Button>

            <div className="text-center text-xs text-gray-500">
              <p>Secure payment powered by DPO Pay</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-lg font-semibold">Donation Summary</h3>
              <p className="text-gray-600">Amount: <span className="font-medium">${customAmount}</span></p>
              <p className="text-gray-600">Donor: <span className="font-medium">{name}</span></p>
              <p className="text-gray-600">Email: <span className="font-medium">{email}</span></p>
            </div>

            <DpoPayment 
              amount={customAmount}
              name={name}
              email={email}
              onSuccess={handlePaymentSuccess}
            />

            <Button 
              onClick={() => setShowPayment(false)}
              variant="outline"
              className="w-full"
            >
              Back to Details
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DonationForm;
