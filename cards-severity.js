// FAM-S severity: continuous distributions for the SIZE of a loss, and how deductibles, limits and inflation reshape them.
// Card format: id, title, subtitle, formulas (display LaTeX), where (symbol, meaning), note.
// Inline math inside text uses \( ... \).
window.CARDS_SEVERITY = [
  // ---------- Exponential ----------
  {
    id: "exponential",
    title: String.raw`Exponential\((\theta)\): basics`,
    subtitle: "",
    formulas: [
      String.raw`f(x)=\frac{1}{\theta}\,e^{-x/\theta},\qquad S(x)=e^{-x/\theta}`,
      String.raw`\mathrm{E}[X]=\theta,\qquad \mathrm{Var}[X]=\theta^2`
    ],
    where: [
      [String.raw`\theta`, "mean (scale parameter)"],
      [String.raw`x`, "loss size, \\(x>0\\)"],
      [String.raw`S(x)`, "survival function, \\(P(X>x)=1-F(x)\\)"]
    ],
    note: String.raw`The most-used severity on the exam. Link: it is a gamma with \(\alpha=1\).`
  },
  {
    id: "exponential-moments",
    title: String.raw`Exponential: moments and limited mean`,
    subtitle: "",
    formulas: [
      String.raw`\mathrm{E}[X^k]=k!\,\theta^k\quad(\mathrm{E}[X^2]=2\theta^2)`,
      String.raw`\mathrm{E}[X\wedge d]=\theta\left(1-e^{-d/\theta}\right)`
    ],
    where: [
      [String.raw`k`, "moment order"],
      [String.raw`X\wedge d`, "loss capped at \\(d\\), i.e. \\(\\min(X,d)\\)"]
    ],
    note: String.raw`Raw moments are factorials times powers of \(\theta\). The limited mean is \(\theta\) times the probability the loss is below \(d\).`
  },
  {
    id: "exponential-deductible",
    title: String.raw`Exponential: after a deductible`,
    subtitle: "",
    formulas: [
      String.raw`(X-d\mid X>d)\sim\text{Exponential}(\theta)`,
      String.raw`e(d)=\theta`
    ],
    where: [
      [String.raw`d`, "deductible"],
      [String.raw`e(d)`, "mean excess loss: average amount above \\(d\\), given the loss exceeds \\(d\\)"]
    ],
    note: String.raw`Memoryless: whatever is left above the deductible is the same exponential, so the mean per payment is \(\theta\) and the variance per payment is \(\theta^2\).`
  },
  {
    id: "exponential-var-tvar",
    title: String.raw`Exponential: VaR and TVaR`,
    subtitle: "",
    formulas: [
      String.raw`\mathrm{VaR}_p=-\theta\ln(1-p)`,
      String.raw`\mathrm{TVaR}_p=\mathrm{VaR}_p+\theta`
    ],
    where: [
      [String.raw`p`, "percentile level, e.g. 0.95"],
      [String.raw`\mathrm{VaR}_p`, "the \\(100p\\)-th percentile of the loss"],
      [String.raw`\mathrm{TVaR}_p`, "average loss given it exceeds \\(\\mathrm{VaR}_p\\)"]
    ],
    note: String.raw`Solve \(S(x)=1-p\) for VaR. Link: in general \(\mathrm{TVaR}_p=\mathrm{VaR}_p+e(\mathrm{VaR}_p)\), and for the exponential \(e(\cdot)=\theta\).`
  },

  // ---------- Pareto ----------
  {
    id: "pareto",
    title: String.raw`Pareto\((\alpha,\theta)\): basics`,
    subtitle: "",
    formulas: [
      String.raw`f(x)=\frac{\alpha\,\theta^{\alpha}}{(x+\theta)^{\alpha+1}},\quad x>0`,
      String.raw`S(x)=\left(\frac{\theta}{x+\theta}\right)^{\alpha}`
    ],
    where: [
      [String.raw`\alpha`, "shape (tail) parameter"],
      [String.raw`\theta`, "scale parameter"]
    ],
    note: String.raw`The second workhorse severity, with a heavy tail. Moments \(\mathrm{E}[X^k]\) only exist for \(k<\alpha\).`
  },
  {
    id: "pareto-moments",
    title: String.raw`Pareto: mean and variance`,
    subtitle: "",
    formulas: [
      String.raw`\mathrm{E}[X]=\frac{\theta}{\alpha-1},\qquad \mathrm{E}[X^2]=\frac{2\theta^2}{(\alpha-1)(\alpha-2)}`,
      String.raw`\mathrm{Var}[X]=(\mathrm{E}[X])^2\cdot\frac{\alpha}{\alpha-2}`
    ],
    where: [
      [String.raw`\alpha`, "must exceed 1 for a mean, 2 for a variance"]
    ],
    note: String.raw`The variance shortcut saves a step: square the mean and multiply by \(\alpha/(\alpha-2)\).`
  },
  {
    id: "pareto-limited",
    title: String.raw`Pareto: limited and excess means`,
    subtitle: "",
    formulas: [
      String.raw`\mathrm{E}[X\wedge d]=\frac{\theta}{\alpha-1}\left[1-\left(\frac{\theta}{d+\theta}\right)^{\alpha-1}\right]`,
      String.raw`\mathrm{E}[(X-d)_+]=\frac{\theta}{\alpha-1}\left(\frac{\theta}{d+\theta}\right)^{\alpha-1}`
    ],
    where: [
      [String.raw`X\wedge d`, "loss capped at \\(d\\)"],
      [String.raw`(X-d)_+`, "amount above \\(d\\), or 0 if the loss is below \\(d\\)"]
    ],
    note: String.raw`The two pieces split the mean at \(d\). Link: \(\mathrm{E}[X\wedge d]+\mathrm{E}[(X-d)_+]=\mathrm{E}[X]\) for every distribution.`
  },
  {
    id: "pareto-deductible",
    title: String.raw`Pareto: after a deductible`,
    subtitle: "",
    formulas: [
      String.raw`(X-d\mid X>d)\sim\text{Pareto}(\alpha,\ \theta+d)`,
      String.raw`e(d)=\frac{d+\theta}{\alpha-1}`
    ],
    where: [
      [String.raw`e(d)`, "mean excess loss over \\(d\\)"]
    ],
    note: String.raw`The leftover loss is still Pareto: just add \(d\) to \(\theta\). Unlike the exponential, the mean excess grows with \(d\).`
  },

  // ---------- Single-parameter Pareto ----------
  {
    id: "sp-pareto",
    title: String.raw`Single-parameter Pareto\((\alpha,\theta)\)`,
    subtitle: "",
    formulas: [
      String.raw`f(x)=\frac{\alpha\,\theta^{\alpha}}{x^{\alpha+1}},\qquad S(x)=\left(\frac{\theta}{x}\right)^{\alpha},\quad x>\theta`
    ],
    where: [
      [String.raw`\alpha`, "shape parameter (the only true parameter)"],
      [String.raw`\theta`, "known minimum possible loss"]
    ],
    note: String.raw`Losses start at \(\theta\) instead of 0. Shows up in MLE questions where \(\theta\) is fixed and you estimate \(\alpha\).`
  },
  {
    id: "sp-pareto-moments",
    title: String.raw`Single-parameter Pareto: moments`,
    subtitle: "",
    formulas: [
      String.raw`\mathrm{E}[X]=\frac{\alpha\theta}{\alpha-1},\qquad \mathrm{E}[X^2]=\frac{\alpha\theta^2}{\alpha-2}`,
      String.raw`\mathrm{E}[X\wedge d]=\frac{\alpha\theta}{\alpha-1}-\frac{\theta^{\alpha}}{(\alpha-1)\,d^{\alpha-1}}`
    ],
    where: [
      [String.raw`d`, "cap or deductible, with \\(d\\ge\\theta\\)"]
    ],
    note: String.raw`The limited mean is the full mean minus the expected excess above \(d\).`
  },

  // ---------- Uniform ----------
  {
    id: "uniform",
    title: String.raw`Uniform\((a,b)\): basics`,
    subtitle: "",
    formulas: [
      String.raw`f(x)=\frac{1}{b-a},\qquad F(x)=\frac{x-a}{b-a},\quad a<x<b`,
      String.raw`\mathrm{E}[X]=\frac{a+b}{2},\qquad \mathrm{Var}[X]=\frac{(b-a)^2}{12}`
    ],
    where: [
      [String.raw`a`, "lower bound"],
      [String.raw`b`, "upper bound"]
    ],
    note: String.raw`Shows up constantly as a severity and in grouped data. Probabilities are just lengths divided by \(b-a\).`
  },
  {
    id: "uniform-moments",
    title: String.raw`Uniform: second moment and limited mean`,
    subtitle: "",
    formulas: [
      String.raw`\mathrm{E}[X^2]=\frac{a^2+ab+b^2}{3}`,
      String.raw`X\sim U(0,b):\quad \mathrm{E}[X\wedge d]=d-\frac{d^2}{2b}`
    ],
    where: [
      [String.raw`d`, "cap (policy limit or deductible)"]
    ],
    note: String.raw`The limited mean is the area under the survival function from 0 to \(d\).`
  },
  {
    id: "uniform-deductible",
    title: String.raw`Uniform: after a deductible`,
    subtitle: "",
    formulas: [
      String.raw`(X\mid X>d)\sim U(d,\,b)`,
      String.raw`(X-d\mid X>d)\sim U(0,\,b-d)`
    ],
    where: [
      [String.raw`d`, "deductible, with \\(a<d<b\\)"]
    ],
    note: String.raw`A deductible on a uniform leaves a smaller uniform, which makes per-payment means and variances quick.`
  },

  // ---------- Gamma ----------
  {
    id: "gamma",
    title: String.raw`Gamma\((\alpha,\theta)\): basics`,
    subtitle: "",
    formulas: [
      String.raw`f(x)=\frac{x^{\alpha-1}e^{-x/\theta}}{\Gamma(\alpha)\,\theta^{\alpha}},\quad x>0`,
      String.raw`\mathrm{E}[X]=\alpha\theta,\qquad \mathrm{Var}[X]=\alpha\theta^2`
    ],
    where: [
      [String.raw`\alpha`, "shape parameter"],
      [String.raw`\theta`, "scale parameter"],
      [String.raw`\Gamma(\alpha)`, "gamma function, equal to \\((\\alpha-1)!\\) for whole-number \\(\\alpha\\)"]
    ],
    note: String.raw`A flexible right-skewed severity. Link: the exponential is the \(\alpha=1\) case.`
  },
  {
    id: "gamma-moments",
    title: String.raw`Gamma: moments and MGF`,
    subtitle: "",
    formulas: [
      String.raw`\mathrm{E}[X^k]=\theta^k\,\alpha(\alpha+1)\cdots(\alpha+k-1)`,
      String.raw`M(t)=(1-\theta t)^{-\alpha}`
    ],
    where: [
      [String.raw`\alpha(\alpha+1)\cdots(\alpha+k-1)`, "product of \\(k\\) terms starting at \\(\\alpha\\), each 1 bigger"],
      [String.raw`M(t)`, "moment generating function \\(\\mathrm{E}[e^{tX}]\\)"]
    ],
    note: String.raw`E.g. \(\mathrm{E}[X^2]=\alpha(\alpha+1)\theta^2\). The MGF makes sums of gammas with the same \(\theta\) easy: add the \(\alpha\)'s.`
  },
  {
    id: "gamma-sum-exponentials",
    title: String.raw`Gamma as a sum of exponentials`,
    subtitle: "",
    formulas: [
      String.raw`X_i \overset{\text{iid}}{\sim}\text{Exp}(\theta)\ \Rightarrow\ \sum_{i=1}^{n} X_i \sim \text{Gamma}(n,\theta)`,
      String.raw`\alpha=2:\quad S(x)=e^{-x/\theta}\left(1+\frac{x}{\theta}\right)`
    ],
    where: [
      [String.raw`\sum_{i=1}^{n} X_i`, "the total of \\(n\\) independent exponential losses"],
      [String.raw`\text{iid}`, "independent and identically distributed"]
    ],
    note: String.raw`For whole-number \(\alpha\) the survival function is a Poisson-style sum, and \(\alpha=2\) is the one that comes up most.`
  },

  // ---------- Lognormal and normal ----------
  {
    id: "lognormal",
    title: String.raw`Lognormal\((\mu,\sigma)\): basics`,
    subtitle: "",
    formulas: [
      String.raw`\ln X\sim N(\mu,\sigma^2)`,
      String.raw`F(x)=\Phi\!\left(\frac{\ln x-\mu}{\sigma}\right)`
    ],
    where: [
      [String.raw`\mu`, "mean of \\(\\ln X\\)"],
      [String.raw`\sigma`, "standard deviation of \\(\\ln X\\)"],
      [String.raw`\Phi`, "standard normal CDF"]
    ],
    note: String.raw`Every lognormal probability is a normal probability after taking logs.`
  },
  {
    id: "lognormal-moments",
    title: String.raw`Lognormal: moments`,
    subtitle: "",
    formulas: [
      String.raw`\mathrm{E}[X^k]=e^{k\mu+k^2\sigma^2/2}`,
      String.raw`\mathrm{Var}[X]=e^{2\mu+\sigma^2}\left(e^{\sigma^2}-1\right)`
    ],
    where: [
      [String.raw`k`, "moment order: \\(\\mathrm{E}[X]=e^{\\mu+\\sigma^2/2}\\), \\(\\mathrm{E}[X^2]=e^{2\\mu+2\\sigma^2}\\)"]
    ],
    note: String.raw`It is the normal MGF evaluated at \(k\): \(\mathrm{E}[X^k]=\mathrm{E}[e^{k\ln X}]\).`
  },
  {
    id: "lognormal-limited",
    title: String.raw`Lognormal: limited expected value`,
    subtitle: "",
    formulas: [
      String.raw`\begin{aligned}\mathrm{E}[X\wedge x]&=e^{\mu+\sigma^2/2}\,\Phi\!\left(\frac{\ln x-\mu-\sigma^2}{\sigma}\right)\\ &\quad+x\left[1-\Phi\!\left(\frac{\ln x-\mu}{\sigma}\right)\right]\end{aligned}`
    ],
    where: [
      [String.raw`x`, "the cap (limit)"],
      [String.raw`\Phi`, "standard normal CDF"]
    ],
    note: String.raw`The second term is the cap times the probability of exceeding it. It appears in several SOA sample solutions (retained claims, maximum covered loss), so know it even though it is in the tables.`
  },
  {
    id: "normal",
    title: String.raw`Standard normal`,
    subtitle: "",
    formulas: [
      String.raw`Z=\frac{X-\mu}{\sigma}\sim N(0,1)`,
      String.raw`\Phi(-z)=1-\Phi(z)`
    ],
    where: [
      [String.raw`\mu`, "mean of \\(X\\)"],
      [String.raw`\sigma`, "standard deviation of \\(X\\)"],
      [String.raw`\Phi`, "standard normal CDF"]
    ],
    note: String.raw`Standardize, then use the table. Symmetry handles negative \(z\)'s. Used in normal approximations to aggregate losses and in VaR/TVaR.`
  },
  {
    id: "normal-z-values",
    title: String.raw`\(z\)-values to know`,
    subtitle: "",
    formulas: [
      String.raw`\begin{array}{c|c} p & z_p\\ \hline 0.90 & 1.282\\ 0.95 & 1.645\\ 0.975 & 1.960\\ 0.99 & 2.326\\ 0.995 & 2.576\end{array}`
    ],
    where: [
      [String.raw`z_p`, "the value with \\(\\Phi(z_p)=p\\)"]
    ],
    note: String.raw`Two-sided 90%, 95% and 99% intervals use 1.645, 1.960 and 2.576 (common in credibility).`
  },

  // ---------- Inflation ----------
  {
    id: "scaling",
    title: String.raw`Inflation: scale parameters`,
    subtitle: "",
    formulas: [
      String.raw`\begin{array}{ll}
        \text{Exponential} & \theta\to c\theta\\
        \text{Pareto, SP Pareto} & \theta\to c\theta,\ \alpha \text{ same}\\
        \text{Gamma} & \theta\to c\theta,\ \alpha \text{ same}\\
        \text{Weibull} & \theta\to c\theta,\ \tau \text{ same}
      \end{array}`
    ],
    where: [
      [String.raw`c`, "inflation factor, \\(1+r\\) (e.g. 1.10 for 10% inflation)"],
      [String.raw`\tau`, "Weibull shape parameter"]
    ],
    note: String.raw`Inflation multiplies only the scale parameter \(\theta\). Shape parameters never change.`
  },
  {
    id: "scaling-other",
    title: String.raw`Inflation: uniform and lognormal`,
    subtitle: "",
    formulas: [
      String.raw`\text{Uniform: }(a,b)\to(ca,\,cb)`,
      String.raw`\text{Lognormal: }\mu\to\mu+\ln c,\ \sigma \text{ same}`
    ],
    where: [
      [String.raw`c`, "inflation factor \\(1+r\\)"]
    ],
    note: String.raw`Lognormal shifts \(\mu\) because \(\ln(cX)=\ln c+\ln X\). Inflate the distribution first, then apply the unchanged deductible and limit.`
  }
];
