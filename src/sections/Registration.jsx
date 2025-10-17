import RegistrationForm from "@/components/forms/RegistrationForm";

export default function Registration() {
  return (
    <section id="register" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">
            Secure Your <span className="text-primary">Ticket</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose your pass and get ready for an unforgettable experience.
            Limited spots available!
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
}
