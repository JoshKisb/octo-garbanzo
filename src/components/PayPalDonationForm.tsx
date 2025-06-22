import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Check, CreditCard } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function PayPalDonationForm() {
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

  const handlePayPalPayment = () => {
    window.open(
      `https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID&amount=${customAmount}`,
      "_blank"
    );
  };

  return (
    <Card className="shadow-lg border-houg-secondary/20">
      <CardContent className="pt-6">
        {/* ... (same PayPal form as before) ... */}
      </CardContent>
    </Card>
  );
} 
export default PayPalDonationForm;