import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { useNavigate, useParams } from '@tanstack/react-router';
import { ArrowLeft, Calendar, Loader2, Trophy } from 'lucide-react';
import { WELLNESS_CHALLENGES } from '../lib/content';
import { EmptyState } from '../components/common/EmptyState';
import { useChallengeProgress } from '../lib/challenges/useChallengeProgress';
import { LoadingState } from '../components/common/LoadingState';
import { ErrorState } from '../components/common/ErrorState';

export function ChallengeDetailPage() {
  const { challengeId } = useParams({ from: '/challenges/$challengeId' });
  const navigate = useNavigate();

  const challenge = WELLNESS_CHALLENGES.find(c => c.id === challengeId);

  const {
    isJoined,
    completedTasks,
    isLoading,
    error,
    joinChallenge,
    leaveChallenge,
    completeTask,
  } = useChallengeProgress(challengeId);

  if (!challenge) {
    return (
      <div className="container py-12 max-w-4xl">
        <EmptyState
          title="Challenge Not Found"
          message="The wellness challenge you're looking for doesn't exist."
          actionLabel="Browse All Challenges"
          onAction={() => navigate({ to: '/challenges' })}
        />
      </div>
    );
  }

  const completionPercentage = isJoined && challenge.tasks.length > 0
    ? Math.round((completedTasks.length / challenge.tasks.length) * 100)
    : 0;

  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-8">
        <Button
          variant="ghost"
          onClick={() => navigate({ to: '/challenges' })}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Challenges
        </Button>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src={challenge.coverImage}
                alt={challenge.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">
                  <Calendar className="mr-1 h-3 w-3" />
                  {challenge.duration} Days
                </Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">{challenge.title}</h1>
              <p className="text-lg text-muted-foreground">{challenge.shortDescription}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>About This Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line">{challenge.fullDescription}</p>
              </CardContent>
            </Card>

            {isJoined && (
              <Card>
                <CardHeader>
                  <CardTitle>Your Progress</CardTitle>
                  <CardDescription>
                    {completedTasks.length} of {challenge.tasks.length} tasks completed ({completionPercentage}%)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {challenge.tasks.map((task) => {
                      const dayNum = Number(task.day);
                      const isCompleted = completedTasks.includes(dayNum);
                      
                      return (
                        <div
                          key={task.day}
                          className="flex items-start gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                        >
                          <Checkbox
                            id={`task-${task.day}`}
                            checked={isCompleted}
                            onCheckedChange={() => completeTask(dayNum)}
                            disabled={isLoading}
                          />
                          <label
                            htmlFor={`task-${task.day}`}
                            className="flex-1 cursor-pointer"
                          >
                            <div className="font-medium">Day {task.day}</div>
                            <div className={`text-sm ${isCompleted ? 'line-through text-muted-foreground' : ''}`}>
                              {task.task}
                            </div>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {error && (
              <ErrorState message={error} />
            )}
          </div>

          <div className="space-y-6">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Challenge Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Duration</p>
                  <p className="text-lg font-semibold">{challenge.duration} Days</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Tasks</p>
                  <p className="text-lg font-semibold">{challenge.tasks.length}</p>
                </div>

                {isJoined ? (
                  <>
                    <div className="pt-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Progress</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-300"
                          style={{ width: `${completionPercentage}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {completionPercentage}% Complete
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => leaveChallenge()}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Leaving...
                        </>
                      ) : (
                        'Leave Challenge'
                      )}
                    </Button>
                  </>
                ) : (
                  <Button
                    className="w-full"
                    onClick={() => joinChallenge()}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      'Join Challenge'
                    )}
                  </Button>
                )}

                <p className="text-xs text-muted-foreground">
                  {isJoined 
                    ? 'Track your progress and complete daily tasks to achieve your wellness goals.'
                    : 'Sign in to save your progress across devices.'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
