import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from '@tanstack/react-router';
import { Calendar, ArrowRight } from 'lucide-react';
import { WELLNESS_CHALLENGES } from '../lib/content';

export function ChallengesListPage() {
  const navigate = useNavigate();

  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Wellness Challenges
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join structured programs with daily tasks to build healthy habits and achieve your wellness goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WELLNESS_CHALLENGES.map((challenge) => (
            <Card key={challenge.id} className="flex flex-col hover:shadow-soft transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={challenge.coverImage}
                  alt={challenge.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">
                    <Calendar className="mr-1 h-3 w-3" />
                    {challenge.duration} Days
                  </Badge>
                </div>
                <CardTitle>{challenge.title}</CardTitle>
                <CardDescription>{challenge.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button 
                  className="w-full"
                  onClick={() => navigate({ to: '/challenges/$challengeId', params: { challengeId: challenge.id } })}
                >
                  View Challenge
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
