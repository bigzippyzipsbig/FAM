// FAM-L formula flashcards.
// Same card format as cards.js: id, title, subtitle, formulas (display LaTeX), where (symbol, meaning), note.
// Inline math inside text uses \( ... \).
// Chosen from what the SOA FAM-L sample solutions (topics 7-10) use repeatedly; one-off formulas are left out.
window.CARDS_FAML = [
  {
    id: "interest",
    title: String.raw`Interest building blocks`,
    subtitle: String.raw`\(v\), \(d\), \(\delta\) and annuities-certain`,
    formulas: [
      String.raw`v=\frac{1}{1+i},\qquad d=\frac{i}{1+i}=1-v`,
      String.raw`\delta=\ln(1+i),\qquad v^t=e^{-\delta t}`,
      String.raw`\ddot a_{\angl{n}}=\frac{1-v^n}{d},\qquad a_{\angl{n}}=\frac{1-v^n}{i}`,
      String.raw`\bar a_{\angl{n}}=\frac{1-v^n}{\delta}`,
      String.raw`\ddot s_{\angl{n}}=(1+i)^n\,\ddot a_{\angl{n}}`,
      String.raw`\left(1+\frac{i^{(m)}}{m}\right)^{m}=1+i`
    ],
    where: [
      [String.raw`i`, "annual effective interest rate"],
      [String.raw`v`, "one-year discount factor"],
      [String.raw`d`, "annual effective discount rate"],
      [String.raw`\delta`, "force of interest (continuous rate)"],
      [String.raw`\ddot a_{\angl{n}}`, "PV of 1 paid at the start of each year for \\(n\\) years"],
      [String.raw`a_{\angl{n}}`, "same, but paid at the end of each year"],
      [String.raw`\bar a_{\angl{n}}`, "same, but paid continuously"],
      [String.raw`\ddot s_{\angl{n}}`, "accumulated value at time \\(n\\) of the annuity-due"],
      [String.raw`i^{(m)}`, "nominal rate compounded \\(m\\) times a year"]
    ],
    note: String.raw`Every expected present value in FAM-L is built from these. Annuities-certain show up directly in certain-and-life annuities, return-of-premium problems and loss percentiles. At the SULT rate of 5%, \(d=0.05/1.05\).`
  },
  {
    id: "life-table",
    title: String.raw`Survival probabilities from a life table`,
    subtitle: String.raw`\({}_tp_x\), \({}_tq_x\), deferred death probabilities, select tables`,
    formulas: [
      String.raw`{}_tp_x=\frac{l_{x+t}}{l_x},\qquad {}_tq_x=1-{}_tp_x`,
      String.raw`{}_{t+u}p_x={}_tp_x\cdot{}_up_{x+t}`,
      String.raw`{}_{t|u}q_x=\frac{l_{x+t}-l_{x+t+u}}{l_x}`,
      String.raw`{}_{t|u}q_x={}_tp_x\cdot{}_uq_{x+t}`,
      String.raw`{}_{k|}q_x={}_kp_x\,q_{x+k}`,
      String.raw`{}_3p_{[x]}=p_{[x]}\,p_{[x]+1}\,p_{x+2}\quad(\text{2-year select})`
    ],
    where: [
      [String.raw`l_x`, "expected number of survivors at age \\(x\\)"],
      [String.raw`{}_tp_x`, "probability that \\((x)\\) survives \\(t\\) years"],
      [String.raw`{}_tq_x`, "probability that \\((x)\\) dies within \\(t\\) years"],
      [String.raw`{}_{t|u}q_x`, "probability that \\((x)\\) survives \\(t\\) years, then dies in the next \\(u\\) years"],
      [String.raw`{}_{k|}q_x`, "probability of death in year \\(k+1\\) (the PMF of \\(K_x\\))"],
      [String.raw`[x]`, "age at selection (underwriting); \\([x]+1\\) is one year later"]
    ],
    note: String.raw`Most mortality questions reduce to ratios of \(l\) values. When you're given \(q\)'s, build a short \(l\) column starting from \(l=1000\). In a select table, read across the row of the selection age, then continue down the ultimate column.`
  },
  {
    id: "force",
    title: String.raw`Force of mortality`,
    subtitle: String.raw`\(\mu\), density, and adjusting mortality`,
    formulas: [
      String.raw`\mu_{x+t}=\frac{f_x(t)}{S_x(t)}=-\frac{d}{dt}\ln {}_tp_x`,
      String.raw`f_x(t)={}_tp_x\,\mu_{x+t}`,
      String.raw`{}_tp_x=\exp\!\left(-\int_0^t \mu_{x+s}\,ds\right)`,
      String.raw`\mu^*=\mu+c\;\Rightarrow\;{}_tp_x^*={}_tp_x\,e^{-ct}`,
      String.raw`\mu^*=k\,\mu\;\Rightarrow\;{}_tp_x^*=\left({}_tp_x\right)^{k}`
    ],
    where: [
      [String.raw`\mu_{x+t}`, "instantaneous death rate at age \\(x+t\\)"],
      [String.raw`f_x(t)`, "density of the future lifetime \\(T_x\\)"],
      [String.raw`S_x(t)`, "survival function, equal to \\({}_tp_x\\)"],
      [String.raw`\int_0^t \mu_{x+s}\,ds`, "total hazard built up over the \\(t\\) years"],
      [String.raw`c`, "constant added to the force (e.g. 0.01)"],
      [String.raw`k`, "multiple of standard mortality (e.g. 1.5 for smokers)"]
    ],
    note: String.raw`If you're given a survival function, take \(-\tfrac{d}{dt}\) of its log to get \(\mu\). If you're given \(\mu\), integrate it. Practice problems often say smokers have 1.5 times standard mortality, or add a constant to the force. The adjusted survival probability is the SULT value raised to the power \(k\), or multiplied by \(e^{-ct}\).`
  },
  {
    id: "fractional",
    title: String.raw`Fractional ages`,
    subtitle: "Uniform distribution of deaths (UDD) vs constant force within the year",
    formulas: [
      String.raw`\text{UDD: } l_{x+s}=(1-s)\,l_x+s\,l_{x+1}`,
      String.raw`\text{UDD: } {}_sq_x=s\,q_x,\qquad \mu_{x+s}=\frac{q_x}{1-s\,q_x}`,
      String.raw`\text{UDD: } {}_sq_{x+t}=\frac{s\,q_x}{1-t\,q_x}`,
      String.raw`\text{CF: } l_{x+s}=l_x^{\,1-s}\;l_{x+1}^{\,s}`,
      String.raw`\text{CF: } {}_sp_{x+t}=\left(p_x\right)^{s}`
    ],
    where: [
      [String.raw`s`, "fraction of a year, \\(0<s<1\\)"],
      [String.raw`t`, "starting point inside the year (with \\(t+s\\le 1\\))"],
      [String.raw`\text{UDD}`, "deaths spread evenly over the year: linear interpolation of \\(l\\)"],
      [String.raw`\text{CF}`, "constant force within the year: geometric interpolation of \\(l\\)"]
    ],
    note: String.raw`For something like \({}_{2.5}q_{[50]+0.4}\), interpolate each \(l\) you need between integer ages (linear under UDD, geometric under constant force), then take a ratio. The \({}_sq_{x+t}\) formula is the one interim policy value problems need.`
  },
  {
    id: "expectation",
    title: String.raw`Life expectancy`,
    subtitle: "Complete and curtate, temporary, recursions",
    formulas: [
      String.raw`\mathring e_x=\int_0^\infty {}_tp_x\,dt`,
      String.raw`\mathrm E[T_x^2]=2\int_0^\infty t\;{}_tp_x\,dt`,
      String.raw`e_x=\sum_{k=1}^{\infty}{}_kp_x,\qquad \mathring e_{x:\angl{n}}=\int_0^n {}_tp_x\,dt`,
      String.raw`\mathring e_x=\mathring e_{x:\angl{n}}+{}_np_x\,\mathring e_{x+n}`,
      String.raw`e_x=p_x\left(1+e_{x+1}\right)`,
      String.raw`\text{UDD: }\mathring e_x=e_x+\tfrac12`,
      String.raw`\text{UDD: }\int_0^1{}_tp_x\,dt=1-\tfrac12 q_x`
    ],
    where: [
      [String.raw`\mathring e_x`, "complete expectation: average future lifetime of \\((x)\\)"],
      [String.raw`e_x`, "curtate expectation: expected number of whole future years"],
      [String.raw`T_x`, "future lifetime of \\((x)\\)"],
      [String.raw`\sum_{k=1}^{\infty}{}_kp_x`, "adds the probability of reaching each future birthday"],
      [String.raw`\mathring e_{x:\angl{n}}`, "expected years lived in the next \\(n\\) years"]
    ],
    note: String.raw`The recursions split a lifetime into "the next \(n\) years" plus "survive \(n\) years, then whatever is left". \(\mathrm{Var}[T_x]=\mathrm E[T_x^2]-\mathring e_x^{\,2}\).`
  },
  {
    id: "demoivre",
    title: String.raw`De Moivre's law and modified DML`,
    subtitle: "Uniform future lifetime and its power version",
    formulas: [
      String.raw`\text{DML: } {}_tp_x=\frac{\omega-x-t}{\omega-x}`,
      String.raw`\text{DML: } \mu_{x+t}=\frac{1}{\omega-x-t}`,
      String.raw`\text{DML: } \mathring e_x=\frac{\omega-x}{2},\qquad {}_{k|}q_x=\frac{1}{\omega-x}`,
      String.raw`\text{DML: } \bar A_x=\frac{\bar a_{\overline{\omega-x}|}}{\omega-x}`,
      String.raw`\text{Modified: } {}_tp_x=\left(\frac{\omega-x-t}{\omega-x}\right)^{\alpha}`,
      String.raw`\text{Modified: } \mu_{x+t}=\frac{\alpha}{\omega-x-t}`,
      String.raw`\text{Modified: } \mathring e_x=\frac{\omega-x}{\alpha+1}`
    ],
    where: [
      [String.raw`\omega`, "limiting age (nobody lives past it)"],
      [String.raw`\alpha`, "exponent in the modified version"],
      [String.raw`\bar A_x`, "EPV of 1 paid at the moment of death"],
      [String.raw`\bar a_{\overline{\omega-x}|}`, "continuous annuity-certain for \\(\\omega-x\\) years"]
    ],
    note: String.raw`Under DML, \(T_x\) is uniform on \((0,\omega-x)\). If you see \(S_0(t)=(1-t/\omega)^{\alpha}\), it is the modified version: read off \(\alpha\) and \(\omega\) and use \(\mu=\alpha/(\omega-x-t)\).`
  },
  {
    id: "constant-force",
    title: String.raw`Constant force \(\mu\)`,
    subtitle: "Closed forms for survival, insurance and annuities",
    formulas: [
      String.raw`{}_tp_x=e^{-\mu t},\qquad \mathring e_x=\frac1\mu`,
      String.raw`{}_nE_x=e^{-n(\mu+\delta)}`,
      String.raw`\bar A_x=\frac{\mu}{\mu+\delta},\qquad \bar a_x=\frac{1}{\mu+\delta}`,
      String.raw`\bar A^{1}_{x:\angl{n}}=\frac{\mu}{\mu+\delta}\left(1-{}_nE_x\right)`,
      String.raw`\bar a_{x:\angl{n}}=\frac{1-{}_nE_x}{\mu+\delta}`,
      String.raw`{}^2\bar A_x=\frac{\mu}{\mu+2\delta}`,
      String.raw`\text{Discrete: } A_x=\frac{q}{q+i},\qquad \ddot a_x=\frac{1+i}{q+i}`
    ],
    where: [
      [String.raw`\mu`, "constant force of mortality"],
      [String.raw`\delta`, "force of interest"],
      [String.raw`{}_nE_x`, "EPV of 1 paid at time \\(n\\) if alive"],
      [String.raw`\bar A^{1}_{x:\angl{n}}`, "\\(n\\)-year term insurance, paid at the moment of death"],
      [String.raw`{}^2\bar A_x`, "second moment (same formula at \\(2\\delta\\))"],
      [String.raw`q`, "constant annual death probability, \\(1-e^{-\\mu}\\)"]
    ],
    note: String.raw`One of the most frequent tools in the practice set. If the benefit grows like \(e^{0.02t}\), fold the growth into \(\delta\) (use \(\delta-0.02\)) and the same formulas apply.`
  },
  {
    id: "pure-endowment",
    title: String.raw`Pure endowment and splitting insurances`,
    subtitle: "Building term, endowment and deferred benefits from the SULT",
    formulas: [
      String.raw`{}_nE_x=v^n\,{}_np_x`,
      String.raw`{}_{m+n}E_x={}_mE_x\cdot{}_nE_{x+m}`,
      String.raw`A_{x:\angl{n}}=A^{1}_{x:\angl{n}}+{}_nE_x`,
      String.raw`A_x=A^{1}_{x:\angl{n}}+{}_nE_x\,A_{x+n}`,
      String.raw`{}_{n|}A_x={}_nE_x\,A_{x+n}`
    ],
    where: [
      [String.raw`{}_nE_x`, "pure endowment: EPV of 1 paid at time \\(n\\) if \\((x)\\) is alive"],
      [String.raw`A^{1}_{x:\angl{n}}`, "\\(n\\)-year term insurance"],
      [String.raw`A_{x:\angl{n}}`, "\\(n\\)-year endowment insurance (pays at death or at time \\(n\\))"],
      [String.raw`A_x`, "whole life insurance"],
      [String.raw`{}_{n|}A_x`, "whole life insurance deferred \\(n\\) years"]
    ],
    note: String.raw`The SULT only lists \(A_x\), \({}_5E_x\), \({}_{10}E_x\), \({}_{20}E_x\) and a few endowments. Every other benefit comes from splitting at time \(n\), e.g. \(A^{1}_{x:\angl{n}}=A_x-{}_nE_x\,A_{x+n}\), and \({}_{30}E_{20}={}_{20}E_{20}\cdot{}_{10}E_{40}\).`
  },
  {
    id: "recursion",
    title: String.raw`One-year recursions`,
    subtitle: "For insurances and annuities when year 1 is different",
    formulas: [
      String.raw`A_x=v\,q_x+v\,p_x\,A_{x+1}`,
      String.raw`A_{x:\angl{n}}=v\,q_x+v\,p_x\,A_{x+1:\angl{n-1}}`,
      String.raw`\ddot a_x=1+v\,p_x\,\ddot a_{x+1}`,
      String.raw`\ddot a_{x:\angl{n}}=1+v\,p_x\,\ddot a_{x+1:\angl{n-1}}`
    ],
    where: [
      [String.raw`q_x,\ p_x`, "one-year death and survival probabilities at age \\(x\\)"],
      [String.raw`A_{x+1}`, "the insurance one year later, often straight from the SULT"],
      [String.raw`\ddot a_x`, "whole life annuity-due"]
    ],
    note: String.raw`Use these whenever only the first year's mortality is unusual (surgery, a dangerous adventure, select mortality, an improvement factor): work out year 1 by hand and plug in the table value at age \(x+1\).`
  },
  {
    id: "variance-z",
    title: String.raw`Second moments and \(\mathrm{Var}[Z]\)`,
    subtitle: "Variance of an insurance present value",
    formulas: [
      String.raw`{}^2A_x=\mathrm E[Z^2]\quad(A_x\text{ at } v^2)`,
      String.raw`\mathrm{Var}[Z]={}^2A_x-\left(A_x\right)^2`,
      String.raw`\mathrm{Var}[b\,Z]=b^2\,\mathrm{Var}[Z]`,
      String.raw`\text{Pure endowment: } \mathrm{Var}=v^{2n}\,{}_np_x\,{}_nq_x`,
      String.raw`\mathrm E\!\left[Z^2\right]=\int_0^\infty\left(b_t\,v^t\right)^2{}_tp_x\,\mu_{x+t}\,dt`,
      String.raw`Z_1Z_2=0\Rightarrow\mathrm{Cov}=-\mathrm E[Z_1]\,\mathrm E[Z_2]`
    ],
    where: [
      [String.raw`Z`, "present value random variable of the insurance"],
      [String.raw`{}^2A_x`, "second moment of \\(Z\\): recompute \\(A_x\\) with \\(v^2\\) in place of \\(v\\) (force of interest \\(2\\delta\\))"],
      [String.raw`b,\ b_t`, "benefit amount (possibly depending on time of death \\(t\\))"],
      [String.raw`Z_1,Z_2`, "two benefits that can never both pay (e.g. term and pure endowment)"]
    ],
    note: String.raw`Square the whole present value, benefit included, not just \(v\). Term insurance and a pure endowment can't both pay, so their covariance is negative. That is how the variance of an endowment insurance splits up.`
  },
  {
    id: "udd-insurance",
    title: String.raw`Continuous from discrete under UDD`,
    subtitle: String.raw`The \(i/\delta\) adjustment`,
    formulas: [
      String.raw`\bar A_x=\frac{i}{\delta}\,A_x`,
      String.raw`\bar A^{1}_{x:\angl{n}}=\frac{i}{\delta}\,A^{1}_{x:\angl{n}}`,
      String.raw`\bar A_{x:\angl{n}}=\frac{i}{\delta}\,A^{1}_{x:\angl{n}}+{}_nE_x`,
      String.raw`A^{(m)}_x=\frac{i}{i^{(m)}}\,A_x`
    ],
    where: [
      [String.raw`\bar A`, "benefit paid at the moment of death"],
      [String.raw`A`, "benefit paid at the end of the year of death"],
      [String.raw`A^{(m)}_x`, "benefit paid at the end of the \\(1/m\\)-year of death"],
      [String.raw`i/\delta`, "equals 1.02480 at \\(i=5\\%\\)"]
    ],
    note: String.raw`Only the death benefit part gets the \(i/\delta\) factor. The pure endowment in an endowment insurance is paid at a fixed time, so it is left alone. Needed for every "payable at the moment of death" premium or policy value built from the SULT.`
  },
  {
    id: "percentile",
    title: String.raw`Percentiles of a present value`,
    subtitle: "Turn a probability on \\(Z\\), \\(Y\\) or \\(L\\) into one on \\(T_x\\)",
    formulas: [
      String.raw`Z=v^{T_x}\ \text{ decreases as } T_x \text{ increases}`,
      String.raw`\Pr(Z>z)=\Pr(T_x<t^*),\quad v^{t^*}=z`,
      String.raw`\pi_p(Z)\;\leftrightarrow\;\pi_{1-p}(T_x)`,
      String.raw`\text{Find } t:\ \frac{l_{x+t}}{l_x}=p`,
      String.raw`Y=\bar a_{\overline{T_x}|}\ \text{increases with } T_x`,
      String.raw`\Pr(Y>c)=\Pr(T_x>t^*)`
    ],
    where: [
      [String.raw`Z`, "PV of an insurance (or a loss \\(L\\) that falls as death gets later)"],
      [String.raw`Y`, "PV of a life annuity"],
      [String.raw`t^*`, "the time of death where the PV equals the cutoff"],
      [String.raw`\pi_p`, "the 100\\(p\\)-th percentile (e.g. \\(\\pi_{0.95}\\) is the 95th)"],
      [String.raw`p`, "percentile level, e.g. 0.95"]
    ],
    note: String.raw`Sketch the PV against the time of death. Insurance PVs fall as death comes later and annuity PVs rise. Turn the probability statement into "dies before \(t\)" or "survives past \(t\)", then use the \(l\)'s (interpolating if needed) or \(e^{-\mu t}\). This approach shows up in about nine practice problems.`
  },
  {
    id: "annuity-insurance",
    title: String.raw`Annuities from insurances`,
    subtitle: "The most-used identity in FAM-L",
    formulas: [
      String.raw`\ddot a_x=\frac{1-A_x}{d},\qquad A_x=1-d\,\ddot a_x`,
      String.raw`\bar a_x=\frac{1-\bar A_x}{\delta}`,
      String.raw`\ddot a_{x:\angl{n}}=\frac{1-A_{x:\angl{n}}}{d}`,
      String.raw`a_x=\ddot a_x-1`,
      String.raw`\mathrm{Var}[Y]=\frac{{}^2A_x-\left(A_x\right)^2}{d^2}`
    ],
    where: [
      [String.raw`\ddot a_x`, "whole life annuity-due (payments at the start of each year)"],
      [String.raw`a_x`, "whole life annuity-immediate (payments at the end of each year)"],
      [String.raw`\bar a_x`, "continuous whole life annuity"],
      [String.raw`A_{x:\angl{n}}`, "endowment insurance"],
      [String.raw`Y`, "PV random variable of the annuity-due"]
    ],
    note: String.raw`A temporary annuity pairs with the endowment insurance, not the term insurance. If a problem hands you \(A\) and you need \(\ddot a\) (or the other way round), this is the bridge. It is used in roughly fifteen practice problems.`
  },
  {
    id: "annuity-split",
    title: String.raw`Temporary, deferred and certain-and-life annuities`,
    subtitle: "Splitting annuities at time \\(n\\)",
    formulas: [
      String.raw`\ddot a_{x:\angl{n}}=\ddot a_x-{}_nE_x\,\ddot a_{x+n}`,
      String.raw`{}_{n|}\ddot a_x={}_nE_x\,\ddot a_{x+n}`,
      String.raw`a_{x:\angl{n}}=\ddot a_{x:\angl{n}}-1+{}_nE_x`,
      String.raw`\ddot a_{\overline{x:\angl{n}}}=\ddot a_{\angl{n}}+{}_nE_x\,\ddot a_{x+n}`
    ],
    where: [
      [String.raw`\ddot a_{x:\angl{n}}`, "\\(n\\)-year temporary life annuity-due"],
      [String.raw`{}_{n|}\ddot a_x`, "life annuity-due starting at time \\(n\\)"],
      [String.raw`a_{x:\angl{n}}`, "\\(n\\)-year temporary annuity-immediate"],
      [String.raw`\ddot a_{\overline{x:\angl{n}}}`, "certain-and-life: paid for \\(n\\) years for sure, then for life"],
      [String.raw`\ddot a_{\angl{n}}`, "annuity-certain for \\(n\\) years"]
    ],
    note: String.raw`The SULT gives whole life annuities, so every temporary or deferred annuity comes from splitting at time \(n\). For immediate payments, drop the payment at time 0 and add the one at time \(n\).`
  },
  {
    id: "mthly",
    title: String.raw`\(m\)-thly annuities`,
    subtitle: "UDD with \\(\\alpha(m)\\), \\(\\beta(m)\\), and Woolhouse",
    formulas: [
      String.raw`\text{UDD: } \ddot a^{(m)}_x=\alpha(m)\,\ddot a_x-\beta(m)`,
      String.raw`\begin{aligned}\text{UDD: } \ddot a^{(m)}_{x:\angl{n}}&=\alpha(m)\,\ddot a_{x:\angl{n}}\\ &\quad-\beta(m)\left(1-{}_nE_x\right)\end{aligned}`,
      String.raw`\text{W2: } \ddot a^{(m)}_x\approx\ddot a_x-\frac{m-1}{2m}`,
      String.raw`\begin{aligned}\text{W3: } \ddot a^{(m)}_x&\approx\ddot a_x-\frac{m-1}{2m}\\ &\quad-\frac{m^2-1}{12m^2}\left(\mu_x+\delta\right)\end{aligned}`,
      String.raw`\ddot a^{(m)}_{x:\angl{n}}=\ddot a^{(m)}_x-{}_nE_x\,\ddot a^{(m)}_{x+n}`,
      String.raw`m=12:\ \ \frac{m-1}{2m}=\frac{11}{24},\ \ \frac{m^2-1}{12m^2}=\frac{143}{1728}`
    ],
    where: [
      [String.raw`\ddot a^{(m)}_x`, "annuity-due paying \\(1/m\\) every \\(1/m\\) of a year (1 per year in total)"],
      [String.raw`\alpha(m),\ \beta(m)`, "UDD constants; at 5% and \\(m=12\\): 1.00020 and 0.46651 (in the tables)"],
      [String.raw`\text{W2, W3}`, "Woolhouse's approximation with two or three terms"],
      [String.raw`\mu_x`, "force of mortality at age \\(x\\)"]
    ],
    note: String.raw`Monthly premiums and monthly pensions use these. Work out a whole life version at each end and subtract, as in the last formula. Three-term Woolhouse needs \(\mu\) at both ages.`
  },
  {
    id: "net-premium",
    title: String.raw`Net premiums`,
    subtitle: "Equivalence principle and the key identities",
    formulas: [
      String.raw`P=\frac{\text{EPV of benefits}}{\text{EPV of premium annuity}}`,
      String.raw`P_x=\frac{A_x}{\ddot a_x}=\frac{1}{\ddot a_x}-d=\frac{d\,A_x}{1-A_x}`,
      String.raw`\ddot a_x=\frac{1}{P_x+d},\qquad A_x=\frac{P_x}{P_x+d}`,
      String.raw`{}_hP_x=\frac{A_x}{\ddot a_{x:\angl{h}}}\quad(\text{limited pay})`,
      String.raw`P\big(\bar A_x\big)=\frac{\bar A_x}{\ddot a_x}\quad(\text{semicontinuous})`
    ],
    where: [
      [String.raw`\text{premium annuity}`, "annuity of 1 per year over the premium-paying period"],
      [String.raw`P_x`, "annual net premium for whole life on \\((x)\\)"],
      [String.raw`{}_hP_x`, "whole life with premiums paid for only \\(h\\) years"],
      [String.raw`P\big(\bar A_x\big)`, "benefit at moment of death, premiums at start of year"]
    ],
    note: String.raw`The identities on the second and third lines work for whole life and endowment insurance only, not term. If a problem gives a premium and asks for \(\ddot a\), use \(1/\ddot a=P+d\).`
  },
  {
    id: "gross-premium",
    title: String.raw`Gross premiums with expenses`,
    subtitle: "Setting up the equation of value",
    formulas: [
      String.raw`G\,\ddot a=S\,A+\text{EPV of expenses}`,
      String.raw`\%\text{ of premium: } r\,G\,\ddot a+(f-r)\,G`,
      String.raw`\text{Per policy: } e\,\ddot a+(e_1-e)`,
      String.raw`G=\frac{S\,A+e\,\ddot a+(e_1-e)}{(1-r)\,\ddot a-(f-r)}`,
      String.raw`\text{Claim expense } E:\ S\to S+E`
    ],
    where: [
      [String.raw`G`, "annual gross premium"],
      [String.raw`S`, "death benefit (sum insured)"],
      [String.raw`f,\ r`, "first-year and renewal expense rates as a % of premium"],
      [String.raw`e_1,\ e`, "first-year and renewal per-policy expenses"],
      [String.raw`\ddot a`, "annuity over the premium (or expense) paying period"]
    ],
    note: String.raw`This is the most common premium question in the practice set, around 25 problems. Write every expense as "the renewal level every year, plus an extra amount in year 1". Watch for expenses that run longer than premiums (e.g. maintenance for life but premiums for 10 years only); those need a different annuity.`
  },
  {
    id: "loss-variance",
    title: String.raw`Loss at issue: variance`,
    subtitle: "Whole life and endowment insurance",
    formulas: [
      String.raw`L_0=S\,v^{K+1}-P\,\ddot a_{\angl{K+1}}`,
      String.raw`L_0=\left(S+\frac{P}{d}\right)v^{K+1}-\frac{P}{d}`,
      String.raw`\mathrm{Var}[L_0]=\left(S+\frac{P}{d}\right)^{2}\left({}^2A_x-A_x^2\right)`,
      String.raw`\text{Continuous: }\left(S+\frac{\bar P}{\delta}\right)^{2}\left({}^2\bar A_x-\bar A_x^2\right)`,
      String.raw`\text{Gross: } P\to G(1-r)-e`,
      String.raw`\text{EP},\ S=1:\ \mathrm{Var}[L_0]=\frac{{}^2A_x-A_x^2}{\left(1-A_x\right)^2}`,
      String.raw`\frac{\mathrm{Var}[L_2]}{\mathrm{Var}[L_1]}=\left(\frac{S_2+P_2/d}{S_1+P_1/d}\right)^{2}`
    ],
    where: [
      [String.raw`L_0`, "loss at issue: PV of benefits minus PV of premiums"],
      [String.raw`K`, "curtate future lifetime (whole years lived)"],
      [String.raw`S`, "benefit amount"],
      [String.raw`P,\ \bar P`, "annual premium (discrete or continuous)"],
      [String.raw`r,\ e`, "renewal % of premium expense, and per-year expense"],
      [String.raw`\text{EP}`, "premium set by the equivalence principle"]
    ],
    note: String.raw`Rewrite the premium annuity as \((1-v^{K+1})/d\) so the loss becomes "constant times \(v^{K+1}\) plus constant". Only the constant multiplying \(v^{K+1}\) matters for the variance. For the loss at time \(t\), use \(A_{x+t}\) and \({}^2A_{x+t}\).`
  },
  {
    id: "portfolio",
    title: String.raw`Portfolios and the normal approximation`,
    subtitle: "Number of survivors, aggregate losses, fund size",
    formulas: [
      String.raw`N\sim\text{Bin}\left(n,\ {}_tp_x\right):\ \mathrm E[N]=n\,{}_tp_x`,
      String.raw`\mathrm{Var}[N]=n\,{}_tp_x\,{}_tq_x`,
      String.raw`\mathrm E[S]=n\,\mathrm E[L],\qquad \mathrm{Var}[S]=n\,\mathrm{Var}[L]`,
      String.raw`F=\mathrm E[S]+z_p\sqrt{\mathrm{Var}[S]}`,
      String.raw`\Pr(S>s)\approx 1-\Phi\!\left(\frac{s-\mathrm E[S]}{\sqrt{\mathrm{Var}[S]}}\right)`
    ],
    where: [
      [String.raw`N`, "number of survivors out of \\(n\\) independent lives"],
      [String.raw`S`, "total over \\(n\\) independent policies"],
      [String.raw`L`, "loss (or PV) for one policy"],
      [String.raw`F`, "fund needed to be adequate with probability \\(p\\)"],
      [String.raw`z_p`, "normal percentile: 1.282 (90%), 1.645 (95%), 2.326 (99%)"],
      [String.raw`\Phi`, "standard normal CDF"]
    ],
    note: String.raw`About ten practice problems use this. For independent groups (e.g. fathers and sons), add the means and add the variances. For an integer count, apply the continuity correction of \(\pm 0.5\).`
  },
  {
    id: "return-premium",
    title: String.raw`Return of premium`,
    subtitle: "Death benefit includes the premiums paid",
    formulas: [
      String.raw`P\,\ddot a_{x:\angl{n}}=S\,A^{1}_{x:\angl{n}}+P\,(IA)^{1}_{x:\angl{n}}`,
      String.raw`P=\frac{S\,A^{1}_{x:\angl{n}}}{\ddot a_{x:\angl{n}}-(IA)^{1}_{x:\angl{n}}}`,
      String.raw`(IA)^{1}_{x:\angl{n}}=\sum_{k=0}^{n-1}(k+1)\,v^{k+1}\,{}_{k|}q_x`,
      String.raw`\text{With interest: } P\,\ddot s_{\angl{n}}=B`
    ],
    where: [
      [String.raw`(IA)^{1}_{x:\angl{n}}`, "increasing term insurance: pays \\(k+1\\) for death in year \\(k+1\\)"],
      [String.raw`\sum_{k=0}^{n-1}`, "adds, over each year of death, benefit × discount × probability of death that year"],
      [String.raw`\ddot s_{\angl{n}}`, "accumulated value of \\(n\\) premiums of 1"],
      [String.raw`B`, "pure endowment (maturity) benefit"]
    ],
    note: String.raw`"Death benefit = premiums paid, without interest" means \(P\) times an increasing term insurance, which moves to the premium side. With interest, the dead get back exactly what they paid, so only the survivors' premiums fund the endowment.`
  },
  {
    id: "pv-forms",
    title: String.raw`Policy values: prospective and shortcut forms`,
    subtitle: "Net premium policy value at time \\(t\\)",
    formulas: [
      String.raw`{}_tV=\text{EPV(FB)}-\text{EPV(FP)}`,
      String.raw`{}_tV_x=A_{x+t}-P_x\,\ddot a_{x+t}`,
      String.raw`{}_tV_x=1-\frac{\ddot a_{x+t}}{\ddot a_x}`,
      String.raw`{}_tV_x=\frac{A_{x+t}-A_x}{1-A_x}`,
      String.raw`{}_tV_x=\frac{P_{x+t}-P_x}{P_{x+t}+d}`
    ],
    where: [
      [String.raw`{}_tV`, "policy value (reserve) at time \\(t\\), per 1 of benefit"],
      [String.raw`\text{FB, FP}`, "future benefits, future premiums"],
      [String.raw`A_{x+t},\ \ddot a_{x+t}`, "values at the insured's age now"],
      [String.raw`P_{x+t}`, "net premium for a new policy issued at age \\(x+t\\)"]
    ],
    note: String.raw`The prospective form always works, including gross premiums and odd benefits. The three shortcuts below it only hold for net premiums on whole life or endowment insurance set by the equivalence principle. For an endowment, use \(\ddot a_{x+t:\angl{n-t}}\) and \(\ddot a_{x:\angl{n}}\).`
  },
  {
    id: "pv-recursion",
    title: String.raw`Policy value recursion`,
    subtitle: "Rolling the reserve forward one year",
    formulas: [
      String.raw`\begin{aligned}&\left({}_tV+P-e\right)(1+i)\\ &=q_{x+t}\left(b+E\right)+p_{x+t}\,{}_{t+1}V\end{aligned}`,
      String.raw`\text{NAR: } ={}_{t+1}V+q_{x+t}\left(b+E-{}_{t+1}V\right)`,
      String.raw`{}_0V=0\ (\text{EP}),\qquad {}_nV=\text{maturity benefit}`,
      String.raw`\begin{aligned}&\text{Death benefit } b+{}_{t+1}V:\\ &\left({}_tV+P\right)(1+i)=q_{x+t}\,b+{}_{t+1}V\end{aligned}`
    ],
    where: [
      [String.raw`{}_tV,\ {}_{t+1}V`, "policy values at the start and end of the year"],
      [String.raw`P,\ e`, "premium and premium-related expense at the start of the year"],
      [String.raw`b,\ E`, "death benefit and claim expense, paid at year end"],
      [String.raw`\text{NAR}`, "net amount at risk: \\(b+E-{}_{t+1}V\\)"]
    ],
    note: String.raw`Start with the reserve, add the premium, grow it with interest. That pays the death benefit for those who die and sets up next year's reserve for those who live. Around twelve practice problems use it, often running forward from \({}_0V=0\) or backward from \({}_nV\).`
  },
  {
    id: "pv-interim",
    title: String.raw`Policy values between anniversaries`,
    subtitle: "Reserve at time \\(t+s\\), \\(0<s<1\\)",
    formulas: [
      String.raw`\begin{aligned}&\left({}_tV+P\right)(1+i)^s\\ &={}_sq_{x+t}\,b\,v^{1-s}+{}_sp_{x+t}\;{}_{t+s}V\end{aligned}`,
      String.raw`\begin{aligned}{}_{t+s}V=v^{1-s}\big[&{}_{1-s}q_{x+t+s}\,b\\ &+{}_{1-s}p_{x+t+s}\;{}_{t+1}V\big]\end{aligned}`,
      String.raw`\text{UDD: } {}_{1-s}q_{x+t+s}=\frac{(1-s)\,q_{x+t}}{1-s\,q_{x+t}}`,
      String.raw`{}_{t+s}V\approx(1-s)\left({}_tV+P\right)+s\;{}_{t+1}V`
    ],
    where: [
      [String.raw`s`, "fraction of the year that has passed"],
      [String.raw`b`, "death benefit, paid at the end of the year"],
      [String.raw`v^{1-s}`, "discounts the year-end payment back to time \\(t+s\\)"]
    ],
    note: String.raw`The death benefit is still paid at year end, so a death in the first \(s\) of the year is valued with \(v^{1-s}\). The second form (looking forward from \(t+s\)) is usually quicker.`
  },
  {
    id: "pv-expense",
    title: String.raw`Gross, net and expense policy values`,
    subtitle: "Splitting the gross premium reserve",
    formulas: [
      String.raw`{}_tV^{g}={}_tV^{n}+{}_tV^{e}`,
      String.raw`P^{e}=P^{g}-P^{n}`,
      String.raw`{}_tV^{e}=\text{EPV future expenses}-P^{e}\,\ddot a_{x+t}`,
      String.raw`P^{e}=e+\frac{X}{\ddot a_x}`,
      String.raw`\Rightarrow\ {}_tV^{e}=-\frac{X}{\ddot a_x}\,\ddot a_{x+t}`
    ],
    where: [
      [String.raw`{}_tV^{g}`, "gross premium policy value (benefits + expenses − gross premiums)"],
      [String.raw`{}_tV^{n}`, "net premium policy value"],
      [String.raw`{}_tV^{e}`, "expense policy value"],
      [String.raw`P^{g},\ P^{n},\ P^{e}`, "gross, net and expense premiums"],
      [String.raw`e`, "level expense paid every year, including year 1"],
      [String.raw`X`, "extra expense in year 1 only (on top of \\(e\\))"]
    ],
    note: String.raw`The expense policy value is usually negative. The insurer pays heavy first-year expenses up front and earns them back through future expense loadings. Level expenses are matched by a level loading, so they create no expense reserve.`
  },
  {
    id: "fpt",
    title: String.raw`Full preliminary term (FPT) reserves`,
    subtitle: "Treat year 1 as one-year term insurance",
    formulas: [
      String.raw`\alpha=v\,q_x=A^{1}_{x:\angl{1}}`,
      String.raw`\beta=P_{x+1:\angl{n-1}}`,
      String.raw`{}_1V^{FPT}=0`,
      String.raw`{}_tV^{FPT}_{x:\angl{n}}={}_{t-1}V_{x+1:\angl{n-1}}`,
      String.raw`{}_tV^{FPT}_{x:\angl{n}}=1-\frac{\ddot a_{x+t:\angl{n-t}}}{\ddot a_{x+1:\angl{n-1}}}`
    ],
    where: [
      [String.raw`\alpha`, "valuation premium in year 1 (just covers that year's death cost)"],
      [String.raw`\beta`, "valuation premium from year 2 onward: the net premium for the same policy issued at \\(x+1\\), one year shorter"],
      [String.raw`{}_{t-1}V_{x+1:\angl{n-1}}`, "ordinary net premium policy value of a policy issued at \\(x+1\\)"]
    ],
    note: String.raw`After year 1, an FPT policy looks exactly like a brand-new policy issued one year later and one year shorter. So you can use every net premium shortcut on that new policy. Use \(\ddot a_x=1+v\,p_x\,\ddot a_{x+1}\) to get \(\ddot a_{x+1:\angl{n-1}}\) if it isn't given.`
  }
];
