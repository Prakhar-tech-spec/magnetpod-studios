'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, Youtube, List } from 'lucide-react';
import Header from '@/components/header';
import FooterSection from '@/components/footer';
import {
  generatePodcastIdea,
  PodcastIdeaInput,
  PodcastIdeaOutput,
} from '@/ai/flows/podcast-idea-flow';
import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
  topic: z.string().min(1, { message: 'Please enter a topic.' }),
  audience: z.string().min(1, { message: 'Please describe your target audience.' }),
  guests: z.string().optional(),
  style: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function AiStudioPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PodcastIdeaOutput | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
      audience: '',
      guests: '',
      style: '',
    },
  });

  const onSubmit = async (values: FormData) => {
    setIsLoading(true);
    setResult(null);
    try {
      const input: PodcastIdeaInput = {
        topic: values.topic,
        audience: values.audience,
        guests: values.guests || 'Not specified',
        style: values.style || 'Not specified',
      };
      const response = await generatePodcastIdea(input);
      setResult(response);
    } catch (error) {
      console.error('Error generating podcast idea:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate podcast idea. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-normal tracking-tight text-foreground">AI Podcast Studio</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg font-light text-foreground/70">
            Answer a few questions and let our AI generate your next great podcast idea.
          </p>
        </div>

        <Card className="bg-card border-border/50">
          <CardContent className="p-6">
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Main Topic/Niche</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Artificial Intelligence, Stoic Philosophy" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="audience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Audience</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Tech Entrepreneurs, Students" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                 <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Potential Guests (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Industry experts, authors, founders" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="style"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Podcast Style (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Interviews, solo commentary, storytelling" {...field} />
                      </FormControl>
                       <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate Idea
                    </>
                  )}
                </Button>
              </form>
            </FormProvider>
          </CardContent>
        </Card>

        {result && (
          <div className="mt-12 space-y-8">
            <Card className="bg-card border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-normal text-2xl">
                  <Wand2 className="w-6 h-6 text-primary" />
                  Your Podcast Idea
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-primary">{result.podcastIdea.title}</h3>
                <p className="mt-2 font-light text-foreground/80">{result.podcastIdea.concept}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-secondary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-normal text-2xl">
                  <Youtube className="w-6 h-6 text-secondary" />
                  YouTube Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-secondary">{result.youtubeDetails.title}</h3>
                <p className="mt-2 font-light text-foreground/80 whitespace-pre-wrap">{result.youtubeDetails.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-accent/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-normal text-2xl">
                  <List className="w-6 h-6 text-accent" />
                  TL;DR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 font-light text-foreground/80">
                  {result.tldr.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
      <FooterSection />
    </div>
  );
}
