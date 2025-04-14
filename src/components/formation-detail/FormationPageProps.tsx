// FormationPageProps.ts
export interface FormationPageProps {
  hero: {
    label: string
    title: string
    description: string
    btnPrimary: string
    btnSecondary: string
    features: Array<{
      iconColorClass: string
      text: string
    }>
  }
  sessions: Array<{
    title: string
    date: string
    statusLabel: string
    statusBgClass: string
    statusTextClass: string
  }>
  stats: Array<{
    value: string
    text: string
    valueColorClass: string
  }>
  tabs: {
    programme: {
      title: string
      steps: Array<{
        number: number
        title: string
        description: string
        duration: string
      }>
      downloadLabel: string
    }
    competences: {
      title: string
      columns: Array<{
        title: string
        items: string[]
      }>
    }
    certification: {
      title: string
      paragraphs: string[]
      conditionsTitle: string
      conditions: string[]
      recognitionTitle: string
      recognitionText: string
      advantagesTitle: string
      advantages: string[]
    }
    financement: {
      title: string
      plans: Array<{
        label: string
        price: string
        suffix: string
        description: string
        features: string[]
        buttonLabel: string
        isPopular: boolean
      }>
      note: {
        title: string
        text: string
      }
    }
  }
  faq: Array<{
    question: string
    answer: string
  }>
  finalCta: {
    bgClass: string
    title: string
    description: string
    buttons: Array<{
      label: string
      style?: "primary" | "outline"
    }>
  }
}
