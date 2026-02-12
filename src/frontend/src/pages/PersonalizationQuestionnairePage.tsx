import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useNavigate } from '@tanstack/react-router';
import { Loader2 } from 'lucide-react';
import { usePreferencesSync } from '../lib/personalization/usePreferencesSync';
import { ErrorState } from '../components/common/ErrorState';
import type { WellnessPreferences } from '../backend';

export function PersonalizationQuestionnairePage() {
  const navigate = useNavigate();
  const { savePreferences, isLoading, error } = usePreferencesSync();

  const [formData, setFormData] = useState<WellnessPreferences>({
    ageRange: '',
    activityLevel: '',
    focusAreas: [],
    wellnessGoals: [],
  });

  const [validationError, setValidationError] = useState('');

  const ageRanges = ['18-25', '26-35', '36-45', '46-55', '56-65', '66+'];
  const activityLevels = ['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active', 'Extremely Active'];
  const focusAreaOptions = ['Mental Health', 'Physical Fitness', 'Nutrition', 'Sleep', 'Stress Management', 'Self-Care'];
  const goalOptions = ['Improve Energy', 'Better Sleep', 'Stress Relief', 'Weight Management', 'Build Strength', 'Mindfulness'];

  const handleFocusAreaToggle = (area: string) => {
    setFormData(prev => ({
      ...prev,
      focusAreas: prev.focusAreas.includes(area)
        ? prev.focusAreas.filter(a => a !== area)
        : [...prev.focusAreas, area],
    }));
  };

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      wellnessGoals: prev.wellnessGoals.includes(goal)
        ? prev.wellnessGoals.filter(g => g !== goal)
        : [...prev.wellnessGoals, goal],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Validation
    if (!formData.ageRange || !formData.activityLevel) {
      setValidationError('Please select your age range and activity level.');
      return;
    }
    if (formData.focusAreas.length === 0) {
      setValidationError('Please select at least one focus area.');
      return;
    }
    if (formData.wellnessGoals.length === 0) {
      setValidationError('Please select at least one wellness goal.');
      return;
    }

    await savePreferences(formData);
    navigate({ to: '/personalized-wellness/results' });
  };

  return (
    <div className="container py-12 max-w-3xl">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Wellness Questionnaire</h1>
          <p className="text-muted-foreground">
            Help us understand your wellness journey
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About You</CardTitle>
                <CardDescription>Basic information to personalize your experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="ageRange">Age Range *</Label>
                  <Select value={formData.ageRange} onValueChange={(value) => setFormData(prev => ({ ...prev, ageRange: value }))}>
                    <SelectTrigger id="ageRange">
                      <SelectValue placeholder="Select your age range" />
                    </SelectTrigger>
                    <SelectContent>
                      {ageRanges.map(range => (
                        <SelectItem key={range} value={range}>{range}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="activityLevel">Activity Level *</Label>
                  <Select value={formData.activityLevel} onValueChange={(value) => setFormData(prev => ({ ...prev, activityLevel: value }))}>
                    <SelectTrigger id="activityLevel">
                      <SelectValue placeholder="Select your activity level" />
                    </SelectTrigger>
                    <SelectContent>
                      {activityLevels.map(level => (
                        <SelectItem key={level} value={level}>{level}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Focus Areas</CardTitle>
                <CardDescription>Select the areas you'd like to focus on (choose at least one) *</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {focusAreaOptions.map(area => (
                    <div key={area} className="flex items-center space-x-2">
                      <Checkbox
                        id={`focus-${area}`}
                        checked={formData.focusAreas.includes(area)}
                        onCheckedChange={() => handleFocusAreaToggle(area)}
                      />
                      <Label htmlFor={`focus-${area}`} className="cursor-pointer">
                        {area}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wellness Goals</CardTitle>
                <CardDescription>What would you like to achieve? (choose at least one) *</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {goalOptions.map(goal => (
                    <div key={goal} className="flex items-center space-x-2">
                      <Checkbox
                        id={`goal-${goal}`}
                        checked={formData.wellnessGoals.includes(goal)}
                        onCheckedChange={() => handleGoalToggle(goal)}
                      />
                      <Label htmlFor={`goal-${goal}`} className="cursor-pointer">
                        {goal}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {validationError && (
              <ErrorState message={validationError} />
            )}

            {error && (
              <ErrorState 
                title="Failed to save preferences"
                message={error}
                onRetry={() => handleSubmit(new Event('submit') as any)}
              />
            )}

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => navigate({ to: '/personalized-wellness' })}
                disabled={isLoading}
              >
                Back
              </Button>
              <Button type="submit" className="flex-1" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Get My Recommendations'
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
