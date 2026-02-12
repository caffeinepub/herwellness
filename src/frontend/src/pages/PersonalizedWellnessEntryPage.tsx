import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export function PersonalizedWellnessEntryPage() {
  const navigate = useNavigate();

  const benefits = [
    'Customized wellness recommendations based on your goals',
    'Personalized resource suggestions',
    'Tailored challenge program recommendations',
    'Save your preferences for future visits (when signed in)',
  ];

  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Personalized Wellness
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Answer a few questions to receive wellness recommendations tailored specifically to your needs and goals.
          </p>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              What You'll Get
            </CardTitle>
            <CardDescription>
              Our personalized assessment will help you discover the best wellness resources for your journey.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => navigate({ to: '/personalized-wellness/questionnaire' })}
              >
                Start Questionnaire
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Note:</strong> This assessment provides general wellness information only. It is not intended to diagnose, treat, or provide medical advice. Please consult with healthcare professionals for medical concerns.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
