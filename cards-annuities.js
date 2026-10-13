// FAM-L types of annuities: one-sentence explanations.
// Same card format as cards.js. Inline math inside text uses \( ... \).
window.CARDS_ANNUITIES = [
  {
    id: "whole-life-annuity",
    title: String.raw`Whole life annuity`,
    subtitle: "",
    formulas: [
      String.raw`\ddot{a}_x=\sum_{k=0}^{\infty}v^k\,{}_kp_x`,
      String.raw`\ddot{a}_x=\frac{1-A_x}{d}`
    ],
    where: [
      [String.raw`x`, String.raw`the age at issue`],
      [String.raw`\sum_{k=0}^{\infty}`, String.raw`adds, over every year \(k\), the discounted payment of 1 times the probability of being alive to get it`],
      [String.raw`v^k`, String.raw`discount factor for \(k\) years`],
      [String.raw`{}_kp_x`, String.raw`probability \((x)\) survives \(k\) years`],
      [String.raw`A_x`, String.raw`whole life insurance`],
      [String.raw`d`, String.raw`discount rate`]
    ],
    note: String.raw`Pays for as long as the person is alive. Twin of whole life insurance: \(A_x=1-d\,\ddot{a}_x\).`
  },
  {
    id: "temporary-annuity",
    title: String.raw`\(n\)-year temporary annuity`,
    subtitle: "",
    formulas: [
      String.raw`\ddot{a}_{x:\overline{n|}}=\sum_{k=0}^{n-1}v^k\,{}_kp_x`,
      String.raw`\ddot{a}_{x:\overline{n|}}=\ddot{a}_x-{}_nE_x\,\ddot{a}_{x+n}`
    ],
    where: [
      [String.raw`n`, String.raw`the maximum number of years`],
      [String.raw`\sum_{k=0}^{n-1}`, String.raw`adds the discounted, survival-weighted payment for each of the first \(n\) years`],
      [String.raw`{}_nE_x`, String.raw`pure endowment, \(v^n\,{}_np_x\)`]
    ],
    note: String.raw`Pays while the person is alive, for at most \(n\) years. Twin of endowment insurance (not term): \(A_{x:\overline{n|}}=1-d\,\ddot{a}_{x:\overline{n|}}\).`
  },
  {
    id: "deferred-annuity",
    title: String.raw`\(u\)-year deferred annuity`,
    subtitle: "",
    formulas: [
      String.raw`{}_{u|}\ddot{a}_x={}_uE_x\,\ddot{a}_{x+u}`,
      String.raw`{}_{u|}\ddot{a}_x=\ddot{a}_x-\ddot{a}_{x:\overline{u|}}`
    ],
    where: [
      [String.raw`u`, String.raw`the waiting period in years`],
      [String.raw`{}_uE_x`, String.raw`pure endowment: value of 1 paid at time \(u\) if alive`]
    ],
    note: String.raw`Payments start only after \(u\) years, if the person is still alive then. No twin, so get it as whole life minus temporary annuity.`
  },
  {
    id: "certain-and-life-annuity",
    title: String.raw`\(n\)-year certain-and-life annuity`,
    subtitle: "",
    formulas: [String.raw`\ddot{a}_{\overline{x:\overline{n|}}}=\ddot{a}_{\overline{n|}}+{}_{n|}\ddot{a}_x`],
    where: [
      [String.raw`n`, String.raw`the number of guaranteed years`],
      [String.raw`\ddot{a}_{\overline{n|}}`, String.raw`annuity-certain for \(n\) years, \(\tfrac{1-v^n}{d}\)`],
      [String.raw`{}_{n|}\ddot{a}_x`, String.raw`life annuity deferred \(n\) years`]
    ],
    note: String.raw`Payments are guaranteed for \(n\) years and continue after that for as long as the person lives. No twin, so build it as annuity-certain plus deferred annuity.`
  },
  {
    id: "due-vs-immediate",
    title: String.raw`Annuity-due vs. immediate`,
    subtitle: "",
    formulas: [
      String.raw`\ddot{a}\ \text{ vs. }\ a`,
      String.raw`a_x=\ddot{a}_x-1`,
      String.raw`a_{x:\overline{n|}}=\ddot{a}_{x:\overline{n|}}-1+{}_nE_x`
    ],
    where: [
      [String.raw`\ddot{a}`, String.raw`annuity-due`],
      [String.raw`a`, String.raw`immediate annuity`],
      [String.raw`{}_nE_x`, String.raw`pure endowment (the extra payment at time \(n\))`]
    ],
    note: String.raw`An annuity-due pays at the start of each period, and an immediate annuity pays at the end. Immediate annuities have no clean twin, so convert to the due version first, then use \(A=1-d\,\ddot{a}\).`
  },
  {
    id: "continuous-annuity",
    title: String.raw`Continuous annuity`,
    subtitle: "",
    formulas: [
      String.raw`\bar{a}_x=\int_0^\infty v^t\,{}_tp_x\,dt`,
      String.raw`\bar{a}_x=\frac{1-\bar{A}_x}{\delta}`
    ],
    where: [
      [String.raw`\bar{a}_x`, String.raw`continuous annuity`],
      [String.raw`\bar{A}_x`, String.raw`insurance paid at the moment of death`],
      [String.raw`\delta`, String.raw`force of interest`]
    ],
    note: String.raw`Pays continuously at a rate of 1 per year instead of in lump sums. Twin of continuous insurance: \(\bar{A}_x=1-\delta\,\bar{a}_x\).`
  },
  {
    id: "mthly-annuity",
    title: String.raw`\(m\)-thly annuity`,
    subtitle: "",
    formulas: [
      String.raw`\text{UDD: }\ddot{a}_x^{(m)}=\alpha(m)\,\ddot{a}_x-\beta(m)`,
      String.raw`\ddot{a}_x^{(m)}\approx\ddot{a}_x-\frac{m-1}{2m}`
    ],
    where: [
      [String.raw`m`, String.raw`the number of payments per year`],
      [String.raw`\alpha(m),\ \beta(m)`, String.raw`UDD constants from the tables`],
      [String.raw`d^{(m)}`, String.raw`nominal discount rate convertible \(m\) times a year`]
    ],
    note: String.raw`Pays \(\tfrac{1}{m}\) (one \(m\)-th of the annual amount) \(m\) times a year, for example monthly when \(m=12\). Twin of \(m\)-thly insurance: \(A_x^{(m)}=1-d^{(m)}\ddot{a}_x^{(m)}\).`
  }
];
