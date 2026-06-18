export type CaseMetric = {
  label: string;
  before: number;
  after: number;
  unit: string;
  improvement: string;
};

export type CaseChartPoint = {
  month: string;
  investimento: number;
  receita: number;
  leads: number;
};

export type SuccessCase = {
  id: string;
  client: string;
  segment: string;
  period: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: CaseMetric[];
  chartData: CaseChartPoint[];
  highlight: string;
};

export const successCases: SuccessCase[] = [
  {
    id: "imperium",
    client: "Imperium",
    segment: "Serviços B2B",
    period: "6 meses",
    summary:
      "Reestruturação completa do funil de captação com foco em leads qualificados e redução do custo por aquisição.",
    challenge:
      "Alto volume de leads desqualificados e custo por lead acima do ticket médio permitia.",
    solution:
      "Implementação do Método E.P.I.C™ com segmentação por intenção, criativos educativos e relatórios F.C.A. semanais.",
    metrics: [
      { label: "Custo por Lead", before: 48, after: 19, unit: "R$", improvement: "-60%" },
      { label: "Taxa de Conversão", before: 2.1, after: 5.8, unit: "%", improvement: "+176%" },
      { label: "ROAS", before: 2.4, after: 5.1, unit: "x", improvement: "+112%" },
    ],
    chartData: [
      { month: "Jan", investimento: 12000, receita: 28800, leads: 85 },
      { month: "Fev", investimento: 13500, receita: 40500, leads: 112 },
      { month: "Mar", investimento: 14000, receita: 53200, leads: 138 },
      { month: "Abr", investimento: 15000, receita: 67500, leads: 165 },
      { month: "Mai", investimento: 15500, receita: 79050, leads: 192 },
      { month: "Jun", investimento: 16000, receita: 81600, leads: 210 },
    ],
    highlight: "ROAS 5,1x em 6 meses de operação estruturada.",
  },
  {
    id: "maison",
    client: "Maison",
    segment: "E-commerce Premium",
    period: "4 meses",
    summary:
      "Escala de vendas online com controle rigoroso de margem e otimização de criativos por etapa do funil.",
    challenge:
      "Investimento crescente sem retorno proporcional e baixa previsibilidade de receita mensal.",
    solution:
      "Planejamento por sazonalidade, testes A/B de criativos e automações de rastreamento ponta a ponta.",
    metrics: [
      { label: "Receita Mensal", before: 42000, after: 118000, unit: "R$", improvement: "+181%" },
      { label: "CPA", before: 156, after: 72, unit: "R$", improvement: "-54%" },
      { label: "Ticket Médio", before: 890, after: 1240, unit: "R$", improvement: "+39%" },
    ],
    chartData: [
      { month: "Mar", investimento: 18000, receita: 42000, leads: 210 },
      { month: "Abr", investimento: 22000, receita: 61000, leads: 285 },
      { month: "Mai", investimento: 26000, receita: 89000, leads: 340 },
      { month: "Jun", investimento: 28000, receita: 118000, leads: 410 },
    ],
    highlight: "Receita quase triplicada mantendo controle de margem.",
  },
  {
    id: "scalecci",
    client: "Scalecci",
    segment: "Clínica / Saúde",
    period: "5 meses",
    summary:
      "Geração consistente de agendamentos qualificados via WhatsApp com funil de aquecimento pré-consulta.",
    challenge:
      "Dependência de indicação e picos irregulares de demanda sem previsibilidade comercial.",
    solution:
      "Campanhas de topo de funil educativas, remarketing por intenção e consultoria semanal ao time comercial.",
    metrics: [
      { label: "Agendamentos/mês", before: 34, after: 127, unit: "", improvement: "+274%" },
      { label: "CPL", before: 62, after: 28, unit: "R$", improvement: "-55%" },
      { label: "Taxa de Comparecimento", before: 58, after: 81, unit: "%", improvement: "+40%" },
    ],
    chartData: [
      { month: "Fev", investimento: 8000, receita: 22400, leads: 68 },
      { month: "Mar", investimento: 9500, receita: 34200, leads: 95 },
      { month: "Abr", investimento: 10500, receita: 48300, leads: 118 },
      { month: "Mai", investimento: 11000, receita: 59400, leads: 142 },
      { month: "Jun", investimento: 11500, receita: 71100, leads: 168 },
    ],
    highlight: "127 agendamentos mensais com leads pré-qualificados.",
  },
];

export const aggregateResults = [
  { name: "Jan", roas: 2.1, leads: 180 },
  { name: "Fev", roas: 2.8, leads: 245 },
  { name: "Mar", roas: 3.4, leads: 310 },
  { name: "Abr", roas: 3.9, leads: 385 },
  { name: "Mai", roas: 4.5, leads: 460 },
  { name: "Jun", roas: 5.0, leads: 520 },
];
