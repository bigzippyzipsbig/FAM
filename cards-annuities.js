// FAM-L types of annuities: one-sentence explanations.
// Same card format as cards.js. Inline math inside text uses \( ... \).
window.CARDS_ANNUITIES = [
  {
    id: "whole-life-annuity",
    title: String.raw`Whole life annuity`,
    subtitle: "",
    formulas: [String.raw`\ddot{a}_x`],
    where: [[String.raw`x`, String.raw`the age at issue`]],
    note: String.raw`Pays for as long as the person is alive.`
  },
  {
    id: "temporary-annuity",
    title: String.raw`\(n\)-year temporary annuity`,
    subtitle: "",
    formulas: [String.raw`\ddot{a}_{x:\overline{n|}}`],
    where: [[String.raw`n`, String.raw`the maximum number of years`]],
    note: String.raw`Pays while the person is alive, for at most \(n\) years.`
  },
  {
    id: "deferred-annuity",
    title: String.raw`\(u\)-year deferred annuity`,
    subtitle: "",
    formulas: [String.raw`{}_{u|}\ddot{a}_x`],
    where: [[String.raw`u`, String.raw`the waiting period in years`]],
    note: String.raw`Payments start only after \(u\) years, if the person is still alive then.`
  },
  {
    id: "certain-and-life-annuity",
    title: String.raw`\(n\)-year certain-and-life annuity`,
    subtitle: "",
    formulas: [String.raw`\ddot{a}_{\overline{x:\overline{n|}}}`],
    where: [[String.raw`n`, String.raw`the number of guaranteed years`]],
    note: String.raw`Payments are guaranteed for \(n\) years and continue after that for as long as the person lives.`
  },
  {
    id: "due-vs-immediate",
    title: String.raw`Annuity-due vs. immediate`,
    subtitle: "",
    formulas: [String.raw`\ddot{a}\ \text{ vs. }\ a`],
    where: [
      [String.raw`\ddot{a}`, String.raw`annuity-due`],
      [String.raw`a`, String.raw`immediate annuity`]
    ],
    note: String.raw`An annuity-due pays at the start of each period, and an immediate annuity pays at the end.`
  },
  {
    id: "continuous-annuity",
    title: String.raw`Continuous annuity`,
    subtitle: "",
    formulas: [String.raw`\bar{a}_x`],
    where: [[String.raw`\bar{a}_x`, String.raw`continuous annuity`]],
    note: String.raw`Pays continuously at a rate of 1 per year instead of in lump sums.`
  },
  {
    id: "mthly-annuity",
    title: String.raw`\(m\)-thly annuity`,
    subtitle: "",
    formulas: [String.raw`\ddot{a}_x^{(m)}`],
    where: [[String.raw`m`, String.raw`the number of payments per year`]],
    note: String.raw`Pays \(\tfrac{1}{m}\) (one \(m\)-th of the annual amount) \(m\) times a year, for example monthly when \(m=12\).`
  }
];
