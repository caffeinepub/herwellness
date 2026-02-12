import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Download } from 'lucide-react';
import { WELLNESS_KITS } from '../lib/content';

export function WellnessKitsListPage() {
  const navigate = useNavigate();

  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Free Wellness Kits
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download comprehensive digital resources to support your wellness journey. All kits are completely free.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WELLNESS_KITS.map((kit) => (
            <Card key={kit.id} className="flex flex-col hover:shadow-soft transition-shadow">
              <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                <img
                  src={kit.coverImage}
                  alt={kit.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{kit.title}</CardTitle>
                <CardDescription>{kit.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button 
                  className="w-full"
                  onClick={() => navigate({ to: '/wellness-kits/$kitId', params: { kitId: kit.id } })}
                >
                  <Download className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
