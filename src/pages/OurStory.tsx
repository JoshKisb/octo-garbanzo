
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const OurStory = () => {
  const timelineEvents = [
    {
      year: "2011",
      title: "Foundation of HOUU",
      description: "Three unemployed primary school teachers founded Hands On Unemployment Uganda on June 3rd, Peter's 32nd birthday."
    },
    {
      year: "2011-2019",
      title: "Early Growth",
      description: "Successfully distributed over 40,000 nitrogen fixing trees and 150,000 shade trees around schools, hospitals, and water sources."
    },
    {
      year: "2020",
      title: "COVID-19 Impact",
      description: "Uganda's 3-year lockdown devastated the project. Lost hundreds of thousands of trees due to inability to irrigate during curfew."
    },
    {
      year: "2024",
      title: "Rebuilding & Vision",
      description: "Renewed commitment to plant 19.7 million trees by 2030 and create over 1 million green jobs by 2036."
    },
    {
      year: "2025-2030",
      title: "The Big Goal",
      description: "Ambitious plan to transform Kamuli District through reforestation and beekeeping, creating sustainable livelihoods."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <PageHeader 
        title="Our Story" 
        subtitle="The journey of transformation, resilience, and hope in Kamuli District, Uganda"
        backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dWdhbmRhJTIwY29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-houg-primary mb-6">Hello to the World</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              It's a lovely Sunday here and HOUU Uganda sends you warm greetings and regards. It's always very hard and quite challenging when nature defies the odds leaving us with no viable options/solutions to such unprecedented critical moments. We convey our dear sympathies to everyone going through hard-times as a result of nature defying the odds ending up causing global catastrophes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My name is Peter, a passionate environmental advocate from the heart of Uganda's Kamuli District. I am the founder and lead visionary of HOUU "Hands On Unemployment Uganda."
            </p>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="about" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">About Us</TabsTrigger>
            <TabsTrigger value="crisis">The Crisis</TabsTrigger>
            <TabsTrigger value="solution">Our Solution</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-houg-primary">About HOUU</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      HOUU is a grassroot community based organization that was started by three unemployed primary school teachers in 2011 with an aim of skilling and training OUT-OF-SCHOOL youths and the small-holder farmers on how to integrate tree planting and beekeeping into their daily farming systems as a mechanism of creating GREEN-JOBS.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      In our research, it's realized that Kamuli district has for the last 50 years faced indiscriminate poverty and in this "VICIOUS CYCLE", youths between the ages of 18-35yrs in these communities have tremendously dropped out of school due to its geo-position being close to river banks of the Nile River and the shores of Lake Kyoga where fishing is an economic activity.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-houg-primary">The Challenge</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      Predominantly, boys and girls drop out of school due to early pregnancies amongst girls, lack of scholastic materials that enable learning, parental neglect, bullying at schools, lack of good grades that enable enrollment at other entry levels of education and or university. These children think of nothing else other than starting families at such an early age therefore leaves us with child-headed families.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img 
                  src="/lovable-uploads/5d2b8b9c-d416-40e2-a074-7be56a366f00.png" 
                  alt="Community members working together loading produce"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="/lovable-uploads/03330a31-a1ae-4385-950f-8c9a01be92ce.png" 
                  alt="Community gathering and training session"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="/lovable-uploads/9b8c94e7-edfd-434b-9c25-1276d7cc458e.png" 
                  alt="Tree planting ceremony with community members"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="/lovable-uploads/d5e00a77-d9f8-45f9-9e7d-f0af217b07e5.png" 
                  alt="Large community gathering under tree"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="crisis" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">The Environmental Crisis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      It's on record that 85% of these lost souls find it hard to get dissolved into the job market leaving them with no alternative other than seeking jobs abroad those who can afford or getting involved in chopping of wood to burn charcoal.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Charcoal burning in Uganda is a lucrative business that brings in cash faster than expected and over 50 trucks roam the villages in search for charcoal daily, year in year out. To us as HOUU, this survival mode in a country registering high unemployment rates and school dropouts is not self-sustaining as it tears apart the SURVIVING-GREEN-BELT.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">The Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Poverty has left people with NO alternative other than charcoal production which sees almost 16 million tons of wood cut annually</li>
                      <li>Almost 70% school drop-out rate among teens due to poverty and early pregnancies</li>
                      <li>High unemployment rates leading to deforestation in Kamuli District</li>
                      <li>Deforestation has reduced rainfall by 30% crippling crop yields</li>
                      <li>Vulnerable youths turn to alcohol, drugs, and risky behaviors</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img 
                  src="/lovable-uploads/d2379c41-d598-48af-9b2d-a13f368b3345.png" 
                  alt="Person on bicycle carrying water containers"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="/lovable-uploads/83905fda-ecd6-4e4d-8659-fcca1a251bf6.png" 
                  alt="Person working on rural road"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="/lovable-uploads/395ca3ec-3f71-4ad1-ac00-ae464775c913.png" 
                  alt="Person with water containers for irrigation"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="solution" className="mt-8">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-houg-primary text-2xl">The Reforestation and Beekeeping Project</CardTitle>
                  <CardDescription>Our comprehensive solution to environmental and social challenges</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This project will address both environmental and social and economic issues in Kamuli through a two-pronged approach: reforestation and sustainable beekeeping. By planting 19.7 million trees and promoting beekeeping, we can restore our environment while providing alternative livelihoods (Green-jobs) for the vulnerable youths and farmers.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Restore Forests</h4>
                      <p className="text-sm text-green-700">Plant medicinal, shade, spices, ornamental, and fruit trees to reduce charcoal production needs</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Promote Beekeeping</h4>
                      <p className="text-sm text-yellow-700">Provide alternative income while enhancing pollination and tree growth</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Improve Water Access</h4>
                      <p className="text-sm text-blue-700">Build boreholes and solar-powered irrigation systems</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Back-to-School</h4>
                      <p className="text-sm text-purple-700">Support dropouts to re-enter education or vocational training</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-houg-primary">Our Vision: A Greener, Self-Sustaining Kamuli</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Over the next five years, we aim to plant 19.7 million trees, transform the landscape of Kamuli into a greenbelt, and empower more than 5,040 farmers in our first phase with the tools and knowledge they need to nurture the environment and their families.
                  </p>
                  <div className="bg-houg-primary/10 p-6 rounded-lg">
                    <h4 className="font-semibold text-houg-primary mb-2">Project Funding Goal: $317,240</h4>
                    <p className="text-gray-700">This investment will create lasting change across five key phases: reforestation center establishment, community training, equipment procurement, beekeeping supplies, and household energy solutions.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-houg-primary text-2xl">Our Journey Timeline</CardTitle>
                <CardDescription>Key milestones in HOUU's mission to transform communities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-houg-primary"></div>
                  <div className="space-y-8">
                    {timelineEvents.map((event, index) => (
                      <div key={index} className="relative flex items-start">
                        <div className="absolute left-0 w-8 h-8 bg-houg-primary rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="ml-12">
                          <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-2">
                              <span className="bg-houg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                                {event.year}
                              </span>
                              <h3 className="text-xl font-semibold text-houg-primary">{event.title}</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{event.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-houg-primary text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Join Our Movement</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg mb-6">
                Your donation, no matter the size, will create lasting change. Together, we can build a greener, more sustainable world.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Email:</strong><br />
                  houuganda@gmail.com
                </div>
                <div>
                  <strong>Phone/WhatsApp:</strong><br />
                  +256704159210<br />
                  +971554628399
                </div>
                <div>
                  <strong>Website:</strong><br />
                  www.houuganda.org
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurStory;
