
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-houg-background">
      <Navbar />
      
      <PageHeader 
        title="About Us" 
        subtitle="Learn more about our mission, vision, and the dedicated team behind Hands On Unemployment Uganda."
        backgroundImage="/lovable-uploads/ce31a932-df85-4075-965e-28532643a93a.png"
      />
      
      <div className="container mx-auto px-4">
        {/* Our Story */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-houg-primary">Our Story</h2>
              <Link 
                to="/our-story" 
                className="bg-houg-primary text-white px-4 py-2 rounded hover:bg-houg-secondary transition-colors"
              >
                Read Full Story
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p className="text-lg mb-4">
                  Hands On Unemployment Uganda (HOUU) was founded on June 3rd, 2011 by three unemployed primary school teachers who recognized the growing challenge of unemployment in their communities. With a shared vision of creating sustainable solutions to address this issue, they started grassroots initiatives focusing on skill development, environmental conservation, and community empowerment.
                </p>
                
                <p className="text-lg mb-4">
                  HOUU is a grassroot community based organization that was started with an aim of skilling and training OUT-OF-SCHOOL youths and the small-holder farmers on how to integrate tree planting and beekeeping into their daily farming systems as a mechanism of creating GREEN-JOBS.
                </p>
                
                <p className="text-lg mb-4">
                  Our research shows that Kamuli district has for the last 50 years faced indiscriminate poverty. In this "VICIOUS CYCLE", youths between the ages of 18-35yrs in these communities have tremendously dropped out of school due to its geo-position being close to river banks of the Nile River and the shores of Lake Kyoga where fishing is an economic activity.
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/a04d781f-aec5-42a1-bfdf-9e601f179ba2.png" 
                  alt="Tree seedlings nursery"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
            
            <p className="text-lg">
              Today, HOUU continues to expand its reach and impact, developing innovative programs that address the root causes of unemployment while promoting sustainable development and environmental stewardship. Our ambitious goal is to plant 19.7 million trees by 2030 and create over 1 million green jobs by 2036.
            </p>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-houg-primary">Our Mission</h2>
              <p className="text-lg">
                To empower unemployed youth and marginalized communities through sustainable development initiatives, skill-building programs, and environmental conservation efforts. We are dedicated to creating opportunities that foster self-reliance and community resilience.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-houg-primary">Our Vision</h2>
              <p className="text-lg">
                A Uganda where every individual has access to opportunities for sustainable livelihoods, communities are economically empowered, and natural resources are preserved for future generations.
              </p>
            </div>
          </div>
        </section>

        {/* Our Work in Action */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-houg-primary text-center">Our Work in Action</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/8734d552-cf95-4c8c-a4e9-80868b00a762.png" 
                  alt="Sustainable farming and agroforestry"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Sustainable Agriculture</h3>
                  <p className="text-gray-700 text-sm">Promoting agroforestry and sustainable farming practices in our communities.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/c939a1b3-8bea-40b9-b5c5-ac0a14badc0c.png" 
                  alt="Community training and engagement"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Community Training</h3>
                  <p className="text-gray-700 text-sm">Hands-on training sessions for youth and community members.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/50b9b00d-7b96-4db8-b13c-574b7300a14c.png" 
                  alt="Tree planting initiatives"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Reforestation</h3>
                  <p className="text-gray-700 text-sm">Community-led tree planting and environmental restoration projects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-houg-primary text-center">Our Core Values</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-houg-secondary">Sustainability</h3>
                <p>We prioritize long-term solutions that balance economic, social, and environmental considerations.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-houg-secondary">Community Participation</h3>
                <p>We believe that meaningful change happens when communities are actively involved in the development process.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-houg-secondary">Accountability</h3>
                <p>We are committed to transparency, integrity, and responsible stewardship of resources.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-houg-secondary">Innovation</h3>
                <p>We embrace creative approaches and new ideas to address complex challenges.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-houg-primary text-center">Our Team</h2>
            
            <div className="space-y-12">
              {/* Peter Taalye */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-48 h-48 rounded-lg mx-auto md:mx-0 overflow-hidden flex-shrink-0">
                    <img 
                      src="/lovable-uploads/peter.png" 
                      alt="Mr. Peter Taalye" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-houg-secondary">Mr. Peter Taalye</h3>
                    <p className="text-houg-primary font-semibold mb-4">Founder and CEO of Hou Uganda</p>
                    <p className="text-gray-700 mb-4">
                      Mr. Peter Taalye is the visionary founder and Chief Executive Officer of Hou Uganda, a transformative organization committed to fostering sustainable farming practices and empowering communities.
                    </p>
                    <p className="text-gray-700 mb-4">
                      By profession, Peter is a primary school teacher, leveraging his educational background to engage and uplift communities. His career journey began with impactful roles, including working with the World Food Program in Jinja, where he contributed to the HIV/AIDS program, and volunteering with Plan Uganda, focusing on HIV/AIDS education in schools.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Currently, Peter serves as an EKCD professional in Dubai, bringing global experience and a forward-thinking approach to his work. His passion lies in promoting environmental sustainability through the campaign for a greener world, striving to create a future where farmers not only coexist with nature but thrive alongside it.
                    </p>
                    <p className="text-gray-700">
                      With his unwavering commitment and leadership, Mr. Taalye continues to inspire change and innovation in Uganda and beyond.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-48 h-48 rounded-lg mx-auto md:mx-0 overflow-hidden flex-shrink-0">
                    <img 
                      src="/lovable-uploads/omar.png" 
                      alt="Mr. Omar Abeid" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-houg-secondary">Mr. Omar Abeid</h3>
                    <p className="text-houg-primary font-semibold mb-4">PRO/Operations Manager</p>
                    <p className="text-gray-700 mb-4">
                      Mr. Omar Abeid, an environmental enthusiast, and a key figure in the success of Hou Uganda. With a diploma in computer sciences and extensive experience as an Environmental, Health, and Safety (EHS) personnel in Yemen's gas production industry, Omar brings a unique blend of technical expertise, environmental awareness, and strategic thinking to the organization.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Before formally joining Hou Uganda, Omar played a crucial role in supporting the organization financially on a voluntary basis, motivated by his admiration for its mission of fostering sustainability and empowering communities. This initial involvement laid the foundation for his official position as Managing Director of Operations and Public Relations Officer (PRO).
                    </p>
                    <p className="text-gray-700">
                      As Managing Director of Operations, Omar oversees the implementation of key projects, ensuring efficiency and alignment with Hou Uganda's mission. His expertise in EHS contributes to the organization's commitment to promoting environmentally sustainable practices. Concurrently, as PRO, he serves as the face of the organization, building relationships, enhancing its public image, and fostering trust among stakeholders.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-48 h-48 rounded-lg mx-auto md:mx-0 overflow-hidden flex-shrink-0">
                    <img 
                      src="/lovable-uploads/iryn.png" 
                      alt="Irene Kantono" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-houg-secondary">Irene Kantono</h3>
                    <p className="text-houg-primary font-semibold mb-4">Finance and Administration Manager</p>
                    <p className="text-gray-700 mb-4">
                      At Hou Uganda, we are privileged to have Irene Kantono as our Finance and Administration Manager. Irene brings a wealth of knowledge, experience, and passion for financial management and community service to our organization.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Irene holds a Bachelor's degree in Arts and Economics from Makerere University, one of Uganda's most prestigious institutions. To further enhance her expertise, she pursued a Postgraduate Diploma in Financial Management from the Uganda Management Institute, solidifying her strong foundation in finance and administration.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Her professional journey began in 2008 at the Research Department of the Bank of Uganda, where she conducted groundbreaking research that set the tone for her career in finance. She then expanded her skills as an Independent Sales Representative at Standard Chartered Bank, where she gained invaluable insights into customer engagement and financial product promotion.
                    </p>
                    <p className="text-gray-700 mb-4">
                      In 2012, Irene joined the BRAC Foundation as a Credit Officer, where she played a vital role in empowering small businesses through financial solutions. Her dedication to fostering financial growth and stability continued when she took on roles at Top Finance Bank as a Teller in 2017 and later as a Customer Care Officer in 2021, where she prioritized excellent service delivery and financial literacy.
                    </p>
                    <p className="text-gray-700">
                      In 2023, Irene joined Hou Uganda on a voluntary inclination, driven by her unwavering commitment to community service and sustainable development. Her exceptional leadership, combined with her extensive background in finance and administration, makes her an invaluable asset to our organization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-48 h-48 rounded-lg mx-auto md:mx-0 overflow-hidden flex-shrink-0">
                    <img 
                      src="/lovable-uploads/rev.png" 
                      alt="Rev. Canon Rachael Margret Mukyala" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-houg-secondary">The Rev. Canon Rachael Margret Mukyala</h3>
                    <p className="text-houg-primary font-semibold mb-4">Head of Education & Children's Affairs</p>
                    <p className="text-gray-700 font-semibold mb-4 italic">Bridging Faith, Education, and Environmental Renewal</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-houg-secondary mb-2">A Visionary Leader Restoring Hope Through Education</h4>
                        <p className="text-gray-700">
                          The Rev. Canon Rachael Margret Mukyala is a transformative force at Hou Uganda, where her theological wisdom from Mukono University and compassionate leadership inspire out-of-school youth and young mothers to reclaim their futures. As both a church leader, Mother and educator, she embodies the conviction that "education is a divine mandate to heal communities and nurture creation."
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-houg-secondary mb-2">Her Mission</h4>
                        <p className="text-gray-700 italic mb-2">"To turn dropout crises into stories of redemption, one student at a time."</p>
                        <p className="text-gray-700">Rev. Mukyala spearheads Hou Uganda's integrated approach to guide youth back into education, restore dignity, and reignite purpose through sustainable livelihoods while restoring Uganda's ecosystems.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-houg-secondary mb-2">Impact at a Glance</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>🌱 <strong>320+ youth</strong> reintegrated into schools since 2022</li>
                          <li>🌟 <strong>87% of participants</strong> report improved confidence and stability</li>
                          <li>🌳 <strong>45 community mentors</strong> trained to sustain outreach efforts</li>
                          <li>🐝 <strong>12 church-led reforestation sites</strong> established, generating income through honey cooperatives</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-houg-secondary mb-2">Education & Philosophy</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Master's Degree in Divinity (Uganda Christian University Mukono Uganda)</li>
                          <li>• BA Education Makerere University</li>
                          <li>• CCA Makerere University Kampala</li>
                          <li>• Certified in Community Development & Child Protection</li>
                        </ul>
                        <p className="text-gray-700 italic mt-2">
                          <strong>Core Belief:</strong> "When we educate a girl and heal their land, we ignite a legacy of hope"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partners & Supporters */}
        <section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-houg-primary text-center">Our Partners & Supporters</h2>
            
            <p className="text-lg text-center mb-8">
              We are grateful for the support and collaboration of various organizations and individuals who share our vision and contribute to our mission.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {/* Partner logos would go here */}
              <div className="bg-white p-4 rounded-lg shadow-md h-24 w-44 flex items-center justify-center">
                <p className="text-gray-400">Partner 1</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md h-24 w-44 flex items-center justify-center">
                <p className="text-gray-400">Partner 2</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md h-24 w-44 flex items-center justify-center">
                <p className="text-gray-400">Partner 3</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md h-24 w-44 flex items-center justify-center">
                <p className="text-gray-400">Partner 4</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
