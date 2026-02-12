import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';
import { Sparkles, BookOpen, Trophy, Heart } from 'lucide-react';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Your Journey to
                <span className="text-primary block">Wellness Starts Here</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Discover personalized wellness information, free digital resources, and supportive challenge programs designed specifically for women.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate({ to: '/personalized-wellness' })}
                  className="text-base"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get Personalized Recommendations
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate({ to: '/wellness-kits' })}
                  className="text-base"
                >
                  Explore Wellness Kits
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/herwellness-hero.dim_1600x900.png"
                alt="Wellness journey illustration"
                className="rounded-2xl shadow-soft w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need for Your Wellness Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive resources and programs to support your health and wellbeing
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Personalized Wellness</CardTitle>
                <CardDescription>
                  Take our questionnaire to receive customized wellness recommendations tailored to your unique needs and goals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => navigate({ to: '/personalized-wellness' })}
                >
                  Start Your Assessment
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Free Wellness Kits</CardTitle>
                <CardDescription>
                  Download comprehensive digital wellness kits covering mindfulness, nutrition, fitness, and more.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => navigate({ to: '/wellness-kits' })}
                >
                  Browse Kits
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Wellness Challenges</CardTitle>
                <CardDescription>
                  Join structured programs with daily tasks to build healthy habits and achieve your wellness goals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => navigate({ to: '/challenges' })}
                >
                  View Challenges
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 wellness-gradient">
        <div className="container">
          <Card className="border-2">
            <CardContent className="p-12">
              <div className="flex flex-col items-center text-center space-y-6">
                <Heart className="h-16 w-16 text-primary" />
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Ready to Begin Your Wellness Journey?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    Get started with personalized recommendations designed just for you. It only takes a few minutes.
                  </p>
                </div>
                <Button 
                  size="lg"
                  onClick={() => navigate({ to: '/personalized-wellness' })}
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get Started Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
