import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText } from 'lucide-react';
import { FREE_PDFS } from '../lib/content';
import { EmptyState } from '../components/common/EmptyState';
import { useState } from 'react';

export function FreePdfsPage() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownload = (pdf: typeof FREE_PDFS[0]) => {
    setDownloadingId(pdf.id);
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = pdf.downloadUrl;
    link.download = `${pdf.id}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloadingId(null), 1000);
  };

  if (FREE_PDFS.length === 0) {
    return (
      <div className="container py-12 max-w-6xl">
        <EmptyState
          icon={FileText}
          title="No PDFs Available"
          message="Check back soon for free wellness resources and guides."
        />
      </div>
    );
  }

  return (
    <div className="container py-12 max-w-6xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Free PDFs</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download our free wellness resources to support your journey to better health and wellbeing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FREE_PDFS.map((pdf) => (
            <Card key={pdf.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{pdf.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {pdf.shortDescription}
                    </CardDescription>
                  </div>
                  <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-end">
                <Button
                  onClick={() => handleDownload(pdf)}
                  disabled={downloadingId === pdf.id}
                  className="w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {downloadingId === pdf.id ? 'Downloading...' : 'Download PDF'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            All resources are provided for personal wellness information only and do not constitute medical advice. 
            Please consult with healthcare professionals for personalized medical guidance.
          </p>
        </div>
      </div>
    </div>
  );
}
