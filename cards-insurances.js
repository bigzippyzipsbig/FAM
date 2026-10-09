// FAM-L types of insurances: one-sentence explanations.
// Same card format as cards.js. Inline math inside text uses \( ... \).
window.CARDS_INSURANCES = [
  {
    id: "whole-life-insurance",
    title: String.raw`Whole life insurance`,
    subtitle: "",
    formulas: [String.raw`A_x`],
    where: [[String.raw`x`, String.raw`the age at issue`]],
    note: String.raw`Pays 1 at the end of the year of death, whenever death happens.`
  },
  {
    id: "term-insurance",
    title: String.raw`\(n\)-year term insurance`,
    subtitle: "",
    formulas: [String.raw`A^{1}_{x:\overline{n|}}`],
    where: [[String.raw`n`, String.raw`the coverage period in years`]],
    note: String.raw`Pays 1 only if death happens within \(n\) years.`
  },
  {
    id: "pure-endowment",
    title: String.raw`\(n\)-year pure endowment`,
    subtitle: "",
    formulas: [String.raw`{}_nE_x`, String.raw`A_{x:\overline{n|}}^{\;\;1}`],
    where: [[String.raw`{}_nE_x`, String.raw`also written \(A_{x:\overline{n|}}^{\;\;1}\)`]],
    note: String.raw`Pays 1 only if the person survives to the end of \(n\) years.`
  },
  {
    id: "endowment-insurance",
    title: String.raw`\(n\)-year endowment insurance`,
    subtitle: "",
    formulas: [String.raw`A_{x:\overline{n|}}`],
    where: [[String.raw`n`, String.raw`the length of the policy in years`]],
    note: String.raw`Pays 1 at death if it happens within \(n\) years, or at time \(n\) if the person survives, so it equals term insurance plus a pure endowment.`
  },
  {
    id: "deferred-insurance",
    title: String.raw`\(u\)-year deferred insurance`,
    subtitle: "",
    formulas: [String.raw`{}_{u|}A_x`],
    where: [[String.raw`u`, String.raw`the deferral period in years`]],
    note: String.raw`Pays only if death happens after the first \(u\) years.`
  },
  {
    id: "continuous-insurance",
    title: String.raw`Continuous insurance`,
    subtitle: "",
    formulas: [String.raw`\bar{A}_x`],
    where: [[String.raw`\bar{A}_x`, String.raw`continuous insurance`]],
    note: String.raw`Pays at the moment of death instead of at the end of the year of death.`
  },
  {
    id: "mthly-insurance",
    title: String.raw`\(m\)-thly insurance`,
    subtitle: "",
    formulas: [String.raw`A_x^{(m)}`],
    where: [[String.raw`m`, String.raw`the number of periods per year`]],
    note: String.raw`Pays at the end of the \(\tfrac{1}{m}\)-year period (for example, the month when \(m=12\)) in which death occurs.`
  },
  {
    id: "increasing-decreasing",
    title: String.raw`Increasing/decreasing insurance`,
    subtitle: "",
    formulas: [String.raw`(IA)_x\ \ /\ \ (DA)^{1}_{x:\overline{n|}}`],
    where: [
      [String.raw`(IA)_x`, String.raw`increasing insurance`],
      [String.raw`(DA)^{1}_{x:\overline{n|}}`, String.raw`decreasing insurance`]
    ],
    note: String.raw`The death benefit goes up by 1 each year (increasing) or goes down from \(n\) by 1 each year (decreasing).`
  }
];
