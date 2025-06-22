import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import type { CreateOrderActions, OnApproveData, OnApproveActions } from "@paypal/paypal-js";

const PayPalDonationForm = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10);
  const [customAmount, setCustomAmount] = useState("10");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPayment, setShowPayment] = useState(false);

  const presetAmounts = [10, 25, 50, 100, 250, 500];

  // CORRECT PayPal configuration using EXACT property names
  const paypalOptions = {
    clientId: "ATq4uG9U4XwQZJm5q7Jv6q9qXq1XQZJm5q7Jv6q9qXq1XQZJm5q7Jv6q9qXq1XQZJm", // Sandbox ID
    currency: "USD",
    intent: "capture",
    components: "buttons",
  };

  const handleContinue = () => {
    const amount = parseFloat(customAmount);
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount",
      });
      return;
    }
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill all fields",
      });
      return;
    }
    setShowPayment(true);
  };

  const createOrder = (data: unknown, actions: CreateOrderActions) => {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [{
        amount: {
          currency_code: "USD",
          value: customAmount
        }
      }]
    });
  };

  const onApprove = (data: OnApproveData, actions: OnApproveActions) => {
    return actions.order!.capture().then(() => {
      toast({
        title: "Thank You!",
        description: `Your donation of $${customAmount} was successful!`,
      });
    });
  };

  return (
    <Card className="shadow-lg border-houg-secondary/20">
      <CardContent className="p-6">
        {!showPayment ? (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Select Donation Amount</h3>
            <div className="flex flex-wrap gap-2">
              {presetAmounts.map((amount) => (
                <Button
                  key={amount}
                  variant={selectedAmount === amount ? "default" : "outline"}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount(amount.toString());
                  }}
                >
                  ${amount}
                </Button>
              ))}
            </div>
            <Input
              placeholder="Custom Amount ($)"
              type="number"
              min="1"
              step="0.01"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
            />
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button onClick={handleContinue} className="w-full">
              Continue to Payment
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complete Your Donation</h3>
            <p className="text-sm text-muted-foreground">
              Donating <strong>${customAmount}</strong> as {name}
            </p>

            <PayPalScriptProvider options={paypalOptions}>
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={createOrder}
                onApprove={onApprove}
                onError={(err) => {
                  toast({
                    title: "Payment Error",
                    description: err instanceof Error ? err.message : String(err),
                  });
                }}
              />
            </PayPalScriptProvider>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PayPalDonationForm;