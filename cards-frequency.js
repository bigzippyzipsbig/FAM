// FAM-S frequency: discrete distributions for the NUMBER of claims, tied together by the (a, b, 0) and (a, b, 1) classes.
// Card format: id, title, subtitle, formulas (display LaTeX), where (symbol, meaning), note.
// Inline math inside text uses \( ... \).
window.CARDS_FREQUENCY = [
  // ---------- Members ----------
  {
    id: "poisson",
    title: String.raw`Poisson\((\lambda)\)`,
    subtitle: "",
    formulas: [
      String.raw`p_k=\frac{e^{-\lambda}\lambda^{k}}{k!},\quad k=0,1,2,\dots`,
      String.raw`\mathrm{E}[N]=\mathrm{Var}[N]=\lambda`
    ],
    where: [
      [String.raw`\lambda`, "expected number of events"],
      [String.raw`p_k`, "\\(P(N=k)\\)"]
    ],
    note: String.raw`The default frequency model, and mean equal to variance identifies it. Independent Poissons add: \(N_1+N_2\sim\text{Poisson}(\lambda_1+\lambda_2)\).`
  },
  {
    id: "binomial",
    title: String.raw`Binomial\((m,q)\)`,
    subtitle: "",
    formulas: [
      String.raw`p_k=\binom{m}{k}q^{k}(1-q)^{m-k},\quad k=0,\dots,m`,
      String.raw`\mathrm{E}[N]=mq,\qquad \mathrm{Var}[N]=mq(1-q)`
    ],
    where: [
      [String.raw`m`, "number of trials"],
      [String.raw`q`, "success probability per trial"],
      [String.raw`\binom{m}{k}`, "number of ways to choose \\(k\\) of the \\(m\\) trials"]
    ],
    note: String.raw`Frequency with a cap on the number of claims. Variance below the mean identifies it.`
  },
  {
    id: "negbin",
    title: String.raw`Negative binomial\((r,\beta)\)`,
    subtitle: "",
    formulas: [
      String.raw`p_k=\binom{r+k-1}{k}\left(\frac{1}{1+\beta}\right)^{r}\left(\frac{\beta}{1+\beta}\right)^{k}`,
      String.raw`\mathrm{E}[N]=r\beta,\qquad \mathrm{Var}[N]=r\beta(1+\beta)`
    ],
    where: [
      [String.raw`r`, "shape parameter"],
      [String.raw`\beta`, "scale parameter (tables use \\(\\beta\\), not \\(p\\))"],
      [String.raw`p_0`, "\\((1+\\beta)^{-r}\\)"]
    ],
    note: String.raw`Frequency with extra spread. Variance above the mean identifies it.`
  },
  {
    id: "geometric",
    title: String.raw`Geometric\((\beta)\)`,
    subtitle: "",
    formulas: [
      String.raw`p_k=\frac{\beta^{k}}{(1+\beta)^{k+1}},\quad k=0,1,\dots`,
      String.raw`\mathrm{E}[N]=\beta,\qquad \mathrm{Var}[N]=\beta(1+\beta)`
    ],
    where: [
      [String.raw`\beta`, "mean number of events"]
    ],
    note: String.raw`A negative binomial with \(r=1\). Link: it is the discrete twin of the exponential, memoryless: \(P(N\ge n+k\mid N\ge n)=P(N\ge k)\).`
  },
  {
    id: "poisson-gamma",
    title: String.raw`Poisson–gamma mixture`,
    subtitle: "",
    formulas: [
      String.raw`\begin{aligned}&N\mid\lambda\sim\text{Poisson}(\lambda),\quad \lambda\sim\text{Gamma}(\alpha,\theta)\\ \Rightarrow\ &N\sim\text{NB}(r=\alpha,\ \beta=\theta)\end{aligned}`
    ],
    where: [
      [String.raw`\lambda`, "a Poisson mean that itself varies from insured to insured"]
    ],
    note: String.raw`Mixing Poissons over a gamma-distributed mean gives a negative binomial. Link: the gamma's shape becomes \(r\) and its scale becomes \(\beta\).`
  },

  // ---------- (a, b, 0) class ----------
  {
    id: "ab0",
    title: String.raw`The \((a,b,0)\) recursion`,
    subtitle: "",
    formulas: [
      String.raw`\frac{p_k}{p_{k-1}}=a+\frac{b}{k},\quad k=1,2,\dots`,
      String.raw`\mathrm{E}[N]=\frac{a+b}{1-a},\qquad \mathrm{Var}[N]=\frac{a+b}{(1-a)^2}`
    ],
    where: [
      [String.raw`p_k`, "\\(P(N=k)\\)"],
      [String.raw`a,\ b`, "constants that pin down the distribution and its parameters"]
    ],
    note: String.raw`If a problem gives a ratio of consecutive probabilities, match it to \(a+b/k\). Equivalently, \(k\,p_k/p_{k-1}=ak+b\) is linear in \(k\).`
  },
  {
    id: "ab0-members",
    title: String.raw`\((a,b,0)\) members: \(a\) and \(b\)`,
    subtitle: "",
    formulas: [
      String.raw`\begin{array}{lll} & a & b\\ \hline \text{Poisson} & 0 & \lambda\\ \text{Binomial} & -\frac{q}{1-q} & \frac{(m+1)q}{1-q}\\ \text{Neg. binomial} & \frac{\beta}{1+\beta} & \frac{(r-1)\beta}{1+\beta}\\ \text{Geometric} & \frac{\beta}{1+\beta} & 0\end{array}`
    ],
    where: [
      [String.raw`a`, "\\(a=0\\): Poisson; \\(a<0\\): binomial; \\(a>0\\): negative binomial (geometric if \\(b=0\\))"]
    ],
    note: String.raw`The sign of \(a\) tells you the distribution, then \(a\) and \(b\) give its parameters.`
  },
  {
    id: "thinning",
    title: String.raw`Thinning: losses to payments`,
    subtitle: "",
    formulas: [
      String.raw`\text{Poisson}(\lambda)\to\text{Poisson}\big(\lambda\,S(d)\big)`,
      String.raw`\text{Bin}(m,q)\to\text{Bin}\big(m,\,q\,S(d)\big),\qquad \text{NB}(r,\beta)\to\text{NB}\big(r,\,\beta\,S(d)\big)`
    ],
    where: [
      [String.raw`S(d)`, "probability a loss exceeds the deductible \\(d\\)"]
    ],
    note: String.raw`Only the parameter tied to the mean is multiplied by \(S(d)\): never \(m\) or \(r\). The distribution type stays the same.`
  },

  // ---------- (a, b, 1) class ----------
  {
    id: "ab1-truncated",
    title: String.raw`Zero-truncated distributions`,
    subtitle: "",
    formulas: [
      String.raw`p_k^{T}=\frac{p_k}{1-p_0},\quad k\ge 1`,
      String.raw`p_k=\left(a+\frac{b}{k}\right)p_{k-1}\ \text{ only for } k\ge 2`
    ],
    where: [
      [String.raw`p_k`, "probability under the ordinary (a, b, 0) distribution"],
      [String.raw`p_0`, "its probability of zero"],
      [String.raw`p_k^{T}`, "zero-truncated probability (zero is impossible)"]
    ],
    note: String.raw`Remove zero and rescale the rest so it sums to 1. The \((a,b,1)\) recursion starts at \(k=2\).`
  },
  {
    id: "ab1",
    title: String.raw`Zero-modified distributions`,
    subtitle: "",
    formulas: [
      String.raw`p_k^{M}=\left(1-p_0^{M}\right)\frac{p_k}{1-p_0},\quad k\ge 1`,
      String.raw`\mathrm{E}\big[N^{M}\big]=\frac{1-p_0^{M}}{1-p_0}\,\mathrm{E}[N]`
    ],
    where: [
      [String.raw`p_0^{M}`, "the new probability assigned to zero"],
      [String.raw`N^{M}`, "the zero-modified count"]
    ],
    note: String.raw`Overwrite \(P(N=0)\) with a new value and rescale every other probability proportionally. Link: zero-truncated is the case \(p_0^M=0\).`
  }
];
