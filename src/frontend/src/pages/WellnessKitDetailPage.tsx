import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate, useParams } from '@tanstack/react-router';
import { Download, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { WELLNESS_KITS } from '../lib/content';
import { EmptyState } from '../components/common/EmptyState';
import { useState } from 'react';

export function WellnessKitDetailPage() {
  const { kitId } = useParams({ from: '/wellness-kits/$kitId' });
  const navigate = useNavigate();
  const [isDownloading, setIsDownloading] = useState(false);

  const kit = WELLNESS_KITS.find(k => k.id === kitId);

  if (!kit) {
    return (
      <div className="container py-12 max-w-4xl">
        <EmptyState
          title="Kit Not Found"
          message="The wellness kit you're looking for doesn't exist."
          actionLabel="Browse All Kits"
          onAction={() => navigate({ to: '/wellness-kits' })}
        />
      </div>
    );
  }

  const handleDownload = () => {
    setIsDownloading(true);
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = kit.downloadUrl;
    link.download = `${kit.id}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsDownloading(false), 1000);
  };

  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-8">
        <Button
          variant="ghost"
          onClick={() => navigate({ to: '/wellness-kits' })}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Kits
        </Button>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={kit.coverImage}
                alt={kit.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">{kit.title}</h1>
              <p className="text-lg text-muted-foreground">{kit.shortDescription}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line">{kit.fullDescription}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kit Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {kit.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Button 
              size="lg" 
              className="w-full"
              onClick={handleDownload}
              disabled={isDownloading}
            >
              <Download className="mr-2 h-5 w-5" />
              {isDownloading ? 'Downloading...' : 'Download Kit (Free)'}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By downloading, you agree that this content is for personal wellness information only and does not constitute medical advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
