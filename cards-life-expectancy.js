// FAM-L Section B (B.3, B.4): life expectancy and mortality laws. Life expectancy is an annuity at 0% interest,
// and each law gives closed forms for survival and expectation.
// Card format: id, title, subtitle, formulas (display LaTeX), where (symbol, meaning), note.
// Inline math inside text uses \( ... \).
window.CARDS_LIFE_EXPECTANCY = [
  // ---------- B.3 Life table characteristics ----------
  {
    id: "curtate-expectation",
    title: String.raw`Curtate expectation \(e_x\)`,
    subtitle: "",
    formulas: [
      String.raw`e_x=\mathrm E[K_x]=\sum_{k=1}^{\infty}{}_kp_x`,
      String.raw`e_x=p_x\left(1+e_{x+1}\right)`
    ],
    where: [
      [String.raw`e_x`, String.raw`expected number of whole future years (future birthdays)`],
      [String.raw`\sum_{k=1}^{\infty}`, String.raw`adds the probability of reaching each future birthday`]
    ],
    note: String.raw`Average number of birthdays still to come. Link: it is an annuity-immediate at 0% interest, \(e_x=a_x\) with \(v=1\), and the recursion is the annuity recursion.`
  },
  {
    id: "curtate-variance",
    title: String.raw`Variance of \(K_x\)`,
    subtitle: "",
    formulas: [
      String.raw`\mathrm E\!\left[K_x^2\right]=\sum_{k=1}^{\infty}(2k-1)\,{}_kp_x`,
      String.raw`\mathrm{Var}[K_x]=\mathrm E\!\left[K_x^2\right]-e_x^2`
    ],
    where: [
      [String.raw`\sum_{k=1}^{\infty}`, String.raw`adds each survival probability weighted by \(2k-1\) (1, 3, 5, …)`]
    ],
    note: String.raw`Second moment from survival probabilities, no PMF needed. Link: with a short life table, it is often faster to list the PMF \({}_{k|}q_x\) and compute the moments directly.`
  },
  {
    id: "complete-expectation",
    title: String.raw`Complete expectation \(\mathring e_x\)`,
    subtitle: "",
    formulas: [
      String.raw`\mathring e_x=\mathrm E[T_x]=\int_0^\infty{}_tp_x\,dt`,
      String.raw`\mathrm E\!\left[T_x^2\right]=2\int_0^\infty t\,{}_tp_x\,dt`
    ],
    where: [
      [String.raw`\mathring e_x`, String.raw`average future lifetime of \((x)\)`],
      [String.raw`\mathrm{Var}[T_x]`, String.raw`\(\mathrm E[T_x^2]-\mathring e_x^{\,2}\)`]
    ],
    note: String.raw`Integrate survival rather than \(t\) times the density. Link: it is a continuous annuity at 0% interest (\(\mathring e_x=\bar a_x\) with \(\delta=0\)), and \(\mathring e_x\approx e_x+\tfrac12\).`
  },
  {
    id: "temporary-expectation",
    title: String.raw`Temporary expectation \(\mathring e_{x:\overline{n|}}\)`,
    subtitle: "",
    formulas: [
      String.raw`\mathring e_{x:\overline{n|}}=\int_0^n{}_tp_x\,dt`,
      String.raw`e_{x:\overline{n|}}=\sum_{k=1}^{n}{}_kp_x`
    ],
    where: [
      [String.raw`\mathring e_{x:\overline{n|}}`, String.raw`expected years lived in the next \(n\) years, \(\mathrm E[\min(T_x,n)]\)`],
      [String.raw`e_{x:\overline{n|}}`, String.raw`expected whole years lived in the next \(n\) years`]
    ],
    note: String.raw`Life expectancy capped at \(n\) years. Link: it is a temporary annuity at 0% interest, so it splits the same way as \(\ddot a_{x:\overline{n|}}\).`
  },
  {
    id: "expectation-recursion",
    title: String.raw`Splitting life expectancy`,
    subtitle: "",
    formulas: [
      String.raw`\mathring e_x=\mathring e_{x:\overline{n|}}+{}_np_x\,\mathring e_{x+n}`,
      String.raw`\mathring e_{x:\overline{m+n|}}=\mathring e_{x:\overline{m|}}+{}_mp_x\,\mathring e_{x+m:\overline{n|}}`
    ],
    where: [
      [String.raw`{}_np_x`, String.raw`probability of reaching age \(x+n\), where the second piece starts`]
    ],
    note: String.raw`The next \(n\) years, plus (if alive) everything after. Link: identical to \(\ddot a_x=\ddot a_{x:\overline{n|}}+{}_nE_x\,\ddot a_{x+n}\) with no interest, and the place to split is wherever the mortality assumption changes.`
  },
  {
    id: "median-percentile",
    title: String.raw`Median, percentiles, mode`,
    subtitle: "",
    formulas: [
      String.raw`\text{Median } m:\ {}_mp_x=\tfrac12`,
      String.raw`100p\text{-th percentile } r:\ {}_rp_x=1-p`
    ],
    where: [
      [String.raw`m`, String.raw`median future lifetime of \((x)\)`],
      [String.raw`r`, String.raw`time with probability \(p\) of dying before it`],
      [String.raw`\text{Mode}`, String.raw`the \(t\) that maximizes \(f_x(t)={}_tp_x\,\mu_{x+t}\)`]
    ],
    note: String.raw`Set survival equal to the leftover probability and solve for \(t\). Link: the same move turns probabilities on \(Z\) or \(Y\) into probabilities on \(T_x\) for insurance and annuity percentiles.`
  },

  // ---------- B.4 Special mortality laws ----------
  {
    id: "constant-force-law",
    title: String.raw`Constant force law`,
    subtitle: "",
    formulas: [
      String.raw`{}_tp_x=e^{-\mu t},\qquad f_x(t)=\mu e^{-\mu t}`,
      String.raw`\mathring e_x=\tfrac1\mu,\qquad \mathrm{Var}[T_x]=\tfrac1{\mu^2}`
    ],
    where: [
      [String.raw`\mu`, String.raw`the same force of mortality at every age`]
    ],
    note: String.raw`\(T_x\) is exponential with mean \(1/\mu\), so age doesn't matter (memoryless) and \(\mathring e_{x:\overline{n|}}=\mathring e_x(1-{}_np_x)\). Link: \(K_x\) is geometric with \(e_x=p/q\), and \(\bar A_x=\tfrac{\mu}{\mu+\delta}\) follows directly.`
  },
  {
    id: "dml",
    title: String.raw`De Moivre's law (DML)`,
    subtitle: "",
    formulas: [
      String.raw`l_x=\omega-x,\qquad {}_tp_x=\frac{\omega-x-t}{\omega-x}`,
      String.raw`\mu_{x+t}=\frac{1}{\omega-x-t},\qquad f_x(t)=\frac{1}{\omega-x}`
    ],
    where: [
      [String.raw`\omega`, String.raw`limiting age: nobody lives past it`]
    ],
    note: String.raw`The same number of people die every year until age \(\omega\). Link: \(T_x\) is uniform on \((0,\,\omega-x)\), so the density is constant even though \(\mu\) rises.`
  },
  {
    id: "dml-moments",
    title: String.raw`DML moments`,
    subtitle: "",
    formulas: [
      String.raw`\mathring e_x=\frac{\omega-x}{2},\qquad \mathrm{Var}[T_x]=\frac{(\omega-x)^2}{12}`,
      String.raw`\mathring e_{x:\overline{n|}}={}_np_x\,(n)+{}_nq_x\left(\tfrac n2\right)`
    ],
    where: [
      [String.raw`{}_nq_x\left(\tfrac n2\right)`, String.raw`those who die within \(n\) years live \(n/2\) years on average`]
    ],
    note: String.raw`Uniform-distribution mean and variance. Link: the temporary shortcut only works when deaths are uniform, so it fails for modified DML.`
  },
  {
    id: "modified-dml",
    title: String.raw`Modified DML`,
    subtitle: "",
    formulas: [
      String.raw`l_x=(\omega-x)^a,\qquad \mu_x=\frac{a}{\omega-x}`,
      String.raw`{}_tp_x=\left(\frac{\omega-x-t}{\omega-x}\right)^{a},\qquad \mathring e_x=\frac{\omega-x}{a+1}`
    ],
    where: [
      [String.raw`a`, String.raw`exponent (\(a=1\) is ordinary DML)`]
    ],
    note: String.raw`DML raised to a power, so deaths are no longer uniform. Link: spot it from \(\mu=\tfrac{a}{\omega-x}\) or \(l_x=(\omega-x)^a\), then read off \(a\) and \(\omega\).`
  },
  {
    id: "gompertz-makeham",
    title: String.raw`Gompertz and Makeham`,
    subtitle: "",
    formulas: [
      String.raw`\text{Gompertz: }\mu_x=Bc^x`,
      String.raw`\text{Makeham: }\mu_x=A+Bc^x`,
      String.raw`{}_tp_x=e^{-At}\exp\!\left(-\frac{B}{\ln c}\,c^x\left(c^t-1\right)\right)`
    ],
    where: [
      [String.raw`A`, String.raw`age-independent (accident) part of the force`],
      [String.raw`B,\ c`, String.raw`parameters of the part that grows exponentially with age (\(c>1\))`]
    ],
    note: String.raw`Mortality that grows exponentially with age, which fits adult human mortality well. Link: Gompertz is Makeham with \(A=0\), and survival always comes from integrating \(\mu\).`
  }
];
