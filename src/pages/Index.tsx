import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, LeafIcon, Heart, Briefcase, GraduationCap, Sprout, Target, TreePine, Zap, DollarSign, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const carouselImages = [
    {
      url: "/lovable-uploads/2cefb137-d7e3-4b84-aaea-d50cc3fe910c.png"
    },
    {
      url: "/lovable-uploads/876892a0-f105-4fac-971d-bc85a3a89dac.png"
    },
    {
      url: "/lovable-uploads/3f3d5491-0aed-40ab-a7a8-168795571ccc.png"
    },
    {
      url: "/lovable-uploads/4e933c01-5d44-4368-8b8b-a0e884d840b2.png"
    }
  ];

  return (
    <div className="min-h-screen bg-houg-background">
      <Navbar />
      
      {/* Hero Section with Carousel */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <Carousel 
          className="w-full h-full absolute inset-0"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            })
          ]}
        >
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div 
                  className="relative bg-cover bg-center h-[80vh] flex items-center"
                  style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${image.url}')`
                  }}
                >
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
        
        {/* Static Content Overlay */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Hands On Unemployment Uganda
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in">
            Creating sustainable solutions for unemployment and poverty through community empowerment and development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/donate">
              <Button 
                size="lg" 
                className="bg-houg-primary hover:bg-houg-secondary text-white hover-scale"
              >
                Donate Now
              </Button>
            </Link>
            <Link to="/our-work">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/20 hover-scale"
              >
                Explore Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section 
        className="py-16 relative bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/lovable-uploads/4e933c01-5d44-4368-8b8b-a0e884d840b2.png')`
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">About Us</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-4 text-houg-primary">Who We Are</h3>
              <p className="text-gray-700 mb-4">
                Hands On Unemployment Uganda (HOUU) is a non-profit organization dedicated to addressing unemployment 
                and poverty in Uganda through sustainable community development programs. Founded with a vision to 
                empower communities, we focus on creating lasting change through education, skills training, and 
                environmental conservation.
              </p>
              <p className="text-gray-700 mb-6">
                Our approach combines practical skills development with environmental stewardship, ensuring that 
                our programs not only address immediate needs but also contribute to long-term sustainability 
                and community resilience.
              </p>
              <Link to="/about">
                <Button className="bg-houg-primary hover:bg-houg-secondary hover-scale">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/876892a0-f105-4fac-971d-bc85a3a89dac.png" 
                alt="HOUU Community Work"
                className="rounded-lg shadow-lg w-full h-80 object-cover hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in text-houg-primary">Our Story</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <div className="bg-houg-primary/5 p-6 rounded-lg mb-6">
                <Quote className="text-houg-primary mb-4" size={32} />
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "The world will not be destroyed by those who do evil, but by those that watch them without doing anything."
                </blockquote>
                <cite className="text-sm text-gray-600">- Albert Einstein</cite>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                This powerful quote inspired our founder, Mr. Peter Taalye, to take action. On his 32nd birthday, 
                June 3rd, 2011, Peter and two fellow unemployed primary school teachers founded Hands On 
                Unemployment Uganda (HOUU) in the heart of Kamuli District.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                What started as a grassroots initiative by three passionate educators has grown into a 
                comprehensive community development organization. Our mission is to break the vicious cycle 
                of poverty, unemployment, and environmental destruction through sustainable tree planting 
                and beekeeping programs.
              </p>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-2">Our Founder's Vision</h4>
                <p className="text-green-700 text-sm">
                  Inspired by Sheikh Zayed's transformation of the UAE desert, Peter envisions planting 
                  19.7 million trees by 2030 and creating over 1 million green jobs by 2036.
                </p>
              </div>
              
              <Link to="/our-story">
                <Button className="bg-houg-primary hover:bg-houg-secondary hover-scale">
                  Read Our Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="animate-fade-in">
              <div className="relative">
                <img 
                  src="/lovable-uploads/d5e00a77-d9f8-45f9-9e7d-f0af217b07e5.png" 
                  alt="Peter Taalye and community members at HOUU gathering"
                  className="rounded-lg shadow-lg w-full h-96 object-cover hover-scale"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-1">Mr. Peter Taalye</h3>
                    <p className="text-sm opacity-90">Founder & Lead Visionary</p>
                    <p className="text-xs opacity-75 mt-1">Environmental Advocate from Kamuli District, Uganda</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-houg-primary/10 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-houg-primary">2011</p>
                  <p className="text-sm text-gray-600">Founded HOUU</p>
                </div>
                <div className="bg-houg-primary/10 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-houg-primary">190K+</p>
                  <p className="text-sm text-gray-600">Trees Distributed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section 
        className="py-16 relative bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/2cefb137-d7e3-4b84-aaea-d50cc3fe910c.png')`
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in text-white">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md text-center hover-scale animate-fade-in">
              <div className="bg-houg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="text-houg-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Reforestation & Beekeeping</h3>
              <p className="text-gray-700 text-sm">
                Tree planting initiatives combined with beekeeping programs to restore ecosystems and create sustainable income sources.
              </p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md text-center hover-scale animate-fade-in">
              <div className="bg-houg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LeafIcon className="text-houg-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Environmental Restoration</h3>
              <p className="text-gray-700 text-sm">
                Comprehensive programs to restore degraded environments and promote sustainable land management practices.
              </p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md text-center hover-scale animate-fade-in">
              <div className="bg-houg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-houg-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Employment Creation</h3>
              <p className="text-gray-700 text-sm">
                Skills training and job placement programs to create meaningful employment opportunities for youth and communities.
              </p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md text-center hover-scale animate-fade-in">
              <div className="bg-houg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-houg-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Poverty Eradication</h3>
              <p className="text-gray-700 text-sm">
                Comprehensive poverty alleviation programs through sustainable income generation and community empowerment.
              </p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md text-center hover-scale animate-fade-in">
              <div className="bg-houg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sprout className="text-houg-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Hunger Management</h3>
              <p className="text-gray-700 text-sm">
                Food security programs through sustainable agriculture and nutrition education initiatives.
              </p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md text-center hover-scale animate-fade-in">
              <div className="bg-houg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-houg-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Alternative Household Energy</h3>
              <p className="text-gray-700 text-sm">
                Promoting clean and sustainable energy solutions for households to reduce environmental impact.
              </p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md text-center hover-scale animate-fade-in">
              <div className="bg-houg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-houg-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Carbon Sequestration</h3>
              <p className="text-gray-700 text-sm">
                Climate change mitigation through strategic tree planting and sustainable land management practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section 
        className="py-16 relative bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/lovable-uploads/3f3d5491-0aed-40ab-a7a8-168795571ccc.png')`
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">Our Mission</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md text-center hover-scale animate-fade-in">
              <div className="bg-houg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-houg-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Development</h3>
              <p className="text-gray-700">
                Building stronger communities through sustainable development projects and initiatives that address local challenges.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md text-center hover-scale animate-fade-in">
              <div className="bg-houg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LeafIcon className="text-houg-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Environmental Conservation</h3>
              <p className="text-gray-700">
                Promoting sustainable environmental practices and conservation efforts to protect natural resources for future generations.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md text-center hover-scale animate-fade-in">
              <div className="bg-houg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-houg-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Youth Empowerment</h3>
              <p className="text-gray-700">
                Empowering young people with skills, knowledge, and opportunities to become self-reliant and contribute to society.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section 
        className="py-16 relative bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(34, 139, 34, 0.1), rgba(34, 139, 34, 0.1)), url('/lovable-uploads/4e933c01-5d44-4368-8b8b-a0e884d840b2.png')`
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md animate-fade-in">
              <p className="text-4xl font-bold text-houg-primary mb-2">1,200+</p>
              <p className="text-lg">Youth Trained</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md animate-fade-in">
              <p className="text-4xl font-bold text-houg-primary mb-2">45+</p>
              <p className="text-lg">Community Projects</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md animate-fade-in">
              <p className="text-4xl font-bold text-houg-primary mb-2">15,000+</p>
              <p className="text-lg">Trees Planted</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md animate-fade-in">
              <p className="text-4xl font-bold text-houg-primary mb-2">25+</p>
              <p className="text-lg">Communities Served</p>
            </div>
          </div>
          
          <div className="mt-12 text-center animate-fade-in">
            <Link to="/our-work">
              <Button className="bg-houg-primary hover:bg-houg-secondary hover-scale">
                See Our Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section 
        className="py-20 bg-cover bg-center relative" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/876892a0-f105-4fac-971d-bc85a3a89dac.png')`
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
            Help Us Make A Difference
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto animate-fade-in">
            Your support helps us continue our work in transforming lives and building sustainable communities in Uganda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/donate">
              <Button size="lg" className="bg-houg-accent text-houg-text hover:bg-houg-accent/80 hover-scale">
                Donate Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/20 hover-scale">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
