import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export function EmailSignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  
  const signupMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      return apiRequest("POST", "/api/subscribe", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thanks for subscribing! We'll notify you when our bootcamps launch.",
        variant: "default",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Something went wrong.",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    signupMutation.mutate(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-lg border border-neutral-100"
    >
      <h2 className="font-montserrat font-semibold text-xl mb-4 flex items-center">
        <Sparkles className="mr-2 text-accent h-5 w-5" />
        Be First to Know When We Launch
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all focus:outline-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full px-4 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Reserve My Spot"}
          </Button>
          <p className="text-xs text-neutral-700">Early subscribers will receive exclusive discounts and priority enrollment. We respect your privacy.</p>
        </form>
      </Form>
    </motion.div>
  );
}
