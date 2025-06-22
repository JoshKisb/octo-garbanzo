import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Solution 1: Direct email approach (no backend needed)
    const mailtoLink = `mailto:houuganda@gmail.com?subject=${
      encodeURIComponent(formData.subject || "Contact Form Submission")
    }&body=${
      encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )
    }`;

    // Try to open email client
    window.location.href = mailtoLink;

    // Fallback if email client doesn't open
    setTimeout(() => {
      if (!document.hidden) {
        toast({
          title: "Email client didn't open?",
          description: (
            <div>
              <p>You can email us directly at:</p>
              <a 
                href="mailto:houuganda@gmail.com" 
                className="font-bold underline"
              >
                houuganda@gmail.com
              </a>
            </div>
          ),
          duration: 10000,
        });
      }
    }, 3000);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can we help you?"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          rows={6}
          required
        />
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-houg-primary hover:bg-houg-secondary w-full"
      >
        {isSubmitting ? "Preparing message..." : "Send Message"}
      </Button>
      
      <p className="text-sm text-gray-600 mt-2">
        This will open your email client. If it doesn't work, please email us directly at{" "}
        <a 
          href="mailto:houuganda@gmail.com" 
          className="text-houg-primary hover:underline font-medium"
        >
          houuganda@gmail.com
        </a>
      </p>
    </form>
  );
};

export default ContactForm;