// FAM-L policy values: every method of calculating a policy value (reserve), from section F of the slides.
// Same card format as cards.js. Inline math inside text uses \( ... \).
window.CARDS_POLICY_VALUES = [
  {
    id: "prospective",
    title: String.raw`Prospective method`,
    subtitle: "Given: future benefits and future premiums. Works for every policy and any premium.",
    formulas: [
      String.raw`{}_tV=\text{EPVFB}-\text{EPVFP}`,
      String.raw`{}_t\bar{V}(\bar{A}_x)=\bar{A}_{x+t}-\bar{P}(\bar{A}_x)\,\bar{a}_{x+t}`
    ],
    where: [
      [String.raw`{}_tV`, String.raw`policy value (reserve) at time \(t\), which is \(E[L_t]\), the expected future loss given the person is alive at \(t\)`],
      [String.raw`\text{EPVFB}`, String.raw`expected present value of future benefits, valued at time \(t\)`],
      [String.raw`\text{EPVFP}`, String.raw`expected present value of future premiums, valued at time \(t\)`],
      [String.raw`\bar{A}_{x+t}`, String.raw`continuous whole life insurance at the current age \(x+t\)`],
      [String.raw`\bar{P}(\bar{A}_x)`, String.raw`annual premium rate set at issue age \(x\)`],
      [String.raw`\bar{a}_{x+t}`, String.raw`continuous annuity at the current age \(x+t\)`]
    ],
    note: String.raw`Stand at the dot and look forward: what you still owe minus what you will still collect. The only method that works when the premium is not the equivalence-principle premium. At time \(t\), death benefits at \(t\) are in the past; premiums and endowments at \(t\) are in the future.`
  },
  {
    id: "retrospective",
    title: String.raw`Retrospective method`,
    subtitle: "Given: past premiums and past benefits. Only under the equivalence principle.",
    formulas: [
      String.raw`{}_tV=\text{AAVPP}-\text{AAVPB}`,
      String.raw`{}_tV_{x:\overline{n|}}=P_{x:\overline{n|}}\,\ddot{s}_{x:\overline{t|}}-{}_tk_x`,
      String.raw`{}_t\bar{V}(\bar{A}_x)=\bar{P}(\bar{A}_x)\,\bar{s}_{x:\overline{t|}}-{}_t\bar{k}_x`
    ],
    where: [
      [String.raw`\text{AAVPP}`, String.raw`actuarial accumulated value of past premiums`],
      [String.raw`\text{AAVPB}`, String.raw`actuarial accumulated value of past benefits`],
      [String.raw`\ddot{s}_{x:\overline{t|}}`, String.raw`actuarial accumulated value of a \(t\)-year annuity-due, \(\ddot{a}_{x:\overline{t|}}/{}_tE_x\)`],
      [String.raw`{}_tk_x`, String.raw`accumulated cost of insurance for the first \(t\) years`],
      [String.raw`P_{x:\overline{n|}}`, String.raw`annual benefit premium for the endowment insurance`]
    ],
    note: String.raw`Look backward from the dot: premiums collected so far, grown with interest and survivorship, minus death benefits already paid. Only valid when premiums came from the equivalence principle, because then \({}_0V=0\).`
  },
  {
    id: "accumulated-cost-insurance",
    title: String.raw`Accumulated cost of insurance`,
    subtitle: "Given: term insurance and a pure endowment, or a life table.",
    formulas: [
      String.raw`{}_tk_x=\frac{A^{1}_{x:\overline{t|}}}{{}_tE_x}`,
      String.raw`{}_tk_x=\frac{d_x(1+i)^{t-1}+d_{x+1}(1+i)^{t-2}+\cdots+d_{x+t-1}}{l_{x+t}}`,
      String.raw`{}_1k_x=\frac{q_x}{p_x}`
    ],
    where: [
      [String.raw`A^{1}_{x:\overline{t|}}`, String.raw`\(t\)-year term insurance (the past death benefits)`],
      [String.raw`{}_tE_x`, String.raw`pure endowment, \(v^t\,{}_tp_x\)`],
      [String.raw`d_{x+j}`, String.raw`number of deaths between ages \(x+j\) and \(x+j+1\)`],
      [String.raw`(1+i)^{t-1-j}`, String.raw`grows each death benefit from its payment date to time \(t\)`],
      [String.raw`l_{x+t}`, String.raw`number still alive at time \(t\), who share the cost`]
    ],
    note: String.raw`The AAVPB piece of the retrospective method. Every death benefit paid so far, accumulated to time \(t\), split among the survivors.`
  },
  {
    id: "difference-in-premium",
    title: String.raw`Difference in premium`,
    subtitle: "Given: the premium at the dot and the premium at issue. Whole life, endowment, term, limited-pay whole life.",
    formulas: [
      String.raw`{}_t\bar{V}(\bar{A}_x)=\big[\bar{P}(\bar{A}_{x+t})-\bar{P}(\bar{A}_x)\big]\,\bar{a}_{x+t}`,
      String.raw`{}_{15}V_{25:\overline{30|}}=\big[P_{40:\overline{15|}}-P_{25:\overline{30|}}\big]\,\ddot{a}_{40:\overline{15|}}`
    ],
    where: [
      [String.raw`\bar{P}(\bar{A}_{x+t})`, String.raw`premium you would charge if you issued the same policy today at age \(x+t\)`],
      [String.raw`\bar{P}(\bar{A}_x)`, String.raw`premium you are actually charging (set at issue)`],
      [String.raw`\bar{a}_{x+t}`, String.raw`annuity over the remaining premium-paying period`]
    ],
    note: String.raw`Policy value is the EPV of the shortfall between the premium you should charge now and the premium you actually charge. Use the remaining premium period for the annuity, e.g. \(\ddot{a}_{40:\overline{5|}}\) if premiums stop at 45.`
  },
  {
    id: "paid-up",
    title: String.raw`Paid-up method`,
    subtitle: "Given: insurance at the dot and the two premiums. Whole life, endowment, term, limited-pay whole life.",
    formulas: [
      String.raw`{}_t\bar{V}(\bar{A}_x)=\bar{A}_{x+t}\left[1-\frac{\bar{P}(\bar{A}_x)}{\bar{P}(\bar{A}_{x+t})}\right]`,
      String.raw`{}_{15}V_{25:\overline{30|}}=A_{40:\overline{15|}}\left[1-\frac{P_{25:\overline{30|}}}{P_{40:\overline{15|}}}\right]`
    ],
    where: [
      [String.raw`\bar{A}_{x+t}`, String.raw`EPV of the future benefit at the dot`],
      [String.raw`\frac{\bar{P}(\bar{A}_x)}{\bar{P}(\bar{A}_{x+t})}`, String.raw`fraction of the future benefit that future premiums still fund`]
    ],
    note: String.raw`Policy value is the future benefit times the fraction you are not funding with future premiums. That unfunded fraction is the benefit already paid up.`
  },
  {
    id: "annuity-form",
    title: String.raw`Annuity form`,
    subtitle: "Given: annuities at issue and at the dot. Whole life and endowment only.",
    formulas: [
      String.raw`{}_t\bar{V}(\bar{A}_x)=1-\frac{\bar{a}_{x+t}}{\bar{a}_x}`,
      String.raw`{}_tV_{x:\overline{n|}}=1-\frac{\ddot{a}_{x+t:\overline{n-t|}}}{\ddot{a}_{x:\overline{n|}}}`
    ],
    where: [
      [String.raw`\bar{a}_{x+t}`, String.raw`annuity at the dot (remaining term)`],
      [String.raw`\bar{a}_x`, String.raw`annuity at issue (full term)`]
    ],
    note: String.raw`One minus the annuity at the dot over the annuity at issue. Comes from the twin identity \(\bar{A}=1-\delta\,\bar{a}\), so it needs a policy with a twin: whole life or endowment, level premiums payable for the whole term.`
  },
  {
    id: "life-insurance-form",
    title: String.raw`Life insurance form`,
    subtitle: "Given: insurance at issue and at the dot. Whole life and endowment only.",
    formulas: [
      String.raw`{}_t\bar{V}(\bar{A}_x)=\frac{\bar{A}_{x+t}-\bar{A}_x}{1-\bar{A}_x}`,
      String.raw`{}_tV_x=\frac{A_{x+t}-A_x}{1-A_x}`
    ],
    where: [
      [String.raw`A_{x+t}`, String.raw`insurance at the dot`],
      [String.raw`A_x`, String.raw`insurance at issue`]
    ],
    note: String.raw`Insurance at the dot minus insurance at issue, over one minus insurance at issue. It's the annuity form with \(\ddot{a}=\tfrac{1-A}{d}\) substituted in. Watch the denominator: it is \(1-A_x\), not \(1-A_{x+t}\).`
  },
  {
    id: "premium-form",
    title: String.raw`Benefit (net level) premium form`,
    subtitle: "Given: premiums at issue and at the dot, plus the interest rate. Whole life and endowment only.",
    formulas: [
      String.raw`{}_t\bar{V}(\bar{A}_x)=\frac{\bar{P}(\bar{A}_{x+t})-\bar{P}(\bar{A}_x)}{\bar{P}(\bar{A}_{x+t})+\delta}`,
      String.raw`{}_tV_x=\frac{P_{x+t}-P_x}{P_{x+t}+d}`
    ],
    where: [
      [String.raw`P_{x+t}`, String.raw`benefit premium for the same policy issued at the dot`],
      [String.raw`P_x`, String.raw`benefit premium set at issue`],
      [String.raw`\delta,\ d`, String.raw`force of interest (continuous) or discount rate (discrete)`]
    ],
    note: String.raw`Premium at the dot minus premium at issue, over premium at the dot plus \(\delta\) (or \(d\)). Comes from \(P=\tfrac{1}{\ddot{a}}-d\).`
  },
  {
    id: "p-minus-p-over-p",
    title: String.raw`\(\frac{P-P}{P}\) technique`,
    subtitle: "Given: two benefit premiums and a pure endowment premium.",
    formulas: [
      String.raw`\frac{P_{x:\overline{n|}}-P_x}{P_{x:\overline{n|}}^{\;\;\;\;\;1}}={}_nV_{x:\overline{n|}}-{}_nV_x=1-{}_nV_x`,
      String.raw`\frac{P_x-P^{1}_{x:\overline{n|}}}{P_{x:\overline{n|}}^{\;\;\;\;\;1}}={}_nV_x-0`,
      String.raw`\frac{1}{P_{x:\overline{n|}}^{\;\;\;\;\;1}}=\ddot{s}_{x:\overline{n|}}`
    ],
    where: [
      [String.raw`P_{x:\overline{n|}}^{\;\;\;\;\;1}`, String.raw`pure endowment premium; dividing by it accumulates over \(n\) years`],
      [String.raw`P_{x:\overline{n|}},\ P_x,\ P^{1}_{x:\overline{n|}}`, String.raw`endowment, whole life, and term benefit premiums`],
      [String.raw`{}_nV`, String.raw`each policy's reserve at time \(n\) (endowment \(=1\), term \(=0\))`]
    ],
    note: String.raw`Accumulated difference in premiums equals the difference in policy values at time \(n\). Pick two policies with the same death benefit for \(n\) years, and the death benefits cancel.`
  },
  {
    id: "annuity-form-spinoff",
    title: String.raw`Annuity form spinoff`,
    subtitle: "Given: shorter-duration policy values to chain together. Whole life and endowment only.",
    formulas: [
      String.raw`{}_{a+b}V_x=1-(1-{}_aV_x)(1-{}_bV_{x+a})`,
      String.raw`{}_{10}V_{41}=1-\prod_{y=41}^{50}\big(1-{}_1V_y\big)`
    ],
    where: [
      [String.raw`{}_aV_x`, String.raw`reserve after \(a\) years for a policy issued at \(x\)`],
      [String.raw`{}_bV_{x+a}`, String.raw`reserve after \(b\) more years for a policy issued at \(x+a\)`],
      [String.raw`\prod_{y=41}^{50}`, String.raw`multiplies \(1-{}_1V_y\) for every issue age from 41 to 50`]
    ],
    note: String.raw`Each \(1-V\) is an annuity ratio, \(\ddot{a}_{\text{later}}/\ddot{a}_{\text{earlier}}\), so the ratios telescope. If given a sum of logs, turn it into a product first.`
  },
  {
    id: "recursion",
    title: String.raw`Policy value recursion`,
    subtitle: "Given: one year's policy value, premium and mortality. Works for any policy, including special ones.",
    formulas: [
      String.raw`({}_tV+P)(1+i)=q_{x+t}\,b_{t+1}+p_{x+t}\,{}_{t+1}V`,
      String.raw`({}_tV+P)(1+i)=q_{x+t}\big(b_{t+1}-{}_{t+1}V\big)+{}_{t+1}V`
    ],
    where: [
      [String.raw`{}_tV+P`, String.raw`initial policy value: last year's reserve plus this year's premium`],
      [String.raw`b_{t+1}`, String.raw`death benefit paid at the end of year \(t+1\)`],
      [String.raw`q_{x+t},\ p_{x+t}`, String.raw`probability of dying / surviving the year`],
      [String.raw`b_{t+1}-{}_{t+1}V`, String.raw`net amount at risk (NAR)`]
    ],
    note: String.raw`Bank the reserve plus premium for a year; it must pay the death benefit if they die or set up next year's reserve if they live. Handy anchors: \({}_0V=0\) under EP, \({}_nV=0\) for term, \({}_nV=\) endowment benefit for endowment.`
  },
  {
    id: "gross-premium-expense",
    title: String.raw`Gross premium and expense policy values`,
    subtitle: "Given: gross premium, expenses, and the benefit premium.",
    formulas: [
      String.raw`{}_tV^g=\text{EPVFB}+\text{EPVFE}-\text{EPVFP}_G`,
      String.raw`{}_tV^e=\text{EPVFE}-\text{EPVFL}=\text{AAVPL}-\text{AAVPE}`,
      String.raw`{}_tV^g={}_tV^n+{}_tV^e`,
      String.raw`({}_tV^g+G(1-c_t)-e_t)(1+i)=q_{x+t}\,b_{t+1}+p_{x+t}\,{}_{t+1}V^g`
    ],
    where: [
      [String.raw`{}_tV^g,\ {}_tV^n,\ {}_tV^e`, String.raw`gross premium, net (benefit) premium, and expense policy values`],
      [String.raw`G`, String.raw`gross premium`],
      [String.raw`e=G-P`, String.raw`expense loading (gross minus benefit premium)`],
      [String.raw`\text{EPVFE},\ \text{EPVFL}`, String.raw`EPV of future expenses and of future loadings`],
      [String.raw`c_t,\ e_t`, String.raw`percent-of-premium and per-policy expenses paid at time \(t\)`]
    ],
    note: String.raw`Gross premium policy value adds expenses to the prospective method. The expense policy value is usually negative (its negative is the DAC); the exam calls it "the excess of the gross premium reserve over the benefit reserve."`
  },
  {
    id: "fpt",
    title: String.raw`Full preliminary term (FPT) reserve`,
    subtitle: "Given: a modified premium scheme where year 1 is treated as term insurance.",
    formulas: [
      String.raw`\alpha=A^{1}_{x:\overline{1|}},\quad \beta=P\ \text{for the policy issued to }(x+1)`,
      String.raw`{}_1V^{FPT}=0`,
      String.raw`{}_tV^{FPT}={}_{t-1}V\ \text{of the policy issued to }(x+1)`
    ],
    where: [
      [String.raw`\alpha`, String.raw`first-year modified premium, just the cost of 1-year term`],
      [String.raw`\beta`, String.raw`renewal modified premium`],
      [String.raw`A^{1}_{x:\overline{1|}}`, String.raw`one-year term insurance, \(v\,q_x\)`]
    ],
    note: String.raw`Split the policy into 1-year term plus the same policy issued one year older. Example: 20-year endowment on (45), \({}_2V^{FPT}={}_1V_{46:\overline{19|}}\). Then use any method (often the annuity form) on that younger-duration policy.`
  },
  {
    id: "semi-continuous",
    title: String.raw`Semi-continuous policy values`,
    subtitle: "Given: fully discrete reserves, but the benefit is paid at the moment of death. Assume UDD.",
    formulas: [
      String.raw`{}_tV(\bar{A}_x)=\frac{i}{\delta}\,{}_tV_x`,
      String.raw`{}_tV(\bar{A}^{1}_{x:\overline{n|}})=\frac{i}{\delta}\,{}_tV^{1}_{x:\overline{n|}}`,
      String.raw`{}_tV(\bar{A}_{x:\overline{n|}})=\frac{i}{\delta}\,{}_tV^{1}_{x:\overline{n|}}+{}_tV_{x:\overline{n|}}^{\;\;\;\;\;1}`
    ],
    where: [
      [String.raw`\frac{i}{\delta}`, String.raw`UDD factor that converts end-of-year death benefits to immediate payment`],
      [String.raw`{}_tV^{1}_{x:\overline{n|}}`, String.raw`fully discrete term insurance reserve`],
      [String.raw`{}_tV_{x:\overline{n|}}^{\;\;\;\;\;1}`, String.raw`pure endowment reserve (no factor; it's paid at time \(n\))`]
    ],
    note: String.raw`Premiums at the start of the year, benefit at the moment of death. Only the death benefit part gets the \(\tfrac{i}{\delta}\) factor. Rarely tested.`
  },
  {
    id: "interim-exact",
    title: String.raw`Interim policy value, exact`,
    subtitle: "Given: the policy value at the start of the year and you need it partway through.",
    formulas: [
      String.raw`({}_hV+\pi_h)(1+i)^s={}_sq_{x+h}\,v^{1-s}+{}_sp_{x+h}\,{}_{h+s}V`
    ],
    where: [
      [String.raw`h`, String.raw`completed whole years`],
      [String.raw`s`, String.raw`fraction of the year elapsed, \(0<s<1\)`],
      [String.raw`\pi_h`, String.raw`premium paid at time \(h\)`],
      [String.raw`v^{1-s}`, String.raw`death benefit at year-end discounted back to time \(h+s\)`],
      [String.raw`{}_sq_{x+h}`, String.raw`probability of dying in the first \(s\) of the year (UDD: \(s\,q_{x+h}\))`]
    ],
    note: String.raw`A partial-year recursion: accumulate the initial reserve for \(s\) years; those who died owe a year-end benefit worth \(v^{1-s}\) now, and survivors hold \({}_{h+s}V\). Rarely tested.`
  },
  {
    id: "interim-approx",
    title: String.raw`Interim policy value, approximation`,
    subtitle: "Given: the policy values at the start and end of the year.",
    formulas: [
      String.raw`{}_{h+s}V\approx(1-s)({}_hV+\pi_h)+s\,{}_{h+1}V`
    ],
    where: [
      [String.raw`{}_hV+\pi_h`, String.raw`initial reserve at the start of the year`],
      [String.raw`{}_{h+1}V`, String.raw`terminal reserve at year-end`],
      [String.raw`(1-s)\,\pi_h`, String.raw`unearned premium reserve`]
    ],
    note: String.raw`Linearly interpolate between the initial and terminal reserves. Called the mid-terminal reserve..`
  },
  {
    id: "constant-force",
    title: String.raw`Constant force shortcut`,
    subtitle: "Given: constant force of mortality, premiums by the equivalence principle.",
    formulas: [String.raw`{}_tV=0`],
    where: [
      [String.raw`{}_tV`, String.raw`policy value for level-premium whole life or term insurance`]
    ],
    note: String.raw`Under constant force, mortality never changes with age, so the premium at the dot equals the premium at issue and the reserve is 0. Doesn't apply to endowment insurance.`
  }
];
