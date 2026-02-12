import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Heart, Shield, Users } from 'lucide-react';

export function AboutFaqPage() {
  const faqs = [
    {
      question: 'What is Herwellness?',
      answer: 'Herwellness is a platform dedicated to providing personalized wellness information and resources specifically designed for women. We offer free digital wellness kits, structured challenge programs, and personalized recommendations to support your health and wellbeing journey.',
    },
    {
      question: 'Is Herwellness really free?',
      answer: 'Yes! All of our wellness kits and challenge programs are completely free to access and download. Our mission is to make wellness resources accessible to all women.',
    },
    {
      question: 'Do I need to create an account?',
      answer: 'You can browse and use most features without an account. However, signing in with Internet Identity allows you to save your personalized preferences and track your challenge progress across devices.',
    },
    {
      question: 'What is Internet Identity?',
      answer: 'Internet Identity is a secure, privacy-focused authentication system. It allows you to sign in without passwords or personal information, giving you control over your data.',
    },
    {
      question: 'How is my data used?',
      answer: 'Your wellness preferences and challenge progress are stored securely and used only to provide personalized recommendations. We do not share your data with third parties.',
    },
    {
      question: 'Is this medical advice?',
      answer: 'No. Herwellness provides general wellness information only. Our content is not intended to diagnose, treat, cure, or prevent any disease or medical condition. Always consult with qualified healthcare professionals for medical advice.',
    },
    {
      question: 'Can I suggest new wellness kits or challenges?',
      answer: 'We love hearing from our community! While we don\'t currently have a formal submission process, we regularly update our content based on user feedback and wellness trends.',
    },
    {
      question: 'How often are new challenges and kits added?',
      answer: 'We aim to add new content regularly. Check back often to discover new wellness kits and challenge programs.',
    },
  ];

  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Herwellness
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering women through accessible wellness resources and supportive community programs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                To provide accessible, personalized wellness information and resources that empower women to take charge of their health and wellbeing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Privacy First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Your wellness journey is personal. We use secure, privacy-focused technology to protect your data and give you control.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Community Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Join a supportive community of women working toward their wellness goals through our challenge programs.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Find answers to common questions about Herwellness
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardContent className="p-8">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold">Important Disclaimer</h3>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                The information provided on Herwellness is for general wellness and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this platform.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
