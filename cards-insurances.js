// FAM-L types of insurances: one-sentence explanations.
// Same card format as cards.js. Inline math inside text uses \( ... \).
window.CARDS_INSURANCES = [
  {
    id: "whole-life-insurance",
    title: String.raw`Whole life insurance`,
    subtitle: "",
    formulas: [
      String.raw`A_x=\sum_{k=0}^{\infty}v^{k+1}\,{}_{k|}q_x`,
      String.raw`A_x=1-d\,\ddot{a}_x`
    ],
    where: [
      [String.raw`x`, String.raw`the age at issue`],
      [String.raw`\sum_{k=0}^{\infty}`, String.raw`adds, over every year of death, the discounted benefit times the probability of dying that year`],
      [String.raw`{}_{k|}q_x`, String.raw`probability \((x)\) dies in year \(k+1\)`],
      [String.raw`d`, String.raw`discount rate`],
      [String.raw`\ddot{a}_x`, String.raw`whole life annuity-due`]
    ],
    note: String.raw`Pays 1 at the end of the year of death, whenever death happens. Twin of the whole life annuity-due.`
  },
  {
    id: "term-insurance",
    title: String.raw`\(n\)-year term insurance`,
    subtitle: "",
    formulas: [
      String.raw`A^{1}_{x:\overline{n|}}=\sum_{k=0}^{n-1}v^{k+1}\,{}_{k|}q_x`,
      String.raw`A^{1}_{x:\overline{n|}}=A_x-{}_nE_x\,A_{x+n}`
    ],
    where: [
      [String.raw`n`, String.raw`the coverage period in years`],
      [String.raw`\sum_{k=0}^{n-1}`, String.raw`adds the discounted benefit times the death probability for each of the first \(n\) years`],
      [String.raw`{}_nE_x`, String.raw`pure endowment, \(v^n\,{}_np_x\)`]
    ],
    note: String.raw`Pays 1 only if death happens within \(n\) years. No twin, so get it as endowment minus pure endowment, \(A_{x:\overline{n|}}-{}_nE_x\), or whole life minus deferred.`
  },
  {
    id: "pure-endowment",
    title: String.raw`\(n\)-year pure endowment`,
    subtitle: "",
    formulas: [String.raw`{}_nE_x`, String.raw`A_{x:\overline{n|}}^{\;\;1}`, String.raw`{}_nE_x=v^n\,{}_np_x`],
    where: [
      [String.raw`{}_nE_x`, String.raw`also written \(A_{x:\overline{n|}}^{\;\;1}\)`],
      [String.raw`{}_np_x`, String.raw`probability \((x)\) survives \(n\) years`]
    ],
    note: String.raw`Pays 1 only if the person survives to the end of \(n\) years. No twin; it is the piece you add or subtract to split any benefit at time \(n\).`
  },
  {
    id: "endowment-insurance",
    title: String.raw`\(n\)-year endowment insurance`,
    subtitle: "",
    formulas: [
      String.raw`A_{x:\overline{n|}}=A^{1}_{x:\overline{n|}}+{}_nE_x`,
      String.raw`A_{x:\overline{n|}}=1-d\,\ddot{a}_{x:\overline{n|}}`
    ],
    where: [
      [String.raw`n`, String.raw`the length of the policy in years`],
      [String.raw`\ddot{a}_{x:\overline{n|}}`, String.raw`\(n\)-year temporary annuity-due`]
    ],
    note: String.raw`Pays 1 at death if it happens within \(n\) years, or at time \(n\) if the person survives, so it equals term insurance plus a pure endowment. Twin of the \(n\)-year temporary annuity-due.`
  },
  {
    id: "deferred-insurance",
    title: String.raw`\(u\)-year deferred insurance`,
    subtitle: "",
    formulas: [
      String.raw`{}_{u|}A_x={}_uE_x\,A_{x+u}`,
      String.raw`{}_{u|}A_x=A_x-A^{1}_{x:\overline{u|}}`
    ],
    where: [
      [String.raw`u`, String.raw`the deferral period in years`],
      [String.raw`{}_uE_x`, String.raw`pure endowment: value of 1 paid at time \(u\) if alive`]
    ],
    note: String.raw`Pays only if death happens after the first \(u\) years. No twin, so get it as whole life minus term.`
  },
  {
    id: "continuous-insurance",
    title: String.raw`Continuous insurance`,
    subtitle: "",
    formulas: [
      String.raw`\bar{A}_x=\int_0^\infty v^t\,{}_tp_x\,\mu_{x+t}\,dt`,
      String.raw`\bar{A}_x=1-\delta\,\bar{a}_x`,
      String.raw`\text{UDD: }\bar{A}_x=\frac{i}{\delta}\,A_x`
    ],
    where: [
      [String.raw`\bar{A}_x`, String.raw`continuous insurance`],
      [String.raw`{}_tp_x\,\mu_{x+t}`, String.raw`density of death at time \(t\)`],
      [String.raw`\delta`, String.raw`force of interest`],
      [String.raw`i`, String.raw`annual effective interest rate`]
    ],
    note: String.raw`Pays at the moment of death instead of at the end of the year of death. Twin of the continuous annuity; under UDD, convert from the discrete version with \(i/\delta\).`
  },
  {
    id: "mthly-insurance",
    title: String.raw`\(m\)-thly insurance`,
    subtitle: "",
    formulas: [
      String.raw`\text{UDD: }A_x^{(m)}=\frac{i}{i^{(m)}}\,A_x`,
      String.raw`A_x^{(m)}=1-d^{(m)}\,\ddot{a}_x^{(m)}`
    ],
    where: [
      [String.raw`m`, String.raw`the number of periods per year`],
      [String.raw`i^{(m)},\ d^{(m)}`, String.raw`nominal interest and discount rates convertible \(m\) times a year`]
    ],
    note: String.raw`Pays at the end of the \(\tfrac{1}{m}\)-year period (for example, the month when \(m=12\)) in which death occurs. Twin of the \(m\)-thly annuity-due.`
  },
  {
    id: "increasing-decreasing",
    title: String.raw`Increasing/decreasing insurance`,
    subtitle: "",
    formulas: [
      String.raw`(IA)_x\ \ /\ \ (DA)^{1}_{x:\overline{n|}}`,
      String.raw`(IA)_x=\sum_{k=0}^{\infty}(k+1)\,v^{k+1}\,{}_{k|}q_x`,
      String.raw`(IA)^{1}_{x:\overline{n|}}+(DA)^{1}_{x:\overline{n|}}=(n+1)\,A^{1}_{x:\overline{n|}}`
    ],
    where: [
      [String.raw`(IA)_x`, String.raw`increasing insurance`],
      [String.raw`(DA)^{1}_{x:\overline{n|}}`, String.raw`decreasing insurance`],
      [String.raw`\sum_{k=0}^{\infty}`, String.raw`adds benefit \(k+1\) × discount × probability of dying in year \(k+1\)`]
    ],
    note: String.raw`The death benefit goes up by 1 each year (increasing) or goes down from \(n\) by 1 each year (decreasing). No twin; get one from the other since they always sum to \(n+1\) times term insurance.`
  }
];
