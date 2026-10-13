// FAM-L Section B (B.1, B.2, B.5, B.6): survival probabilities. Every card is a way to get tpx: from the survival
// function, a life table, the force of mortality, between integer ages, or right after selection.
// Card format: id, title, subtitle, formulas (display LaTeX), where (symbol, meaning), note.
// Inline math inside text uses \( ... \).
window.CARDS_SURVIVAL = [
  // ---------- B.1 Probability for the age at death ----------
  {
    id: "future-lifetime",
    title: String.raw`Future lifetime \(T_x\)`,
    subtitle: "",
    formulas: [
      String.raw`S_x(t)=\Pr(T_x>t)=\frac{S_0(x+t)}{S_0(x)}`,
      String.raw`F_x(t)=1-S_x(t)`
    ],
    where: [
      [String.raw`T_x`, String.raw`future lifetime of a life aged \(x\), so death happens at age \(x+T_x\)`],
      [String.raw`S_x(t)`, String.raw`survival function: probability \((x)\) is still alive after \(t\) years`],
      [String.raw`F_x(t)`, String.raw`CDF: probability \((x)\) dies within \(t\) years`],
      [String.raw`S_0`, String.raw`survival function of a newborn`]
    ],
    note: String.raw`\(T_x\) is a newborn's lifetime, conditioned on reaching age \(x\). Link: every probability about \((x)\) is a ratio of newborn survival values.`
  },
  {
    id: "tpx-tqx",
    title: String.raw`\({}_tp_x\) and \({}_tq_x\)`,
    subtitle: "",
    formulas: [
      String.raw`{}_tp_x=S_x(t),\qquad {}_tq_x=1-{}_tp_x`,
      String.raw`{}_{t+u}p_x={}_tp_x\cdot{}_up_{x+t}`
    ],
    where: [
      [String.raw`{}_tp_x`, String.raw`probability \((x)\) survives \(t\) years (\(p_x\) when \(t=1\))`],
      [String.raw`{}_tq_x`, String.raw`probability \((x)\) dies within \(t\) years (\(q_x\) when \(t=1\))`]
    ],
    note: String.raw`Actuarial shorthand for the survival function and the CDF. Link: survival over a long stretch is the product of survival over each piece.`
  },
  {
    id: "deferred-q",
    title: String.raw`Deferred death probability \({}_{t|u}q_x\)`,
    subtitle: "",
    formulas: [
      String.raw`{}_{t|u}q_x={}_tp_x-{}_{t+u}p_x`,
      String.raw`{}_{t|u}q_x={}_tp_x\cdot{}_uq_{x+t}`
    ],
    where: [
      [String.raw`{}_{t|u}q_x`, String.raw`probability \((x)\) survives \(t\) years, then dies in the next \(u\) years (\({}_{t|}q_x\) when \(u=1\))`]
    ],
    note: String.raw`Survive to age \(x+t\), then die before age \(x+t+u\). Link: it is either a difference of two survival probabilities or "survive, then die" multiplied together.`
  },
  {
    id: "curtate-lifetime",
    title: String.raw`Curtate future lifetime \(K_x\)`,
    subtitle: "",
    formulas: [
      String.raw`K_x=\lfloor T_x\rfloor`,
      String.raw`\Pr(K_x=k)={}_kp_x\,q_{x+k}={}_{k|}q_x`
    ],
    where: [
      [String.raw`K_x`, String.raw`number of whole years \((x)\) lives (future birthdays reached)`],
      [String.raw`\lfloor\ \rfloor`, String.raw`floor: round down to a whole number`],
      [String.raw`{}_{k|}q_x`, String.raw`probability \((x)\) dies in year \(k+1\)`]
    ],
    note: String.raw`The whole-year version of \(T_x\). Link: \(K_x\) drives discrete (end-of-year) insurances, while \(T_x\) drives continuous ones.`
  },
  {
    id: "life-table",
    title: String.raw`Life table \(l_x\), \(d_x\)`,
    subtitle: "",
    formulas: [
      String.raw`{}_tp_x=\frac{l_{x+t}}{l_x},\qquad {}_nd_x=l_x-l_{x+n}`,
      String.raw`{}_{n|m}q_x=\frac{l_{x+n}-l_{x+n+m}}{l_x}`
    ],
    where: [
      [String.raw`l_x`, String.raw`expected number of survivors at age \(x\), equal to \(l_0\,S_0(x)\)`],
      [String.raw`{}_nd_x`, String.raw`expected deaths between ages \(x\) and \(x+n\) (\(d_x\) when \(n=1\))`]
    ],
    note: String.raw`Survival written as a head count. Link: any \(p\) or \(q\) is a ratio of \(l\)'s, so when given \(q\)'s, build an \(l\) column starting from 1000.`
  },

  // ---------- B.2 Force of mortality ----------
  {
    id: "force-definition",
    title: String.raw`Force of mortality \(\mu_x\)`,
    subtitle: "",
    formulas: [
      String.raw`\mu_x=-\frac{S_0'(x)}{S_0(x)}=-\frac{d}{dx}\ln l_x`,
      String.raw`\mu_{x+t}=-\frac{\frac{d}{dt}\,{}_tp_x}{{}_tp_x}`
    ],
    where: [
      [String.raw`\mu_x`, String.raw`instantaneous death rate at age \(x\)`],
      [String.raw`S_0'(x)`, String.raw`derivative of newborn survival`]
    ],
    note: String.raw`\(\mu_x\,dx\) is the chance a life aged \(x\) dies in the next instant. Link: it is the mortality version of the force of interest \(\delta\), so going from survival to \(\mu\) means differentiating the log.`
  },
  {
    id: "force-to-survival",
    title: String.raw`Survival from \(\mu\)`,
    subtitle: "",
    formulas: [
      String.raw`{}_tp_x=\exp\!\left(-\int_0^t\mu_{x+s}\,ds\right)`,
      String.raw`{}_tp_x=\exp\!\left(-\int_x^{x+t}\mu_y\,dy\right)`
    ],
    where: [
      [String.raw`\int_0^t\mu_{x+s}\,ds`, String.raw`total force of mortality between ages \(x\) and \(x+t\)`]
    ],
    note: String.raw`Add up the force between the two ages, make it negative, and exponentiate. Link: this is the reverse of the previous card, so integrate \(\mu\) to get survival.`
  },
  {
    id: "density",
    title: String.raw`Density of \(T_x\)`,
    subtitle: "",
    formulas: [
      String.raw`f_x(t)={}_tp_x\,\mu_{x+t}`,
      String.raw`\int_0^n{}_tp_x\,\mu_{x+t}\,dt={}_nq_x`
    ],
    where: [
      [String.raw`f_x(t)`, String.raw`PDF of \(T_x\): density of death at time \(t\)`],
      [String.raw`\int_0^n`, String.raw`adds the death density over the first \(n\) years`]
    ],
    note: String.raw`Survive to time \(t\), then get hit by the force of mortality. Link: this is the death weight inside \(\bar A_x=\int v^t\,{}_tp_x\,\mu_{x+t}\,dt\), and integrating it over any interval gives the death probability for that interval.`
  },
  {
    id: "derivatives",
    title: String.raw`Derivatives`,
    subtitle: "",
    formulas: [
      String.raw`\frac{d}{dt}\,{}_tp_x=-{}_tp_x\,\mu_{x+t}`,
      String.raw`\frac{d}{dx}\,{}_tp_x={}_tp_x\left(\mu_x-\mu_{x+t}\right)`
    ],
    where: [
      [String.raw`\frac{d}{dt}`, String.raw`change in the length of time survived`],
      [String.raw`\frac{d}{dx}`, String.raw`change in the starting age`]
    ],
    note: String.raw`Survival falls over time at rate \(\mu\). Link: \(\frac{d}{dt}\,{}_tq_x=f_x(t)\) and \(\frac{d}{dt}\,l_{x+t}=-l_{x+t}\,\mu_{x+t}\) are the same fact in other notation.`
  },
  {
    id: "adjusted-force",
    title: String.raw`Adjusted force of mortality`,
    subtitle: "",
    formulas: [
      String.raw`\mu^*=k\,\mu\;\Rightarrow\;{}_tp_x^*=\left({}_tp_x\right)^k`,
      String.raw`\mu^*=\mu+c\;\Rightarrow\;{}_tp_x^*={}_tp_x\,e^{-ct}`
    ],
    where: [
      [String.raw`\mu^*`, String.raw`modified force (e.g. smokers)`],
      [String.raw`k`, String.raw`multiple of standard mortality`],
      [String.raw`c`, String.raw`constant added to the force`]
    ],
    note: String.raw`Changes to \(\mu\) pass through the exponential. Link: multiplying \(\mu\) raises survival to a power and adding to \(\mu\) multiplies survival by \(e^{-ct}\); the \(q\)'s do not scale the same way (\(q^*=1-(1-q)^k\)).`
  },

  // ---------- B.5 Fractional ages ----------
  {
    id: "udd",
    title: String.raw`Uniform distribution of deaths (UDD)`,
    subtitle: "",
    formulas: [
      String.raw`l_{x+s}=(1-s)\,l_x+s\,l_{x+1}`,
      String.raw`{}_sq_x=s\,q_x,\qquad {}_sp_x\,\mu_{x+s}=q_x`
    ],
    where: [
      [String.raw`s`, String.raw`fraction of a year, \(0<s<1\)`]
    ],
    note: String.raw`Straight-line interpolation of \(l\) between integer ages. Link: DML implies UDD but not the reverse, so don't use DML-only shortcuts under UDD.`
  },
  {
    id: "udd-midyear",
    title: String.raw`UDD starting mid-year`,
    subtitle: "",
    formulas: [
      String.raw`{}_tq_{x+s}=\frac{t\,q_x}{1-s\,q_x}\quad(s+t\le1)`,
      String.raw`\mu_{x+s}=\frac{q_x}{1-s\,q_x}`
    ],
    where: [
      [String.raw`s`, String.raw`time already elapsed in the year`],
      [String.raw`t`, String.raw`further time, staying inside the same year of age`]
    ],
    note: String.raw`UDD applies between integer ages, not from a fractional age. Link: for anything crossing a birthday, build an \(l\) column and interpolate each \(l\) you need.`
  },
  {
    id: "udd-k-r",
    title: String.raw`UDD: \(T_x=K_x+R_x\)`,
    subtitle: "",
    formulas: [
      String.raw`\mathring e_x=e_x+\tfrac12`,
      String.raw`\mathrm{Var}[T_x]=\mathrm{Var}[K_x]+\tfrac1{12}`
    ],
    where: [
      [String.raw`R_x`, String.raw`fraction of the year of death that was lived, uniform on \((0,1)\) under UDD`]
    ],
    note: String.raw`Under UDD, \(K_x\) and \(R_x\) are independent, so means and variances add. Link: this same independence gives \(\bar A_x=\tfrac{i}{\delta}A_x\) for continuous insurance.`
  },
  {
    id: "cf-fractional",
    title: String.raw`Constant force between ages`,
    subtitle: "",
    formulas: [
      String.raw`l_{x+s}=l_x^{\,1-s}\;l_{x+1}^{\,s}`,
      String.raw`{}_sp_x=(p_x)^s,\qquad \mu_{x+s}=-\ln p_x`
    ],
    where: [
      [String.raw`s`, String.raw`fraction of a year, \(0<s<1\)`]
    ],
    note: String.raw`Geometric interpolation of \(l\) (UDD uses the arithmetic mean, this uses the geometric mean). Link: \(K_x\) and \(R_x\) are not independent here, so \(\mathring e_x=e_x+\tfrac12\) fails.`
  },

  // ---------- B.6 Select mortality ----------
  {
    id: "select-ultimate",
    title: String.raw`Select and ultimate mortality`,
    subtitle: "",
    formulas: [
      String.raw`q_{[x]}\le q_{[x-1]+1}\le\cdots\le q_x`,
      String.raw`{}_3p_{[x]+1}=p_{[x]+1}\,p_{x+2}\,p_{x+3}\quad(\text{2-yr select})`
    ],
    where: [
      [String.raw`[x]`, String.raw`age at selection (underwriting)`],
      [String.raw`q_{[x]+k}`, String.raw`mortality \(k\) years after selection at age \(x\)`],
      [String.raw`q_x`, String.raw`ultimate mortality, used once the select period ends`]
    ],
    note: String.raw`Recently underwritten lives are healthier, so their mortality is lower for a few years. Link: read across the selection-age row, then down the ultimate column; every other formula works the same with \([x]\) in place of \(x\).`
  }
];
