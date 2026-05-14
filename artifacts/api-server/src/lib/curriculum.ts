// AUTO-GENERATED from attached_assets/Clean_MacroEcon_101_Course_Book.docx — verbatim curriculum content.

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
    title: "Discussion 1: What Does GDP Actually Measure?",
    points: 50,
    type: "discussion",
    objectives: [
      "Identify what GDP includes and excludes, and explain the reasoning behind those national-accounts conventions.",
      "Evaluate the claim that GDP is a defensible proxy for national well-being.",
    ],
    reading: `Gross Domestic Product (GDP) is the total market value of all final goods and services produced within a country's borders during a specified period, usually a year or a quarter. It is the headline number of macroeconomics.

There are three equivalent ways to compute GDP:
- The expenditure approach: GDP = C + I + G + (X - M), where C is consumption, I is investment, G is government purchases, and (X - M) is net exports.
- The income approach: sum all wages, rents, interest, and profits earned in production.
- The production approach: sum the value added at each stage of production across all firms.

Key distinctions:
- Nominal GDP measures output at current prices. Real GDP measures output at constant prices, so it strips out inflation.
- GDP counts final goods only. Intermediate goods (steel sold to a carmaker) are excluded to avoid double-counting.
- GDP counts production inside a country. GNP (Gross National Product) counts production by a country's nationals, wherever located.
- GDP does not count: household production, volunteer work, the underground economy, or non-market environmental damage.`,
    assignment: `Assignment (50 points):
1. State whether each of the following would be included in U.S. GDP, and explain why or why not:
   a. A used car sold by one private owner to another
   b. A new car manufactured in Tennessee by Nissan (a Japanese firm)
   c. A bottle of French wine purchased by a U.S. consumer
   d. Unpaid childcare provided by a parent
   e. The sale of corporate bonds issued by Apple
2. Explain one major thing that GDP fails to measure that you believe matters for human welfare. Argue for or against the proposition that GDP is a defensible proxy for national well-being.`,
    modelResponse: `Model Response

GDP inclusions and exclusions:

a. The used car sale is NOT counted in current GDP. The car was already counted in GDP during the year it was produced. Including it now would be double-counting. However, any dealer commission or service fee charged on the resale IS counted, because that service is being produced in the current period.

b. The Nissan car manufactured in Tennessee IS counted in U.S. GDP. GDP is a measure of production within a country's geographic borders, regardless of who owns the firm. It would not be counted in Japan's GDP. The profits sent back to Japan would, however, reduce U.S. GNP relative to U.S. GDP.

c. The French wine is NOT counted in U.S. GDP. It was produced in France and so contributes to French GDP. In the U.S. national accounts, it appears as an import, which enters with a negative sign in the expenditure equation: C goes up when the consumer buys the wine, but M goes up by the same amount, so the net contribution to GDP is zero.

d. Unpaid childcare is NOT counted in GDP. Only market transactions are counted. This is a well-known limitation: paid daycare counts, but the same childcare provided by a parent does not. This produces strange artifacts. If two parents care for each other's children and pay one another, GDP rises; if they each care for their own, GDP does not change.

e. The sale of corporate bonds is NOT counted in GDP. Financial transactions transfer ownership of claims; they do not produce goods or services. What IS counted is the underwriting and brokerage fees charged by the investment banks. Those fees are payment for a financial service produced in the current period.

What GDP fails to measure:

GDP omits environmental degradation, depletion of natural resources, leisure time, the distribution of income, household production, and the quality of goods produced. Two countries with identical GDPs may differ enormously in welfare. A country that produces $20 trillion by clear-cutting its forests is treated identically to one that produces $20 trillion through sustainable industry, even though the first is consuming its capital stock.

My position: GDP is a defensible proxy for one thing only, namely the market value of current production. It was designed in the 1930s by Simon Kuznets for precisely that purpose, and Kuznets himself warned Congress that 'the welfare of a nation can scarcely be inferred from a measure of national income.' Treating GDP as a measure of well-being is a category error. It is roughly like measuring the health of a person by counting the calories they consume: more is not always better, and the composition matters as much as the total. A serious measure of welfare would need to incorporate distribution (a Gini coefficient or a median rather than a mean), environmental accounts (depletion treated as a negative investment), and non-market production. The Human Development Index and the Genuine Progress Indicator are attempts at this. None has displaced GDP, because GDP has the advantage of being computable from existing tax and business records, while welfare indices require value judgments about which factors to weight and how. GDP is useful precisely because it is narrow.`,
  },
  {
    id: "e1",
    number: 2,
    title: "Essay 1: Inflation and the Quantity Theory of Money",
    points: 50,
    type: "essay",
    objectives: [
      "Explain the equation of exchange (MV = PY) and what it predicts about money and inflation.",
      "Analyze the 2021-2023 U.S. inflation episode and evaluate Friedman's claim that inflation is always a monetary phenomenon.",
    ],
    reading: `Inflation is a sustained increase in the general price level. It is measured by index numbers such as the Consumer Price Index (CPI), the Producer Price Index (PPI), and the GDP deflator.

The classical explanation of inflation is the Quantity Theory of Money, captured in the equation of exchange:

MV = PY

Where M is the money supply, V is the velocity of money (the number of times a unit of currency changes hands per period), P is the price level, and Y is real output.

If V and Y are roughly stable, then changes in M translate directly into changes in P. This is the foundation of Milton Friedman's famous claim that 'inflation is always and everywhere a monetary phenomenon.'

Modern macroeconomists distinguish:
- Demand-pull inflation: aggregate demand outstrips the productive capacity of the economy.
- Cost-push inflation: supply shocks (oil prices, supply chains) raise production costs, which firms pass through to prices.
- Built-in or expectations-driven inflation: workers demand higher wages because they expect higher prices, and firms raise prices because they expect higher wages. The expectation becomes self-fulfilling.`,
    assignment: `Assignment (50 points):
Write a 600-800 word essay addressing the following:

1. Explain the equation of exchange (MV = PY) and what it predicts about the relationship between the money supply and inflation.
2. Discuss the U.S. inflation episode of 2021-2023. Was it primarily demand-pull, cost-push, or expectations-driven? Defend your answer with reference to specific events (fiscal stimulus, supply chain disruptions, energy shocks, labor markets).
3. Evaluate Friedman's claim that inflation is always a monetary phenomenon. Is the 2021-2023 episode consistent with that claim, or does it require modification?`,
    modelResponse: `Model Response

The Equation of Exchange and the 2021-2023 Inflation

The equation of exchange, MV = PY, is an accounting identity. The total spending in an economy (M times V, the money supply times how fast it circulates) must equal the total nominal value of output (P times Y, the price level times real output). The identity becomes a theory only when assumptions are made about its terms. The classical Quantity Theory assumes that V is stable in the short run because it is governed by institutional features (payment habits, banking technology) that change slowly, and that Y is determined by real factors (technology, labor, capital) independent of M. Under those assumptions, percentage changes in M translate directly into percentage changes in P. Double the money stock, and the price level doubles.

The U.S. inflation of 2021-2023 was the largest sustained inflation since the early 1980s. Headline CPI peaked at 9.1% year-over-year in June 2022, having sat near 2% for the previous decade. The causes were not monocausal.

On the demand side, the federal government injected roughly $5 trillion in pandemic-era fiscal stimulus between March 2020 and March 2021, the largest peacetime fiscal expansion in U.S. history. The Federal Reserve simultaneously expanded its balance sheet from $4 trillion to nearly $9 trillion. M2 grew by approximately 40% between February 2020 and early 2022, an unprecedented monetary expansion. Households accumulated roughly $2.5 trillion in excess savings, and when the economy reopened, they spent it. Aggregate demand surged.

On the supply side, the same period saw extraordinary disruptions. Global shipping container costs rose by a factor of six. Semiconductor shortages crippled auto production, driving used car prices up by 40% in 2021 alone. The Russian invasion of Ukraine in February 2022 sent energy and grain prices sharply higher; European natural gas reached ten times its pre-pandemic level. These were textbook cost-push shocks.

Expectations played a smaller role than in the 1970s, partly because the Fed retained credibility and moved aggressively. The fastest rate-hiking cycle since Volcker (525 basis points in 18 months) brought five-year inflation expectations back into the 2-3% range even before inflation itself had fully normalized.

My assessment: the 2021-2023 episode was primarily a collision of demand-pull inflation (driven by combined fiscal and monetary expansion meeting reopening demand) with cost-push shocks (supply chains and energy). The two reinforced each other. Excess demand made it easier for firms to pass through supply-side cost increases, because customers had the cash and the willingness to pay. A pure supply shock in a weak demand environment, as in 2008-2009 or in 2015 oil price spikes, tends not to produce sustained inflation because firms cannot raise prices without losing customers. In 2021-2022, they could.

Friedman's claim survives in modified form. Inflation is always a monetary phenomenon in the trivial sense that sustained increases in P require sustained increases in M (or compensating drops in real output). Without the monetary and fiscal expansion of 2020-2021, the supply shocks alone would likely have produced a one-time price level adjustment, not the sustained inflation we observed. Conversely, monetary expansion in 2009-2014 did not produce inflation, partly because velocity collapsed: banks held reserves rather than lending them out, so MV did not rise. This is the major modification Friedman's framework requires. The equation MV = PY remains an identity, but V is not stable. It is endogenous to the financial system's appetite for risk and the public's appetite for transactions. Modern monetary theorists and post-Keynesians have made much of this. The 2021-2023 episode shows that when M expands AND V holds up (or rises) AND supply is constrained, the result is exactly what the Quantity Theory predicts. Friedman was right about the mechanism, but the timing depends on the behavior of velocity, which the original theory did not adequately address.`,
  },
  {
    id: "d2",
    number: 3,
    title: "Discussion 2: Types of Unemployment and the Natural Rate",
    points: 50,
    type: "discussion",
    objectives: [
      "Distinguish frictional, structural, and cyclical unemployment and apply the categories to concrete cases.",
      "Evaluate the usefulness of the headline unemployment rate as an indicator of labor-market health.",
    ],
    reading: `Unemployment is the condition of being available for work, actively seeking work, and not currently employed. The unemployment rate is the number of unemployed persons divided by the labor force.

Economists distinguish three primary types:
- Frictional unemployment: short-term unemployment as workers move between jobs. New graduates, people who have just quit one job to find a better one, and workers in transition. This is unavoidable and arguably beneficial; it represents a healthy reallocation of labor.
- Structural unemployment: a mismatch between worker skills and the jobs that exist. Coal miners in West Virginia after the coal industry's decline. Auto workers in Detroit after the rise of automation. This is more persistent and harder to address.
- Cyclical unemployment: the unemployment that rises during recessions and falls during expansions. This is what monetary and fiscal policy aim to reduce.

The 'natural rate of unemployment' is the level of unemployment that exists when cyclical unemployment is zero. It is the sum of frictional and structural unemployment. In the U.S., it is typically estimated at 3.5-4.5%.

The labor force participation rate (LFPR) is the percentage of the working-age population in the labor force. It can fall when discouraged workers stop looking for work, in which case the unemployment rate drops without any improvement in employment.`,
    assignment: `Assignment (50 points):
1. Classify each of the following as frictional, structural, or cyclical unemployment:
   a. A 22-year-old college graduate looking for her first job
   b. A travel agent laid off because customers now book online
   c. A construction worker laid off during the 2008-2009 recession
   d. A coal miner in Appalachia after the closure of a mine
   e. A software engineer who quit to look for a higher-paying position
2. The official U.S. unemployment rate was 3.7% in late 2023, near a 50-year low. Yet many commentators argued that the labor market was 'unhealthy.' What features of the labor market could be missed by looking only at the headline unemployment rate? In your view, is the unemployment rate a useful indicator?`,
    modelResponse: `Model Response

Classifications:

a. Frictional. New graduates entering the labor market for the first time are searching for a match. They are not unemployed because of an economy-wide downturn or because their skills have become obsolete. They are unemployed because the search process takes time.

b. Structural. The travel agent's skills have been made obsolete by a technological shift. The job category has shrunk permanently. Reemployment will require either retraining or accepting a job in a different field.

c. Cyclical. Construction employment is highly sensitive to the business cycle. In the 2008-2009 recession, residential construction collapsed by roughly 50%. When the economy recovered, much of this unemployment reversed.

d. Structural. The decline of the coal industry reflects long-run shifts in energy markets (cheap natural gas, environmental regulation) rather than a temporary downturn. Coal mining employment is unlikely to recover even when the economy is at full capacity.

e. Frictional. The software engineer is voluntarily transitioning between jobs. This is the textbook case of frictional unemployment: a worker briefly between employment relationships, searching for a better match.

Why the headline rate can mislead:

The headline unemployment rate (U-3, in BLS terminology) is the narrowest measure. It excludes several important groups. Discouraged workers, who have given up looking, are not counted as unemployed because they are not in the labor force. The U-6 measure includes them along with workers employed part-time who would prefer full-time work; U-6 is typically 2-3 percentage points higher than U-3.

The labor force participation rate is the more revealing number in many cases. In late 2023, the U.S. LFPR was 62.7%, well below its 2000 peak of 67.3%. Some of this decline is demographic (boomer retirement), but a substantial portion reflects working-age men who have permanently left the labor force, often for reasons connected to opioid addiction, disability, and incarceration history. A society where the unemployment rate is low because millions of people have stopped trying is not the same as a society at full employment.

Other features the headline rate misses: wage growth (a tight labor market should produce wage gains; if it does not, the tightness is suspect), the quits rate (high quits indicate worker confidence; low quits indicate fear), and underemployment (a PhD driving rideshare is technically employed).

My view: the unemployment rate is useful but insufficient. It is best understood as one component of a labor market dashboard that includes LFPR, the employment-to-population ratio, U-6, real wage growth, and the quits rate. The 2023 labor market was genuinely tight by most of these measures, with wage growth at the bottom of the distribution outpacing inflation and quits remaining elevated. But the headline rate, taken in isolation, is a misleading metric in any period when participation is unusual. A country can have 'low unemployment' that is genuinely tight, or 'low unemployment' that conceals mass exit. Distinguishing the two requires looking past the headline.`,
  },
  {
    id: "e2",
    number: 4,
    title: "Essay 2: Fiscal Policy and the Multiplier",
    points: 50,
    type: "essay",
    objectives: [
      "Explain the logic of the fiscal multiplier and why it varies with economic conditions.",
      "Compare the 2009 ARRA and the 2021 ARP and evaluate when fiscal stimulus is and is not effective.",
    ],
    reading: `Fiscal policy is the use of government spending and taxation to influence aggregate demand. It is one of the two main tools of macroeconomic stabilization, alongside monetary policy.

The fiscal multiplier is the ratio of the change in GDP to the change in government spending (or in tax revenue). The classical Keynesian multiplier is:

Multiplier = 1 / (1 - MPC)

Where MPC is the marginal propensity to consume. If households spend 80 cents of each additional dollar of income (MPC = 0.8), the multiplier is 5. A $100 billion increase in spending produces $500 billion in GDP.

Real-world multipliers are smaller, for several reasons:
- Crowding out: government borrowing raises interest rates, which reduces private investment.
- Imports: spending leaks abroad through purchases of foreign goods.
- Taxes: each round of spending generates tax payments that withdraw from circulation.
- Ricardian equivalence: if households anticipate higher future taxes to repay the debt, they save more now, offsetting the spending.

Empirical estimates of the multiplier vary widely. In recessions with slack capacity and accommodative monetary policy, multipliers above 1 are commonly observed. At full employment with constrained monetary policy, multipliers below 1 (or even negative) are possible.`,
    assignment: `Assignment (50 points):
Write a 600-800 word essay addressing the following:

1. Explain the logic of the fiscal multiplier and why it varies with economic conditions.
2. Compare two episodes of large U.S. fiscal stimulus: the American Recovery and Reinvestment Act of 2009 (~$800 billion in response to the financial crisis) and the American Rescue Plan of 2021 (~$1.9 trillion in response to the pandemic). What were the relevant economic conditions? Did the stimulus appear to multiply or crowd out?
3. Evaluate the claim that fiscal stimulus is only effective during deep recessions, not during normal times.`,
    modelResponse: `Model Response

The Fiscal Multiplier in Two Recoveries

The fiscal multiplier is a measure of how far a dollar of government spending travels through the economy. If the government pays a contractor to build a bridge, the contractor pays workers, the workers spend at restaurants, the restaurants pay suppliers, and so on. Each round of spending is smaller than the last because some income is saved, some is taxed away, and some is spent on imports. The infinite geometric series 1 + MPC + MPC^2 + ... converges to 1/(1-MPC), which is the textbook multiplier. With MPC = 0.6, the multiplier is 2.5.

Why the multiplier varies: in a recession with unemployed workers and idle factories, an extra dollar of spending mobilizes real resources that would otherwise sit unused. The bridge gets built without bidding workers away from other projects. At full employment, the same dollar bids resources away from private use. The bridge gets built but a factory expansion does not, because workers and materials had only one place to go. Monetary policy matters too. If the central bank holds interest rates constant in the face of fiscal expansion, the multiplier is larger; if the central bank raises rates to offset the stimulus, the multiplier is smaller.

The 2009 ARRA was passed when U.S. unemployment was 7.8% and rising (it peaked at 10% later that year). Real GDP had contracted by 4% over the prior four quarters. The Federal Reserve was at the zero lower bound and had already moved to quantitative easing. Capacity utilization was below 70%. This was the textbook case for large multipliers: massive slack, accommodative monetary policy, and households eager to repair damaged balance sheets only if they had the income to do so. Estimates of the ARRA multiplier vary, with the CBO putting it in the range of 0.6 to 2.5 depending on the spending category. Direct transfers and aid to states had the highest multipliers; tax cuts for high-income households had the lowest, because high-income households save more of each marginal dollar. The CBO estimated ARRA added 1.5 to 3.3 percentage points to real GDP growth in 2010.

The 2021 American Rescue Plan was a different animal. It was passed when unemployment was 6.2% and falling rapidly, the Fed was again at the zero lower bound, and household balance sheets were unusually strong (because the prior pandemic stimulus had been saved). At $1.9 trillion, it was more than twice the size of ARRA in nominal terms, on top of $3 trillion in prior pandemic legislation. Larry Summers and Olivier Blanchard, both Democrats, warned in early 2021 that the package was 'three or four times the size' of the output gap and would produce inflation pressures the Fed would struggle to contain.

They were right. The 2021 multiplier on incremental output appears to have been low and to have spilled mostly into prices rather than real output. By the time the ARP money was being spent, the economy was already approaching capacity, and additional demand could not be absorbed by real output expansion. The result, combined with supply shocks, was the 2021-2023 inflation.

The comparison illustrates the central point: the same dollar of stimulus does very different things in different conditions. ARRA in 2009, applied to a deeply slack economy with cooperative monetary policy, was probably under-sized given the magnitude of the demand shortfall. ARP in 2021, applied to a rapidly tightening economy with monetary policy constrained by the zero lower bound, was over-sized.

Evaluation of the broader claim: it is too strong to say fiscal stimulus 'only' works in deep recessions, but it is correct that the case for fiscal stimulus weakens sharply as slack disappears. In a recession, fiscal policy is among the most powerful tools available, particularly when monetary policy is constrained. In a normal expansion, fiscal expansion mostly displaces private spending or causes inflation, depending on the credibility of the central bank's response. At full employment, the rationale for fiscal policy shifts from stabilization (smoothing the business cycle) to allocation (building public goods that the market underprovides). Those are legitimate roles, but they are not stimulus, and they should not be sold as such. The lesson of the two episodes is that economists need to talk about fiscal policy in terms of capacity utilization and monetary regime, not as a universally applicable demand-management tool. Stimulus is medicine for an economy that is sick. Medicine for a healthy person is a side-effect machine.`,
  },
  {
    id: "d3",
    number: 5,
    title: "Discussion 3: How Central Banks Conduct Monetary Policy",
    points: 50,
    type: "discussion",
    objectives: [
      "Trace at least three distinct channels by which a policy rate change affects inflation.",
      "Evaluate whether the 2022-2023 disinflation was a Fed-engineered soft landing or driven by other factors.",
    ],
    reading: `Central banks (the Federal Reserve in the U.S., the European Central Bank, the Bank of England, the Bank of Japan) influence the economy primarily through interest rates and the size of their balance sheets.

Traditional tools:
- Open market operations: buying or selling government securities to expand or contract the money supply.
- The discount rate (or analogous lending rate): the rate at which the central bank lends directly to commercial banks.
- Reserve requirements: the fraction of deposits banks must hold as reserves. Largely defunct in the U.S. since 2020.

Post-2008 tools:
- Interest on reserves (IORB): the rate the central bank pays banks on the reserves they hold at the central bank. This has become the primary policy rate in the modern 'floor system.'
- Quantitative easing (QE): large-scale purchases of long-term securities to lower long-term interest rates when the short-term rate is already at zero.
- Forward guidance: commitments about the future path of policy, intended to influence expectations.

The transmission mechanism: lower policy rates lower borrowing costs for firms and households, raise asset prices (bonds, stocks, real estate), weaken the currency (boosting exports), and stimulate aggregate demand. Higher rates do the reverse.

The dual mandate of the Federal Reserve, established by Congress, is 'maximum employment' and 'stable prices.' When these conflict (as in 2021-2023, when inflation was high but employment was strong), the Fed must choose.`,
    assignment: `Assignment (50 points):
1. Suppose the central bank wishes to combat inflation. Walk through, step by step, how raising the policy interest rate is supposed to translate into lower inflation. Identify at least three distinct channels.
2. The 2022-2023 Fed tightening cycle raised rates by 525 basis points in 18 months, the fastest pace since 1980. Despite this, GDP did not contract and unemployment remained near 50-year lows. Inflation nonetheless fell substantially. Was this a 'soft landing' produced by the Fed, or was something else going on? Defend your interpretation.`,
    modelResponse: `Model Response

Transmission from rate hikes to lower inflation:

Channel 1: the interest rate channel (direct). Higher policy rates raise borrowing costs across the economy. Mortgage rates rise, so housing demand cools and home prices stabilize or fall. Auto loan rates rise, so car purchases weaken. Business loan rates rise, so capital expenditure plans are deferred. Lower demand for these goods reduces price pressure. The shelter component of CPI, which has a long lag, eventually reflects the easing of rent and home price increases.

Channel 2: the asset price and wealth channel. Higher rates lower the present value of future cash flows, which depresses stock prices and bond prices. Households whose wealth declines reduce consumption (the wealth effect). With less consumption demand, firms find it harder to raise prices.

Channel 3: the exchange rate channel. Higher domestic interest rates attract foreign capital, which strengthens the domestic currency. A stronger dollar makes imports cheaper, which directly reduces CPI (since import prices feed into the index) and forces domestic firms to compete with cheaper foreign goods.

Channel 4 (often cited separately): expectations. If the central bank is credible, the public believes that high inflation will be tamed and adjusts wage demands and pricing decisions accordingly. This can be the fastest channel of all, but it requires the central bank to have earned credibility through past behavior.

Channel 5: the credit channel. Higher rates tighten lending standards. Banks become more cautious about who they lend to, and risk premia widen. This reduces the supply of credit beyond what the rate change alone would imply, particularly hitting small businesses and lower-income borrowers.

Was 2022-2023 a soft landing produced by the Fed?

Partially. The Fed deserves credit for moving quickly once it became clear that 2021 inflation was not transitory. The speed of the tightening (525 bp in 18 months) anchored long-run inflation expectations, which never broke significantly above 3% in the five-year-five-year forward measure. This is itself a major achievement; it is what failed in the 1970s.

However, three factors made the disinflation less costly than the historical Phillips curve relationship would predict, and these factors were largely independent of Fed policy.

First, supply chains healed. Container shipping costs fell roughly 80% from peak. Semiconductor production normalized. Energy prices fell from the post-Ukraine-invasion peak. A substantial part of 2021-2022 inflation was supply-side, and supply shocks reverse on their own as the disruptions resolve. The Fed did not heal supply chains; time did.

Second, labor force participation rose. Workers who had left during the pandemic came back, particularly prime-age workers and women. Immigration also picked up sharply in 2022-2023, adding labor supply. This expanded the supply side without requiring the demand-side destruction that a Phillips-curve mechanism would imply.

Third, fiscal policy turned contractionary as pandemic programs expired, even as the Fed was tightening. The two policies pushed in the same direction, which is unusual and helpful.

My interpretation: the 2022-2023 episode was not a pure soft landing produced by monetary policy. It was a combination of (a) competent and aggressive Fed action that prevented expectations from unanchoring, (b) the natural healing of supply shocks, and (c) labor supply expansion. If the Fed had hiked aggressively into a pure demand-driven inflation with no supply healing, unemployment would have had to rise much more. The 'immaculate disinflation' was real, but it depended on supply-side factors the Fed did not control. This is consistent with the empirical pattern: most successful disinflations in modern history have involved favorable supply developments coinciding with restrictive monetary policy. Pure demand-killing disinflations, like Volcker's, produce much larger recessions. Powell got lucky as well as good, and the two are easy to confuse in retrospect.`,
  },
  {
    id: "e3",
    number: 6,
    title: "Essay 3: The Phillips Curve and the Lucas Critique",
    points: 50,
    type: "essay",
    objectives: [
      "Explain the original and expectations-augmented Phillips curves and what the 1970s revealed.",
      "Evaluate whether the flattening and re-steepening of the Phillips curve in the 2010s and 2020s confirms or refutes the Lucas Critique.",
    ],
    reading: `The Phillips Curve, introduced by A.W. Phillips in 1958, describes an empirical inverse relationship between unemployment and wage inflation. Lower unemployment corresponds to higher wage inflation, and the curve appeared remarkably stable in U.K. data from 1861 to 1957.

In the 1960s, Samuelson and Solow popularized the Phillips curve as a policy menu: by accepting higher inflation, policymakers could permanently reduce unemployment.

Friedman (1968) and Phelps (1967) argued this was wrong. The trade-off was only temporary. Workers and firms would eventually incorporate expected inflation into wage and price decisions, and the Phillips curve would shift up to deliver the same unemployment rate at a higher inflation rate. This led to the expectations-augmented Phillips curve:

Actual inflation = Expected inflation + Phillips trade-off term

The 1970s confirmed Friedman and Phelps. Inflation and unemployment rose together (stagflation), contradicting the original Phillips relationship.

Robert Lucas (1976) went further with his Lucas Critique: any policy rule that exploits a historical statistical relationship will itself change the relationship, because economic actors will adjust their expectations and behavior in anticipation of the policy. The Phillips curve, in Lucas's view, was not a structural feature of the economy but a reduced-form artifact of a particular monetary regime.`,
    assignment: `Assignment (50 points):
Write a 700-900 word essay addressing the following:

1. Explain the original Phillips Curve and the expectations-augmented version. What did the 1970s show?
2. Explain the Lucas Critique. Why does it cast doubt on the use of historical statistical relationships for policy?
3. The Phillips curve appeared 'flat' (low unemployment with low inflation) during the 2010s, then steepened dramatically in 2021-2023. Evaluate whether this confirms or refutes the Lucas Critique.`,
    modelResponse: `Model Response

The Phillips Curve and the Lucas Critique

The original Phillips Curve was an empirical observation. Looking at British data from 1861 to 1957, Phillips noticed that years with low unemployment were also years with high wage inflation. The relationship was striking and stable. Samuelson and Solow, working with U.S. data, found the same pattern and presented it as a menu for policymakers: accept 4% inflation and you can have 3% unemployment; accept 2% inflation and you must accept 5% unemployment. Pick your point.

Friedman and Phelps independently argued in the late 1960s that this menu was an illusion. The Phillips relationship held in the data because economic actors had not yet adjusted their expectations. If the central bank decided to permanently run higher inflation, workers would notice, anticipate the same in the future, and demand wage increases to compensate. Firms would build the expected inflation into their pricing. The Phillips curve would shift upward, and the original trade-off would vanish at the new, higher inflation rate. The only Phillips trade-off that exists is between unemployment and unexpected inflation. The natural rate of unemployment, in this view, is independent of the inflation rate in the long run.

The 1970s settled the dispute. Inflation rose from below 2% in the mid-1960s to over 13% by 1980. Unemployment rose alongside it, reaching 9% in 1975 and again above 7% through much of the 1970s. The stagflation of the 1970s was incomprehensible on the original Phillips view (high inflation should have produced low unemployment) but exactly what the expectations-augmented version predicted: a shifted Phillips curve, with the same natural rate of unemployment but a higher inflation rate baked into expectations.

The Lucas Critique pushed the argument further. Robert Lucas argued in 1976 that any econometric model estimated on historical data implicitly assumes that the policy regime is constant. The estimated coefficients are reduced-form expressions of underlying behavior, which itself depends on the policy regime agents expect to be in. Change the policy, and the coefficients change. The Phillips curve estimated under Volcker's regime should not have been expected to hold under Greenspan's, and the Phillips curve estimated during the Great Moderation should not have been expected to hold during pandemic policy.

This is a profound point. It means that policy analysis based on historical statistical relationships is unreliable for any substantial change in policy. The relationships are conditional on the regime, not structural. To do policy analysis properly, the Lucas Critique implies, one needs models grounded in optimizing behavior with rational expectations, where the agents in the model reoptimize whenever the policy rule changes. This is the foundation of modern dynamic stochastic general equilibrium (DSGE) modeling.

The 2010s and 2020s offer a remarkable test. From roughly 2012 to 2019, U.S. unemployment fell from 8% to 3.5%, and inflation stayed near or below 2% the entire time. The Phillips relationship looked dead; the curve appeared flat. Economists wrote papers titled 'Where Is the Inflation?' and concluded that perhaps the natural rate had fallen, or globalization had broken the wage-price spiral, or anchored expectations had simply absorbed any demand pressures.

Then 2021 arrived. With unemployment around 4% and falling, inflation surged to 9%. The Phillips curve, dormant for a decade, suddenly produced a steep response. It was as if the curve had been hibernating and woke up. Economists wrote new papers explaining what had been hidden.

Does this confirm or refute the Lucas Critique? It confirms it strongly. The Phillips curve looked flat in the 2010s because expectations were firmly anchored at 2%. Demand fluctuations did not move inflation much, because firms and workers believed the Fed would offset any sustained deviation. The flatness was a feature of the policy regime (a credible inflation-targeting central bank), not a structural feature of the economy. When the regime changed in 2020-2021 (massive coordinated fiscal-monetary stimulus, with the Fed initially declaring inflation 'transitory' and not responding), expectations began to drift. With expectations less firmly anchored, the Phillips relationship reasserted itself in classical form: tight labor markets produced wage inflation, which produced price inflation, which fed back into expectations.

Then the Fed, late but eventually credible, hiked aggressively and re-anchored expectations. The Phillips curve flattened again. Inflation fell substantially while unemployment barely budged. By 2024-2025, the curve looked flat once more.

What Lucas got exactly right: there is no stable Phillips curve to exploit. There is a relationship between unemployment and inflation, but its shape depends entirely on the credibility of the monetary regime and the state of expectations. A central bank that tries to systematically exploit the Phillips trade-off will destroy the very relationship it is trying to exploit. The only stable strategy is to anchor expectations through credible commitment to a target. Once you have done that, the trade-off looks flat in normal times and steep only when the anchor slips. The Phillips curve is real, but it is not a policy menu. It is a measure of how well a central bank has done its job. A well-anchored regime gets a flat curve. A poorly anchored one gets the 1970s.`,
  },
  {
    id: "d4",
    number: 7,
    title: "Discussion 4: Comparative Advantage and Trade Deficits",
    points: 50,
    type: "discussion",
    objectives: [
      "Use comparative advantage and the saving-investment identity to explain why trade deficits are not by themselves a sign of weakness.",
      "Trace the effects of import tariffs on consumers, workers, input-using industries, and the trade balance.",
    ],
    reading: `David Ricardo's theory of comparative advantage (1817) is one of the most counter-intuitive results in economics. It states that two countries can both gain from trade even if one country is more productive than the other in every good. What matters for trade is not absolute advantage but the relative (opportunity) cost of producing different goods.

Example: Suppose Country A can produce 10 cars or 100 bushels of wheat with a given amount of labor. Country B can produce 4 cars or 60 bushels of wheat. Country A is absolutely more productive in both goods. But the opportunity cost of a car in Country A is 10 bushels of wheat; in Country B, it is only 15 bushels. Country B has a comparative advantage in cars (relative to wheat), and Country A has a comparative advantage in wheat. If A specializes in wheat and B in cars, and they trade at any ratio between the two opportunity costs, both countries end up with more of both goods than they could produce in isolation.

The trade balance: exports minus imports. A trade deficit means a country imports more than it exports; a trade surplus means the reverse. The U.S. has run trade deficits continuously since the mid-1970s.

By accounting identity, the current account (roughly the trade balance) must equal the difference between national saving and national investment:

Current Account = (S - I)

Where S is national saving and I is national investment. A country that invests more than it saves must, by identity, import the difference. This is one of the most under-appreciated relationships in macroeconomics.`,
    assignment: `Assignment (50 points):
1. The United States has run persistent trade deficits for nearly 50 years. Common political rhetoric describes this as evidence that 'America is losing' in trade. Using comparative advantage AND the saving-investment identity, explain why a trade deficit is not, by itself, a sign of economic weakness. What WOULD be a sign of weakness?
2. Suppose the U.S. imposes tariffs on all imports from China. Trace through the likely effects on: (a) U.S. consumers, (b) U.S. workers in industries that compete with Chinese imports, (c) U.S. workers in industries that use Chinese imports as inputs, (d) the U.S. trade deficit. Does the tariff achieve its stated goal of reducing the trade deficit?`,
    modelResponse: `Model Response

Why a trade deficit is not by itself a sign of weakness:

First, the comparative-advantage argument. The United States is more productive than most of its trading partners in absolute terms. According to Ricardo's logic, the U.S. should specialize in goods where its productivity advantage is largest (high-tech services, software, finance, pharmaceuticals, aerospace, advanced manufacturing) and import goods where its advantage is smaller (textiles, simple manufactured goods, low-end electronics). The fact that the U.S. imports T-shirts from Bangladesh and exports Boeing jets is exactly what comparative advantage predicts. The alternative, producing T-shirts domestically, would require pulling labor and capital away from higher-value uses. The trade deficit reflects the U.S. specializing in the right things.

Second, the saving-investment identity. The U.S. runs a trade deficit because it invests more than it saves. The deficit is financed by foreigners holding U.S. financial assets: Treasury bonds, corporate stock, real estate. From this perspective, the trade deficit is the mirror image of foreigners wanting to hold U.S. assets. They earn dollars by selling us goods, and they choose to hold those dollars (and dollar-denominated assets) rather than spending them on U.S. exports. This reflects the desirability of U.S. assets, not a weakness.

The political claim 'we are losing' confuses the trade account with a profit-and-loss statement. A grocery store has a 'trade deficit' with its suppliers (it buys more from them than it sells to them) and a 'trade surplus' with its customers. Nobody thinks the store is losing because it buys vegetables from a farm without selling lawyers in return. Bilateral trade balances reflect specialization, not victory.

What WOULD be a sign of weakness?

A trade deficit becomes worrisome if it reflects:
- Borrowing to fund consumption rather than investment. The U.S. partly does this; pandemic-era stimulus is an example. Borrowing from abroad to fund a productive investment that earns more than its cost is sustainable; borrowing to fund current consumption is not.
- Loss of competitiveness in goods where the country should have advantage. If U.S. high-tech exports were declining as a share of world high-tech trade, that would be a worry.
- Sudden capital flight (the deficit suddenly cannot be financed). This is the emerging-markets pattern, e.g., Mexico 1994, Asia 1997. The U.S. dollar's reserve currency status makes this much less likely.
- A 'twin deficits' pattern where fiscal deficits drive the trade deficit through the saving-investment identity. The U.S. has this. Federal deficits reduce national saving, which by identity widens the trade deficit. This is a problem of fiscal policy, not trade policy. Tariffs cannot fix it.

The effects of a U.S. tariff on Chinese imports:

a. U.S. consumers face higher prices. The empirical literature on the 2018-2019 Trump tariffs (Amiti, Redding, Weinstein 2019; Fajgelbaum et al. 2020) found that the tariffs were passed through almost entirely to U.S. consumers. The tariff is effectively a tax on American buyers. Lower-income households are hit harder because they spend more of their income on tradable goods.

b. U.S. workers in directly competing industries (steel, washing machines) gain in the short run. Steel employment rose modestly after the 2018 steel tariffs. However, even in these industries, the gains are limited because foreign producers absorb some of the price difference and consumers shift to substitutes.

c. U.S. workers in industries that use Chinese imports as inputs lose. This is the largest effect by employment. Manufacturers that use steel as an input (auto parts, machinery, construction) face higher input costs and lose competitiveness. The Federal Reserve estimated that the 2018-2019 tariffs caused a net loss in manufacturing employment, because the input-cost effects outweighed the protection effects.

d. The U.S. trade deficit. Almost no effect. The tariffs reduce imports from China, but the same dollar shortfall in saving relative to investment still has to be financed from somewhere. Imports shift to Vietnam, Mexico, India, or other suppliers. The bilateral deficit with China shrinks; the multilateral deficit barely changes. The U.S. trade deficit barely moved during the 2018-2019 tariff war and continued widening through 2021.

Conclusion: tariffs are an industrial policy tool, not a trade-balance tool. They can plausibly support specific industries or address specific non-economic concerns (national security, dependence on adversarial powers). They are an extraordinarily blunt and costly tool for reducing trade deficits. To actually reduce the trade deficit, the U.S. would need to either save more or invest less. Higher national saving could come from a smaller federal deficit, higher household saving, or both. Lower investment would mean a smaller capital stock and slower long-run growth, which is not a desirable goal. The case for reducing the trade deficit through saving (fiscal consolidation) is real; the case for doing it through tariffs is largely incoherent.`,
  },
  {
    id: "e4",
    number: 8,
    title: "Essay 4: What Causes Recessions?",
    points: 50,
    type: "essay",
    objectives: [
      "Summarize the major theories of recession causation and apply them to specific U.S. postwar episodes.",
      "Defend a position on whether recessions have a single dominant cause or different causes across episodes.",
    ],
    reading: `A recession is conventionally defined as two consecutive quarters of negative real GDP growth, though the NBER (the official U.S. dating committee) uses a broader definition: a significant decline in economic activity spread across the economy, lasting more than a few months, visible in GDP, real income, employment, industrial production, and retail sales.

Economists have proposed several theories of what causes recessions:

- Real Business Cycle theory (Kydland and Prescott, 1982): recessions are caused by negative shocks to productivity (technology, weather, oil prices). Markets clear continuously; recessions are optimal responses to shocks. This view has trouble explaining the magnitude of Great Depression-style downturns.

- Keynesian theory: recessions are caused by deficient aggregate demand. When households and firms reduce spending (because of pessimism, balance sheet damage, or coordination failures), the economy can become stuck in a low-output equilibrium that requires government action to escape.

- Monetarist theory: recessions are caused by central bank errors. Friedman and Schwartz argued that the Great Depression was caused primarily by the Fed allowing the money supply to contract by one-third during 1929-1933.

- Financial cycle theories (Minsky, Kindleberger): recessions are caused by the unwinding of credit booms. Periods of stability breed risk-taking; risk-taking leads to overextension; the inevitable correction produces a 'Minsky moment' of forced deleveraging.

- Sectoral shift theories: recessions are caused by structural changes (energy shocks, technology disruptions) that require large reallocations of labor and capital, with high unemployment during the transition.`,
    assignment: `Assignment (50 points):
Write a 700-900 word essay addressing the following:

1. Briefly summarize the major theories of recession causation.
2. Pick three U.S. recessions from the postwar period: 1973-1975, 1981-1982, 2008-2009, 2020. Analyze each one. Which theory or combination of theories best explains it?
3. Defend an overall position. Is there a single dominant cause of recessions, or do different recessions have different causes?`,
    modelResponse: `Model Response

What Causes Recessions: Three Episodes

Recessions resist single-cause explanations. The major theories each capture something real, but applying any one of them universally produces obviously bad readings of obviously different episodes. The question is better posed as: which mechanism dominated in a given recession, and how should that change our priors for the next one?

The 1973-1975 recession was triggered by the Arab oil embargo of October 1973, which roughly quadrupled the price of oil in three months. This was the textbook supply shock: a sudden negative shift in productive capacity. The U.S. economy was structured around cheap oil; everything from manufacturing to transportation suddenly became more expensive. Real GDP fell 3.2% from peak to trough, and unemployment rose from 4.6% to 9.0%. The episode was difficult for Keynesian theory because the conventional aggregate-demand framework had no good response to stagflation; cutting interest rates or expanding fiscal policy could reduce unemployment but only by accepting still higher inflation, since the problem was supply rather than demand. The 1973-1975 episode fits the Real Business Cycle and sectoral-shift theories best. Sectors heavily dependent on cheap energy (autos, steel, aviation) had to shrink while energy-efficient sectors expanded. The transition was costly.

The 1981-1982 recession was, by contrast, a monetary policy recession by design. Paul Volcker became Fed chair in August 1979 with inflation at 11% and rising. He raised the federal funds rate from 11% to 20% by mid-1981, then held it there. The intent was to break inflation by killing demand. It worked. Unemployment rose to 10.8%, the highest since the Great Depression. Inflation fell from 14% to under 3% by 1983. This episode fits the monetarist theory cleanly, with a twist: it was not a central bank error but a deliberate central bank choice. The recession was the price paid to re-anchor inflation expectations after a decade of monetary accommodation. The Volcker recession also fits an expectations-channel reading of the Phillips curve: once Volcker proved willing to tolerate severe unemployment to restore price stability, expectations adjusted permanently and the next forty years saw inflation rarely exceeding 4%.

The 2008-2009 recession was a financial crisis. The proximate cause was the collapse of a credit boom in U.S. housing, but the deeper cause was the leverage cycle Minsky and Kindleberger described. From roughly 2002 to 2006, easy credit, low interest rates, and innovations in mortgage securitization fueled a doubling of U.S. home prices. The financial system became increasingly opaque and increasingly leveraged. When defaults began to rise in 2007, the value of mortgage-backed securities became uncertain, then collapsed. Major financial institutions were exposed: Bear Stearns failed in March 2008, Lehman Brothers in September. The credit system froze. Households and firms could not borrow; existing debts had to be repaid; consumption and investment collapsed. Unemployment rose from 5% to 10%, GDP fell 4%, and the recovery was the slowest in postwar history. This was a Minsky-Kindleberger episode in its purest postwar form. Keynesian deficient-demand mechanisms operated alongside the financial mechanisms, and the policy response (fiscal stimulus and quantitative easing) was Keynesian in inspiration. But the cause was financial.

The 2020 recession was sui generis. A pandemic forced the deliberate shutdown of large parts of the economy. This was not a demand shock, a supply shock, a monetary shock, or a financial shock in any conventional sense. It was a real shock of a kind the macroeconomic literature had not anticipated. Real GDP fell at an annualized rate of 31% in Q2 2020, the largest single-quarter decline on record. Unemployment spiked from 3.5% to 14.7% in two months. The recession ended almost as quickly as it began, as restrictions eased and massive fiscal-monetary policy supported incomes. The episode does not fit any standard theory; the closest is a one-time productivity shock (RBC) combined with massive policy response (Keynesian). It is a reminder that recessions can be caused by events that no macroeconomic model contains as a state variable.

Overall position: there is no single cause of recessions, and theories that claim there is are reading their own commitments back into the data. The U.S. postwar record contains supply-shock recessions (1973-1975, arguably 1990-1991), policy-induced recessions (1981-1982), financial-cycle recessions (2007-2009), and exogenous-shock recessions (2020). The dot-com recession of 2001 was something else again, primarily an unwinding of capital investment in technology. Honest macroeconomic analysis has to be eclectic: different mechanisms dominate different episodes, and the relevant theory depends on the recession.

What does seem to be a near-universal feature is that recessions involve a failure of coordination. Whether the trigger is an oil shock or a credit collapse or a pandemic, the recession itself is a state in which firms, workers, and households all simultaneously pull back from commitments they would each individually prefer to maintain, because they correctly anticipate that the others are pulling back too. This is the Keynesian insight that survives every shift in fashion: aggregate demand is a coordination problem, and once coordination breaks, the economy can be stuck in a worse equilibrium than is necessary, until something (a policy response, an exogenous improvement, the simple passage of time) restores it. The various theories of recession causation are mostly theories of what triggers the coordination failure. The coordination failure itself is the recession, and it is the same animal regardless of what set it loose.`,
  },
  {
    id: "d5",
    number: 9,
    title: "Discussion 5: What Drives Long-Run Growth?",
    points: 50,
    type: "discussion",
    objectives: [
      "Apply the major growth frameworks (Solow, endogenous, institutional, geographic) to a specific cross-country divergence.",
      "Defend a position on which framework does the most explanatory work for cross-country growth differences.",
    ],
    reading: `Long-run economic growth is the increase in the productive capacity of an economy over decades, distinct from short-run fluctuations around trend. A country growing at 2% per year doubles its output in 36 years; at 5% per year, it doubles in 14 years. Compounding makes growth differences enormous over generations.

The Solow model (1956) provides the basic neoclassical framework. Output is a function of capital, labor, and a productivity term: Y = A * f(K, L). Capital accumulates through investment, but exhibits diminishing returns. In the long run, growth in output per worker depends on growth in A, the productivity term, which is treated as exogenous.

Endogenous growth theory (Romer, 1990; Lucas, 1988) tries to explain A. Knowledge and human capital are produced by the economy itself, and may exhibit increasing returns. R&D spending, education, and patent systems matter.

Institutional theories (North, 1990; Acemoglu and Robinson, 2012) argue that the deepest determinant of long-run growth is institutions: the rules of the game. Inclusive institutions (rule of law, secure property rights, broad political participation) promote investment and innovation. Extractive institutions (concentrated political power, weak property rights, predation) discourage them. Countries with similar resources can have wildly different growth trajectories because of institutional differences.

Geographic theories (Diamond, Sachs) emphasize endowments: latitude, soils, disease environment, access to coasts.

Demographic factors: labor force size, age structure, and quality (human capital).`,
    assignment: `Assignment (50 points):
1. Two countries, A and B, are observed in 1960 with the same per capita GDP of $1,000. By 2020, Country A is at $30,000 and Country B is at $2,500. Both countries had similar initial resources. Walk through what would have to be true, in each of the major theoretical frameworks, to produce this divergence. Use a real-world example (e.g., South Korea vs. North Korea, Singapore vs. Indonesia, etc.) to anchor your discussion.
2. In your view, which of these frameworks does the most work in explaining cross-country differences in long-run growth? Defend your position.`,
    modelResponse: `Model Response

The most striking real-world example is the Korean peninsula. North and South Korea were a single country until 1945 and shared an identical culture, language, history, ethnic composition, and geography. They were partitioned arbitrarily along the 38th parallel. By 1960, both were poor, with North Korea actually somewhat ahead (it had inherited more of the industrial base built during Japanese colonization). By 2020, South Korea's GDP per capita was approximately $32,000 and North Korea's was estimated at $1,300-$1,700 (the estimate is rough because North Korea publishes no usable data). This is roughly a 20-to-1 ratio between two halves of what was a single country in living memory.

What each framework requires:

The Solow model: South Korea must have accumulated much more capital per worker than North Korea, with similar productivity, OR experienced much higher productivity growth. In fact, both. South Korea's savings rate was 30-40% of GDP for most of the post-1960 period, one of the highest in the world, financing massive investment in physical capital. Productivity also rose, partly through importing foreign technology and partly through learning-by-doing in export industries. North Korea's savings and investment were directed by central planners toward heavy industry and military production with low returns on capital. The Solow model can fit the Korean data, but it does not explain WHY savings rates and productivity growth differed.

Endogenous growth: South Korea invested heavily in education. By the 1980s, South Korean students were among the top scorers internationally on standardized math and science tests. R&D spending rose from negligible levels in 1960 to over 4% of GDP by 2020, the highest in the OECD. Samsung Electronics began as a small trading company in 1969 and was the world's largest semiconductor manufacturer by 2017. Endogenous growth captures the role of accumulated human and knowledge capital, but again, why did one country invest in it and the other not?

Institutional theory: this seems to be where the deepest explanation lies. South Korea evolved (slowly, with a long authoritarian period through the 1980s) toward institutions that protected property rights, enforced contracts, allowed competitive private firms, and after 1987 supported democratic accountability. North Korea developed a totalitarian dynasty that nationalized everything, suppressed all market activity, and treated the economy as an extension of the state. Acemoglu and Robinson would say South Korea's institutions became increasingly inclusive, while North Korea's remained extractive in the extreme.

Geographic theory: clearly cannot explain Korea. The two halves of the peninsula have essentially identical geography. The same point holds for East and West Germany (which diverged by a factor of three or more during the Cold War despite identical geography and culture), and for the U.S./Mexico border, where two sides of a fence have radically different incomes despite similar climate and geography.

My position:

Institutions do the most explanatory work, particularly for divergences within otherwise comparable countries. The Korean case, the German case, and the natural experiments along the U.S.-Mexico and Israel-Egypt borders all point in the same direction: when you hold geography, culture, language, ethnicity, and history nearly constant, what you can vary is institutions, and the institutional variation produces the variation in outcomes.

This does not mean geography and demography are unimportant. They matter enormously for the level effects of disease, navigable rivers, arable land, and so on. But they do not explain the divergence among countries that started similar and ended different. Tropical countries are on average poorer than temperate ones, partly because of disease environment and partly because tropical agriculture is genuinely harder. But Singapore is tropical, and so are Hong Kong, Taiwan, and the Gulf states. These cases show that institutions can override geography.

The Solow and endogenous growth models, in my view, are proximate rather than ultimate explanations. They tell you that more capital and more human capital produce more output, which is true and important, but they do not explain why some societies generate the savings, the investments in education, and the productive use of capital that others fail to generate. The institutional view does explain this, by pointing to the incentive structures that either encourage or discourage long-term investment. Why save and invest in a country where the government can seize your assets? Why innovate when there is no patent protection? Why educate your children if there are no good jobs for skilled workers?

The most parsimonious model: institutions explain why countries differ in their capacity to accumulate capital and develop human capital and adopt productivity-enhancing technologies. The Solow and endogenous-growth models describe the proximate mechanics. The institutional framework explains why those mechanics operate differently in different places. This is what Korea, Germany, and the U.S.-Mexico border collectively demonstrate, and it is the framework that has held up best in the recent empirical literature.`,
  },
  {
    id: "e5",
    number: 10,
    title: "Essay 5: Public Debt and the Limits of Government Borrowing",
    points: 50,
    type: "essay",
    objectives: [
      "Explain the debt dynamics equation and what determines whether a country's debt-to-GDP ratio is stable.",
      "Compare Japan and Greece and evaluate the likelihood of a U.S. fiscal crisis in the next decade.",
    ],
    reading: `Government debt is the accumulated stock of past deficits. The U.S. federal debt held by the public was approximately $26 trillion in 2024, roughly 95% of GDP, and rising. Total federal debt including intragovernmental holdings exceeded $34 trillion.

Key concepts:
- Primary deficit/surplus: the deficit excluding interest payments on existing debt.
- Debt-to-GDP ratio: the standard measure of debt burden, because economies grow over time.
- Debt dynamics: the debt-to-GDP ratio evolves as d' = d * (1 + r - g) + primary deficit / GDP, where r is the real interest rate and g is the real growth rate. If r > g, debt grows even with a balanced primary budget. If g > r, debt can shrink relative to GDP even with primary deficits.

Major debates:
- Ricardian equivalence (Barro): in some models, government debt is irrelevant because households save in anticipation of future taxes. Most economists believe this only partially holds.
- Sovereign debt crises: countries with their own currency (U.S., U.K., Japan) face different constraints than countries borrowing in foreign currency (Argentina, Greece). The latter can default; the former can at worst monetize debt and produce inflation.
- Functional finance (Lerner) vs. sound finance (mainstream): should governments aim to balance budgets at all, or just to use fiscal policy to maintain full employment with stable prices?
- Modern Monetary Theory: a heterodox view that monetarily sovereign governments are constrained only by inflation, not by debt levels.

Japan's example: gross debt-to-GDP exceeds 250%, the highest in the developed world, yet Japan has experienced low inflation and low borrowing costs for decades.`,
    assignment: `Assignment (50 points):
Write a 700-900 word essay addressing the following:

1. Explain the basic debt dynamics equation and what determines whether a country's debt-to-GDP ratio is stable or rising.
2. Why does Japan, with debt of 250% of GDP, borrow at near-zero interest rates, while Greece, with lower debt-to-GDP ratios in the late 2000s, faced a sovereign debt crisis? What are the key structural differences?
3. Evaluate the claim that the U.S. faces an imminent debt crisis. What conditions would have to hold for a U.S. fiscal crisis to occur, and how likely are those conditions?`,
    modelResponse: `Model Response

Public Debt: Mechanics, Limits, and the U.S. Outlook

The arithmetic of public debt is governed by a simple identity. If we let d be the debt-to-GDP ratio, the change in d from one period to the next equals d * (r - g) + the primary deficit as a share of GDP, where r is the real interest rate the government pays on its debt and g is the real growth rate of the economy. The intuition: existing debt grows at the interest rate, GDP grows at g, so debt as a share of GDP rises by (r - g) of itself, plus any new primary deficit. When r > g, debt has positive momentum; even a balanced primary budget produces a rising debt ratio. When g > r, debt has negative momentum; debt as a share of GDP shrinks even with modest primary deficits.

For most of the post-1945 period, the U.S. and other advanced economies had g > r. The U.S. debt-to-GDP ratio fell from roughly 110% in 1946 to 30% in 1980 despite continuous deficits, because nominal growth exceeded nominal interest rates. The condition r < g is called 'financial repression' in some literatures because it implicitly taxes bond holders to benefit borrowers. Since the late 2010s, real interest rates have risen, and the r-versus-g gap has narrowed or reversed for some countries.

Japan and Greece: same debt ratio, different outcomes.

Japan's gross debt-to-GDP exceeds 250%, the highest among major economies. Yet 10-year Japanese government bonds have yielded under 1% for most of the past two decades. Greece, at much lower debt levels, was paying 30%+ yields at the height of its 2010-2012 crisis. The differences are structural.

First, currency sovereignty. Japan issues debt in yen, which the Bank of Japan can create at will. Japan cannot default on yen-denominated debt in any meaningful sense; in the limit, it can monetize the debt and accept the inflation. Greece does not issue debt in drachma; it issues debt in euros, which the European Central Bank controls and which Greece cannot create. Greece is in the position of a U.S. state, which can run out of money, rather than the U.S. federal government, which cannot. This is the single most important distinction.

Second, the holder base. Approximately 90% of Japanese government debt is held domestically, mostly by Japanese banks, pension funds, and the Bank of Japan itself. There is no class of foreign holders who could trigger a flight by dumping bonds. Greece's debt was held mostly by foreign banks, particularly German and French ones, who could and did flee at the first sign of trouble.

Third, the savings glut. Japan has high domestic savings, low investment, and runs a current account surplus. This generates a continuous domestic demand for safe assets that the government can satisfy by issuing bonds. Greece has the opposite pattern: low savings, current account deficits, dependence on foreign capital.

Fourth, central bank behavior. The Bank of Japan has been a major buyer of JGBs for two decades, and has explicitly capped 10-year yields under yield-curve control. The European Central Bank in 2010-2012 was constrained by its mandate and by political resistance from northern Europe; it did not act as backstop until Mario Draghi's 'whatever it takes' speech in July 2012, after which Greek yields fell rapidly.

The U.S. outlook.

The U.S. has the structural advantages of Japan (its own currency, deep capital markets, the dollar's reserve currency status, ability to monetize) plus large domestic savings, though smaller than Japan's. The U.S. cannot run out of dollars and cannot be forced to default on dollar-denominated debt. The constraint is inflation, not solvency.

What an actual U.S. fiscal crisis would look like: persistent borrowing pushes interest rates up enough that the share of GDP needed for interest payments crowds out other spending or requires politically intolerable tax increases. Foreign holders lose confidence in the dollar, demand higher yields, or shift to other currencies. The Fed faces a dilemma: hold rates low to keep interest costs manageable, accepting higher inflation, or fight inflation by raising rates, accepting fiscal strain. Either choice damages confidence in dollar assets. The reserve-currency premium erodes.

How likely is this in the next decade? Probably low, but no longer negligible. Federal interest payments are projected to exceed $1 trillion annually in 2025, surpassing defense spending. The CBO projects debt-to-GDP rising from 100% today to over 180% by 2050 under current policy. If real interest rates settle higher than they were in the 2010s (which seems plausible given demographics, deglobalization, and capital demand from energy transition), the debt dynamics turn against the U.S. for the first time since the 1980s.

However, the path to a crisis is not a knife-edge event. The U.S. retains enormous flexibility: it can raise taxes (U.S. tax burden is well below European levels), cut spending, or accept somewhat higher inflation. None of these are politically easy, but they are economically available. The dollar's reserve status is sticky; no plausible alternative exists at current scale. China's currency is not convertible, the euro suffers from its structural fragmentation, and gold/crypto are too small. The U.S. likely has at least a decade of cushion before the constraint binds.

What is more likely than a sudden crisis is a long, slow deterioration: rising interest costs squeezing the rest of the budget, fiscal policy losing the ability to respond to recessions because the starting debt level is too high, intergenerational transfers becoming politically harder to sustain. The danger is not Greek-style sudden death but Japanese-style chronic disease: persistent low growth, demographic strain, gradual loss of economic dynamism. Whether this happens depends on choices that have not yet been made. The arithmetic is unforgiving, but the U.S. is not yet at the wall.`,
  },
  {
    id: "d6",
    number: 11,
    title: "Discussion 6: Exchange Rates and the Trilemma",
    points: 50,
    type: "discussion",
    objectives: [
      "Explain the Mundell-Fleming trilemma and why a country cannot satisfy all three constraints simultaneously.",
      "Apply the trilemma to Hong Kong's currency peg and analyze its costs and benefits.",
    ],
    reading: `An exchange rate is the price of one currency in terms of another. The euro-dollar rate of 1.10 means one euro buys $1.10. Exchange rates are determined by supply and demand for currencies, which in turn reflects trade flows, capital flows, interest rate differentials, and expectations.

Two major exchange-rate regimes:
- Floating: the rate is determined by market forces. The U.S. dollar, euro, yen, pound, and most major currencies float against each other.
- Fixed: the central bank commits to maintain a specific rate against another currency or a basket. The Hong Kong dollar is pegged to the U.S. dollar. The Chinese yuan is managed.

Purchasing Power Parity (PPP): in the long run, exchange rates should adjust so that a basket of goods costs the same in different countries. If a Big Mac costs $5 in the U.S. and 30 yuan in China, PPP would predict 6 yuan per dollar. Actual rates often diverge from PPP, sometimes by 30-50%.

Interest rate parity: high-interest currencies should depreciate relative to low-interest currencies, so that returns are equalized after adjusting for exchange rate changes. This is the 'covered' version with forwards; the 'uncovered' version often fails empirically.

The Mundell-Fleming Trilemma: a country cannot simultaneously have all three of:
- A fixed exchange rate
- Free movement of capital across borders
- An independent monetary policy

It must give up one. The U.S. has free capital movement and independent monetary policy, so it has a floating exchange rate. Hong Kong has a fixed rate and free capital movement, so it has no independent monetary policy. China has historically had limited capital mobility, allowing it to manage both the exchange rate and monetary policy.`,
    assignment: `Assignment (50 points):
1. Explain the Mundell-Fleming trilemma in your own words. Why can a country not have all three?
2. Hong Kong has maintained a peg to the U.S. dollar since 1983 (7.75-7.85 HKD per USD). Walk through the consequences: what does Hong Kong gain by pegging? What does it give up? Use the trilemma to structure your answer. What would happen if Hong Kong tried to run a more independent monetary policy?`,
    modelResponse: `Model Response

Why all three cannot coexist:

Suppose a country has a fixed exchange rate against the dollar and allows free capital movement. Now suppose its central bank wants to set domestic interest rates lower than U.S. rates. Capital will instantly flow out of the country: investors can borrow at low rates domestically and invest at higher rates in the U.S. This creates downward pressure on the domestic currency. To maintain the peg, the central bank must sell dollars from its reserves to buy back the domestic currency, which contracts the money supply and pushes domestic interest rates back up. The attempt to set independent rates is futile; the rates are forced to track foreign rates by the capital flows the peg cannot stop.

Conversely, if rates are set higher than abroad, capital flows in, the currency appreciates, and the central bank must buy foreign currency to maintain the peg, expanding the money supply and pushing domestic rates back down.

The escape valves: if the country imposes capital controls, the flows stop and monetary policy can diverge from foreign rates even with a peg. This is the historical Chinese model. Alternatively, if the country lets the currency float, capital flows can be absorbed by exchange rate changes rather than reserve changes, and monetary policy can diverge from foreign rates. This is the U.S. model.

What you cannot do is run a fixed rate, allow free capital flows, AND set rates independently. The trilemma is a trilemma because any two of the three constraints can be satisfied, but never all three.

Hong Kong's choices:

Hong Kong chose option (b): fixed exchange rate plus free capital movement, with monetary policy as the sacrifice. The peg has been maintained since October 1983, when it was set in response to political uncertainty surrounding the Sino-British negotiations over Hong Kong's handover. The peg is operated through a currency board: every Hong Kong dollar in circulation is backed by US dollar reserves, and the Hong Kong Monetary Authority (HKMA) is obligated to convert at the peg rate.

What Hong Kong gains:

First, credibility and stability. Hong Kong is a small open economy with extensive trade and financial flows. A volatile exchange rate would impose enormous costs on cross-border business. The peg has been operated transparently and consistently for over 40 years, making the Hong Kong dollar essentially a tokenized version of the U.S. dollar.

Second, low transaction costs in international trade. Importers and exporters denominated in U.S. dollars (which is most international trade) face minimal exchange rate risk in Hong Kong.

Third, the credibility of Hong Kong's status as an international financial center. The peg is part of the institutional infrastructure that has made Hong Kong a global hub for capital flows, particularly into and out of China. Free capital movement is non-negotiable for this function, so the peg-with-free-capital was the appropriate choice.

What Hong Kong gives up:

Independent monetary policy entirely. Hong Kong's interest rates track U.S. interest rates almost perfectly. When the Fed raises rates by 25 basis points, Hong Kong rates move by approximately 25 basis points. The HKMA does not have meaningful discretion to set rates differently.

The cost of this is countercyclical policy. When Hong Kong is in a different business-cycle position than the U.S., its monetary policy is forced to be procyclical. During the U.S. zero-rate period (2008-2015 and 2020-2022), Hong Kong rates were also near zero, even when Hong Kong's economy was overheating and its property market was bubbling. The result was a major property price inflation that the HKMA could not contain through interest rates; it had to use macroprudential tools (loan-to-value limits, stamp duties) instead. Property prices roughly tripled between 2008 and 2018.

If Hong Kong tried to run independent monetary policy:

It cannot, while maintaining the peg with free capital flows. If the HKMA tried to hold rates lower than U.S. rates, capital would flow out, downward pressure on the Hong Kong dollar would build, and the HKMA would have to sell its U.S. dollar reserves to defend the peg. Eventually, with finite reserves, the peg would break. The classic mechanism of a currency crisis.

Hong Kong has approximately $400 billion in foreign reserves, more than its M2 money supply, so a speculative attack is harder than against most pegged currencies. But the math is the same in principle: any attempt to diverge from U.S. monetary policy bleeds reserves and eventually fails.

The 2018-2019 stress test: when U.S. rates rose rapidly, Hong Kong rates lagged briefly, the Hong Kong dollar approached the weak side of the peg, and the HKMA had to intervene heavily to absorb Hong Kong dollars and maintain the rate. The system worked, but it demonstrated the constraint. Hong Kong cannot be in a different monetary regime from the U.S., regardless of whether that regime suits Hong Kong's domestic conditions.

The verdict: Hong Kong's peg is the textbook example of choosing currency stability over monetary autonomy. The choice was rational given Hong Kong's role as a financial entrepôt, but it forces Hong Kong to bear procyclical monetary policy whenever U.S. and Hong Kong cycles diverge. The cost is real but has been accepted as the price of the financial-center function. As long as Hong Kong values that function and maintains adequate reserves, the peg will hold. If the political or economic basis of Hong Kong as a financial center erodes, the peg could become a luxury rather than a necessity, and the question of regime change would arise.`,
  },
  {
    id: "d7",
    number: 12,
    title: "Discussion 7: Keynesian vs. Classical Economics",
    points: 50,
    type: "discussion",
    objectives: [
      "Compare Keynesian and Classical positions on unemployment, fiscal stimulus, and the role of expectations.",
      "Defend a position on which school's predictions have held up better against the postwar U.S. record.",
    ],
    reading: `The two major schools of macroeconomic thought have argued for nearly a century about how economies work and what governments should do.

Classical economics (pre-Keynes, plus modern revivals in monetarism, real business cycle theory, and New Classical economics):
- Markets clear continuously through price adjustment. Unemployment is voluntary or frictional.
- Say's Law: supply creates its own demand. General gluts are impossible.
- Money is a veil: changes in the money supply affect prices but not real variables in the long run.
- Government intervention is generally counterproductive. The economy self-corrects.
- The long run is what matters; short-run fluctuations average out.

Keynesian economics (post-1936, John Maynard Keynes, General Theory):
- Prices and wages are sticky in the short run; markets do not clear instantly.
- Aggregate demand can be deficient; involuntary unemployment is real and persistent.
- Animal spirits and expectations can produce coordination failures.
- Monetary and especially fiscal policy can stabilize output.
- 'In the long run we are all dead' - the short run matters.

The synthesis: New Keynesian economics (Mankiw, Romer, Woodford) combines rational expectations and microeconomic foundations with sticky prices. New Classical economics (Lucas, Sargent, Prescott) rejects sticky prices but accepts that information frictions can produce business cycles. The two camps converged on a common toolkit (DSGE models with various frictions) by the 2000s, though they continue to disagree about which frictions matter most.`,
    assignment: `Assignment (50 points):
1. Compare the Keynesian and Classical views on the following questions:
   a. Can the economy be stuck in prolonged unemployment without policy intervention?
   b. Does government spending stimulate output?
   c. What is the role of expectations in determining outcomes?
2. Looking at the actual postwar U.S. economic record, which school's predictions have held up better? Defend your answer with reference to specific episodes.`,
    modelResponse: `Model Response

Comparison on the three questions:

a. Prolonged unemployment without intervention.

Classical view: no. Wages and prices will eventually fall to clear the labor market. Sustained unemployment must reflect either frictional/structural causes (workers searching, mismatched skills) or wage rigidities imposed from outside the market (minimum wages, unions, unemployment insurance that reduces job search). The classical solution is to wait, or to remove the rigidities.

Keynesian view: yes. Wages are sticky downward because of money illusion, contract structures, fairness norms, and the unwillingness of workers to accept pay cuts. Even when wages eventually fall, the falling wages may worsen the problem in the short run by reducing aggregate demand (the paradox of thrift applied to wages). The economy can settle into a low-output, high-unemployment equilibrium and stay there for years without policy action. The Great Depression was the canonical case.

b. Does government spending stimulate output?

Classical view: not really. Government spending crowds out private spending. If the government borrows to spend, the borrowing pushes up interest rates and reduces private investment. If the government taxes to spend, households spend less. In Ricardian equivalence, even debt-financed spending leads households to save more in anticipation of future taxes. The multiplier is at most 1, and often less.

Keynesian view: yes, especially in a recession with idle resources. Government spending puts unemployed workers and idle capital back to work. The workers spend their earnings, generating second-round demand, and the multiplier exceeds 1. The classical objection (crowding out) only binds at full employment. When there is slack, fiscal stimulus mobilizes real resources rather than redistributing them.

c. The role of expectations.

Classical view: expectations are rational and consistent with the underlying model. If the central bank announces a credible policy, expectations adjust instantly. If a fiscal stimulus is anticipated, its effects are pre-priced. Policy surprises matter; anticipated policy does not.

Keynesian view: expectations are partly rational but also influenced by 'animal spirits,' confidence, and coordination among heterogeneous agents. Expectations can be self-fulfilling in ways that produce multiple equilibria; the same economy can settle into a high-confidence boom or a low-confidence slump depending on what people expect. Policy works partly by coordinating expectations.

Which school has held up better?

Neither cleanly. Both have been forced to absorb empirical findings that initially seemed to refute them. But on the specific questions, the record favors Keynesian predictions in important cases.

The Great Depression. Classical theory predicted that the U.S. economy would self-correct after the 1929 crash. It did not. Unemployment remained above 10% for an entire decade, hitting 25% at the worst. Wages fell substantially, exactly as classical theory predicted they would, yet unemployment did not fall correspondingly. This is the single most important data point in modern macroeconomics, and it broke the pre-Keynesian consensus. Friedman and Schwartz argued in 1963 that the Depression was caused by monetary contraction rather than aggregate demand failure, but this is a partial vindication of Keynes rather than a refutation; it concedes that monetary failure can produce sustained mass unemployment, which the pre-Keynesian classical view had denied.

The 2008-2009 financial crisis and aftermath. Classical theory predicted a sharp but brief downturn followed by recovery. Keynesian theory predicted persistent unemployment without aggressive policy response. The fiscal stimulus (ARRA, 2009) and especially the unprecedented monetary response (QE, near-zero rates) were Keynesian in inspiration. Without them, most estimates suggest unemployment would have been substantially higher for substantially longer. The recovery from 2009 was slow, but it would have been much slower without the policy response. The 'liquidity trap' Keynes described in 1936 became visible reality from 2008 to 2015: interest rates at zero, more monetary expansion not stimulating much demand, the economy stuck at high unemployment for years.

The 2020 pandemic. Classical theory has no answer to a pandemic-induced shutdown; it is not a recession that classical mechanisms describe. The Keynesian response (massive income support to maintain demand during the shutdown, plus monetary accommodation) prevented what could have been a depression. The U.S. recovered faster than nearly any other major economy, partly because its policy response was the most aggressive.

Where classical theory has scored points:

The 1970s stagflation. Pure Keynesian theory had no good account of inflation rising alongside unemployment. The classical critique (Friedman, Phelps) on expectations-augmented Phillips curves was correct and shifted the field permanently.

Government failure. Public choice analysis (Buchanan, Tullock) showed that political incentives can lead to systematically bad fiscal policy: deficits in good times rather than just bad, regulatory capture, etc. This was a damaging critique of naive Keynesian fine-tuning.

The Lucas Critique. The structural relationships Keynesian macromodels relied on were not stable across policy regimes. This was a profound methodological challenge that reshaped how economists model the economy.

My assessment: the empirical record on whether economies self-correct from major demand shocks is decisively in favor of the Keynesian view. The 1930s, 2008-2009, and 2020 all show that economies can be stuck at high unemployment for extended periods without aggressive policy response. The classical view that markets clear continuously simply does not survive these data. The Keynesian view of how fiscal and monetary policy can help is broadly vindicated, though with the modifications Friedman, Phelps, and Lucas forced on the framework.

The classical insights on expectations, on the limits of policy at full employment, and on the importance of long-run supply factors are also vindicated. The synthesis that emerged by the 1990s (New Keynesian economics) accepts both: Keynesian short-run dynamics with rational-expectations long-run constraints. This synthesis has its own problems, especially around financial crises, but it is the best macroeconomic framework we have. The most honest position is that both schools captured something real, and that anyone who claims one of them has the complete truth is selling something.`,
  },
  {
    id: "tp",
    number: 13,
    title: "Term Paper (Outline + Final)",
    points: 200,
    type: "termpaper",
    objectives: [
      "Construct a structured term-paper outline with a clear thesis, section plan, sources, and counter-arguments.",
      "Defend an original thesis on a major macroeconomic episode or policy question in a complete, well-cited term paper.",
    ],
    reading: ``,
    assignment: `PART 1 — TERM PAPER OUTLINE (100 points)

The term paper is the capstone assignment for this course. It will be a 2,500-3,500 word essay analyzing a major macroeconomic episode, policy debate, or theoretical question of your choice.

The outline is a structured plan for the term paper. It is not the paper itself, but a roadmap that demonstrates you have selected a topic, formulated a thesis, identified your major arguments, and surveyed the relevant literature.

Sample topics:
- The 2008 financial crisis: a Minsky moment, a regulatory failure, or both?
- Was the post-2021 inflation primarily a monetary phenomenon?
- The decline in labor force participation among prime-age men: causes and consequences
- Does deficit spending crowd out private investment? Empirical evidence
- Should the Federal Reserve target nominal GDP rather than inflation?
- The euro: an optimal currency area, or a political project that ignored economics?
- The China growth miracle: institutional reform, demographic dividend, or export-led growth?
- Universal basic income: a macroeconomic assessment
- The case for and against modern monetary theory

Or propose your own topic, subject to instructor approval.

Submit an outline containing the following sections:

1. Title and thesis statement (one paragraph). State clearly what the paper will argue.
2. Significance (one paragraph). Why does this question matter? Why now?
3. Section-by-section structure (typically 4-6 sections). For each section, state in 2-3 sentences what it will cover and how it advances the argument.
4. Key sources (annotated bibliography of 8-12 sources). Include both academic literature and primary-source data (e.g., FRED, BEA, BLS, IMF, World Bank). For each source, write 1-2 sentences on what you will use it for.
5. Anticipated counter-arguments (one paragraph). What are the strongest objections to your thesis, and how will you address them?

---

PART 2 — TERM PAPER (100 points)

Write a 2,500-3,500 word term paper on the topic for which you submitted an approved outline.

Requirements:
- Clear thesis stated in the introduction.
- Organized argument with section headings.
- Engagement with the relevant academic literature (cite at least 8 sources).
- Use of primary data where appropriate (FRED, BEA, BLS, IMF, World Bank).
- Acknowledgment of and response to the strongest counter-arguments.
- Clear conclusion that does more than restate the introduction.

Formatting:
- Double-spaced, 12-point font, 1-inch margins.
- Citations in any consistent style (Chicago, APA, MLA).
- Bibliography at the end.

Write the term paper that fully realizes the outline you submitted. Use the section structure, the sources, and the thesis from your approved outline. Engage seriously with the counter-arguments you identified. The paper should be the developed version of the plan, not a new document.`,
    modelResponse: `Model Response

PART 1 — MODEL OUTLINE

Title: 'The Federal Reserve's 2021-2023 Inflation Episode: A Failure of Framework, Not Forecast'

Thesis statement: The Federal Reserve's slow response to the 2021-2023 inflation was not a forecasting error but a framework error. The 2020 'flexible average inflation targeting' framework was designed for a world of persistent disinflation and could not accommodate the rapid emergence of supply-side inflation. The Fed's framework predicted what its forecasts subsequently produced. To prevent a recurrence, the Fed needs not better forecasts but a framework that responds symmetrically to inflation surprises in both directions and that does not premise its strategy on the expectation that inflation will remain below target indefinitely.

Significance: The 2021-2023 inflation was the largest sustained U.S. inflation episode in 40 years. The Fed's response was widely criticized as too slow, leading to inflation peaks of 9% and an aggressive subsequent tightening cycle. Understanding what went wrong matters because the Fed adopted its 2020 framework in response to the disinflationary 2010s, and similar frameworks have been adopted by other central banks. If the framework itself contributed to the failure, that has implications well beyond the U.S. Federal Reserve. The 2025 Fed framework review provides an immediate policy-relevant context for reassessment.

Section-by-section structure:

Section 1: The 2020 Framework. Describes the August 2020 Jackson Hole framework change to 'flexible average inflation targeting' (FAIT). Explains the motivation (decade of below-target inflation; concern about deflationary trap; perceived bias in conventional inflation targeting). Documents the explicit commitment to 'make up' for past undershooting by allowing modest overshooting.

Section 2: The Sequence of Events, 2021-2022. Traces the actual policy decisions through 2021 and into 2022. Documents the 'transitory' language and its evolution. Identifies the points at which the Fed could have moved earlier and chose not to. Distinguishes between cases where the Fed had a clear signal it ignored (April-June 2021 CPI prints) and cases where the data were genuinely ambiguous.

Section 3: Why the Framework Mattered. Argues that the 2020 framework structurally biased the Fed toward delayed response by (a) committing in advance to tolerate above-target inflation as 'making up' for past shortfalls, (b) emphasizing employment shortfalls as the relevant trigger for tightening, with the labor market participation rate as the focus, and (c) defining 'transitory' inflation as inflation arising from supply factors that would self-correct. Each of these features delayed response when they should have prompted it.

Section 4: The Counterfactual. Considers what a different framework would have produced. The pre-2020 'flexible inflation targeting' framework would likely have produced earlier action, since 4% inflation in mid-2021 would have triggered a response. The Taylor rule benchmark, applied mechanically, would have called for substantial tightening by late 2021. Acknowledges the uncertainty: hindsight makes the case appear cleaner than the real-time decision problem was.

Section 5: Cross-Country Comparison. Compares Fed response to that of the Bank of England, ECB, Bank of Canada, and Reserve Bank of Australia. The Fed was not uniquely slow; central banks with similar frameworks responded similarly. This supports the framework explanation over the forecasting-error explanation.

Section 6: Implications for the 2025 Framework Review. Argues that the Fed's framework review needs to address the asymmetry baked into FAIT. Specifically: (a) restoring a symmetric response to inflation surprises in both directions, (b) abandoning the make-up commitment, (c) being more cautious about defining inflation as 'transitory' based on supply origins, and (d) maintaining the dual mandate without privileging the employment side in periods of clear inflation. Discusses the cost of these changes: losing some flexibility to support employment in genuine slack situations.

Section 7: Conclusion. The 2021-2023 episode was a framework failure, not a forecasting failure. Better forecasts would not have helped because the framework would still have called for delayed response. The lesson is that framework design must be robust across inflation regimes, not optimized for the one that just happened. Drawing a framework from the disinflationary 2010s and applying it in the inflationary 2020s was a category error that the Fed needs to acknowledge openly to restore credibility.

Key sources (annotated):

1. Powell, Jerome H. 'New Economic Challenges and the Fed's Monetary Policy Review.' Jackson Hole, August 27, 2020. -- The framework speech itself; primary source for the 2020 change.
2. Federal Reserve Board. 'Statement on Longer-Run Goals and Monetary Policy Strategy.' Revised August 27, 2020. -- The official framework document.
3. Blanchard, Olivier and Lawrence Summers. 'In Defense of Concerns Over the $1.9 Trillion Relief Plan.' Peterson Institute, February 2021. -- The most prominent early warning that the ARP would generate inflation; relevant for showing what was forecastable in real time.
4. Bernanke, Ben S. and Olivier Blanchard. 'What Caused the U.S. Pandemic-Era Inflation?' Brookings, May 2023. -- Decomposition of the inflation surge into demand, supply, and labor market components.
5. Reis, Ricardo. 'The Burst of High Inflation in 2021-22: How and Why Did We Get Here?' BIS Working Paper No. 1060, December 2022. -- Comprehensive academic account; argues for the role of monetary policy errors specifically.
6. Federal Reserve Bank of St. Louis. FRED data series PCEPI, CPIAUCSL, UNRATE, FEDFUNDS. -- Primary data for inflation, unemployment, and policy rates 2018-2024.
7. Bureau of Labor Statistics. CPI press releases, 2021-2023. -- Real-time data the Fed had available; identifies the specific months at which inflation became unambiguous.
8. Federal Open Market Committee statements and minutes, January 2021 through July 2022. -- Primary source for tracking the Fed's evolving assessment in real time.
9. Taylor, John B. 'It's Time to Get Back to Rules-Based Monetary Policy.' Hoover Institution, March 2022. -- The counterfactual Taylor rule analysis.
10. Summers, Lawrence H. and Alex Domash. 'A Labor Market View on the Risks of a U.S. Hard Landing.' NBER Working Paper 29910, April 2022. -- Argument that the Fed faced a much harder choice by mid-2022 than it had earlier.
11. Bank for International Settlements Annual Economic Report 2022, Chapter II. -- Cross-country comparison of central bank responses.
12. Mishkin, Frederic. 'Inflation Targeting in a World of Pandemic and War.' Manhattan Institute, June 2022. -- Argument for retaining inflation targeting in modified form; useful for the implications section.

Anticipated counter-arguments:

The strongest objection to my thesis is that the supply shocks of 2021-2022 (Ukraine war, energy crisis, supply chain disruptions) were unforecastable, and any framework would have produced delayed response in their face. I will address this in two ways: first, by showing that inflation was clearly elevated before the Ukraine invasion (CPI was 7.5% in January 2022, before the war), so the supply shocks compounded rather than caused the failure; second, by arguing that a framework committed to symmetric response would have responded to the early 2021 demand-side inflation regardless of subsequent supply shocks. A second objection is that the Fed's framework allowed flexibility and did not require waiting; the framework should not be blamed for how it was applied. I will respond that the framework's structure (the make-up commitment, the employment emphasis) made early action both legally permitted but practically very difficult, since departing from the announced framework would have signaled instability. The pressure was structural, even if individual decisions were not predetermined.

---

PART 2 — MODEL TERM PAPER

The Federal Reserve's 2021-2023 Inflation Episode: A Failure of Framework, Not Forecast

Introduction

In August 2020, the Federal Reserve announced a fundamental change in its monetary policy framework. The Federal Open Market Committee adopted what it called Flexible Average Inflation Targeting (FAIT), under which the Fed would aim for inflation that averaged 2% over time rather than 2% in every period. In practice, this meant that after periods when inflation ran below 2%, the Fed would aim to keep inflation 'moderately above' 2% for some time to compensate. The framework was the culmination of a multi-year review motivated by a decade of inflation running persistently below the 2% target, and by Federal Reserve research suggesting that this persistent shortfall risked anchoring inflation expectations too low.

Less than a year later, the U.S. economy experienced the largest sustained inflation in four decades. Headline CPI inflation rose from 1.4% in January 2021 to 5% in May 2021, to 7% by year-end, and ultimately peaked at 9.1% in June 2022. The Federal Reserve, after maintaining for most of 2021 that the inflation was 'transitory,' began raising the federal funds rate in March 2022 from near zero, eventually reaching 5.25-5.50% by July 2023, the fastest tightening cycle since Paul Volcker's in the early 1980s.

The conventional account of this episode treats the Fed's slow response as a forecasting error. The Fed underestimated the persistence of inflation; better forecasts would have produced earlier action. This paper argues that the forecasting-error account is inadequate. The Fed's response was slow because the framework it had adopted in 2020 systematically biased its decisions toward inaction. Better forecasts would not have produced earlier action because the framework, applied consistently, would have called for tolerance of above-target inflation regardless of the forecast. The 2021-2023 episode was a framework failure, not a forecasting failure, and the implications for monetary policy reform run deeper than improved econometrics.

I. The 2020 Framework

The framework adopted at Jackson Hole in August 2020 had three key features that distinguished it from conventional inflation targeting. First, the inflation objective was reframed as an average over time rather than a target for each period. Following a period of below-target inflation, the Fed would aim to overshoot 2% for some compensating period. Powell did not specify how this average would be computed or over what window, deliberately preserving flexibility, but the qualitative shift was clear: a make-up commitment.

Second, the framework explicitly elevated the employment side of the dual mandate. The previous strategy statement had committed to addressing 'deviations' of employment from its maximum level. The 2020 statement changed this to 'shortfalls,' meaning the Fed would tighten policy in response to employment falling below maximum but not in response to employment exceeding it. This was a one-sided change motivated by the post-2008 experience, when the Fed had repeatedly tightened policy in anticipation of inflation that never materialized, costing real economic gains. The 2020 change explicitly committed the Fed not to repeat that pattern.

Third, the framework retained reference to expectations as the central transmission channel for inflation. Inflation that arose from temporary factors, the FOMC reasoned, should be ignored as long as long-run expectations remained anchored. This was the conceptual basis for the 'transitory' framing that would dominate Fed communications throughout 2021.

All three features were defensible given the conditions of 2020. Inflation had averaged 1.5% over the prior decade. Five-year-five-year forward inflation expectations had drifted as low as 1.2% in March 2020. Unemployment had reached 14.7% in April 2020. The case for a framework biased toward supporting employment and tolerating modest inflation overshoots was strong. The error lay not in adopting such a framework but in not building in adequate provisions for the case where conditions changed rapidly.

II. The Sequence of Events, 2021-2022

In January 2021, with the new framework five months old, the FOMC projected core PCE inflation of 1.8% for 2021. The American Rescue Plan was signed into law in March 2021, injecting $1.9 trillion into an economy that was already recovering. By April, headline CPI was running at 4.2% year-over-year. The Fed maintained that this would be transitory, attributable to base effects (low prices a year earlier inflating the comparison) and to one-time supply disruptions.

In May 2021, CPI was 5.0%. The Fed described it as transitory. In June, 5.4%. Transitory. In November 2021, with CPI at 6.8% and core CPI (excluding food and energy) at 4.9%, Powell finally announced that the term 'transitory' should be retired. The Fed began tapering its asset purchase program in November but did not raise the federal funds rate until March 2022, by which point CPI had reached 8.5%.

The pace of subsequent tightening was historically rapid. Between March 2022 and July 2023, the Fed raised rates by 525 basis points, including a sequence of four consecutive 75-basis-point hikes. By the end of 2023, inflation had fallen substantially (CPI 3.4% in December 2023, core PCE 2.9%) but had not returned to the 2% target. Powell's testimony repeatedly emphasized that the Fed would maintain restrictive policy 'for some time' to ensure that inflation expectations remained anchored.

The crucial question is not whether the Fed eventually acted appropriately but why it took so long to begin acting. The answer cannot be that the data were ambiguous. By August 2021, CPI had been above 5% for four consecutive months. Wage growth had accelerated. Used car prices had risen by 40%. Rents were rising in a way that would clearly feed through to the persistent components of inflation. The Fed had ample real-time information that inflation was running well above target.

III. Why the Framework Mattered

The argument that the framework drove the delay rests on three observations. First, the make-up commitment created an explicit reason to tolerate above-target inflation. The Fed had committed in August 2020 to aim for inflation 'moderately above' 2% to compensate for the prior decade of undershooting. Inflation running at 4-5% in mid-2021 was, by this commitment, partly desirable. The framework did not require the Fed to specify how long or how much overshooting it would tolerate, but it had announced that some overshooting was the goal.

Second, the 'shortfalls' framing on employment meant that the Fed was paying close attention to indicators of remaining labor market slack rather than to inflation indicators that might require tightening. Through 2021, the Fed repeatedly emphasized the labor force participation rate (which remained below its February 2020 level) as evidence of unutilized labor capacity. This focus on a single labor market indicator (LFPR) made it psychologically and institutionally easier to tolerate rising inflation as long as that indicator remained depressed. Other indicators of labor market tightness (the quits rate, wage growth, vacancies-to-unemployment ratio) painted a very different picture, but the framework directed attention toward the variable most likely to suggest patience.

Third, the framework's commitment to long-run expectations as the relevant inflation variable provided cover for treating short-run inflation as transitory. As long as five-year-five-year forward inflation expectations remained near 2%, the framework could be read to suggest that current inflation, however high, did not require action. This logic is defensible in principle but creates a perverse asymmetry in practice: actual inflation has to break through to expectations before policy responds, which means the framework systematically waits until expectations are at risk, by which point the inflation problem is much larger and harder to address.

The combined effect of these three features was a framework that, applied honestly, called for patience in the face of rising inflation throughout 2021. The Fed was not making forecasting errors so much as following its own framework.

IV. The Counterfactual

What would a different framework have produced? Several alternative regimes can be analyzed.

Conventional inflation targeting (the pre-2020 Fed framework, or the framework of the European Central Bank or Bank of Canada) would have responded to inflation as soon as it deviated significantly from target. Under conventional targeting, 4-5% inflation in mid-2021 would have triggered a clear response. The Fed would likely have begun tapering asset purchases by mid-2021 and would have raised rates by late 2021. The eventual peak in rates might have been lower because the inflation problem would have been smaller.

A Taylor rule benchmark, applied mechanically, would have called for federal funds rates of 4-5% by late 2021, far above the actual near-zero rate. The Taylor rule is a benchmark, not a recipe, but the gap between it and actual policy through 2021 was as large as it had been at any point in the rule's 30-year history.

A nominal GDP targeting framework, advocated by Scott Sumner and others, would have responded to the rapid growth in nominal GDP through 2021. Nominal GDP grew at 10% in 2021. A nominal GDP target of 4-5% would have called for substantial monetary tightening as the year progressed.

All three alternative frameworks would have produced earlier action. The framework adopted in 2020 did not. This is not a forecasting issue; it is a framework issue. Even with perfect foresight that inflation would peak at 9% in mid-2022, the 2020 framework, applied consistently, would have been slow to act, because it explicitly committed to tolerate above-target inflation for some compensating period.

V. Cross-Country Comparison

The framework explanation is strengthened by cross-country comparison. Central banks with similar frameworks to the Fed's responded similarly to the 2021-2022 inflation. The European Central Bank, which had similarly emphasized employment recovery and supply-side patience, did not begin raising rates until July 2022. The Bank of England, which retained conventional inflation targeting, began raising rates in December 2021, four months before the Fed. The Bank of Canada, also using conventional inflation targeting, began raising rates in March 2022. The Reserve Bank of New Zealand, with one of the most aggressive inflation-targeting frameworks, began raising rates in October 2021.

The pattern is suggestive: central banks with conventional inflation-targeting frameworks responded earlier than central banks with make-up frameworks. The Fed and ECB, both of which had recently adopted versions of make-up frameworks, lagged most. This is consistent with the framework hypothesis: not all central banks were equally slow, and the slowness correlated with framework structure rather than with forecasting capability.

VI. Implications for the 2025 Framework Review

The Fed's framework reviews occur every five years; the next is scheduled for 2025. The 2021-2023 episode provides the most important real-world test of the 2020 framework. Several specific recommendations follow.

First, the make-up commitment should be abandoned. The asymmetric tolerance for above-target inflation built into FAIT was reasonable as theoretical insurance against deflationary traps but produced catastrophic delay in an inflationary environment. A symmetric framework that aims for 2% inflation in each period (with normal forecast horizons) would have produced earlier action without sacrificing flexibility.

Second, the 'shortfalls' framing should be reconsidered. The intent of the 2020 change was to prevent the Fed from tightening prematurely in anticipation of inflation that might not materialize. In practice, it biased the Fed toward inaction in the face of inflation that was clearly materializing. A return to the 'deviations' framing, with appropriate humility about overreaction to noise, would restore the symmetric mandate Congress actually wrote.

Third, the use of 'transitory' as a category should be tightened. The Fed used 'transitory' through much of 2021 to describe inflation that turned out to be persistent. Better practice would specify time horizons (transitory means resolved within twelve months, not within an undefined future) and would not rely on supply-origin labeling. Inflation arising from supply shocks can still be persistent if it feeds through to wages and expectations.

Fourth, the framework should be more robust across inflation regimes. A framework optimized for disinflation works badly in an inflation. The 2025 review should consider how the framework would perform under multiple scenarios, not just the one that immediately preceded its adoption.

The cost of these changes is some loss of flexibility to support employment in genuine slack conditions. This is a real cost. The Fed's pre-2020 framework, in the view of many participants, had tightened too soon in 2015-2016 and again in 2018-2019. A return to that framework risks repeating those errors. But the alternative—a framework that systematically delays response to clear inflation—has now demonstrated its own costs, and those costs are larger and more difficult to reverse.

VII. Counter-Arguments and Responses

Three counter-arguments deserve direct response.

The first counter-argument is that the supply shocks of 2021-2022 (Ukraine war, energy crisis, supply chain disruptions) were unforecastable, and any framework would have been slow in their face. This is partially true but does not vindicate the 2020 framework specifically. Inflation was already clearly elevated before the Ukraine invasion in February 2022. CPI hit 7.5% in January 2022, before the war. The Fed was already substantially behind by then. A different framework would have been acting before the supply shocks compounded the problem, leaving the supply shocks as additional pressure rather than the trigger for response. The framework's contribution was to make the Fed react late even to the demand-side inflation that was visible from mid-2021.

The second counter-argument is that the Fed's framework permitted flexibility and that the framework should not be blamed for how it was applied. This is formally correct: nothing in the 2020 framework legally prevented the Fed from raising rates earlier. But the framework had been announced publicly, with explicit emphasis on make-up commitments and on employment shortfalls. Departing from it in early 2021 would have signaled instability in the Fed's framework just months after it had been adopted. The pressure on the FOMC to apply the framework as advertised was substantial, even if no single decision was strictly determined by it. The framework shaped the structure of choices the FOMC faced.

The third counter-argument is that hindsight makes the case appear cleaner than it actually was. In real time, the 'transitory' interpretation was defensible. Many private-sector economists held similar views through mid-2021. The argument is fair but limited. The question is not whether anyone reasonably expected the inflation to be transitory; the question is whether the framework predisposed the Fed to favor that interpretation when the data became ambiguous. The argument here is that it did, and that a different framework would have favored caution in the opposite direction.

Conclusion

The 2021-2023 inflation episode was the most consequential test of Federal Reserve policy since the early 1980s. The Fed's slow response is best understood as a framework failure rather than a forecasting failure. The 2020 framework, with its make-up commitment, employment-shortfalls focus, and reliance on long-run expectations as the relevant inflation variable, structurally biased the Fed toward delayed response. Different forecasts would not have produced different outcomes; the framework would have called for patience even with perfect foresight.

The implications for the 2025 framework review are direct. The Fed needs to return to a more symmetric framework, abandon the make-up commitment, and develop greater robustness to inflation regime changes. The cost is some flexibility lost. The benefit is avoiding the next iteration of the same error: a framework optimized for the previous decade's problem, deployed in a decade when the problem has reversed.

A central bank's framework is not just a technical specification. It is a public commitment that shapes how its decisions will be received and how its credibility accumulates. The 2020 framework was widely praised at adoption for its boldness and intellectual sophistication. Its real-world performance, in the conditions that immediately followed, was poor. The Federal Reserve's institutional credibility has survived the episode, partly because of the aggressive subsequent tightening and partly because of historical anchoring of expectations. But the credibility was tested. The lesson is to design frameworks for robustness across regimes, not optimization to the regime just past. The next framework will be tested by conditions we cannot now anticipate, and it should be designed to perform reasonably well in conditions other than the ones that produced it.`,
  },
];

export function moduleById(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}

export function moduleIndexById(id: string): number {
  return modules.findIndex((m) => m.id === id);
}
