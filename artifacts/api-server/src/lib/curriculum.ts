// AUTO-GENERATED from attached_assets/Clean_Probability_101_Course_Book.docx — verbatim curriculum content.

export interface Module {
  id: string;
  number: number;
  title: string;
  points: number;
  type: "discussion" | "essay" | "termpaper";
  objectives: string[];
  reading: string;
  assignment: string;
  modelResponse: string;
}

export const modules: Module[] = [
  {
    id: "d1",
    number: 1,
    title: "Discussion 1: Sample Spaces, Events, and the Axioms of Probability",
    points: 50,
    type: "discussion",
    objectives: [
      "Define a sample space, event, and probability measure, and recognize finite, countably infinite, and uncountable sample spaces.",
      "Apply the three Kolmogorov axioms and the inclusion–exclusion formula to compute probabilities of compound events.",
    ],
    reading: `Probability theory is the mathematical study of uncertainty. Before any calculation can be done, three things must be specified: what could happen, which collections of outcomes we care about, and how likely each collection is. These are the sample space, the events, and the probability measure.
The sample space, denoted S (or $\\Omega$), is the set of all possible outcomes of an experiment. For a single coin flip, S = {H, T}. For the roll of a six-sided die, S = {1, 2, 3, 4, 5, 6}. For the daily closing price of a stock, S is the set of non-negative real numbers. The sample space must be exhaustive (every possible outcome is listed) and mutually exclusive (no two outcomes can occur together).
An event is any subset of the sample space. The event "die shows an even number" is the subset {2, 4, 6}. The event "die shows a 7" is the empty set, which has probability zero. The event "die shows something" is the full sample space S, which has probability one.
The Three Axioms of Probability (Kolmogorov, 1933)
Non-negativity: For any event A, P(A) $\\geq$ 0. Probabilities are never negative.
Normalization: P(S) = 1. The probability that something in the sample space happens is certain.
Countable Additivity: If A1, A2, A3, ... are mutually exclusive events (no two can occur together), then $P(A1 \\cup A2 \\cup A3 \\cup ...)$ = P(A1) + P(A2) + P(A3) + ...
From these three axioms, every formula in elementary probability theory is derived. The whole edifice rests on them.
Immediate Consequences
P(empty set) = 0. The impossible event has probability zero.
P(not A) = 1 - P(A). The probability that A does not occur is one minus the probability that it does.
If A is a subset of B, then P(A) $\\leq$ P(B). A smaller set cannot have higher probability than a set that contains it.
For any event A, 0 $\\leq$ P(A) $\\leq$ 1.
Inclusion-Exclusion (two events): $P(A \\cup B)$ = P(A) + P(B) - $P(A \\cap B)$. The intersection is subtracted because outcomes in both A and B would otherwise be counted twice.`,
    assignment: `Assignment (50 points):

Specify a sample space for the following experiments. State whether each is finite, countably infinite, or uncountable: (a) flipping a coin three times; (b) counting the number of customers who enter a store on a given day; (c) measuring the time until the next earthquake of magnitude 6 or greater.
Two events A and B in a sample space satisfy P(A) = 0.4, P(B) = 0.5, $P(A \\cap B)$ = 0.2. Find: (a) $P(A \\cup B)$; (b) P(not A); (c) P(A but not B); (d) P(neither A nor B).
Construct an example showing that the inclusion-exclusion formula extends to three events: $P(A \\cup B \\cup C)$ = P(A) + P(B) + P(C) - $P(A \\cap B)$ - $P(A \\cap C)$ - $P(B \\cap C)$ + $P(A \\cap B \\cap C)$. Explain in words why each subtraction and addition is needed.`,
    modelResponse: `Model Response

Sample spaces:
(a) Three coin flips. S = {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}. This is finite, with exactly 2^3 = 8 outcomes. Each outcome is a sequence, and order matters here because the first flip is distinguishable from the second.
(b) Number of customers entering a store. S = {0, 1, 2, 3, ...}. This is countably infinite. There is no upper bound in principle, though in practice the number is bounded by something like 'people on earth.' We treat it as unbounded because the mathematics is cleaner and the probability of very large numbers is negligible.
(c) Time until next earthquake. S = [0, infinity). This is uncountable. Time is continuous, so we cannot list outcomes. Individual time values have probability zero; we work with intervals instead.
Probability calculations:
(a) $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.4 + 0.5 - 0.2 = 0.7.$$
(b) $$P(not A) = 1 - P(A) = 1 - 0.4 = 0.6.$$
(c) P(A but not B) = P(A) - $P(A \\cap B)$ = 0.4 - 0.2 = 0.2. The event 'A occurs' includes both 'A and B' and 'A but not B,' and these are mutually exclusive.
(d) $$P(neither A nor B) = P(not (A or B)) = 1 - P(A \\cup B) = 1 - 0.7 = 0.3.$$
Three-event inclusion-exclusion:
Imagine a survey of 100 people. Let A be the event 'owns a dog,' B the event 'owns a cat,' C the event 'owns a bird.' If we just add P(A) + P(B) + P(C), people who own multiple pets are counted multiple times. So we subtract the pairwise overlaps: $P(A \\cap B)$, $P(A \\cap C)$, $P(B \\cap C)$. But people who own all three have been added three times in the original sum and subtracted three times in the pairwise corrections, so they have been entirely removed. We add $P(A \\cap B \\cap C)$ back to restore them. The pattern is alternating addition and subtraction based on the size of the intersection, and it generalizes to any number of events.
Why This is a Model Response:
Correctly distinguishes finite, countably infinite, and uncountable sample spaces, with explanation of why the distinction matters.
Applies the axioms cleanly rather than reasoning informally.
Uses inclusion-exclusion correctly and derives the 'A but not B' formula from first principles instead of guessing.
Explains three-event inclusion-exclusion through a concrete counting example that makes the alternating sign pattern intuitive.
Recognizes that individual outcomes in a continuous sample space have probability zero, which is a foundational fact often missed.`,
  },
  {
    id: "e1",
    number: 2,
    title: "Essay 1: The Monty Hall Problem",
    points: 50,
    type: "essay",
    objectives: [
      "State the Monty Hall problem precisely, including all of the host's behaviors, and compute the probability of winning under both the stay and switch strategies.",
      "Use Bayes' theorem to confirm the intuitive answer and explain how the result depends on what the host knows.",
    ],
    reading: ``,
    assignment: `Assignment (50 points):

Write your essay for someone unfamiliar with probability theory, like a fellow student who has not taken this class. Clearly label each section.
Section 1 (30 points) - The Problem and Its Solution
State the Monty Hall problem precisely, including all of the host's assumed behaviors.
Calculate the probability of winning if you stay with your original choice.
Calculate the probability of winning if you switch.
Explain why the answer is counterintuitive to most people.
Section 2 (20 points) - Conditional Probability and Information
Show explicitly how Bayes' theorem yields the same answer as the intuitive solution.
Explain what changes if the host opens a door at random rather than knowingly avoiding the prize.`,
    modelResponse: `Model Response

Section 1: The Problem and Its Solution
The Monty Hall problem is named after the host of the American game show Let's Make a Deal. The setup is this: three doors stand before the contestant. Behind one is a car. Behind the other two are goats. The contestant picks a door, say Door 1. The host, who knows what is behind every door, then opens one of the other two doors to reveal a goat. He always opens a door with a goat behind it, and if the contestant initially picked the car, he chooses at random between the two remaining goat doors. After the goat is revealed, the host offers the contestant a choice: stay with the original door, or switch to the other unopened door. The question is: should the contestant switch?
The answer is yes, and it is not close. Switching wins the car two-thirds of the time. Staying wins one-third of the time.
Probability of winning by staying: when the contestant first chooses a door, the car is behind that door with probability 1/3 (one of three doors). Nothing the host does afterward changes the contestant's initial choice, so staying wins with probability 1/3.
Probability of winning by switching: with probability 2/3, the car is behind one of the other two doors. The host then reveals which of those two doors has a goat. The car must be behind whichever of those two doors he did not open. So switching takes the contestant directly to the car whenever the car was behind one of the other two doors, which is two-thirds of the time.
Why it is counterintuitive: most people see two unopened doors at the end and assume the probability is split 50-50 between them. This reasoning ignores the information the host's behavior provides. The host is not a neutral source of information. He always reveals a goat, and he chooses which door to open based on knowledge the contestant lacks. The asymmetry between the contestant's door (chosen blindly at the start) and the other door (selected by the informed host) is the entire source of the 2/3 advantage.
Section 2: Conditional Probability and Information
Let C1, C2, C3 denote the events 'car is behind door 1, 2, 3.' Assume the contestant initially picks Door 1. Let H3 denote the event 'host opens Door 3.' We want $P(C2 \\mid H3)$, the probability the car is behind Door 2 given that the host opened Door 3.
By Bayes' theorem:
$$P(C2 \\mid H3) = P(H3 \\mid C2) * P(C2) / P(H3)$$
The prior probabilities are P(C1) = P(C2) = P(C3) = 1/3. The conditional probabilities of the host's action are:
$P(H3 \\mid C1)$ = 1/2. If the car is behind the contestant's door, the host picks randomly between Doors 2 and 3.
$P(H3 \\mid C2)$ = 1. If the car is behind Door 2, the host must open Door 3, since he cannot open the contestant's door or the car's door.
$P(H3 \\mid C3)$ = 0. The host cannot open Door 3 if the car is behind Door 3.
By the law of total probability:
$$P(H3) = P(H3 \\mid C1)P(C1) + P(H3 \\mid C2)P(C2) + P(H3 \\mid C3)P(C3) = (1/2)(1/3) + (1)(1/3) + (0)(1/3) = 1/6 + 1/3 = 1/2.$$
$$Therefore: P(C2 \\mid H3) = (1)(1/3) / (1/2) = 2/3.$$
$$And: P(C1 \\mid H3) = (1/2)(1/3) / (1/2) = 1/3.$$
Bayes' theorem confirms the intuitive answer: switching to Door 2 wins with probability 2/3.
What changes if the host opens at random: now the host might reveal the car. Suppose the host opens Door 3 and it happens to show a goat. In this version, $P(H3 \\mid C1)$ = 1/2, $P(H3 \\mid C2)$ = 1/2, $P(H3 \\mid C3)$ = 1/2 (he opens each non-contestant door equally often, regardless of what is behind it). Now P(H3) = (1/2)(1/3) + (1/2)(1/3) + (1/2)(1/3) = 1/2. So $P(C2 \\mid H3)$ = (1/2)(1/3) / (1/2) = 1/3, and $P(C1 \\mid H3)$ = 1/3 also. The probabilities are equal: switching gives no advantage.
The lesson is that the value of switching depends entirely on what the host knows and how he uses that knowledge. The host's deliberate avoidance of the car is what transfers probability mass to the unopened non-contestant door. Strip away that intentionality, and the asymmetry disappears.`,
  },
  {
    id: "d2",
    number: 3,
    title: "Discussion 2: Conditional Probability and Independence",
    points: 50,
    type: "discussion",
    objectives: [
      "Compute conditional probabilities, apply the multiplication rule, and use the law of total probability.",
      "Distinguish independence from mutual exclusivity and identify when each applies.",
    ],
    reading: `Probability is a function of information. As new information arrives, probabilities must be updated. Conditional probability is the formal mechanism for this updating.
The conditional probability of A given B, written $P(A \\mid B)$, is defined as:
$P(A \\mid B)$ = $P(A \\cap B)$ / P(B), provided P(B) > 0.
In words: the probability of A, restricted to the cases where B has already occurred. The sample space is effectively narrowed from S to B, and we ask what fraction of B is also A.
Multiplication Rule
Rearranging the definition: $P(A \\cap B)$ = $P(A \\mid B)$ * P(B) = $P(B \\mid A)$ * P(A).
This generalizes: $P(A \\cap B \\cap C)$ = P(A) * $P(B \\mid A)$ * $P(C \\mid A \\cap B)$. Useful for sequential experiments where each step depends on what came before.
Independence
Two events A and B are independent if knowledge that B occurred does not change the probability of A. Formally:
A and B are independent if and only if $P(A \\cap B)$ = P(A) * P(B).
$$Equivalently, P(A \\mid B) = P(A), and P(B \\mid A) = P(B).$$
Independence is not the same as mutual exclusivity. Mutually exclusive events with nonzero probability are actually dependent in the strongest possible way: if one occurs, the other cannot. The everyday confusion of these two concepts is one of the most common errors in probability.
Law of Total Probability
If B1, B2, ..., Bn partition the sample space (mutually exclusive and exhaustive), then for any event A:
$$P(A) = P(A \\mid B1) * P(B1) + P(A \\mid B2) * P(B2) + ... + P(A \\mid Bn) * P(Bn).$$
This decomposes a complicated probability into a weighted sum of conditional probabilities. It is the workhorse formula behind Bayes' theorem and behind expected value calculations under uncertainty.`,
    assignment: `Assignment (50 points):

A factory has three machines producing widgets. Machine 1 produces 50% of widgets with a 2% defect rate. Machine 2 produces 30% of widgets with a 3% defect rate. Machine 3 produces 20% of widgets with a 5% defect rate. (a) What is the probability that a randomly chosen widget is defective? (b) Given that a widget is defective, what is the probability it came from Machine 3?
Two cards are drawn in succession from a standard 52-card deck without replacement. Let A be the event 'first card is a heart' and B the event 'second card is a heart.' (a) Find $P(A \\cap B)$. (b) Find P(B). (c) Are A and B independent? Explain.
Give an example of three events A, B, C that are pairwise independent (each pair is independent) but not mutually independent (the three together violate independence). Explain why this distinction matters.`,
    modelResponse: `Model Response

Defect problem:
(a) By the law of total probability:
$$P(defective) = P(def \\mid M1)P(M1) + P(def \\mid M2)P(M2) + P(def \\mid M3)P(M3)$$
= (0.02)(0.50) + (0.03)(0.30) + (0.05)(0.20)
= 0.010 + 0.009 + 0.010 = 0.029.
So 2.9% of widgets are defective overall.
(b) By Bayes' theorem:
$$P(M3 \\mid def) = P(def \\mid M3) * P(M3) / P(def) = (0.05)(0.20) / 0.029 = 0.010 / 0.029 = 0.345.$$
So about 34.5% of defective widgets come from Machine 3, even though Machine 3 produces only 20% of all widgets. The high defect rate inflates Machine 3's share of defective output.
Cards problem:
(a) $$P(A \\cap B) = P(A) * P(B \\mid A) = (13/52) * (12/51) = 156/2652 = 1/17.$$
(b) P(B) by total probability, conditioning on the first card: P(B) = $P(B \\mid A)$P(A) + $P(B \\mid not A)$P(not A) = (12/51)(13/52) + (13/51)(39/52) = (12 * 13 + 13 * 39) / (51 * 52) = 13(12 + 39) / 2652 = 13 * 51 / 2652 = 663/2652 = 1/4.
P(B) = 1/4, the same as P(A). This makes intuitive sense: before either card is drawn, each card has equal claim to being a heart.
(c) Are A and B independent? P(A) * P(B) = (1/4)(1/4) = 1/16. $P(A \\cap B)$ = 1/17. These are not equal, so A and B are not independent. Knowing the first card was a heart reduces the probability the second card is a heart (only 12 hearts remain out of 51 cards). The dependence is small but real.
Pairwise but not mutually independent:
Flip two fair coins. Let A be 'first coin is heads,' B be 'second coin is heads,' C be 'the two coins match.' Each has probability 1/2. Check pairwise independence:
$P(A \\cap B)$ = 1/4 = P(A)P(B). Independent.
$P(A \\cap C)$ = P(both heads) = 1/4 = P(A)P(C). Independent.
$P(B \\cap C)$ = P(both heads) = 1/4 = P(B)P(C). Independent.
But $P(A \\cap B \\cap C)$ = P(both heads) = 1/4, while P(A)P(B)P(C) = 1/8. Not equal. So the three events are not mutually independent.
Why this matters: any two of the events give no information about the third individually, but any two together completely determine the third. If you know A and B, then C is forced (if both coins are heads, they match). Pairwise independence is a strictly weaker condition than mutual independence, and statistical models that assume the wrong one produce wrong answers. This is the basis of many subtle errors in applied probability and statistics.
Why This is a Model Response:
Applies the law of total probability and Bayes' theorem correctly, with arithmetic shown step by step.
Notices the conceptual point that high defect rate at Machine 3 inflates its share of defective output beyond its production share.
Correctly handles dependence in card drawing without replacement, and uses total probability to find the marginal P(B).
Constructs the classic two-coins counterexample to show pairwise vs. mutual independence.
Connects the technical distinction to practical consequences in statistical modeling.`,
  },
  {
    id: "e2",
    number: 4,
    title: "Essay 2: Bayes' Theorem and Medical Testing",
    points: 50,
    type: "essay",
    objectives: [
      "Apply Bayes' theorem to a medical-testing scenario with low base rates and high test accuracy.",
      "Explain why a positive test result is often weaker evidence than people assume, and what changes when the prevalence shifts.",
    ],
    reading: ``,
    assignment: `Assignment (50 points):

Write your essay for someone unfamiliar with probability theory. Clearly label each section.
Section 1 (30 points) - Bayes' Theorem
State Bayes' theorem and explain each term: prior, likelihood, marginal, posterior.
Work through a medical testing example. Use a disease with prevalence 1% and a test with 99% sensitivity and 95% specificity.
Compute the probability a person actually has the disease given a positive test.
Explain why the answer is much lower than 99%.
Section 2 (20 points) - Updating with Sequential Evidence
Suppose the same person is tested a second time, independently, and tests positive again. Compute the updated probability they have the disease.
Explain the general principle that today's posterior is tomorrow's prior.`,
    modelResponse: `Model Response

Section 1: Bayes' Theorem
Bayes' theorem is the rule for revising a probability in light of new evidence. It states:
$$P(H \\mid E) = P(E \\mid H) * P(H) / P(E)$$
The four terms each have a name:
P(H) is the prior probability of the hypothesis H, before the evidence E is observed.
$P(E \\mid H)$ is the likelihood: the probability of observing E if the hypothesis H is true.
P(E) is the marginal probability of the evidence: how often E occurs, across all possible hypotheses.
$P(H \\mid E)$ is the posterior probability of H given E: the updated belief after seeing the evidence.
Bayes' theorem says: the new probability of H equals the old probability times an adjustment factor. The adjustment factor is the likelihood divided by the marginal. If the evidence is more likely under H than in general (likelihood greater than marginal), the probability of H goes up. If less likely, it goes down.
Medical testing example. Disease prevalence is 1%. The test has sensitivity 99% (probability of a positive test given the disease) and specificity 95% (probability of a negative test given no disease). Let D be 'has disease,' Pos be 'tests positive.'
Prior: P(D) = 0.01. P(not D) = 0.99.
Likelihood: $P(Pos \\mid D)$ = 0.99. $P(Pos \\mid not D)$ = 1 - 0.95 = 0.05 (the false positive rate).
Marginal probability of a positive test:
$$P(Pos) = P(Pos \\mid D)P(D) + P(Pos \\mid not D)P(not D) = (0.99)(0.01) + (0.05)(0.99) = 0.0099 + 0.0495 = 0.0594.$$
Posterior:
$$P(D \\mid Pos) = P(Pos \\mid D) * P(D) / P(Pos) = (0.99)(0.01) / 0.0594 = 0.0099 / 0.0594 = 0.167.$$
So a person who tests positive has only about a 16.7% probability of actually having the disease. Most positive results are false positives.
Why this is much lower than 99%: the test sensitivity is the probability of a positive test given the disease, not the probability of the disease given a positive test. These are different quantities, and confusing them is the most common error in probabilistic reasoning. The reason the posterior is so much lower than the sensitivity is that the disease is rare. Out of 10,000 people, only 100 have the disease (and 99 of them test positive). The other 9,900 do not have the disease, but 5% of them, or 495, also test positive. So out of 99 + 495 = 594 positive tests, only 99 are true positives. That is 99/594 = 16.7%.
The base rate, which most intuitive reasoners ignore, dominates the calculation. This is called base-rate neglect, and it is the most consequential cognitive bias in medical diagnosis, screening programs, and legal evidence.
Section 2: Updating with Sequential Evidence
Suppose the same person is tested again, with the second test independent of the first given disease status. The first positive test brought P(D) from 0.01 to 0.167. This 0.167 now becomes the prior for the second test.
New prior: P(D) = 0.167. P(not D) = 0.833.
$$Likelihoods unchanged: P(Pos \\mid D) = 0.99, P(Pos \\mid not D) = 0.05.$$
$$New marginal: P(Pos) = (0.99)(0.167) + (0.05)(0.833) = 0.1653 + 0.0417 = 0.207.$$
$$New posterior: P(D \\mid Pos) = (0.99)(0.167) / 0.207 = 0.1653 / 0.207 = 0.799.$$
After two independent positive tests, the probability of disease has climbed from 1% to about 80%. Each test contributes information, and the information compounds when the tests are independent.
General principle: today's posterior is tomorrow's prior. Bayesian updating is iterative. Each new piece of evidence shifts the probability, and the shifted probability becomes the starting point for processing the next piece of evidence. This is how rational belief is supposed to evolve over time. The same machinery applies to scientific hypotheses, criminal trials, weather forecasting, and machine learning. The key requirement is that the evidence be conditionally independent given the hypothesis. When that fails (correlated evidence, dependent measurements), the updates overstate the strength of evidence, and the posterior gets pushed too far.`,
  },
  {
    id: "d3",
    number: 5,
    title: "Discussion 3: Random Variables and Distributions",
    points: 50,
    type: "discussion",
    objectives: [
      "Distinguish discrete from continuous random variables and read off probabilities from PMFs and PDFs.",
      "Compute and interpret cumulative distribution functions and basic distribution summaries.",
    ],
    reading: `A random variable is a function that assigns a number to each outcome in a sample space. It is the bridge between probability and arithmetic. Once outcomes have been converted to numbers, we can add them, multiply them, take averages, and compute moments.
Formally, a random variable X is a function from the sample space S to the real numbers. If the experiment is 'roll two dice,' an outcome is a pair like (3, 5), and the random variable X = sum of the dice maps (3, 5) to the number 8.
Discrete vs. Continuous Random Variables
A discrete random variable takes values in a countable set (often integers). Examples: the number of heads in 10 coin flips, the number of customers arriving per hour, the outcome of a die roll.
A continuous random variable takes values in an uncountable set (typically an interval of real numbers). Examples: the time until the next earthquake, the exact weight of a randomly chosen apple, the closing price of a stock.
Probability Mass Function (PMF) -- discrete case
For a discrete random variable X, the PMF is:
$$p(x) = P(X = x).$$
It must satisfy: p(x) $\\geq$ 0 for all x, and the sum of p(x) over all values of x equals 1.
Probability Density Function (PDF) -- continuous case
For a continuous random variable, individual values have probability zero. Instead we have a density function f(x), and probabilities are areas under the curve:
P(a $\\leq$ X $\\leq$ b) = integral from a to b of f(x) dx.
The density must satisfy: f(x) $\\geq$ 0 for all x, and the integral of f over the whole real line equals 1.
Cumulative Distribution Function (CDF)
For any random variable, the CDF is:
$$F(x) = P(X \\leq  x).$$
The CDF is non-decreasing, approaches 0 as x goes to negative infinity, and approaches 1 as x goes to positive infinity. It is defined for both discrete and continuous random variables and is the most general way to specify a distribution.`,
    assignment: `Assignment (50 points):

Let X be the number of heads in three flips of a fair coin. Write out the PMF of X as a table. Verify that the probabilities sum to 1. Compute P(X $\\geq$ 2).
Let Y be a continuous random variable with density f(y) = 2y for 0 $\\leq$ y $\\leq$ 1 and f(y) = 0 elsewhere. (a) Verify that f is a valid density. (b) Find P(Y > 0.5). (c) Find the CDF F(y).
Explain in your own words why P(X = x) = 0 for every individual value x when X is continuous, even though P(X is in some interval) can be positive. What does this mean for the interpretation of a density?`,
    modelResponse: `Model Response

PMF of three coin flips:
With three flips, there are 2^3 = 8 equally likely outcomes. Counting how many have 0, 1, 2, 3 heads:
X = 0: only TTT. Count = 1. p(0) = 1/8.
X = 1: HTT, THT, TTH. Count = 3. p(1) = 3/8.
X = 2: HHT, HTH, THH. Count = 3. p(2) = 3/8.
X = 3: HHH. Count = 1. p(3) = 1/8.
Sum: 1/8 + 3/8 + 3/8 + 1/8 = 8/8 = 1. Valid.
$$P(X \\geq  2) = p(2) + p(3) = 3/8 + 1/8 = 4/8 = 1/2.$$
Continuous density f(y) = 2y on [0, 1]:
(a) Validity: f(y) = 2y $\\geq$ 0 on [0, 1]. Integral from 0 to 1 of 2y dy = y^2 evaluated from 0 to 1 = 1 - 0 = 1. Valid density.
(b) P(Y > 0.5) = integral from 0.5 to 1 of 2y dy = 1 - 0.25 = 0.75.
(c) CDF: for 0 $\\leq$ y $\\leq$ 1, F(y) = integral from 0 to y of 2t dt = y^2. For y < 0, F(y) = 0. For y > 1, F(y) = 1.
$$Why P(X = x) = 0 for continuous X:$$
A continuous random variable takes uncountably many values. If each individual value had positive probability, the probabilities would sum (more precisely, integrate) to infinity, violating the second axiom. To make the axioms work, individual values must have probability zero. This sounds paradoxical: the variable certainly takes some value, yet the probability of taking any particular value is zero. The resolution is that probability for continuous variables is distributed over intervals, not concentrated at points. P(Y = 0.7) = 0, but P(0.69 $\\leq$ Y $\\leq$ 0.71) is positive.
Interpretation of density: the value f(y) is not a probability; it is a probability per unit length. A density of 2 at y = 1 does not mean P(Y = 1) = 2 (which would be impossible). It means that near y = 1, probability is accumulating at a rate of 2 per unit increase in y. Densities can be larger than 1; only their integrals over intervals must be between 0 and 1. This is the most common confusion students have with continuous distributions, and grasping it is essential to making any further progress.
Why This is a Model Response:
Constructs the PMF by direct counting and verifies it sums to 1.
Verifies the density's validity before using it, which is the right order of operations.
Computes both probabilities and the CDF, and gives the CDF piecewise as required for completeness.
Explains the conceptual difference between mass and density and identifies the specific axiom that forces individual continuous values to have probability zero.
Connects the abstract formal point to a practical interpretive consequence (densities can exceed 1).`,
  },
  {
    id: "e3",
    number: 6,
    title: "Essay 3: Expected Value and Expected Return",
    points: 50,
    type: "essay",
    objectives: [
      "Define expected value and compute it for discrete and continuous distributions and for simple gambles.",
      "Apply expected-return reasoning to a real decision and explain its limits as a basis for choice under risk.",
    ],
    reading: ``,
    assignment: `Assignment (50 points):

Write your essay for someone unfamiliar with probability theory. Clearly label each section.
Section 1 (30 points) - Expected Value
Define expected value for a discrete random variable. State the formula.
Compute the expected value of a single die roll, of the sum of two dice, and of a one-dollar bet on red in roulette.
State and explain the linearity of expectation.
Section 2 (20 points) - Expected Return in Finance
Define expected return for an investment with multiple possible outcomes.
Work out the expected return of a hypothetical stock investment with three scenarios.
Explain why expected return alone is an incomplete guide to investment decisions, and what is missing.`,
    modelResponse: `Model Response

Section 1: Expected Value
The expected value of a discrete random variable X is the probability-weighted average of its possible values:
$$E(X) = sum over x of [ x * P(X = x) ].$$
For a continuous random variable with density f(x):
E(X) = integral over all x of [ x * f(x) dx ].
The expected value is not necessarily a value the variable can actually take. A fair die has expected value 3.5, even though no face shows 3.5. The expected value is the long-run average of the variable over many independent trials. Roll a fair die ten thousand times and average the outcomes; the average will be very close to 3.5. The expected value is what 'the average outcome' converges to as the number of trials grows.
Single die roll. The variable X takes each of the values 1, 2, 3, 4, 5, 6 with probability 1/6. So:
$$E(X) = (1)(1/6) + (2)(1/6) + (3)(1/6) + (4)(1/6) + (5)(1/6) + (6)(1/6) = 21/6 = 3.5.$$
Sum of two dice. Let X1 and X2 be the two dice, and S = X1 + X2. We could compute E(S) by enumerating all 36 outcomes, but linearity of expectation gives the answer immediately:
$$E(S) = E(X1) + E(X2) = 3.5 + 3.5 = 7.$$
Bet on red in American roulette. The wheel has 38 slots: 18 red, 18 black, 2 green. A one-dollar bet on red pays one dollar if red wins, and loses one dollar otherwise. Let X be the net payoff.
P(red) = 18/38. P(not red) = 20/38.
$$E(X) = (1)(18/38) + (-1)(20/38) = -2/38 = -1/19 = -0.0526.$$
The expected net payoff is about -5.26 cents per dollar wagered. This is the casino's house edge on red/black bets. Bet long enough and you lose, on average, 5.26% of every dollar staked.
Linearity of expectation. For any random variables X and Y and constants a and b:
E(aX + bY) = a * E(X) + b * E(Y).
Crucially, this holds whether X and Y are independent or not. Most probability formulas require independence; linearity of expectation does not. This is what makes it the single most useful identity in elementary probability theory. It reduces the expected value of a sum to a sum of expected values, and that decomposition is almost always tractable even when the joint distribution is complicated.
Section 2: Expected Return in Finance
In finance, the return on an investment is the percentage change in its value over a period. Expected return is the probability-weighted average of possible returns:
$$E(R) = P1 * R1 + P2 * R2 + ... + Pn * Rn,$$
where Ri are the possible returns and Pi the probabilities of each.
Stock example. A stock has three possible outcomes over the next year:
Boom (probability 0.25): return +30%.
Normal (probability 0.50): return +10%.
Recession (probability 0.25): return -20%.
Expected return:
$$E(R) = (0.25)(30\\%) + (0.50)(10\\%) + (0.25)(-20\\%) = 7.5\\% + 5.0\\% - 5.0\\% = 7.5\\%.$$
Why expected return is incomplete. Two investments can have the same expected return while differing radically in risk. Consider Investment B: guaranteed +7.5% return with no uncertainty. Its expected return is also 7.5%, but its risk is zero. The first investment swings between -20% and +30%; the second sits at 7.5%. A risk-averse investor will prefer B.
What is missing from expected return is a measure of dispersion. The standard measure is variance (and its square root, standard deviation). Variance for the stock above:
$$\\mathrm{Var}(R) = (0.25)(30 - 7.5)^2 + (0.50)(10 - 7.5)^2 + (0.25)(-20 - 7.5)^2$$
= (0.25)(506.25) + (0.50)(6.25) + (0.25)(756.25)
= 126.56 + 3.125 + 189.06 = 318.75.
$$Standard deviation = \\sqrt{318.75} = 17.85\\%.$$
So the stock has expected return 7.5% with standard deviation 17.85%. The 7.5% is the center of the distribution; the 17.85% is the typical magnitude of deviation from that center. Modern portfolio theory and the entire risk management apparatus of finance start from the recognition that expected return without variance is not enough. Investors are paid for bearing risk, and the risk-return tradeoff is the central object of finance.
There is a deeper criticism still: expected return assumes the probabilities are known. In reality they are estimated, often from limited historical data, and the estimates can be far from the true values. Decisions based on point estimates of expected return can be catastrophically wrong if the probability distribution itself is misspecified, especially in its tails. This is the territory of Knightian uncertainty and of fat-tailed distributions, and it is where elementary probability theory hands the problem off to more advanced statistics and economics.`,
  },
  {
    id: "d4",
    number: 7,
    title: "Discussion 4: Variance, Standard Deviation, and Risk",
    points: 50,
    type: "discussion",
    objectives: [
      "Compute variance and standard deviation, and use the identity Var(X) = E(X^2) − [E(X)]^2.",
      "Explain how covariance and correlation make diversification work and why standard deviations do not simply add.",
    ],
    reading: `Expected value tells you the center of a distribution. Variance tells you how widely the distribution is spread around that center. Two random variables can have the same expected value but very different variances, and the difference often matters more than the average.
The variance of a random variable X is defined as:
$$\\mathrm{Var}(X) = E[(X - E(X))^2].$$
In words: the expected value of the squared deviation from the mean. Squaring serves two purposes. It makes deviations non-negative (otherwise positive and negative deviations would cancel out), and it penalizes large deviations more heavily than small ones.
A useful computational identity:
$$\\mathrm{Var}(X) = E(X^2) - [E(X)]^2.$$
Often easier to apply than the definition.
Standard Deviation
The standard deviation of X is:
$$\\mathrm{SD}(X) = sqrt(\\mathrm{Var}(X)).$$
The advantage of standard deviation over variance is that it is expressed in the same units as X. If X is measured in dollars, Var(X) is in dollars squared (an awkward unit), but SD(X) is back in dollars.
Properties
Var(X) $\\geq$ 0, with equality if and only if X is a constant (no variation).
Var(aX + b) = a^2 * Var(X). Adding a constant does not change the spread; multiplying by a constant scales the variance by its square (and the standard deviation by its absolute value).
For independent random variables: Var(X + Y) = Var(X) + Var(Y). Variances add. Standard deviations do not.
For dependent random variables: Var(X + Y) = Var(X) + Var(Y) + 2 * Cov(X, Y), where the covariance Cov(X, Y) = E[(X - E(X))(Y - E(Y))].
Risk in Finance
Standard deviation is the workhorse measure of risk in finance. A portfolio's expected return is the weighted average of its components' expected returns. A portfolio's variance, however, depends on the covariances between components. This is why diversification works: by combining assets that are not perfectly correlated, the portfolio's overall standard deviation can be lower than the weighted average of its components' standard deviations. Holding two negatively correlated assets is the strongest case: their swings partially cancel.`,
    assignment: `Assignment (50 points):

Compute the variance and standard deviation of a single roll of a fair six-sided die.
Two stocks have the following return distributions: Stock A returns +20% or -10% with equal probability. Stock B returns +5% or 0% with equal probability. (a) Compute expected return and standard deviation for each. (b) Which is riskier? Which has the higher expected return? (c) Suppose a portfolio holds 50% A and 50% B, and the returns are independent. Compute the portfolio's expected return and standard deviation.
Explain in your own words why diversification reduces risk only when the assets are not perfectly correlated, and why holding two perfectly correlated assets gives no diversification benefit.`,
    modelResponse: `Model Response

Die roll variance:
$$E(X) = 3.5.$$
$$E(X^2) = (1 + 4 + 9 + 16 + 25 + 36)/6 = 91/6 = 15.167.$$
$$\\mathrm{Var}(X) = E(X^2) - [E(X)]^2 = 15.167 - 12.25 = 2.917.$$
$$\\mathrm{SD}(X) = \\sqrt{2.917} = 1.708.$$
Two stocks:
Stock A: E(A) = (0.5)(20) + (0.5)(-10) = 5%. E(A^2) = (0.5)(400) + (0.5)(100) = 250. Var(A) = 250 - 25 = 225. SD(A) = 15%.
Stock B: E(B) = (0.5)(5) + (0.5)(0) = 2.5%. E(B^2) = (0.5)(25) + (0.5)(0) = 12.5. Var(B) = 12.5 - 6.25 = 6.25. SD(B) = 2.5%.
Stock A has higher expected return (5% vs 2.5%) and higher risk (SD 15% vs 2.5%). The classic risk-return tradeoff: more expected return comes with more variability.
Portfolio of 50% A and 50% B, independent returns:
$$E(P) = 0.5 * E(A) + 0.5 * E(B) = 0.5(5) + 0.5(2.5) = 3.75\\%.$$
$$\\mathrm{Var}(P) = (0.5)^2 * \\mathrm{Var}(A) + (0.5)^2 * \\mathrm{Var}(B) = 0.25(225) + 0.25(6.25) = 56.25 + 1.5625 = 57.8125.$$
$$\\mathrm{SD}(P) = \\sqrt{57.8125} = 7.60\\%.$$
The portfolio has expected return 3.75% and standard deviation 7.6%. Compare this to a naive average of the two SDs: (15 + 2.5)/2 = 8.75%. The portfolio's actual standard deviation (7.6%) is lower than this naive average, which is the diversification effect. Variances add (weighted by squared weights), not standard deviations.
Why diversification requires imperfect correlation:
Two assets are perfectly positively correlated when their returns move in lockstep: when one is up x%, the other is up some constant times x%. In that case, combining them gives a portfolio whose return is just a weighted average of the two returns, with no offsetting movement. The standard deviation of the portfolio is then the weighted average of the individual standard deviations. There is no reduction.
When correlation is less than perfect (correlation coefficient less than 1), the two assets sometimes move in opposite directions. The losses on one are partly offset by gains on the other. The squared variance contribution from each is reduced by their imperfect coupling. The lower the correlation, the more the offsetting, and the greater the reduction in portfolio standard deviation.
The extreme case is correlation of -1 (perfect negative correlation). Then a properly weighted portfolio of the two assets has zero variance: the swings cancel exactly. This is the theoretical limit of diversification. In practice, finding perfectly negatively correlated assets is nearly impossible, but even modest reductions in correlation provide substantial risk reduction. This is the entire mathematical basis of modern portfolio construction.
Why This is a Model Response:
Uses the computational identity Var(X) = E(X^2) - [E(X)]^2 rather than the definitional form, demonstrating fluency with both.
Compares two stocks on both expected return and risk, recognizing the tradeoff.
Correctly applies the formula Var(aX + bY) = a^2 Var(X) + b^2 Var(Y) for independent variables, including the squared weights.
Notices the discrepancy between the portfolio SD (7.6%) and the naive average of the component SDs (8.75%) and identifies that gap as the diversification effect.
Explains the role of correlation in determining whether diversification produces any benefit at all.`,
  },
  {
    id: "e4",
    number: 8,
    title: "Essay 4: The Law of Large Numbers and the Gambler's Fallacy",
    points: 50,
    type: "essay",
    objectives: [
      "State the Law of Large Numbers precisely and distinguish it from the Gambler's Fallacy.",
      "Explain why averages converge while individual deviations need not, using a worked numerical example.",
    ],
    reading: ``,
    assignment: `Assignment (50 points):

Write your essay for someone unfamiliar with probability theory. Clearly label each section.
Section 1 (30 points) - The Law of Large Numbers
State the (weak) law of large numbers.
Explain what it does say and what it does not say.
Illustrate with a concrete example involving coin flips.
Section 2 (20 points) - The Gambler's Fallacy
Define the gambler's fallacy.
Explain in detail why it is a misreading of the law of large numbers.
Give a real-world example where the fallacy leads to costly decisions.`,
    modelResponse: `Model Response

Section 1: The Law of Large Numbers
Let X1, X2, X3, ... be independent and identically distributed random variables with common expected value $\\mu$. Let Xbar(n) = (X1 + X2 + ... + Xn) / n denote the sample mean of the first n variables. The weak law of large numbers states:
For any positive $\\epsilon$, P(|Xbar(n) - $\\mu$| > $\\epsilon$) approaches 0 as n approaches infinity.
In words: as the number of trials grows, the sample mean converges in probability to the expected value. The chance that the running average is more than any specified distance from the true mean becomes arbitrarily small.
What the law does say: averages stabilize. If you flip a fair coin 10,000 times, the proportion of heads will be very close to 0.5, almost certainly between 0.49 and 0.51. The wider the deviation, the lower the probability. Sample averages converge to expected values, given enough data.
What the law does not say: it does not say that the deviation from the expected value shrinks in absolute terms; it says that the deviation per trial shrinks. The total number of heads can drift further and further from half the trials, even as the proportion drifts toward 0.5. For example, after 10,000 flips you might have 5,050 heads (50 above the expected 5,000). After a million flips you might have 500,500 heads (500 above expected). The absolute gap has grown from 50 to 500, but the proportion has gone from 0.505 to 0.5005, closer to 0.5. The law constrains the proportion, not the absolute difference.
Coin flip example. Flip a fair coin 100 times. The expected number of heads is 50, with standard deviation about 5 (using results from the binomial distribution, which we will cover in Discussion 5). So getting 45 to 55 heads is unsurprising, and getting 40 to 60 heads is still well within the range of normal variability. Flip the coin 10,000 times. The expected count is 5,000, with standard deviation about 50. So 4,950 to 5,050 heads is normal, and 4,900 to 5,100 is unremarkable. Note that the absolute deviation in flips is larger for the longer run, but as a proportion it is smaller (1% deviation for the long run versus 10% for the short run).
The law of large numbers is the foundation of frequentist probability: the claim that probability is the long-run frequency of an event. Without the law (and its quantitative refinements like the central limit theorem), there would be no rigorous justification for inferring probabilities from observed frequencies.
Section 2: The Gambler's Fallacy
The gambler's fallacy is the belief that, in a sequence of independent random events, recent outcomes affect the probability of future outcomes. A roulette wheel has landed on red five times in a row; the gambler believes black is now 'due' and bets accordingly. A coin has come up heads ten times; the next flip is felt to be more likely than 50% to be tails.
The fallacy is a misreading of the law of large numbers. The gambler reasons: 'Over the long run, the proportions must balance out to 50-50. We have had an unusual streak of heads. To get back to balance, tails must come up more often.' This reasoning has the form right but the mechanism wrong.
Here is the correct version: the proportion does converge to 0.5, but not because some hidden bookkeeping force adds tails to compensate for past heads. It converges because the influence of past outcomes is diluted by the sheer volume of future outcomes. Suppose ten heads have come up in a row. After another ten thousand flips, the total will be about 5,010 heads out of 10,010 flips, which is 0.5005, much closer to 0.5 than the initial 1.0. The drift back to 0.5 happens not by the coin producing extra tails, but by the early imbalance becoming an ever smaller fraction of a much larger denominator. Each individual flip remains a fair 50-50 trial, completely indifferent to its predecessors.
This is what 'independent trials' means: the next outcome does not depend on the previous outcomes. A fair coin has no memory. Believing otherwise is believing in a kind of conservation law for outcomes that probability theory explicitly denies.
Real-world example: the Monte Carlo Casino, August 18, 1913. On a roulette table, black came up 26 times in a row. As the streak lengthened, gamblers bet enormous sums on red, convinced it was overwhelmingly likely. The casino made millions that night. Each individual spin had a probability of about 18/37 of red (in European roulette with one green zero), regardless of what had come before. The gamblers' losses were not due to bad luck; they were the predictable result of a mistaken probability model applied with growing confidence as the streak grew. The episode gave the fallacy one of its standard names: the Monte Carlo fallacy.
A subtler version operates in financial markets. After a long bull run, investors often feel that a crash is overdue, and reduce equity exposure. This can be correct reasoning if there is genuine mean reversion in the underlying process. But for the random-walk component of price movements, it is the gambler's fallacy applied to assets. Mean reversion needs to be demonstrated empirically; it cannot be assumed merely on the grounds that prices have moved a lot recently. Confusing genuine mean reversion with the gambler's fallacy, in either direction, produces costly trades.`,
  },
  {
    id: "d5",
    number: 9,
    title: "Discussion 5: The Binomial Distribution",
    points: 50,
    type: "discussion",
    objectives: [
      "Identify when the binomial distribution is the right model and use its formula to compute probabilities.",
      "Compute the mean, variance, and standard deviation of a binomial random variable and apply them to a real scenario.",
    ],
    reading: `The binomial distribution is the distribution of the number of successes in a fixed number of independent yes-or-no trials, each with the same probability of success. It is the simplest non-trivial distribution and the model for an enormous range of practical problems: quality control, polling, medical trials, opinion surveys.
The Setup
Conduct n independent trials. Each trial results in 'success' with probability p, 'failure' with probability 1 - p. Let X be the total number of successes. Then X has a binomial distribution with parameters n and p, written X ~ Binomial(n, p).
The Formula
$$P(X = k) = \\binom{n}{k} * p^k * (1 - p)^{n - k}, for k = 0, 1, 2, ..., n,$$
where $\\binom{n}{k}$ = n! / [k! (n - k)!] is the binomial coefficient: the number of ways to choose k items from n.
The formula has three factors:
p^k: the probability of getting k specific successes in their designated trials.
(1 - p)^(n - k): the probability of the remaining n - k trials all being failures.
$\\binom{n}{k}$: the number of different ways k successes could be distributed among n trials.
Mean and Variance
E(X) = np. Var(X) = np(1 - p). SD(X) = sqrt(np(1 - p)).
These follow from linearity of expectation and variance, applied to the n independent indicator variables (one per trial).`,
    assignment: `Assignment (50 points):

A basketball player makes 60% of her free throws. She attempts 10 free throws. (a) What is the probability she makes exactly 7? (b) What is the probability she makes at least 7? (c) What is the expected number of made free throws? The standard deviation?
A factory's quality control process tests batches of 20 widgets. Each widget is independently defective with probability 0.05. A batch is rejected if more than 2 widgets are defective. What is the probability of rejection?
Explain in your own words why the binomial formula has the three factors it has, and why each of them must be present. What would go wrong if any factor were omitted?`,
    modelResponse: `Model Response

$$Basketball free throws, n = 10, p = 0.6.$$
(a) $$P(X = 7) = \\binom{10}{7} * (0.6)^7 * (0.4)^3 = 120 * 0.0279936 * 0.064 = 0.2150.$$
So about 21.5% probability of exactly 7 made shots.
(b) $$P(X \\geq  7) = P(X = 7) + P(X = 8) + P(X = 9) + P(X = 10).$$
P(X = 7) = 0.2150 (from above).
$$P(X = 8) = \\binom{10}{8} * (0.6)^8 * (0.4)^2 = 45 * 0.0167962 * 0.16 = 0.1209.$$
$$P(X = 9) = \\binom{10}{9} * (0.6)^9 * (0.4)^1 = 10 * 0.0100777 * 0.4 = 0.0403.$$
$$P(X = 10) = \\binom{10}{10} * (0.6)^{10} * (0.4)^0 = 1 * 0.0060466 * 1 = 0.0060.$$
$$Sum: 0.2150 + 0.1209 + 0.0403 + 0.0060 = 0.3822.$$
About 38.2% probability of making at least 7 of 10.
(c) E(X) = np = 10 * 0.6 = 6. SD(X) = sqrt(np(1 - p)) = $\\sqrt{10 * 0.6 * 0.4}$ = $\\sqrt{2.4}$ = 1.549.
$$Factory rejection, n = 20, p = 0.05.$$
Reject if X > 2, i.e., X $\\geq$ 3. Equivalent: P(reject) = 1 - P(X $\\leq$ 2).
$$P(X = 0) = \\binom{20}{0} * (0.05)^0 * (0.95)^{20} = 1 * 1 * 0.3585 = 0.3585.$$
$$P(X = 1) = \\binom{20}{1} * (0.05)^1 * (0.95)^{19} = 20 * 0.05 * 0.3774 = 0.3774.$$
$$P(X = 2) = \\binom{20}{2} * (0.05)^2 * (0.95)^{18} = 190 * 0.0025 * 0.3972 = 0.1887.$$
$$P(X \\leq  2) = 0.3585 + 0.3774 + 0.1887 = 0.9246.$$
$$P(reject) = 1 - 0.9246 = 0.0754.$$
So about 7.5% of batches are rejected.
Why the three factors:
Consider P(X = k). We need: k successes among n trials. The probability of any single specific arrangement (say, successes on trials 1 through k and failures on the rest) is p^k * (1-p)^(n-k). The factor p^k handles the k specific trials where success occurred; (1-p)^(n-k) handles the remaining trials where failure occurred. This is the probability of one particular sequence.
But we do not care which trials succeed; we only care that exactly k of them do. Any of $\\binom{n}{k}$ different arrangements of k successes among n trials would also produce exactly k successes, and each has the same probability p^k * (1-p)^(n-k) by independence. So we multiply by $\\binom{n}{k}$ to count all the arrangements.
If we omitted p^k or (1-p)^(n-k), we would be ignoring the probability of the actual outcomes. If we omitted $\\binom{n}{k}$, we would be counting only one specific arrangement, drastically undercounting the cases that yield k successes (unless k = 0 or k = n, in which case there is only one arrangement and $\\binom{n}{k}$ = 1). Each factor answers a distinct question: what is the probability of any one specific success-failure pattern (p^k * (1-p)^(n-k)), and how many such patterns are there ($\\binom{n}{k}$)? Multiplying combines the counting with the per-pattern probability.
Why This is a Model Response:
Performs the binomial calculations cleanly, showing the binomial coefficient, the success probability raised to k, and the failure probability raised to n-k.
Computes a tail probability by complementation, the standard technique for 'at least' or 'more than' questions.
Identifies the conceptual role of each factor in the formula, distinguishing the per-arrangement probability from the count of arrangements.
Recognizes that the binomial coefficient becomes 1 in the edge cases (k = 0 or k = n), making the formula consistent with direct intuition there.`,
  },
  {
    id: "e5",
    number: 10,
    title: "Essay 5: The Normal Distribution and the Central Limit Theorem",
    points: 50,
    type: "essay",
    objectives: [
      "Describe the Normal distribution, its parameters, and its standardization to z-scores.",
      "State the Central Limit Theorem and explain why it makes the Normal distribution central to applied statistics.",
    ],
    reading: ``,
    assignment: `Assignment (50 points):

Write your essay for someone unfamiliar with probability theory. Clearly label each section.
Section 1 (30 points) - The Normal Distribution
Describe the shape of the normal distribution and its two parameters.
State the 68-95-99.7 rule.
Give three real-world examples of quantities that are approximately normally distributed and explain why.
Section 2 (20 points) - The Central Limit Theorem
State the central limit theorem in plain language.
Explain why this theorem is the foundation of statistical inference.
Discuss one limitation: when the central limit theorem fails or is misleading.`,
    modelResponse: `Model Response

Section 1: The Normal Distribution
The normal distribution, also called the Gaussian distribution or 'bell curve,' is a continuous probability distribution defined by two parameters: the mean $\\mu$ (the center of the bell) and the standard deviation $\\sigma$ (the width). Its density function is:
$$f(x) = (1 / (\\sigma  * \\sqrt{2*pi})) * exp(-(x - \\mu )^2 / (2*\\sigma ^2)).$$
The shape is a symmetric bell. Most of the probability mass sits near the mean. The probability density falls off rapidly as you move away from the mean, with the rate of falloff controlled by $\\sigma$. A small $\\sigma$ gives a tall, narrow bell. A large $\\sigma$ gives a wide, flat bell.
The 68-95-99.7 rule (also called the empirical rule):
About 68% of the probability lies within one standard deviation of the mean.
About 95% lies within two standard deviations.
About 99.7% lies within three standard deviations.
So observations more than three standard deviations from the mean occur less than 0.3% of the time under a normal distribution. This is what makes the normal distribution have 'thin tails': extreme events are very rare.
Three examples of approximately normal quantities:
Heights of adult humans within a single sex and population. Height is determined by a large number of genetic and environmental factors, each contributing a small effect. The sum of many small independent factors tends to be approximately normal, as the central limit theorem predicts. A population of adult women in the US has mean height about 64 inches with standard deviation about 2.5 inches; the distribution is close to normal in the central region, though it deviates somewhat in the tails.
Measurement errors in physical experiments. When measuring some quantity with a careful instrument, the error from any one measurement is the sum of many independent small effects: vibrations, electrical noise, small temperature changes, observer reading variations, etc. Each is small and independent of the others, so the total error tends toward normality. This is why so much statistical theory assumes normal errors.
IQ test scores. IQ is constructed to be approximately normal by design (test items are calibrated so that the resulting scores fit a normal distribution with mean 100 and standard deviation 15). The underlying trait may or may not be exactly normal in the population, but the test scores are standardized to look that way, which makes them mathematically convenient to work with.
Section 2: The Central Limit Theorem
The central limit theorem (CLT) states: if X1, X2, ..., Xn are independent, identically distributed random variables with finite mean $\\mu$ and finite variance $\\sigma$^2, then the distribution of the sample mean Xbar(n) approaches a normal distribution with mean $\\mu$ and standard deviation $\\sigma$ / $\\sqrt{n}$ as n grows large. This holds regardless of the original distribution of the Xi.
In plain language: if you average enough independent samples from almost any distribution, the average will be approximately normally distributed, even if the original distribution is far from normal. Sum together enough independent random quantities, and the sum is approximately normal.
Why this is the foundation of statistical inference: most statistical procedures depend on knowing the distribution of a sample mean, or some closely related statistic. The CLT gives us this distribution for free, no matter what the population looks like, provided the sample is large enough. Confidence intervals, hypothesis tests, regression standard errors, and most of frequentist statistics are built on the CLT. Without it, every statistical procedure would have to be redesigned for each new population shape, an impossible task.
The CLT also explains why the normal distribution is ubiquitous in nature. So many real-world quantities are sums of many small independent influences, and the CLT says these sums tend toward normality. Heights, errors, sums of many random rolls, the position of a particle after many small random kicks: all approximately normal, all by the same mechanism.
A limitation: the CLT fails when the underlying distribution has infinite variance (so-called fat-tailed or heavy-tailed distributions). The Cauchy distribution is the textbook example: its variance is infinite, and the sample mean of n Cauchy variables has the same distribution as a single Cauchy variable. Averaging does nothing. More generally, distributions with finite mean but very heavy tails approach normality only very slowly, so for the sample sizes available in practice, the CLT-based approximation can be badly wrong.
This matters enormously in finance and risk management. Stock returns, particularly daily returns, have heavier tails than the normal distribution. Extreme moves are much more frequent than a normal model predicts. Risk models built on the assumption that returns are normal systematically underestimate tail risk. The 1987 crash, the 2008 financial crisis, the COVID crash of 2020: all involved daily moves so large that under a normal model they should not have happened in the lifetime of the universe. Yet they happened. The lesson is that the CLT is a powerful theorem with a precise scope, and applying it outside that scope produces conclusions that look mathematically rigorous but are wildly wrong about the world.`,
  },
  {
    id: "d6",
    number: 11,
    title: "Discussion 6: Counting — Permutations and Combinations",
    points: 50,
    type: "discussion",
    objectives: [
      "Use the multiplication principle, permutations, and combinations to count outcomes in finite sample spaces.",
      "Distinguish problems where order matters from problems where it does not, and explain the relationship between C(n, k) and P(n, k).",
    ],
    reading: `Many elementary probability problems reduce to counting: how many outcomes in the sample space, how many in the event of interest, and the probability is the ratio. When outcomes are equally likely, counting is everything. The systematic study of counting is called combinatorics.
The Multiplication Principle
If one thing can happen in m ways, and after it happens a second thing can happen in n ways, then the two things together can happen in m * n ways.
Example: a menu offers 4 appetizers, 6 entrees, and 3 desserts. The number of three-course meals is 4 * 6 * 3 = 72.
Permutations (order matters)
The number of ways to arrange n distinct objects in order is n! = n * (n - 1) * (n - 2) * ... * 1.
The number of ways to arrange k objects chosen from n distinct objects in order is:
$$P(n, k) = n! / (n - k)!$$
Example: 5 horses race; the number of possible first-second-third finishes is 5 * 4 * 3 = 60.
Combinations (order does not matter)
The number of ways to choose k objects from n distinct objects, ignoring order, is:
$$\\binom{n}{k} = n! / [k! (n - k)!]$$
This is read 'n choose k' and is the binomial coefficient. It is also written as a vertical pair (n over k) in mathematical notation.
Example: a 5-card poker hand from a 52-card deck has $\\binom{52}{5}$ = 2,598,960 possible hands.
Key Distinction
Order matters: permutations. Order does not matter: combinations. The classic case is arranging vs. selecting. Three runners finishing in different orders are different permutations (gold-silver-bronze matters) but the same combination (the three medalists are the same group regardless of order).`,
    assignment: `Assignment (50 points):

A committee of 5 is to be chosen from a group of 12 people. (a) How many committees are possible? (b) How many ordered slates of officers (President, VP, Secretary, Treasurer, Member-at-large) can be chosen? (c) Why are the answers different, and what general principle is at work?
A standard 5-card poker hand is dealt from a shuffled 52-card deck. Compute: (a) the probability of being dealt four of a kind; (b) the probability of being dealt a full house (three of one rank and two of another).
Explain why $\\binom{n}{k}$ = $\\binom{n}{n - k}$ using a combinatorial argument (not just algebra). What does this identity tell you about choosing vs. leaving out?`,
    modelResponse: `Model Response

Committee problem:
(a) Choose 5 from 12 without regard to order: $\\binom{12}{5}$ = 12! / (5! * 7!) = 792 committees.
(b) Choose 5 with order (5 distinct roles): P(12, 5) = 12 * 11 * 10 * 9 * 8 = 95,040 slates.
(c) The slate-count is exactly 5! = 120 times larger than the committee-count, because each committee of 5 can be arranged into 5! different orderings of officers. The principle: when order matters, multiply by k! to convert combinations into permutations, or divide by k! to go the other way.
Poker probabilities:
$$Total 5-card hands: \\binom{52}{5} = 2,598,960.$$
(a) Four of a kind: choose the rank for the four cards (13 ways), choose all four cards of that rank ($\\binom{4}{4}$ = 1), then choose the fifth card from the remaining 48 cards. Total favorable hands: 13 * 1 * 48 = 624. Probability = 624 / 2,598,960 = 0.000240, or about 1 in 4,165.
(b) Full house: choose the rank for the three-of-a-kind (13 ways), choose 3 of the 4 cards of that rank ($\\binom{4}{3}$ = 4), choose the rank for the pair from the remaining 12 ranks (12 ways), choose 2 of the 4 cards of that rank ($\\binom{4}{2}$ = 6). Total: 13 * 4 * 12 * 6 = 3,744. Probability = 3,744 / 2,598,960 = 0.00144, or about 1 in 694.
Note that the three-of-a-kind rank and the pair rank are not interchangeable: a full house with three kings and two queens is distinct from a full house with three queens and two kings. This is why we use 13 * 12 rather than $\\binom{13}{2}$. The cards of the same rank within a triple or pair are interchangeable, hence the $\\binom{4}{3}$ and $\\binom{4}{2}$ for them.
$\\binom{n}{k}$ = $\\binom{n}{n - k}$ by combinatorial argument:
Choosing k objects to include from n objects is the same act as choosing the n - k objects to leave out. Every choice of who is in determines exactly one choice of who is out, and vice versa. So the number of ways to do one equals the number of ways to do the other.
Concrete example: from a group of 10 friends, the number of ways to choose 3 to invite to dinner ($\\binom{10}{3}$ = 120) is the same as the number of ways to choose 7 to leave at home ($\\binom{10}{7}$ = 120). Inviting 3 is exactly the same operation as not inviting 7. The identity is not a coincidence; it is the algebraic shadow of a single combinatorial fact.
This identity, called the symmetry of binomial coefficients, is one of the simplest examples of a deep principle in combinatorics: many algebraic identities have direct combinatorial interpretations, and those interpretations are usually more illuminating than the algebra. Each side of an algebraic identity counts the same set in a different way.
Why This is a Model Response:
Distinguishes permutations from combinations clearly and uses each in the right context.
Recognizes the exact factor (5! = 120) relating the two answers to the committee problem, making the conversion explicit.
Handles the full house carefully: distinguishes ordered selection of triple-rank vs. pair-rank (which are not interchangeable) from unordered selection within ranks (which are).
Gives a combinatorial proof of $\\binom{n}{k}$ = $\\binom{n}{n - k}$ using the inclusion-exclusion idea (who is in vs. who is out), rather than an algebraic manipulation.
Connects the specific identity to the broader principle that combinatorial identities reflect different ways of counting the same set.`,
  },
  {
    id: "d7",
    number: 12,
    title: "Discussion 7: Joint, Marginal, and Conditional Distributions",
    points: 50,
    type: "discussion",
    objectives: [
      "Read joint, marginal, and conditional probability distributions from a table or formula.",
      "Determine independence of two random variables and compute conditional expectations and probabilities.",
    ],
    reading: `When two random variables are studied together, their relationship is described by their joint distribution. From the joint distribution we can extract the marginal distribution of each variable individually and the conditional distribution of one given the other. These three concepts are the basic vocabulary of multivariate probability.
Joint Distribution
For two discrete random variables X and Y, the joint probability mass function is:
$$p(x, y) = P(X = x \\cap Y = y).$$
Specifies the probability of every combination of values. Must be non-negative and sum to 1 over all pairs.
For two continuous random variables, the joint density f(x, y) gives:
$$P((X, Y) in region A) = double integral over A of f(x, y) dx dy.$$
Marginal Distributions
The marginal distribution of X, ignoring Y, is obtained by summing or integrating out Y:
$$Discrete: p_X(x) = sum over y of p(x, y).$$
Continuous: f_X(x) = integral over all y of f(x, y) dy.
The word 'marginal' comes from the practice of writing the row sums and column sums of a joint probability table in the margins.
Conditional Distributions
The conditional distribution of Y given X = x is:
$$p(y | x) = p(x, y) / p_X(x), for p_X(x) > 0.$$
Same definition as conditional probability, applied at the level of distributions. The conditional distribution describes how Y is distributed once X is fixed.
Independence Revisited
X and Y are independent if and only if their joint distribution factors as a product:
p(x, y) = p_X(x) * p_Y(y) for all x, y.
Equivalently, the conditional distribution of Y given X does not depend on X.
Covariance and Correlation
Covariance measures the linear association between X and Y:
$$\\mathrm{Cov}(X, Y) = E[(X - E(X)) * (Y - E(Y))] = E(XY) - E(X) * E(Y).$$
Positive covariance: when X is above its mean, Y tends to be above its mean. Negative covariance: opposite directions. Zero covariance: no linear association (but possibly other kinds).
Correlation rescales covariance to a number between -1 and 1:
$$\\rho (X, Y) = \\mathrm{Cov}(X, Y) / (\\mathrm{SD}(X) * \\mathrm{SD}(Y)).$$
Correlation 1 means perfect positive linear relationship. Correlation -1 means perfect negative linear relationship. Correlation 0 means no linear relationship.`,
    assignment: `Assignment (50 points):

A joint distribution of X and Y is given by the following table:
$$Y = 0       Y = 1       Y = 2$$
$$X = 0          0.10        0.15        0.05$$
$$X = 1          0.20        0.25        0.25$$
(a) Find the marginal distributions of X and Y. (b) Find the conditional distribution of Y given X = 1. (c) Are X and Y independent? Why or why not?
Compute E(X), E(Y), Cov(X, Y), and the correlation between X and Y for the distribution in problem 1.
Construct an example of two random variables that have zero correlation but are not independent. What does this show about the limitations of correlation as a measure of dependence?`,
    modelResponse: `Model Response

Marginal and conditional distributions:
(a) Marginal of X: sum each row.
$$p_X(0) = 0.10 + 0.15 + 0.05 = 0.30. p_X(1) = 0.20 + 0.25 + 0.25 = 0.70.$$
Marginal of Y: sum each column.
$$p_Y(0) = 0.10 + 0.20 = 0.30. p_Y(1) = 0.15 + 0.25 = 0.40. p_Y(2) = 0.05 + 0.25 = 0.30.$$
(b) Conditional distribution of Y given X = 1: divide row 2 by p_X(1) = 0.70.
$P(Y = 0 \\mid X = 1)$ = 0.20 / 0.70 = 2/7. $P(Y = 1 \\mid X = 1)$ = 0.25 / 0.70 = 5/14. $P(Y = 2 \\mid X = 1)$ = 0.25 / 0.70 = 5/14.
Check: 2/7 + 5/14 + 5/14 = 4/14 + 5/14 + 5/14 = 14/14 = 1. Good.
(c) Independence check: X and Y are independent if p(x, y) = p_X(x) * p_Y(y) for all combinations.
Test p(0, 0) = 0.10 vs. p_X(0) * p_Y(0) = 0.30 * 0.30 = 0.09. Not equal, so not independent. (The full table would need every cell to factor; one failure suffices to refute independence.)
Moments and correlation:
$$E(X) = 0 * 0.30 + 1 * 0.70 = 0.70.$$
$$E(Y) = 0 * 0.30 + 1 * 0.40 + 2 * 0.30 = 0 + 0.40 + 0.60 = 1.00.$$
E(XY) = sum over all (x, y) of x * y * p(x, y). Only terms where both x and y are nonzero contribute:
$$E(XY) = (1)(1)(0.25) + (1)(2)(0.25) = 0.25 + 0.50 = 0.75.$$
$$\\mathrm{Cov}(X, Y) = E(XY) - E(X) * E(Y) = 0.75 - 0.70 * 1.00 = 0.05.$$
For correlation, need SD(X) and SD(Y).
E(X^2) = 0 * 0.30 + 1 * 0.70 = 0.70. Var(X) = 0.70 - 0.49 = 0.21. SD(X) = 0.458.
E(Y^2) = 0 * 0.30 + 1 * 0.40 + 4 * 0.30 = 0 + 0.40 + 1.20 = 1.60. Var(Y) = 1.60 - 1.00 = 0.60. SD(Y) = 0.775.
$$\\rho (X, Y) = 0.05 / (0.458 * 0.775) = 0.05 / 0.3550 = 0.141.$$
Small positive correlation.
Zero correlation but not independent:
Let Z be uniform on {-1, 0, 1}, each with probability 1/3. Let W = Z^2. Then:
E(Z) = 0. E(W) = E(Z^2) = (1 + 0 + 1)/3 = 2/3.
$$E(ZW) = E(Z^3) = ((-1)^3 + 0 + 1^3)/3 = 0.$$
$$\\mathrm{Cov}(Z, W) = E(ZW) - E(Z)E(W) = 0 - 0 = 0.$$
So Z and W have zero covariance, hence zero correlation.
But Z and W are obviously not independent. If you know Z = 0, then W = 0 for certain. If you know Z is nonzero, then W = 1 for certain. The value of Z completely determines W. They are functionally related, just not linearly.
What this shows: correlation measures only the linear component of dependence. Two variables can be perfectly determined by each other through a nonlinear relationship and still have zero correlation. This is a serious limitation in financial modeling, where two assets may be related through complex nonlinear dynamics (option payoffs, regime-dependent behavior, tail dependence) that show up as small correlations in calm markets but explode together in crises. Risk models that rely solely on correlation matrices miss these dependencies entirely, and that gap is one of the main reasons why correlation-based portfolio diversification can fail at the worst possible time.
Why This is a Model Response:
Computes marginals correctly by summing rows and columns, with verification that the conditional distribution sums to 1.
Tests independence by direct comparison of one cell to the product of marginals, recognizing that one failure is sufficient evidence.
Computes covariance from the joint distribution using E(XY) - E(X)E(Y) and then normalizes by standard deviations to get correlation.
Constructs the standard Z, Z^2 counterexample to show that zero correlation does not imply independence.
Connects the technical limitation of correlation to a practical consequence in financial risk modeling, where nonlinear dependencies cause correlation-based diversification to fail in crises.`,
  },
  {
    id: "d8",
    number: 13,
    title: "Discussion 8: Bayesian vs. Frequentist Interpretations of Probability",
    points: 50,
    type: "discussion",
    objectives: [
      "Distinguish the frequentist and Bayesian interpretations of probability and identify the questions each is well suited to answer.",
      "Evaluate which interpretation is most defensible in a given practical setting and explain the cost of using the other.",
    ],
    reading: `Probability is a mathematical object: a function that assigns numbers to events according to the Kolmogorov axioms. The axioms tell us how probabilities behave, but they do not tell us what probability is. That question is interpretive, not mathematical, and it has divided statisticians and philosophers for centuries.
The two main interpretations are the frequentist and the Bayesian. They agree on the mathematics but disagree on what the numbers mean and what kinds of questions probability can answer.
Frequentist Interpretation
Probability is the long-run frequency of an event in repeated independent trials. P(heads) = 0.5 means: if you flip the coin many times, the proportion of heads approaches 0.5 in the limit. The law of large numbers makes this rigorous: averages converge to expectations under independence.
Strengths:
Objective: anyone observing the same long sequence of trials will arrive at the same probability estimate.
Well-defined for repeatable experiments: coin flips, dice rolls, manufacturing defects, polling.
Provides clean, testable predictions: the observed frequency in a long run either matches the claimed probability or it does not.
Weaknesses:
Many real-world probability claims are not about repeatable experiments. 'The probability the Republican wins the next election is 0.6' cannot be cashed out as a long-run frequency: the election happens once.
Cannot assign probabilities to fixed-but-unknown facts. 'What is the probability that the millionth digit of pi is a 7?' Either it is or it is not; there is no random process being repeated. The frequentist can only say the probability is 0 or 1, never knows which.
Confidence intervals and p-values are routinely misinterpreted by users, who treat them in Bayesian terms even when the underlying theory is frequentist.
Bayesian Interpretation
Probability is a degree of belief: a quantification of an agent's uncertainty about a proposition, given the information available. P(heads) = 0.5 means: given what I know, I am indifferent between betting on heads and betting on tails at even odds. Probabilities can be assigned to any well-defined proposition, including ones about fixed but unknown facts and one-time events. Probabilities can be updated as new information arrives, using Bayes' theorem.
Strengths:
Applies to single events: elections, military operations, scientific hypotheses.
Probabilities about unknown facts (the millionth digit of pi, the truth of a scientific theory) are perfectly meaningful.
Updating with evidence is built into the framework; learning from data is mechanical.
Decision theory under uncertainty integrates naturally with Bayesian probability.
Weaknesses:
Subjective: different agents with the same evidence can assign different probabilities if they have different priors. There is no unique 'right' probability for a proposition.
Choice of prior can dominate the posterior when data is scarce, making conclusions sensitive to potentially arbitrary starting assumptions.
Communication: 'my probability is 0.7' carries less rhetorical force than 'this experiment shows a frequency of 0.7,' even when the situations are otherwise similar.`,
    assignment: `Assignment (50 points):

State three probability claims that are naturally frequentist and three that are naturally Bayesian. Explain why each is more suited to its interpretation.
In each of the following cases, explain whether the interpretation is frequentist, Bayesian, or both, and why: (a) a weather forecaster says 'there is a 70% chance of rain tomorrow'; (b) a manufacturer says 'this part has a 99% reliability rate over 10 years of use'; (c) a juror says 'I am 90% certain the defendant is guilty'; (d) a physicist says 'a radioactive atom has a 0.5 probability of decaying in the next half-life.'
In your view, are the two interpretations compatible (both legitimate in their proper domains), or is one fundamentally correct and the other a substitute used where the right one cannot be applied? Defend your answer.`,
    modelResponse: `Model Response

Frequentist examples:
'A fair die has probability 1/6 of showing a 6.' This is naturally frequentist because the die can be rolled many times under similar conditions, and the frequency of 6 will converge to 1/6 by the law of large numbers.
'The annual mortality rate for adult women in this insurance pool is 0.4%.' Naturally frequentist: it is computed from a large pool of repeated similar events (deaths in a population over time).
'A widget from this factory has a 2% probability of being defective.' Naturally frequentist: many widgets are produced, and the defect rate is a long-run frequency.
Bayesian examples:
'I am 90% confident that the murder suspect is the same person as the man caught on the security camera.' Naturally Bayesian: it is a degree of belief about a single specific question, not a long-run frequency.
'The probability that this scientific theory is true, given the current evidence, is 0.85.' Naturally Bayesian: there is no repeatable experiment in which theories are tested over and over; we are quantifying our confidence in a particular proposition based on accumulated evidence.
'The probability that the next presidential election will be won by the incumbent party is 0.55.' Naturally Bayesian: a single specific event, not a repeatable experiment, but one we can quantify our uncertainty about.
Case-by-case analysis:
(a) Weather forecast (70% chance of rain). This is somewhere between the two interpretations. It can be defended frequentistically: 'over many days I have called 70% chance of rain, about 70% of them have rained' (calibration). It can also be defended Bayesianly: 'given the current atmospheric data, my degree of belief that it will rain tomorrow is 0.7.' Most working forecasters operate in both modes; the philosophical purity is less important than the practical question of whether the forecasts are well-calibrated.
(b) Manufacturer reliability claim (99% over 10 years). Naturally frequentist. The claim is based on testing many parts, observing their failure times, and computing a frequency. A specific part will either fail or not, but the 99% comes from a population of parts.
(c) Juror's certainty (90% guilty). Naturally Bayesian. There is no population of similar cases over which we can compute a frequency; it is a degree of belief about a particular defendant based on the evidence presented. Note that many people find numerical probability claims awkward in legal contexts precisely because the Bayesian interpretation is what is naturally meant, but the law treats 'beyond a reasonable doubt' as if it were a threshold to be crossed rather than a probability.
(d) Radioactive decay probability (0.5 in next half-life). This is the rare case where the two interpretations seem to coincide perfectly. Frequentistically: in a large sample of identical atoms, half will have decayed after one half-life. Bayesianly: my belief about whether this particular atom will decay is 0.5. Quantum mechanics provides an objective probability that both interpretations agree on. Whether this is genuinely objective or whether there is some hidden variable structure underneath is one of the open philosophical questions of physics.
My view on the compatibility question:
I think the two interpretations are compatible, and both are legitimate in their proper domains. They are answering different questions, not competing for the same answer. The frequentist interpretation is about the physical world: what happens in repeated trials of a stable process. The Bayesian interpretation is about an agent's reasoning: how an agent should quantify uncertainty given evidence. These are different things, and both are real.
The conflict between them comes from imperialist tendencies in both camps. Strict frequentists try to make sense of single-event probability claims by talking about 'reference classes' of similar events, which often feels strained. Strict Bayesians try to recover frequentist results as long-run averages of Bayesian beliefs, which works mathematically but loses the practical objectivity that frequentist methods are valued for.
In practice, most working statisticians and scientists use whichever framework fits the problem at hand: frequentist methods for designed experiments and quality control, Bayesian methods for inference under prior knowledge and decision theory. The mathematics is the same; the interpretation changes with the context. Anyone who insists on one interpretation for all situations is paying a real cost in clarity and practical usefulness for the sake of philosophical consistency, and the cost is usually not worth it.
Why This is a Model Response:
Distinguishes naturally frequentist claims (repeatable processes) from naturally Bayesian claims (single events, propositions about fixed unknowns) with clear examples.
Analyzes the weather case as genuinely intermediate, recognizing that real-world claims often blend the two interpretations.
Notices the quantum mechanics case as one where the two interpretations are unusually well aligned and connects this to genuine open questions in physics.
Takes a substantive philosophical position rather than refusing to choose, but defends it pragmatically rather than dogmatically.
Identifies the source of conflict between the camps as imperialist over-extension by both, not genuine incompatibility of the underlying ideas.`,
  },
  {
    id: "tpo",
    number: 14,
    title: "Term Paper Outline Assignment",
    points: 100,
    type: "termpaper",
    objectives: [
      "Identify a defensible question or thesis in probability theory or its applications.",
      "Sketch a coherent paper structure that names the concepts, examples, and arguments you intend to use.",
    ],
    reading: ``,
    assignment: `Assignment (100 points):

Submit a detailed outline for your term paper. The paper itself will be due at the end of the course. The outline should be 600-900 words and should:
Identify a specific question or thesis in probability theory or its applications.
Sketch the structure of your paper: what you will argue, what concepts you will draw on from the course, and what conclusions you expect to reach.
Identify at least one specific real-world application, paradox, or contested claim that the paper will analyze.
List the main probability concepts that will be central to the analysis: distributions, theorems, formulas, etc.
The outline does not need to be a polished essay. It should give the reader a clear sense of where the paper is going and what tools it will use. Bullet points and partial paragraphs are acceptable.`,
    modelResponse: `Model Response

Working Title: Why Risk Models Failed in 2008: The Limits of Normal-Distribution Assumptions in Finance
Thesis
The widespread use of the normal distribution to model asset returns and portfolio risk gave the financial industry a false sense of security in the years before the 2008 financial crisis. Specifically, value-at-risk (VaR) models and copula-based methods for pricing credit derivatives both assumed thin-tailed, weakly correlated distributions. When the crisis arrived, both assumptions were violated simultaneously, and losses occurred at frequencies and magnitudes that the models declared essentially impossible. The paper argues that this was not a freak event but a predictable failure of probability models applied outside their proper domain.
Structure
Section 1: Background on probability distributions in finance. Brief recap of the normal distribution, the central limit theorem, and the rationale for treating asset returns as approximately normal. Discussion of why this assumption is convenient (closed-form formulas, well-understood properties, easy aggregation) and the empirical track record showing it is approximately right in calm market conditions.
Section 2: How risk models use the normal distribution. Detailed discussion of value-at-risk (VaR), the most widely used risk measure in banking. VaR at confidence level alpha is the loss such that there is only an alpha probability of losing more. Under a normal model, VaR is computable from the mean and standard deviation. The paper will show specifically how a daily VaR of, say, 1% under a normal model translates to an expected frequency of about 2.5 days per year with losses worse than the VaR. Compare to actual frequencies observed in the 2007-2009 period.
Section 3: The empirical failure of normality. Stock returns and especially credit-related returns have fat tails: extreme moves are much more common than a normal model predicts. The paper will document this with specific historical episodes: October 19, 1987 (a move so extreme it should occur once every 10^50 years under a normal model), the 1998 LTCM crisis, the 2008 crisis. Discussion of the t-distribution and other fat-tailed alternatives, and why the industry largely did not adopt them despite mounting empirical evidence.
Section 4: The copula problem in CDO pricing. The Gaussian copula model, popularized by David Li, was used to price collateralized debt obligations. The model assumed that the dependence between defaults of different mortgages could be captured by a single correlation parameter. This dramatically underestimated tail dependence: the tendency for defaults to cluster when the economy weakens. In the crisis, default correlations spiked far above the values assumed in the models, and CDO losses were orders of magnitude worse than the models predicted.
Section 5: Why the failure was predictable. The paper will argue that the failures were not a bolt from the blue but were anticipated in the academic literature (Mandelbrot in the 1960s on fat tails, Taleb on the limits of normal-distribution risk modeling). The failure was institutional: thin-tailed models were preferred because they produced confident-sounding numbers, regulatory capital requirements could be easily computed from them, and traders' bonuses depended on showing low VaR. The mathematics did not lie; the institutional incentives drove the choice of mathematics.
Section 6: Conclusions and implications. The paper will conclude that probability theory, properly applied, is one of the most powerful tools in finance, but that the choice of distribution and dependence structure is not a technical detail; it is the most consequential modeling choice. Models built on the central limit theorem and the normal distribution are valid in their domain but fail in the regions that matter most for risk management: the tails. Post-crisis reforms (stressed VaR, expected shortfall, more conservative correlation assumptions in stress scenarios) partly address the issue, but the underlying tension between tractability and realism remains.
Course Concepts to Be Used
Expected value and variance: foundation for risk measures.
Normal distribution: the assumed distribution under attack.
Central limit theorem: the standard justification for normality assumptions.
Joint distributions, correlation, and the limitations of correlation as a dependence measure (from Discussion 7): central to the copula failure.
Conditional probability and Bayesian updating: how risk estimates should have been revised as evidence accumulated.
Tail probabilities and quantiles: the mathematical formulation of VaR.
Specific Real-World Application
The 2008 crisis as a case study. Specific examples will include AIG Financial Products (losses far in excess of VaR estimates), the rapid downgrade and collapse of AAA-rated CDO tranches that were modeled as having effectively zero default probability, and the failure of correlation-based diversification in the days following the Lehman bankruptcy.`,
  },
  {
    id: "tp",
    number: 15,
    title: "Term Paper Assignment",
    points: 100,
    type: "termpaper",
    objectives: [
      "State and defend a clear thesis using at least four major concepts from the course, applied precisely.",
      "Engage seriously with a counterargument and ground the analysis in a concrete real-world case.",
    ],
    reading: ``,
    assignment: `Assignment (100 points):

Write a term paper of 2,500 to 3,500 words on the topic developed in your outline. The paper should:
State a clear thesis and defend it with reasoned argument.
Draw on at least four major concepts from the course, applying them precisely and correctly.
Engage seriously with at least one counterargument or limitation of the position you defend.
Use a real-world example, paradox, or controversy as the central case study.
Be written for an intelligent reader without specialized background in probability or its applications.`,
    modelResponse: `Model Response

Why Risk Models Failed in 2008: The Limits of Normal-Distribution Assumptions in Finance
In the autumn of 2008, the global financial system came closer to collapse than at any time since 1929. Among the many actors implicated in the crisis (mortgage originators, rating agencies, regulators, central banks), one set of actors has received less attention than it deserves: the probability models. The risk-management apparatus of the world's largest banks rested on mathematical models that assigned tiny probabilities to the events that subsequently happened. Either the world is genuinely a stranger place than we thought, or the models were systematically wrong. This paper argues that the models were systematically wrong, and predictably so.
The core failure was the assumption that financial returns are well described by the normal distribution and that dependencies between assets can be captured by a single correlation parameter. Both assumptions are mathematically tractable, both fit reasonably well in calm market conditions, and both fail in exactly the conditions that matter for risk management: the extreme tails of the distribution, where catastrophic losses live. The 2008 crisis was not a freakish black-swan event from outside the models' domain; it was a predictable consequence of misapplying probability theory to a domain that does not satisfy its assumptions.
Background: The Appeal of Normality
The normal distribution is the workhorse distribution of statistics and finance. Its appeal is mathematical: it is fully described by two parameters (mean and standard deviation), it is closed under addition (a sum of independent normals is normal), and it has well-understood quantiles. Under a normal model, 95% of outcomes lie within about two standard deviations of the mean, and 99.7% lie within three. Extreme events, defined as moves of five or more standard deviations, occur with probability less than one in a million.
The theoretical justification for using normal distributions in finance comes from the central limit theorem: if asset returns are sums of many small independent influences, those returns should be approximately normal. Empirically, in calm market conditions, the approximation works reasonably well. Daily stock returns over normal periods do cluster around their mean with the bell-shaped distribution the theory predicts. The historical record of the 1990s and the early 2000s, the period during which modern risk management was institutionalized, was generally well-behaved enough that normal-distribution models gave sensible answers.
Value-at-Risk: A Concrete Example
Value-at-risk, or VaR, is the most widely used risk measure in banking. The VaR at confidence level alpha over a given horizon is the loss such that the probability of losing more than that amount is at most alpha. Daily VaR at 99% confidence is the loss that should be exceeded on at most 1% of days, or roughly 2.5 trading days per year.
Under a normal-distribution model, VaR is easy to compute. If daily returns have standard deviation $\\sigma$, then 99% VaR is approximately 2.33 * $\\sigma$ (where 2.33 is the 99th percentile of the standard normal distribution). A portfolio with daily standard deviation of $10 million has a 99% VaR of about $23.3 million.
This computation made VaR the dominant risk measure in the industry. Regulators built capital requirements around it; traders' positions were monitored against it; portfolio decisions were filtered through it. The number was concrete, comparable across institutions, and easy to compute. What it was not, was correct.
The Empirical Failure of Normality
Asset returns have fat tails. Extreme moves are much more common than a normal model predicts, by many orders of magnitude. The October 19, 1987 crash was a one-day move of about 22% in the S&P 500, equivalent to roughly 25 standard deviations under the volatility regime at the time. Under a normal model, a 25-$\\sigma$ event has probability so small that it should occur once every 10^137 years, vastly longer than the age of the universe. Yet it happened, and similar events have happened repeatedly: the 1998 Russian default and LTCM crisis, the 2008 crash, the August 2015 China-driven sell-off, the March 2020 COVID crash.
The empirical reality is that returns are better described by distributions with heavier tails than the normal: the Student's t-distribution with low degrees of freedom, the stable distributions studied by Mandelbrot in the 1960s, or various mixture models. These distributions assign substantially higher probabilities to extreme moves while still fitting the central region of the distribution well. They are mathematically less convenient (no closed-form quantiles in some cases, more complex aggregation) but empirically better calibrated.
This was known. Mandelbrot published his analysis of fat tails in cotton prices in 1963. Mandelbrot and Taylor analyzed extreme price movements in 1967. Nassim Taleb spent the 1990s and 2000s arguing that the standard normal-based models systematically underestimated tail risk. The intellectual case for moving beyond the normal distribution was made repeatedly. The institutional case for keeping the normal distribution was that it was easier to compute, easier to regulate around, and produced numbers that looked confident.
The Copula Failure in CDO Pricing
The other major failure was in the modeling of dependence between assets. Collateralized debt obligations (CDOs) are securities backed by pools of mortgages. The senior tranches of a CDO are designed to pay out unless an unusually large fraction of the underlying mortgages default. Pricing these tranches requires a model of how mortgage defaults are correlated: do they tend to occur together, or independently?
The dominant approach was the Gaussian copula, popularized in finance by David Li in a 2000 paper. The Gaussian copula models the joint distribution of default times using a multivariate normal structure parameterized by a single correlation matrix. The mathematical elegance is significant: a complex joint distribution is captured by a number that can be estimated from historical data.
In practice, the model was used with low correlation values, typically inferred from the calm housing market of the early 2000s. Under low-correlation assumptions, simultaneous mass defaults are very unlikely. Senior CDO tranches were therefore priced and rated as if they had near-zero default probability. They received AAA ratings, traded at prices reflecting that rating, and were held by banks, pension funds, and other regulated institutions.
When the housing market turned, defaults did not occur at the modeled low-correlation rate. Defaults clustered: borrowers in the same metropolitan area, the same loan vintage, the same lender all began defaulting together. The correlations that mattered were not the low values estimated from calm periods, but the much higher values that emerged in distress. Senior tranches that were modeled as having effectively zero risk turned out to be worthless. AAA-rated structures were downgraded to junk in weeks. Banks holding them lost tens of billions of dollars.
This is a specific manifestation of a general fact about correlation discussed in Discussion 7: correlation measures linear dependence, and is a poor measure of tail dependence. Two assets can have low correlation in normal times and still tend to crash together. The Gaussian copula structurally cannot capture this. Other copulas can (the t-copula, the Clayton copula, and others have heavier tail dependence), but they were not in widespread use, and many were considered too complicated for daily pricing.
Why the Failure Was Predictable
Defenders of the risk-management apparatus sometimes describe 2008 as a black swan: an event so unprecedented that it could not have been anticipated. This is incorrect. The specific timing was not predicted, but the kind of event was anticipated by anyone paying attention to the empirical literature on financial returns. Fat tails had been documented for decades. The limits of correlation-based dependence measures had been argued at length. The cyclical nature of correlations (low in calm times, high in crises) was known in the academic literature and in practitioner circles.
The failure was not intellectual but institutional. Thin-tailed models were preferred because they produced confident-sounding numbers, regulatory capital requirements could be computed from them, and the bonuses of risk managers and traders depended on showing low VaR figures. A bank that adopted a fat-tailed model would have to hold more capital, would report higher risk to regulators, would pay traders less, and would be perceived as taking more risk than competitors using thin-tailed models. The market punished accuracy and rewarded false confidence.
This is a general pattern in the application of probability theory. The mathematics is neutral. The choice of distribution, the choice of dependence structure, the choice of which events to model and which to ignore, are not mathematical questions. They are choices made by people in organizations with incentives. When the incentives reward optimism about tail risk, the chosen models will be optimistic about tail risk, regardless of what the data say.
Counterargument: Were Other Failures More Important?
A reasonable objection: the 2008 crisis was caused primarily by fraud in mortgage origination, by regulatory failures, by reckless leverage at the largest banks, and by the structure of the rating agencies' business model. The probability models were a small part of the story. Even with accurate fat-tailed models, the underlying structural problems would have produced a crisis.
There is truth to this. The probability models were neither the only cause nor the deepest cause of the crisis. Fraud, leverage, and bad regulation were all genuine factors. But the probability models played a specific and important role: they provided the apparatus by which catastrophic risks were quantified as small, and by which institutions persuaded themselves and regulators that they were prudently managed. Without the false comfort of low VaR estimates and near-zero default probabilities for AAA tranches, the leverage levels and the concentration of risk would have been impossible to defend. The probability models did not cause the crisis, but they enabled the conditions under which the crisis became inevitable.
A second objection: in the aftermath, the industry adopted stressed VaR, expected shortfall, and other measures designed to address the failures. The lesson has been learned. Future crises will be different.
This is partly correct but premature. The reforms do address some specific weaknesses of pre-crisis models. Expected shortfall, in particular, captures the average loss in the tail rather than just the threshold, and is a meaningful improvement. Stressed VaR uses parameters from periods of crisis rather than calm periods, addressing the correlation-cyclicality problem. But the underlying tension remains: tractable models tend to be thin-tailed; realistic tail behavior is hard to estimate from limited data; and institutional incentives still favor the models that produce reassuring numbers. The next crisis will probably involve a different specific failure (perhaps in cyber risk, climate-related financial risk, or sovereign defaults) but the same general pattern: probability models built on convenient assumptions, applied confidently outside their domain, will reassure people right up until they fail.
Conclusion
Probability theory is among the most successful intellectual achievements of the last several centuries. Applied properly, it is the indispensable tool for reasoning about uncertainty. But probability theory does not tell you which distribution describes your data, what the correlations among your variables actually are, or what could happen outside the range of your historical sample. These choices are made by modelers, under institutional pressures, and they can be very wrong.
The 2008 financial crisis was an unusually clean illustration of what happens when those choices are made badly. The mathematics did not fail. The central limit theorem still held; Bayes' theorem still worked; the variance formula was still correct. What failed was the assumption that asset returns are normally distributed and that dependencies can be captured by a single correlation parameter. Both assumptions were known to be wrong, both were maintained because they were convenient, and the cost of maintaining them turned out to be substantial.
The deeper lesson is one of intellectual humility about probability models. A model is not the world. The numbers it produces are only as good as the assumptions it rests on, and those assumptions are usually about the tails of the distribution, which are exactly the regions where data is sparse and judgment must take over from estimation. Where probability theory is applied to high-stakes decisions, the choice of distribution, the choice of dependence structure, and the willingness to consider events outside the historical sample are the most consequential modeling decisions. They are also the ones most likely to be made for institutional rather than empirical reasons. Until that incentive structure changes, future failures of the kind that occurred in 2008 are not just possible but likely, regardless of how mathematically sophisticated the risk management apparatus becomes.`,
  },
];

export function moduleById(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}

export function moduleIndexById(id: string): number {
  return modules.findIndex((m) => m.id === id);
}
