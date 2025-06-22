
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Smartphone, Wallet } from "lucide-react";

interface DpoPaymentProps {
  amount: string;
  name: string;
  email: string;
  onSuccess: () => void;
}

const DpoPayment = ({ amount, name, email, onSuccess }: DpoPaymentProps) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'mobile' | 'airtel'>('card');

  const handleDpoPayment = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Error",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    if (!name.trim() || !email.trim()) {
      toast({
        title: "Error",
        description: "Please provide your name and email.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      // Create a form and submit it to DPO directly
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://secure.3gdirectpay.com/payv2.php';
      form.target = '_blank';

      const params = {
        'CompanyToken': '8D3DA73D-9D7F-4E09-96D4-3D44E7A83EA3',
        'Request': 'createToken',
        'PaymentAmount': amount,
        'PaymentCurrency': 'USD',
        'CompanyRef': `HOUU-${Date.now()}`,
        'RedirectURL': 'https://houu.org/donate',
        'BackURL': 'https://houu.org/donate',
        'ServiceType': '5525',
        'ServiceDescription': 'Donation to Hope Of Unemployed Uganda',
        'ServiceDate': new Date().toISOString().split('T')[0]
      };

      Object.keys(params).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = params[key as keyof typeof params];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      toast({
        title: "Redirecting to Payment",
        description: "You will be redirected to complete your payment.",
      });

      setTimeout(() => {
        onSuccess();
      }, 2000);

    } catch (error) {
      console.error('Payment error:', error);
      
      toast({
        title: "Payment Error",
        description: "Unable to process payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-lg mb-4">Choose Payment Method</h4>
      
      <div className="grid grid-cols-1 gap-3">
        <button
          type="button"
          onClick={() => setSelectedMethod('card')}
          className={`flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 ${
            selectedMethod === 'card' ? 'border-houg-primary bg-houg-primary/5' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-3">
            <CreditCard className="h-5 w-5" />
            <span>Credit/Debit Card</span>
          </div>
          <div className="flex space-x-2">
            <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="h-6 w-auto" />
            <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="MasterCard" className="h-6 w-auto" />
          </div>
        </button>

        <button
          type="button"
          onClick={() => setSelectedMethod('mobile')}
          className={`flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 ${
            selectedMethod === 'mobile' ? 'border-houg-primary bg-houg-primary/5' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-3">
            <Smartphone className="h-5 w-5" />
            <span>Mobile Money (MTN)</span>
          </div>
          <span className="text-sm text-gray-500">Uganda</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedMethod('airtel')}
          className={`flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 ${
            selectedMethod === 'airtel' ? 'border-houg-primary bg-houg-primary/5' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-3">
            <Wallet className="h-5 w-5" />
            <span>Airtel Money</span>
          </div>
          <span className="text-sm text-gray-500">Uganda</span>
        </button>
      </div>

      <Button 
        onClick={handleDpoPayment}
        disabled={isProcessing}
        className="w-full bg-houg-primary hover:bg-houg-secondary"
      >
        {isProcessing ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          `Donate $${amount}`
        )}
      </Button>

      <div className="text-center text-xs text-gray-500 mt-4">
        <p>Secure payment powered by DPO Pay</p>
      </div>
    </div>
  );
};

export default DpoPayment;
