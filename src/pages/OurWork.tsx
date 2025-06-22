import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { TreePine, Users, Sprout, GraduationCap, Target, Heart } from "lucide-react";

const OurWork = () => {
  return (
    <div className="min-h-screen bg-houg-background">
      <Navbar />
      
      <PageHeader 
        title="Our Work" 
        subtitle="Discover our projects and initiatives that are making a difference across Uganda."
        backgroundImage="/lovable-uploads/6a0a4d5b-f257-4e21-a461-164e5a2f4311.png"
      />
      
      <div className="container mx-auto px-4 pb-16">
        {/* The Problem Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-houg-primary text-center">The Problem</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-houg-secondary">Rampant Deforestation</h3>
                <p className="text-gray-700 mb-4">
                  The rampant deforestation rates by school dropouts and unemployed youths has crippled food production due to less and unpredictable rains. We have therefore dedicated ourselves to empowering communities to build sustainable livelihoods while protecting the environment.
                </p>
                <p className="text-gray-700">
                  We work with out-of-school youths to plant trees in communities as well as training smallholder farmers on how to integrate tree planting and beekeeping into their daily farming practices. Our goal is to create a future where communities thrive in harmony with nature through practical solutions that address economic and environmental challenges.
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/689cfc81-71db-407b-9bc3-aec928b1d6e1.png" 
                  alt="School and community buildings"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Focal Areas Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-houg-primary text-center">Our Focal Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ... Focal Area Cards ... */}
          </div>
        </div>

        {/* Project Gallery */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-houg-primary text-center">Our Projects in Action</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/9ceb2fc2-6052-4ce1-88d4-4dbbac3b5022.png" 
                alt="Tree seedling preparation"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Seedling Preparation</h3>
                <p className="text-gray-700 text-sm">Preparing tree seedlings for community distribution and planting programs.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/ce31a932-df85-4075-965e-28532643a93a.png" 
                alt="Charcoal message"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Beyond the Sack</h3>
                <p className="text-gray-700 text-sm mb-2">
                  This mango tree was here for the past 100+ years and the money hungry owner exchanged its life for cash. Hou Uganda is Building Livelihoods Rooted in Life, Not Deforestation.
                </p>
                <p className="text-gray-700 text-sm">
                  This image shows charcoal – a short-term gain with a lasting cost. Hou Uganda champions a different path. We work alongside communities to <strong>transform landscapes and livelihoods:</strong> replacing charcoal burning with <strong>honey harvests,</strong> barren land with <strong>new forests,</strong> and smoky fires with <em>#clean biogas and efficient stoves.</em> We're creating <strong>sustainable green jobs that let people and nature thrive together.</strong> Help us turn the page from depletion to regeneration.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/c939a1b3-8bea-40b9-b5c5-ac0a14badc0c.png" 
                alt="Community training sessions"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Community Workshops</h3>
                <p className="text-gray-700 text-sm">Interactive training sessions on sustainable farming and environmental conservation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the content remains unchanged */}
        {/* Our Impact, Why We Do It, SDGs sections */}

      </div>
      
      <Footer />
    </div>
  );
};

export default OurWork;
