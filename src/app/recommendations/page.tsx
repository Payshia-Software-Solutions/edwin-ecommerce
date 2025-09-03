'use client';

import { useState } from 'react';
import { aiStyleRecommendation } from '@/ai/flows/ai-style-recommendation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function RecommendationsPage() {
  const [preferences, setPreferences] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setRecommendations('');

    try {
      const result = await aiStyleRecommendation({ stylePreferences: preferences });
      if(result.recommendations) {
        setRecommendations(result.recommendations);
      } else {
        setError('The AI could not generate a recommendation based on your preferences. Try being more specific.');
      }
    } catch (err) {
      setError('An error occurred while generating recommendations. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-headline font-bold">AI Personal Stylist</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Describe your style, and let our AI find the perfect pieces for you.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Your Style Profile</CardTitle>
            <CardDescription>
              Tell us about your fashion sense. Mention preferred colors, materials, occasions, and styles you like (e.g., minimalist, bohemian, classic).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
                placeholder="e.g., 'I love neutral colors like beige and white, natural fabrics like linen and cotton. I'm looking for casual outfits for a beach vacation. My style is relaxed and minimalist.'"
                rows={6}
                className="text-base"
              />
              <Button type="submit" disabled={isLoading || !preferences} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Get Recommendations
              </Button>
            </form>
          </CardContent>
        </Card>

        {error && (
            <Alert variant="destructive" className="mt-6">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        {recommendations && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Your Personalized Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-stone dark:prose-invert max-w-none">
                <p>{recommendations}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
