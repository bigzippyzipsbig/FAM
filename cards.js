// FAM-S distribution flashcards.
// Each card: id, front (title + subtitle), formulas (display LaTeX), where (symbol, meaning), note.
// Inline math inside text uses \( ... \).
window.CARDS = [
  {
    id: "exponential",
    title: String.raw`Exponential\((\theta)\)`,
    subtitle: "PDF, CDF and survival, mean, variance, key shortcuts",
    formulas: [
      String.raw`f(x)=\frac{1}{\theta}\,e^{-x/\theta},\quad x>0`,
      String.raw`F(x)=1-e^{-x/\theta},\qquad S(x)=e^{-x/\theta}`,
      String.raw`\mathrm{E}[X]=\theta,\qquad \mathrm{Var}[X]=\theta^2`,
      String.raw`\mathrm{E}[X^2]=2\theta^2,\qquad \mathrm{E}[X^k]=k!\,\theta^k`,
      String.raw`\mathrm{E}[X\wedge d]=\theta\left(1-e^{-d/\theta}\right)`,
      String.raw`(X-d\mid X>d)\sim\text{Exponential}(\theta)`,
      String.raw`e(d)=\theta`,
      String.raw`\mathrm{VaR}_p=-\theta\ln(1-p)`,
      String.raw`\mathrm{TVaR}_p=\mathrm{VaR}_p+\theta`
    ],
    where: [
      [String.raw`\theta`, "mean (scale parameter)"],
      [String.raw`x`, "loss size"],
      [String.raw`d`, "deductible"],
      [String.raw`X\wedge d`, "loss capped at \\(d\\), i.e. \\(\\min(X,d)\\)"],
      [String.raw`e(d)`, "mean excess loss: average amount above \\(d\\), given the loss exceeds \\(d\\)"],
      [String.raw`p`, "percentile level for VaR/TVaR"],
      [String.raw`k`, "moment order"]
    ],
    note: String.raw`The most-used severity on the exam. Memorylessness means a deductible just removes the losses below \(d\); whatever is left over is again exponential with the same mean \(\theta\), so the variance per payment is \(\theta^2\).`
  },
  {
    id: "pareto",
    title: String.raw`Pareto\((\alpha,\theta)\)`,
    subtitle: "Two-parameter Pareto: PDF, survival, moments, limited and excess formulas",
    formulas: [
      String.raw`f(x)=\frac{\alpha\,\theta^{\alpha}}{(x+\theta)^{\alpha+1}},\quad x>0`,
      String.raw`S(x)=\left(\frac{\theta}{x+\theta}\right)^{\alpha}`,
      String.raw`\mathrm{E}[X]=\frac{\theta}{\alpha-1}`,
      String.raw`\mathrm{E}[X^2]=\frac{2\theta^2}{(\alpha-1)(\alpha-2)}`,
      String.raw`\mathrm{Var}[X]=(\mathrm{E}[X])^2\cdot\frac{\alpha}{\alpha-2}`,
      String.raw`\mathrm{E}[X\wedge d]=\frac{\theta}{\alpha-1}\left[1-\left(\frac{\theta}{d+\theta}\right)^{\alpha-1}\right]`,
      String.raw`\mathrm{E}[(X-d)_+]=\frac{\theta}{\alpha-1}\left(\frac{\theta}{d+\theta}\right)^{\alpha-1}`,
      String.raw`(X-d\mid X>d)\sim\text{Pareto}(\alpha,\ \theta+d)`,
      String.raw`e(d)=\frac{d+\theta}{\alpha-1}`
    ],
    where: [
      [String.raw`\alpha`, "shape (tail) parameter"],
      [String.raw`\theta`, "scale parameter"],
      [String.raw`d`, "deductible"],
      [String.raw`(X-d)_+`, "amount above \\(d\\), or 0 if the loss is below \\(d\\)"],
      [String.raw`e(d)`, "mean excess loss over \\(d\\)"]
    ],
    note: String.raw`The second workhorse severity. After a deductible \(d\), the leftover loss is still Pareto: just add \(d\) to \(\theta\). Moments only exist for \(k<\alpha\), which is why it is the heavy-tailed choice.`
  },
  {
    id: "sp-pareto",
    title: String.raw`Single-parameter Pareto\((\alpha,\theta)\)`,
    subtitle: "PDF, survival, mean, second moment, limited mean",
    formulas: [
      String.raw`f(x)=\frac{\alpha\,\theta^{\alpha}}{x^{\alpha+1}},\quad x>\theta`,
      String.raw`S(x)=\left(\frac{\theta}{x}\right)^{\alpha},\quad x>\theta`,
      String.raw`\mathrm{E}[X]=\frac{\alpha\theta}{\alpha-1},\qquad \mathrm{E}[X^2]=\frac{\alpha\theta^2}{\alpha-2}`,
      String.raw`\mathrm{E}[X\wedge d]=\frac{\alpha\theta}{\alpha-1}-\frac{\theta^{\alpha}}{(\alpha-1)\,d^{\alpha-1}}`
    ],
    where: [
      [String.raw`\alpha`, "shape parameter (the only true parameter)"],
      [String.raw`\theta`, "known minimum possible loss"],
      [String.raw`d`, "cap or deductible, with \\(d\\ge\\theta\\)"]
    ],
    note: String.raw`A two-parameter Pareto shifted right by \(\theta\), so losses start at \(\theta\) instead of 0. Shows up in MLE questions where \(\theta\) is fixed and you estimate \(\alpha\).`
  },
  {
    id: "uniform",
    title: String.raw`Uniform\((a,b)\)`,
    subtitle: "Continuous uniform: PDF, CDF, mean, variance, limited mean",
    formulas: [
      String.raw`f(x)=\frac{1}{b-a},\quad a<x<b`,
      String.raw`F(x)=\frac{x-a}{b-a}`,
      String.raw`\mathrm{E}[X]=\frac{a+b}{2},\qquad \mathrm{Var}[X]=\frac{(b-a)^2}{12}`,
      String.raw`\mathrm{E}[X^2]=\frac{a^2+ab+b^2}{3}`,
      String.raw`X\sim U(0,b):\quad \mathrm{E}[X\wedge d]=d-\frac{d^2}{2b}`,
      String.raw`(X\mid X>d)\sim U(d,\,b)`,
      String.raw`(X-d\mid X>d)\sim U(0,\,b-d)`
    ],
    where: [
      [String.raw`a`, "lower bound"],
      [String.raw`b`, "upper bound"],
      [String.raw`d`, "deductible"]
    ],
    note: String.raw`Shows up constantly as a severity and in grouped data. A deductible on a uniform leaves a smaller uniform, which makes per-payment calculations quick.`
  },
  {
    id: "gamma",
    title: String.raw`Gamma\((\alpha,\theta)\)`,
    subtitle: "PDF, mean, variance, moments, link to exponential",
    formulas: [
      String.raw`f(x)=\frac{x^{\alpha-1}e^{-x/\theta}}{\Gamma(\alpha)\,\theta^{\alpha}},\quad x>0`,
      String.raw`\mathrm{E}[X]=\alpha\theta,\qquad \mathrm{Var}[X]=\alpha\theta^2`,
      String.raw`\mathrm{E}[X^k]=\theta^k\,\alpha(\alpha+1)\cdots(\alpha+k-1)`,
      String.raw`M(t)=(1-\theta t)^{-\alpha}`,
      String.raw`X_i \overset{\text{iid}}{\sim}\text{Exponential}(\theta)`,
      String.raw`\Rightarrow\ \sum_{i=1}^{n} X_i \sim \text{Gamma}(n,\theta)`,
      String.raw`\alpha=2:\quad S(x)=e^{-x/\theta}\left(1+\frac{x}{\theta}\right)`
    ],
    where: [
      [String.raw`\alpha`, "shape parameter"],
      [String.raw`\theta`, "scale parameter"],
      [String.raw`\Gamma(\alpha)`, "gamma function, equal to \\((\\alpha-1)!\\) for whole-number \\(\\alpha\\)"],
      [String.raw`M(t)`, "moment generating function"],
      [String.raw`\sum_{i=1}^{n} X_i`, "the total of \\(n\\) independent exponential losses"]
    ],
    note: String.raw`The exponential is the \(\alpha=1\) case. For whole-number \(\alpha\) the CDF reduces to Poisson-style sums, and \(\alpha=2\) is the one that comes up most.`
  },
  {
    id: "lognormal",
    title: String.raw`Lognormal\((\mu,\sigma)\)`,
    subtitle: "Definition, CDF, moments, limited expected value",
    formulas: [
      String.raw`\ln X\sim N(\mu,\sigma^2)`,
      String.raw`F(x)=\Phi\!\left(\frac{\ln x-\mu}{\sigma}\right)`,
      String.raw`\mathrm{E}[X^k]=e^{k\mu+k^2\sigma^2/2}`,
      String.raw`\mathrm{E}[X]=e^{\mu+\sigma^2/2},\qquad \mathrm{E}[X^2]=e^{2\mu+2\sigma^2}`,
      String.raw`\mathrm{Var}[X]=e^{2\mu+\sigma^2}\left(e^{\sigma^2}-1\right)`,
      String.raw`\begin{aligned}\mathrm{E}[X\wedge x]&=e^{\mu+\sigma^2/2}\,\Phi\!\left(\frac{\ln x-\mu-\sigma^2}{\sigma}\right)\\ &\quad+x\left[1-\Phi\!\left(\frac{\ln x-\mu}{\sigma}\right)\right]\end{aligned}`
    ],
    where: [
      [String.raw`\mu`, "mean of \\(\\ln X\\)"],
      [String.raw`\sigma`, "standard deviation of \\(\\ln X\\)"],
      [String.raw`\Phi`, "standard normal CDF"],
      [String.raw`x`, "the cap (limit) in \\(\\mathrm{E}[X\\wedge x]\\)"]
    ],
    note: String.raw`Every lognormal probability is a normal probability after taking logs. The \(\mathrm{E}[X\wedge x]\) formula appears in several SOA sample solutions (retained claims, maximum covered loss), so know it cold even though it is in the tables.`
  },
  {
    id: "normal",
    title: String.raw`Standard normal`,
    subtitle: "Standardization and the z-values to know by heart",
    formulas: [
      String.raw`Z=\frac{X-\mu}{\sigma}\sim N(0,1)`,
      String.raw`\phi(z)=\frac{1}{\sqrt{2\pi}}\,e^{-z^2/2}`,
      String.raw`\Phi(-z)=1-\Phi(z)`,
      String.raw`\begin{array}{c|c} p & z_p\\ \hline 0.90 & 1.282\\ 0.95 & 1.645\\ 0.975 & 1.960\\ 0.99 & 2.326\\ 0.995 & 2.576\end{array}`
    ],
    where: [
      [String.raw`\mu`, "mean of \\(X\\)"],
      [String.raw`\sigma`, "standard deviation of \\(X\\)"],
      [String.raw`\phi`, "standard normal density"],
      [String.raw`\Phi`, "standard normal CDF"],
      [String.raw`z_p`, "the value with \\(\\Phi(z_p)=p\\)"]
    ],
    note: String.raw`Used in normal approximations to aggregate losses, in credibility (90%, 95%, 99% intervals use 1.645, 1.960, 2.576), and in VaR/TVaR and option pricing.`
  },
  {
    id: "poisson",
    title: String.raw`Poisson\((\lambda)\)`,
    subtitle: "PMF, mean, variance, (a, b, 0) values, sums and thinning",
    formulas: [
      String.raw`p_k=\frac{e^{-\lambda}\lambda^{k}}{k!},\quad k=0,1,2,\dots`,
      String.raw`\mathrm{E}[N]=\mathrm{Var}[N]=\lambda`,
      String.raw`a=0,\qquad b=\lambda`,
      String.raw`N_1+N_2\sim\text{Poisson}(\lambda_1+\lambda_2)`,
      String.raw`\text{payments: Poisson}\big(\lambda\,S(d)\big)`
    ],
    where: [
      [String.raw`\lambda`, "expected number of events"],
      [String.raw`k`, "the count"],
      [String.raw`p_k`, "\\(P(N=k)\\)"],
      [String.raw`a,\ b`, "(a, b, 0) recursion parameters"],
      [String.raw`N_1,\ N_2`, "independent Poisson counts"],
      [String.raw`S(d)`, "probability a loss exceeds the deductible \\(d\\)"]
    ],
    note: String.raw`The default frequency model. Mean equal to variance is the fingerprint. Thinning takes you straight from the number of losses to the number of payments.`
  },
  {
    id: "binomial",
    title: String.raw`Binomial\((m,q)\)`,
    subtitle: "PMF, mean, variance, (a, b, 0) values",
    formulas: [
      String.raw`p_k=\binom{m}{k}q^{k}(1-q)^{m-k},\quad k=0,\dots,m`,
      String.raw`\mathrm{E}[N]=mq`,
      String.raw`\mathrm{Var}[N]=mq(1-q)<\mathrm{E}[N]`,
      String.raw`a=-\frac{q}{1-q},\qquad b=\frac{(m+1)q}{1-q}`,
      String.raw`\text{payments: Binomial}\big(m,\ q\,S(d)\big)`
    ],
    where: [
      [String.raw`m`, "number of trials"],
      [String.raw`q`, "success probability per trial"],
      [String.raw`\binom{m}{k}`, "number of ways to choose \\(k\\) of the \\(m\\) trials"]
    ],
    note: String.raw`Frequency with a cap on the number of claims. A negative \(a\), and variance below the mean, identify it.`
  },
  {
    id: "negbin",
    title: String.raw`Negative binomial\((r,\beta)\)`,
    subtitle: "PMF, mean, variance, (a, b, 0) values, Poisson–gamma mixture",
    formulas: [
      String.raw`p_0=(1+\beta)^{-r}`,
      String.raw`p_k=\binom{r+k-1}{k}\left(\frac{1}{1+\beta}\right)^{r}\left(\frac{\beta}{1+\beta}\right)^{k}`,
      String.raw`\mathrm{E}[N]=r\beta`,
      String.raw`\mathrm{Var}[N]=r\beta(1+\beta)>\mathrm{E}[N]`,
      String.raw`a=\frac{\beta}{1+\beta},\qquad b=\frac{(r-1)\beta}{1+\beta}`,
      String.raw`\text{payments: NB}\big(r,\ \beta\,S(d)\big)`,
      String.raw`\begin{aligned}&N\mid\lambda\sim\text{Poisson}(\lambda)\\ &\lambda\sim\text{Gamma}(\alpha,\theta)\\ \Rightarrow\ &N\sim\text{NB}(r=\alpha,\ \beta=\theta)\end{aligned}`
    ],
    where: [
      [String.raw`r`, "shape parameter"],
      [String.raw`\beta`, "scale parameter (tables use \\(\\beta\\), not \\(p\\))"],
      [String.raw`\lambda`, "a Poisson mean that itself varies from insured to insured"]
    ],
    note: String.raw`Frequency with extra spread. A positive \(a\), and variance above the mean, identify it. Thinning changes \(\beta\), never \(r\).`
  },
  {
    id: "geometric",
    title: String.raw`Geometric\((\beta)\)`,
    subtitle: "PMF, mean, variance, memoryless property",
    formulas: [
      String.raw`p_k=\frac{\beta^{k}}{(1+\beta)^{k+1}},\quad k=0,1,\dots`,
      String.raw`\mathrm{E}[N]=\beta,\qquad \mathrm{Var}[N]=\beta(1+\beta)`,
      String.raw`a=\frac{\beta}{1+\beta},\qquad b=0\quad(\text{NB with } r=1)`,
      String.raw`P(N\ge n+k\mid N\ge n)=P(N\ge k)`
    ],
    where: [
      [String.raw`\beta`, "mean number of events"],
      [String.raw`n,\ k`, "counts"]
    ],
    note: String.raw`The discrete twin of the exponential. Recognize it from \(b=0\) in the recursion.`
  },
  {
    id: "ab0",
    title: String.raw`The \((a,b,0)\) class`,
    subtitle: "Recursion and how to identify the distribution",
    formulas: [
      String.raw`\frac{p_k}{p_{k-1}}=a+\frac{b}{k},\quad k=1,2,\dots`,
      String.raw`\frac{k\,p_k}{p_{k-1}}=ak+b\quad(\text{linear in } k)`,
      String.raw`\begin{array}{ll} a=0 & \text{Poisson } (b=\lambda)\\ a<0 & \text{Binomial}\\ a>0 & \text{Negative binomial}\\ a>0,\ b=0 & \text{Geometric}\end{array}`,
      String.raw`\mathrm{E}[N]=\frac{a+b}{1-a},\qquad \mathrm{Var}[N]=\frac{a+b}{(1-a)^2}`
    ],
    where: [
      [String.raw`p_k`, "\\(P(N=k)\\)"],
      [String.raw`a,\ b`, "constants that pin down the distribution and its parameters"]
    ],
    note: String.raw`If a problem gives a ratio of consecutive probabilities, match it to \(a+b/k\), read off \(a\) and \(b\), and you know the distribution and its parameters.`
  },
  {
    id: "ab1",
    title: String.raw`The \((a,b,1)\) class`,
    subtitle: "Zero-truncated and zero-modified probabilities and mean",
    formulas: [
      String.raw`p_k^{T}=\frac{p_k}{1-p_0},\quad k\ge 1`,
      String.raw`p_k^{M}=\left(1-p_0^{M}\right)\frac{p_k}{1-p_0},\quad k\ge 1`,
      String.raw`\mathrm{E}\big[N^{M}\big]=\frac{1-p_0^{M}}{1-p_0}\,\mathrm{E}[N]`,
      String.raw`p_k=\left(a+\frac{b}{k}\right)p_{k-1}\ \text{ holds only for } k\ge 2`
    ],
    where: [
      [String.raw`p_k`, "probability under the ordinary (a, b, 0) distribution"],
      [String.raw`p_0`, "its probability of zero"],
      [String.raw`p_k^{T}`, "zero-truncated probability (zero is impossible)"],
      [String.raw`p_k^{M}`, "zero-modified probability"],
      [String.raw`p_0^{M}`, "the new probability assigned to zero"],
      [String.raw`N^{M}`, "the zero-modified count"]
    ],
    note: String.raw`Overwrite \(P(N=0)\) with a new value and rescale every other probability proportionally so everything still sums to 1.`
  },
  {
    id: "scaling",
    title: String.raw`Scaling and inflation`,
    subtitle: "How each distribution changes when losses are multiplied by \\(c=1+r\\)",
    formulas: [
      String.raw`\begin{array}{ll}
        \text{Exponential} & \theta\to c\theta\\
        \text{Pareto} & \theta\to c\theta,\ \alpha \text{ same}\\
        \text{SP Pareto} & \theta\to c\theta,\ \alpha \text{ same}\\
        \text{Gamma} & \theta\to c\theta,\ \alpha \text{ same}\\
        \text{Weibull} & \theta\to c\theta,\ \tau \text{ same}\\
        \text{Uniform} & (a,b)\to(ca,\,cb)\\
        \text{Lognormal} & \mu\to\mu+\ln c,\ \sigma \text{ same}
      \end{array}`
    ],
    where: [
      [String.raw`c`, "inflation factor, e.g. 1.10 for 10% inflation"],
      [String.raw`r`, "inflation rate"],
      [String.raw`\theta`, "scale parameter"],
      [String.raw`\tau`, "Weibull shape parameter (unchanged)"]
    ],
    note: String.raw`Inflation multiplies only the scale parameter. Inflate the distribution first, then apply the unchanged deductible and limit. This appears in many deductible, LER and next-year problems.`
  }
];
