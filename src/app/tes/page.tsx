import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import PortofolioSection from "./sections/PortofolioSection";

export default function tes() {
  return (
    <div className="w-screen h-screen grid grid-cols-4 gap-5 py-10">
      <div className="col-span-1 pl-25">
        <Card className="w-full h-full"></Card>
      </div>
      <div className="col-span-3 pr-25 min-h-0">
        <Tabs defaultValue="about" className="w-full h-full flex flex-col">
          <TabsList className="w-full h-10">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="skills">skills</TabsTrigger>
            <TabsTrigger value="portfolio">portfolio</TabsTrigger>
            <TabsTrigger value="experience">experience</TabsTrigger>
            <TabsTrigger value="testimonials">testimonials</TabsTrigger>
            <TabsTrigger value="contact">contact</TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="w-full flex-1 min-h-0">
            <AboutSection />
          </TabsContent>
          <TabsContent value="skills" className="w-full flex-1 min-h-0">
            <SkillSection />
          </TabsContent>
          <TabsContent value="portfolio" className="w-full flex-1 min-h-0">
            <PortofolioSection />
          </TabsContent>
          <TabsContent value="experience" className="w-full flex-1">
            <Card className="w-full h-full">
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="testimonials" className="w-full flex-1">
            <Card className="w-full h-full">
              <CardHeader>
                <CardTitle>Testimonials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl vel aliquam aliquet, nisl nisl aliquet nisl, vel
                  aliquet nisl nisl vel nisl.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="contact" className="w-full flex-1">
            <Card className="w-full h-full">
              <CardHeader>
                <CardTitle>Contact Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mt-2">Email: example@example.com</p>
                <p className="mt-2">Phone: +1234567890</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
