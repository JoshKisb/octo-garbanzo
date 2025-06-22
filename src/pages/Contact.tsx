import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-houg-background">
      <Navbar />

      <PageHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you. Reach out with questions, partnership opportunities, or to get involved."
        backgroundImage="/lovable-uploads/50b9b00d-7b96-4db8-b13c-574b7300a14c.png"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-houg-primary">Get In Touch</h2>
              <p className="text-lg mb-8">
                We welcome your questions, feedback, and inquiries. Whether you'd like to learn more about our work, explore partnership opportunities, or find out how you can get involved, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-houg-primary/10 rounded-full w-10 h-10 flex items-center justify-center text-houg-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Visit Us</h4>
                    <p>Hands On Unemployment Uganda</p>
                    <p>P.O.BOX 130256, Kamuli District Uganda</p>
                    <p>Plot 1-4 Namaira-Kamuli Rd, Buwalankamba Zone</p>
                    <p>Balawoli Sub County, Kamuli</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-houg-primary/10 rounded-full w-10 h-10 flex items-center justify-center text-houg-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email Us</h4>
                    <p>houuganda@gmail.com</p>
                    <p>info@houuganda.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-houg-primary/10 rounded-full w-10 h-10 flex items-center justify-center text-houg-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Call Us</h4>
                    <p>+256 704-159-210</p>
                    <p>+971 554-628-399</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-houg-primary/10 rounded-full w-10 h-10 flex items-center justify-center text-houg-primary shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Office Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-lg mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {/* Add social icons */}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-houg-primary">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Project Gallery */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-houg-primary text-center">Our Work in the Community</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <img src="/lovable-uploads/a04d781f-aec5-42a1-bfdf-9e601f179ba2.png" alt="Tree nursery" className="w-full h-32 object-cover rounded-lg shadow-md" />
              <img src="/lovable-uploads/8734d552-cf95-4c8c-a4e9-80868b00a762.png" alt="Farming" className="w-full h-32 object-cover rounded-lg shadow-md" />
              <img src="/lovable-uploads/6a0a4d5b-f257-4e21-a461-164e5a2f4311.png" alt="Training" className="w-full h-32 object-cover rounded-lg shadow-md" />
              <img src="/lovable-uploads/689cfc81-71db-407b-9bc3-aec928b1d6e1.png" alt="Community center" className="w-full h-32 object-cover rounded-lg shadow-md" />
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-houg-primary text-center">Our Location</h3>
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-300">
              <iframe
                title="Kamuli District Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63853.215310148305!2d33.09903003025134!3d0.8928948747530178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1779e69d78adca99%3A0x2151b1a1d5c0e3e2!2sKamuli%2C%20Uganda!5e0!3m2!1sen!2sug!4v1718996000000!5m2!1sen!2sug"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
