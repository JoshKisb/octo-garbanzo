import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Check, CreditCard } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const PayPalDonationForm = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [showPayment, setShowPayment] = useState(false);

  const presetAmounts = [10, 25, 50, 100, 250, 500];

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

  const handlePayPalPayment = async () => {
    try {
      const response = await fetch("/.netlify/functions/create-donation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          amount: customAmount,
          donationType,
        }),
      });

      const data = await response.json();

      if (response.ok && data.redirectUrl) {
        window.location.href = data.redirectUrl; // Redirect to PayPal or simulated link
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to process donation.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="shadow-lg border-houg-secondary/20">
      <CardContent className="pt-6">
        {!showPayment ? (
          <div className="space-y-6">
            {/* Donation Type */}
            <div>
              <label className="block text-sm font-medium mb-3">Donation Type</label>
              <RadioGroup value={donationType} onValueChange={setDonationType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="one-time" id="one-time" />
                  <Label htmlFor="one-time">One-time donation</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly">Monthly donation</Label>
                </div>
              </RadioGroup>
              {donationType === "monthly" && (
                <p className="text-sm text-gray-600 mt-2">
                  Your card will be charged monthly until you cancel.
                </p>
              )}
            </div>

            {/* Amount Selection */}
            <div>
              <label htmlFor="amount" className="block text-sm font-medium mb-1">
                Select {donationType === "monthly" ? "Monthly " : ""}Donation Amount
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3">
                {presetAmounts.map((amount) => (
                  <Button
                    key={amount}
                    type="button"
                    onClick={() => handlePresetAmountClick(amount)}
                    variant={selectedAmount === amount ? "default" : "outline"}
                    className={selectedAmount === amount ? "bg-houg-primary text-white" : ""}
                  >
                    ${amount}{donationType === "monthly" ? "/mo" : ""}
                  </Button>
                ))}
              </div>
              <div className="mt-3 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
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

            {/* Donor Info */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
              />
            </div>

            <Button onClick={handleContinueToPayment} className="w-full bg-houg-primary hover:bg-houg-secondary">
              <span className="flex items-center">
                Continue to PayPal <Check className="ml-2 h-4 w-4" />
              </span>
            </Button>

            <div className="text-center text-xs text-gray-500">
              <p>Secure payment powered by PayPal</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-lg font-semibold">Donation Summary</h3>
              <p className="text-gray-600">Type: <span className="font-medium capitalize">{donationType}</span></p>
              <p className="text-gray-600">Amount: <span className="font-medium">${customAmount}{donationType === "monthly" ? "/month" : ""}</span></p>
              <p className="text-gray-600">Donor: <span className="font-medium">{name}</span></p>
              <p className="text-gray-600">Email: <span className="font-medium">{email}</span></p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <CreditCard className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-lg font-semibold">PayPal Payment</span>
              </div>
              <p className="text-sm text-gray-600 text-center mb-4">
                You will be redirected to PayPal to complete your {donationType} payment securely.
              </p>
              <Button
                onClick={handlePayPalPayment}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Pay with PayPal
              </Button>
            </div>

            <Button onClick={() => setShowPayment(false)} variant="outline" className="w-full">
              Back to Details
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PayPalDonationForm;
