import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Copy } from "lucide-react";

interface ContactFormProps {
  initialSubject?: string;
}

const ContactForm = ({ initialSubject = "" }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: initialSubject,
    message: ""
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Text has been copied to clipboard",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const subject = formData.subject || "Contact Form Submission";
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:houuganda@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    const link = document.createElement("a");
    link.href = mailtoLink;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      toast({
        title: "Email Instructions",
        description: (
          <div className="space-y-2">
            <p>If your email client didn't open:</p>
            <div className="bg-gray-100 p-3 rounded-md">
              <p><strong>To:</strong> houuganda@gmail.com</p>
              <p><strong>Subject:</strong> {subject}</p>
              <p className="whitespace-pre-line mt-2">{body}</p>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard("houuganda@gmail.com")}
              >
                <Copy className="mr-2 h-4 w-4" />
                Copy Email
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(`${subject}\n\n${body}`)}
              >
                <Copy className="mr-2 h-4 w-4" />
                Copy All
              </Button>
            </div>
          </div>
        ),
        duration: 30000,
      });
    }, 1000);

    setFormData({
      name: "",
      email: "",
      subject: initialSubject,
      message: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block mb-1 font-medium">Name</label>
        <Input
          id="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
        <Input
          id="subject"
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-1 font-medium">Message</label>
        <Textarea
          id="message"
          placeholder="Write your message here..."
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
      </div>

      <Button type="submit" className="w-full">
        <Mail className="mr-2 h-4 w-4" />
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
