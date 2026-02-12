import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from '@tanstack/react-router';
import { Sparkles, BookOpen, Trophy, ArrowRight } from 'lucide-react';
import { getStoredPreferences } from '../lib/personalization/storage';
import { generateRecommendations } from '../lib/personalization/recommendations';
import { EmptyState } from '../components/common/EmptyState';

export function PersonalizationResultsPage() {
  const navigate = useNavigate();
  const preferences = getStoredPreferences();

  useEffect(() => {
    if (!preferences) {
      navigate({ to: '/personalized-wellness/questionnaire' });
    }
  }, [preferences, navigate]);

  if (!preferences) {
    return null;
  }

  const recommendations = generateRecommendations(preferences);

  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Your Personalized Wellness Plan</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on your responses, here are our recommendations to support your wellness journey.
          </p>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Age Range</p>
                <p className="text-lg font-semibold">{preferences.ageRange}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Activity Level</p>
                <p className="text-lg font-semibold">{preferences.activityLevel}</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {preferences.focusAreas.map(area => (
                  <Badge key={area} variant="secondary">{area}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Wellness Goals</p>
              <div className="flex flex-wrap gap-2">
                {preferences.wellnessGoals.map(goal => (
                  <Badge key={goal} variant="secondary">{goal}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle>Personalized Recommendations</CardTitle>
            <CardDescription>{recommendations.summary}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose prose-sm max-w-none">
              <ul className="space-y-2">
                {recommendations.suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Recommended Wellness Kits</CardTitle>
              <CardDescription>
                Explore our curated digital resources that align with your goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate({ to: '/wellness-kits' })}
              >
                Browse Wellness Kits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Trophy className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Suggested Challenges</CardTitle>
              <CardDescription>
                Join structured programs to build healthy habits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate({ to: '/challenges' })}
              >
                View Challenges
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <Button 
            variant="ghost"
            onClick={() => navigate({ to: '/personalized-wellness/questionnaire' })}
          >
            Retake Questionnaire
          </Button>
        </div>
      </div>
    </div>
  );
}
