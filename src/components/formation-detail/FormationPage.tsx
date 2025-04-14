// FormationPage.tsx
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { FormationPageProps } from "./FormationPageProps"; 

export function FormationPage({ data }: { data: FormationPageProps }) {
  const { hero, sessions, stats, tabs, faq, finalCta } = data;

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="flex w-full max-w-7xl flex-col space-y-12">

        {/** HERO SECTION */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-orange-100 text-secondary-dark font-medium py-1 px-3 rounded-full w-fit">
              {hero.label}
            </div>

            <h1 className="text-4xl font-bold">
              {hero.title}
            </h1>

            <p className="text-xl text-gray-600">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button className="rounded-full bg-secondary hover:bg-secondary-dark text-white text-lg px-6 py-6">
                {hero.ctaButton1}
              </Button>
              <Button variant="outline" className="rounded-full border-black hover:bg-gray-100 text-lg px-6 py-6">
                {hero.ctaButton2}
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              {hero.features.map((feature, i) => (
                <div key={i} className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 mr-2 ${feature.iconColorClass}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Put any icon path you want, or choose conditionally */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {feature.text}
                </div>
              ))}
            </div>
          </div>

          {/** Sessions block */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Prochaines sessions</h3>
            <ul className="space-y-4">
              {sessions.map((session, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <div>
                    <p className="font-medium">{session.title}</p>
                    <p className="text-sm text-gray-500">{session.date}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded ${session.statusColor} ${session.statusTextClass}`}
                  >
                    {session.statusLabel}
                  </span>
                </li>
              ))}
            </ul>
            <Button className="w-full mt-4 bg-secondary hover:bg-secondary-dark text-white">
              Planifier un appel d'information
            </Button>
          </div>
        </section>

        {/** STATS SECTION */}
        <section className="w-full bg-gray-50 p-8 rounded-xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className={`text-4xl font-bold ${stat.valueColorClass}`}>
                {stat.value}
              </p>
              <p className="text-gray-600 mt-1">{stat.text}</p>
            </div>
          ))}
        </section>

        {/** TABS SECTION */}
        <section className="w-full">
          <Tabs defaultValue="programme" className="w-full">
            <TabsList className="overflow-x-auto flex gap-2 sm:grid sm:w-full sm:grid-cols-4 bg-white rounded-lg p-1 sm:pl-1 pl-36 bg-gray-50">
              <TabsTrigger
                value="programme"
                className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-lg transition-all"
              >
                Programme
              </TabsTrigger>
              <TabsTrigger
                value="competences"
                className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-lg transition-all"
              >
                Compétences
              </TabsTrigger>
              <TabsTrigger
                value="certification"
                className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-lg transition-all"
              >
                Certification
              </TabsTrigger>
              <TabsTrigger
                value="financement"
                className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-lg transition-all"
              >
                Financement
              </TabsTrigger>
            </TabsList>

            {/** Programme */}
            <TabsContent value="programme" className="p-6 border rounded-lg mt-6">
              <h3 className="text-2xl font-bold mb-6">
                {tabs.programme.title}
              </h3>

              <div className="space-y-8">
                {tabs.programme.steps.map((step, idx) => (
                  <div key={idx}>
                    <div className="flex items-center mb-2">
                    <div className="flex-shrink-0 bg-secondary text-white h-8 w-8 rounded-full flex items-center justify-center mr-4">
                      {step.number}
                    </div>
                    <h4 className="text-xl font-semibold">
                      {step.title}
                    </h4>
                  </div>
                    <p className="ml-11 text-gray-600">{step.description}</p>
                    <p className="ml-11 text-sm text-gray-500 mt-1">
                      Durée: {step.duration}
                    </p>
                  </div>
                ))}
              </div>

              <Button className="mt-8 bg-secondary hover:bg-secondary-dark">
                {tabs.programme.downloadLabel}
              </Button>
            </TabsContent>

            {/** Compétences */}
            <TabsContent value="competences" className="p-6 border rounded-lg mt-6">
              <h3 className="text-2xl font-bold mb-6">{tabs.competences.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {tabs.competences.columns.map((col, idx) => (
                  <div key={idx} className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{col.title}</h4>
                    <ul className="space-y-2">
                      {col.items.map((item, i2) => (
                        <li key={i2} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/** Certification */}
            <TabsContent value="certification" className="p-6 border rounded-lg mt-6">
              <h3 className="text-2xl font-bold mb-6">{tabs.certification.title}</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  {tabs.certification.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-gray-600 mb-4">{p}</p>
                  ))}

                  <h4 className="font-semibold mt-6 mb-2">{tabs.certification.conditionsTitle}</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-6">
                    {tabs.certification.conditions.map((cond, i2) => (
                      <li key={i2}>{cond}</li>
                    ))}
                  </ul>

                  <h4 className="font-semibold mt-6 mb-2">{tabs.certification.recognitionTitle}</h4>
                  <p className="text-gray-600">
                    {tabs.certification.recognitionText}
                  </p>
                </div>

                <div className="md:w-1/3 bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-4">{tabs.certification.advantagesTitle}</h4>
                  <ul className="space-y-3">
                    {tabs.certification.advantages.map((adv, i3) => (
                      <li key={i3} className="flex items-start">
                        <span className="text-secondary mr-2">✓</span>
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/** Financement */}
            <TabsContent value="financement" className="p-6 border rounded-lg mt-6">
              <h3 className="text-2xl font-bold mb-6">{tabs.financement.title}</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {tabs.financement.plans.map((plan, i) => (
                  <Card key={i} className={plan.isPopular ? "border-orange-400 shadow-lg" : ""}>
                    {plan.isPopular && (
                      <div className="bg-secondary text-white text-center py-2 text-sm font-medium">
                        POPULAIRE
                      </div>
                    )}
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-4">{plan.label}</h4>
                      <div className="mb-6">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-gray-500">{plan.suffix}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feat, fi) => (
                          <li key={fi} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-secondary hover:bg-secondary-dark">
                        {plan.buttonLabel}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">{tabs.financement.note.title}</h4>
                <p className="text-gray-600 mb-4">
                  {tabs.financement.note.text}
                </p>
                <Button variant="outline">Prendre RDV avec un conseiller</Button>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/** FAQ Section */}
        <section className="w-full">
          <h3 className="text-2xl font-bold mb-6">Questions fréquentes</h3>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/** Final CTA Section */}
        <section className={`w-full ${finalCta.bgClass} p-8 rounded-xl text-center`}>
          <h3 className="text-3xl font-bold mb-4">
            {finalCta.title}
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {finalCta.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {finalCta.buttons.map((btn, idx) => {
              const baseClass = "rounded-full text-lg px-6 py-6";
              if (btn.style === "outline") {
                return (
                  <Button
                    key={idx}
                    variant="outline"
                    className={`${baseClass} border-black hover:bg-gray-100`}
                  >
                    {btn.label}
                  </Button>
                );
              }
              return (
                <Button
                  key={idx}
                  className={`${baseClass} bg-secondary hover:bg-secondary-dark text-white`}
                >
                  {btn.label}
                </Button>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}
