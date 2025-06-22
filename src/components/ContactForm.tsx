import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link
    const subject = formData.subject || "Contact Form Submission";
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:houuganda@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Try THREE different methods to open email client
    // Method 1: Direct window.location (works on some browsers)
    window.location.href = mailtoLink;
    
    // Method 2: Hidden link click (works on others)
    const link = document.createElement('a');
    link.href = mailtoLink;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Method 3: Timeout fallback (for mobile/special cases)
    setTimeout(() => {
      // Check if email client opened by seeing if page lost focus
      if (!document.hidden) {
        // Show copy-paste fallback
        toast({
          title: "Email Client Not Detected",
          description: (
            <div className="space-y-2">
              <p>Please email us directly at:</p>
              <p className="font-bold">houuganda@gmail.com</p>
              <p className="text-sm mt-2">With this subject and message:</p>
              <div className="bg-gray-100 p-2 rounded">
                <p><strong>Subject:</strong> {subject}</p>
                <p><strong>Message:</strong> {body}</p>
              </div>
            </div>
          ),
          duration: 30000,
        });
      }
    }, 1000);

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Keep your existing form fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="John Doe"
            required
          />
        </div>
        
        {/* Email field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="john@example.com"
            required
          />
        </div>
      </div>
      
      {/* Subject field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
          placeholder="How can we help you?"
        />
      </div>
      
      {/* Message field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          placeholder="Your message here..."
          rows={6}
          required
        />
      </div>
      
      {/* Submit button */}
      <Button 
        type="submit" 
        className="bg-houg-primary hover:bg-houg-secondary w-full"
      >
        <Mail className="mr-2 h-4 w-4" />
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;