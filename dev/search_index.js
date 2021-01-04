var documenterSearchIndex = {"docs":
[{"location":"api/#API-Reference","page":"API Reference","title":"API Reference","text":"","category":"section"},{"location":"uncertainty-sets/#Uncertainty-Sets","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"","category":"section"},{"location":"uncertainty-sets/#Continuous-Uncertainty-Set","page":"Uncertainty Sets","title":"Continuous Uncertainty Set","text":"","category":"section"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"Given two finite sets of discrete probabilities 𝐩 and 𝐪 over states I we define the difference between the distributions as","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"𝐝=𝐪-𝐩","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"As a consequence of the properties of discrete probabilities, the sum of the differences is zero","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"𝐝𝟏(k)=(𝐩-𝐪)𝟏(k)=𝐩𝟏(k)-𝐪𝟏(k)=0","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"We can also obtain the bounds for the differences' values by taking the minimum and maximum over the set of all possible differences. Since the value of probabilities are between zero and one, we have","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"-1𝐝1","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"We can reformulate the difference equation into a form","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"𝐪=𝐩+𝐝","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"The difference set consists of all possible difference vectors 𝐝 that yield a valid distribution when added to the distribution 𝐩 Formally,","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"𝐃_𝐩=𝐝-1𝐝1 𝐝𝟏(k)=0 𝐩+𝐝0","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"Next, we define an ambiguity set as a subset of differences set","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"barΔ_𝐩 = 𝐝𝐃_𝐩mathcalC(𝐝)","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"The constraint (boolean function) mathcalC limits the difference's magnitude. We need to choose the constraint mathcalC such that the resulting set is convex, which makes optimization possible. We discuss concrete choices that yield polyhedral sets later.","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"Finally, we define the continuous uncertainty set that consists of all distributions within difference 𝐝barΔ_𝐩 from 𝐩","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"bar𝐐_𝐩=𝐩+𝐝𝐝barΔ_𝐩","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"However, we cannot use a continuous uncertainty set directly for formulating the mathematical model. We must obtain a discrete subset of the continuous uncertainty set to linearize the minimum expected value in the Best Worst-Case Expected Value page.","category":"page"},{"location":"uncertainty-sets/#Discretization","page":"Uncertainty Sets","title":"Discretization","text":"","category":"section"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"We can define the minimum expected value over the continuous uncertainty set as","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"min_𝐪bar𝐐_𝐩 𝔼(𝐪 𝐮) = min_𝐝barΔ_𝐩 (𝐩+𝐝)𝐮 = 𝐩𝐮 + min_𝐝barΔ_𝐩 𝐝𝐮","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"We can express the minimizing difference as","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"𝐝^(𝐮)=argmin_𝐝barΔ_𝐩 𝐝𝐮","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"Now, we can obtain a discrete ambiguity set","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"Δ_𝐩=𝐝^(𝐮)𝐮","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"The discrete set of all possible minimizing distributions","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"𝐐_𝐩=𝐩+𝐝𝐝Δ_𝐩","category":"page"},{"location":"uncertainty-sets/#Polyhedral-Uncertainty-Set","page":"Uncertainty Sets","title":"Polyhedral Uncertainty Set","text":"","category":"section"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"We state the minimization problem over polyhedral ambiguity set as","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"beginaligned\nargmin_(d_1d_k)ℝ^k  d_1u_1 +d_2u_2 ++d_ku_k \n d_1+d_2++d_k=0 \n d_i^-  d_i  d_i^+ quad i1k \n d_1+d_2++d_k2ϵ\nendaligned","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"The parameters for difference intervals, d_i^-  d_i  d_i^+ are lower bound -p_id_i^-0 and upper bound 0d_i^+1-p_i for all i1k","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"The parameter for the Wasserstein distance, 𝐝_1=d_1+d_2++d_k2ϵ is the radius 0ϵ1","category":"page"},{"location":"uncertainty-sets/#Cross-Assignment","page":"Uncertainty Sets","title":"Cross-Assignment","text":"","category":"section"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"Given an ordering of vector 𝐮, such as u_1u_2u_k we can find the minimizing difference vector 𝐝 over polyhedral ambiguity set using cross-assignment. We can construct the set of all minimizing difference vectors by using cross-assignment over all possible orderings of vector 𝐮","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"The following sections show that we always have difference vector that evaluates to less or equal to zero. After that, we state the rules for finding the minimizing difference vector.","category":"page"},{"location":"uncertainty-sets/#Binary-cross-assignment","page":"Uncertainty Sets","title":"Binary cross-assignment","text":"","category":"section"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"Let u_1u_2 and d_1+d_2=0 where d_10 and d_20. Then we have","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"beginaligned\nu_1d_1 + u_2d_2  0 \nu_1d_1  u_2(-d_2) \nu_1d_1  u_2d_1 \nu_1  u_2\nendaligned","category":"page"},{"location":"uncertainty-sets/#k-ary-cross-assignment","page":"Uncertainty Sets","title":"k-ary cross-assignment","text":"","category":"section"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"Let u_1u_2u_k and d_1+d_2++d_k=0.","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"Then, for all j1k-1 such that d_1d_j0 and d_j+1d_k0 we have","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"beginaligned\nu_1d_1 +  + u_kd_k  u_jd_1 +  + u_jd_j + u_j+1d_j+1 +  + u_j+1d_k \n= u_j(d_1++d_j) + u_j+1(d_j+1++d_k) \n  0\nendaligned","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"We obtain the last step from binary cross-assignment.","category":"page"},{"location":"uncertainty-sets/#Minimizing-cross-assignment","page":"Uncertainty Sets","title":"Minimizing cross-assignment","text":"","category":"section"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"Let u_1u_2 and d_1+d_2=d_1^+d_2^ Then","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"u_1d_1+u_2d_2u_1d_1^+u_2d_2^","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"Let d_1d_2d_1^d_2^d^0 Then","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"beginaligned\nu_1d_1+u_2d_2 = u_1d_1+u_2(d_2^+d^) \n= u_1d_1+u_2d^+u_2d_2^ \n u_1d_1+u_1d^+u_2d_2^ \n= u_1(d_1+d^)+u_2d_2^ \n= u_1d_1^+u_2d_2^\nendaligned","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"where d_1=d_1^-d^ and d_2=d_2^+d^","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"Let d_1d_2d_1^d_2^d^0 Then","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"beginaligned\nu_1d_1+u_2d_2 = u_1(d_1^+d^)+u_2d_2 \n= u_1d_1^+u_1d^+u_2d_2 \n u_1d_1^+u_2d^+u_2d_2 \n= u_1d_1^+u_2(d_2+d^) \n= u_1d_1^+u_2d_2^\nendaligned","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"where d_1=d_1^+d^ and d_2=d_2^-d^","category":"page"},{"location":"uncertainty-sets/#All-Orderings","page":"Uncertainty Sets","title":"All Orderings","text":"","category":"section"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"An ordering is u_1u_2u_k and its corresponding vector of indices is I^=(12k) We can generate all possible ordering of 𝐮 by generating all permutations of I Let mathcalP(I) define the set of all permutations of set I","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"Δ_𝐩=𝐝^(𝐮)𝐮=𝐝^(I^)I^mathcalP(I)","category":"page"},{"location":"uncertainty-sets/","page":"Uncertainty Sets","title":"Uncertainty Sets","text":"There are a finite amount of permutations mathcalP(I)=k","category":"page"},{"location":"robust-decision-programming/#Robust-Decision-Programming","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"","category":"section"},{"location":"robust-decision-programming/#Difference","page":"Robust Decision Programming","title":"Difference","text":"","category":"section"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"Difference vector is","category":"page"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"d(X_i=s_iX_I(i)=s_I(i))s_iS_i=𝐝(s_I(i))Δ(s_I(i))","category":"page"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"𝐝(s_I(i))s_I(i)S_I(i)=𝐝(S_I(i))Δ^(S_I(i))=_s_I(i)S_I(i)Δ(s_I(i))","category":"page"},{"location":"robust-decision-programming/#Path-Probability","page":"Robust Decision Programming","title":"Path Probability","text":"","category":"section"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"Uncertainty in chance node iC","category":"page"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"beginaligned\nℙ_d(X_i=𝐬_iX_I(i)=𝐬_I(i)) =\n ℙ(X_i=𝐬_iX_I(i)=𝐬_I(i)) + \n d(X_i=𝐬_iX_I(i)=𝐬_I(i))\nendaligned","category":"page"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"Upper bound of path probability with uncertainty","category":"page"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"p_di(𝐬)= ℙ_d(X_i=𝐬_iX_I(i)=𝐬_I(i))_jCi ℙ(X_j=𝐬_jX_I(j)=𝐬_I(j))","category":"page"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"Path probability with uncertainty","category":"page"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"ℙ_di(X=𝐬Z)=p_di(𝐬)q(𝐬Z)","category":"page"},{"location":"robust-decision-programming/#Expected-Value","page":"Robust Decision Programming","title":"Expected Value","text":"","category":"section"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"Expected value with uncertainty","category":"page"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"𝔼_𝐝(S_I(i))(Z)= _𝐬𝐒 ℙ_𝐝(𝐬_i𝐬_I(i))(X=𝐬Z)mathcalU(𝐬)","category":"page"},{"location":"robust-decision-programming/#Maximin","page":"Robust Decision Programming","title":"Maximin","text":"","category":"section"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"Maximizing the minimum expected value with one uncertain chance node iC","category":"page"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"undersetZℤtextmaximize min_𝐝(S_I(i))Δ^(S_I(i)) 𝔼_𝐝(S_I(i))(Z)","category":"page"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"","category":"page"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"Linearization of the problem","category":"page"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"undersetZℤtextmaximize _s_I(i)S_I(i) x_s_I(i)","category":"page"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"x_s_I(i)  _𝐬𝐒 𝐬_I(i)=s_I(i) π_d(𝐬)mathcalU(𝐬)quad d(s_I(i))Δ(s_I(i)) s_I(i)S_I(i)","category":"page"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"π_d(𝐬)ℙ_d_i(X=𝐬Z)","category":"page"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"","category":"page"},{"location":"robust-decision-programming/","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"𝐒=_s_I(i)S_I(i) 𝐬𝐒𝐬_I(i)=s_I(i)","category":"page"},{"location":"best-worst-case-expected-value/#Best-Worst-Case-Expected-Value","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"","category":"section"},{"location":"best-worst-case-expected-value/#Introduction","page":"Best Worst-Case Expected Value","title":"Introduction","text":"","category":"section"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"We explore an approach to robust optimization referred to as distributionally robust optimization. It finds the best worst-case expected value when there is uncertainty in the probability distribution. In this case, best means maximizing over decision variables, and worst-case expected value means minimum expected value over an uncertainty set that accounts for the distribution's uncertainty. In this work, we only consider discrete probability distributions.","category":"page"},{"location":"best-worst-case-expected-value/#Expected-Value","page":"Best Worst-Case Expected Value","title":"Expected Value","text":"","category":"section"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"We denote a finite set the states for probabilities and utilities as","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"I=12kquad kℕ","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"We define a vector of discrete probabilities associated with the states as","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"𝐩=(p_1p_2p_k)","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"such that all elements are greater or equal to zero 𝐩0 and the sum of all elements is one 𝐩𝟏(k)=1 where 𝟏(k)=(1)^k is a vector of k ones and  is the dot product. We also define utilities associated with the states as a vector of real numbers","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"𝐮=(u_1u_2u_k)ℝ^k","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"Finally, we define expected value as a function of probabilities and utilities","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"𝔼(𝐩𝐮)=𝐩𝐮","category":"page"},{"location":"best-worst-case-expected-value/#Best-Worst-Case-over-Uncertainty-Set","page":"Best Worst-Case Expected Value","title":"Best Worst-Case over Uncertainty Set","text":"","category":"section"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"The uncertainty set encapsulates the uncertainty in the probabilities. Given probabilities 𝐩 we define the uncertainty set 𝐐_𝐩 as a finite set of discrete probabilities near 𝐩 We will explain how to form a finite uncertainty sets on Uncertainty Sets page.","category":"page"},{"location":"best-worst-case-expected-value/#Maximin-Expected-Value","page":"Best Worst-Case Expected Value","title":"Maximin Expected Value","text":"","category":"section"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"We define the problem as maximizing the minimum expected value over decision variables Z","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"undersetzZoperatornamemaximize min_𝐪𝐐 𝔼(𝐪 𝐮(z))","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"Next, we linearize the expression to a form","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"undersetzZoperatornamemaximize x","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"x𝔼(𝐪 𝐮(z))quad 𝐪𝐐","category":"page"},{"location":"best-worst-case-expected-value/#Minimax-Regret","page":"Best Worst-Case Expected Value","title":"Minimax Regret","text":"","category":"section"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"Solve the original, non-robust problem by maximizing the expected value over decision variables Z","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"μ^=undersetzZoperatornamemaximize 𝔼(𝐩𝐮(z))","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"We formulate the minimization of the maximum regret as","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"undersetzZoperatornameminimize max_𝐪𝐐_𝐩 (μ^-𝔼(𝐪 𝐮(z)))","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"undersetzZoperatornameminimize (μ^ - min_𝐪𝐐_𝐩 𝔼(𝐪 𝐮(z))","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"Next, we linearize the expression to a form","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"undersetzZoperatornameminimize (μ^-x)","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"x𝔼(𝐪 𝐮(z))quad 𝐪𝐐_𝐩","category":"page"},{"location":"best-worst-case-expected-value/#Best-Worst-Case-over-Product-Uncertainty-Set","page":"Best Worst-Case Expected Value","title":"Best Worst-Case over Product Uncertainty Set","text":"","category":"section"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"Let 𝐏=𝐩_1𝐩_m mℕ be a finite set of probability vectors. We define the product uncertainty set as","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"𝐐_𝐏^=_l=1^m 𝐐_𝐩_l","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"The probabilities in decision programming will appear in the product form.","category":"page"},{"location":"best-worst-case-expected-value/#Maximin-Expected-Value-2","page":"Best Worst-Case Expected Value","title":"Maximin Expected Value","text":"","category":"section"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"We define the problem as maximizing the minimum expected value over decision variables Z","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"undersetzZoperatornamemaximize min_(𝐪_1𝐪_l)𝐐_𝐏^ _l=1^m 𝔼(𝐪_l 𝐮_l(z))","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"Next, we linearize the expression to a form","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"undersetzZoperatornamemaximize _l=1^m x_l","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"x_l  𝔼(𝐪 𝐮_l(z))quad 𝐪𝐐_𝐩_l l1m","category":"page"},{"location":"best-worst-case-expected-value/#Minimax-Regret-2","page":"Best Worst-Case Expected Value","title":"Minimax Regret","text":"","category":"section"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"Solve the original, non-robust problem by maximizing the expected value over decision variables Z","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"μ^=undersetzZoperatornamemaximize _l=1^m 𝔼(𝐩_l 𝐮_l(z))","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"We formulate the minimization of the maximum regret as","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"undersetzZoperatornameminimize max_(𝐪_1𝐪_l)𝐐_𝐏^ (μ^-_l=1^m 𝔼(𝐪_l 𝐮_l(z)))","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"undersetzZoperatornameminimize (μ^ - min_(𝐪_1𝐪_l)𝐐_𝐏^ _l=1^m 𝔼(𝐪_l 𝐮_l(z)))","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"Next, we linearize the expression to a form","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"undersetzZoperatornameminimize (μ^ - _l=1^m x_l)","category":"page"},{"location":"best-worst-case-expected-value/","page":"Best Worst-Case Expected Value","title":"Best Worst-Case Expected Value","text":"x_l  𝔼(𝐪 𝐮_l(z))quad 𝐪𝐐_𝐩_l l1m","category":"page"},{"location":"#RobustDecisionProgramming.jl","page":"Home","title":"RobustDecisionProgramming.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"RobustDecisionProgramming.jl extends DecisionProgramming.jl with robust optimization.","category":"page"},{"location":"robust-optimization/#Robust-Optimization","page":"Robust Optimization","title":"Robust Optimization","text":"","category":"section"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"For an overview of different robust optimization models, we recommend the paper [1]. As a general reference for fundamental mathematical concepts and notation such as propositional logic and sets, we recommend the book Logic and Proof [2]. For model building using convex optimization, we recommend MOSEK Modeling Cookbook [3].","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"We denote scalar using lower-case math italics, vectors using lower-case boldface symbols, and sets using upper-case symbols. All non-matrix algebra operations on vectors are element-wise.","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"We denote vector constructors using (elementcondition) and set constructors using elementcondition","category":"page"},{"location":"robust-optimization/#References","page":"Robust Optimization","title":"References","text":"","category":"section"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"[1]: Gabrel, V., Murat, C., & Thiele, A. (2014). Recent advances in robust optimization: An overview. European Journal of Operational Research, 235(3), 471–483. https://doi.org/10.1016/j.ejor.2013.09.036","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"[2]: Avigad, J., Lewis, R., & van Doorn, F. (2020). Logic and Proof. Retrieved from https://leanprover.github.io/logic_and_proof/","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"[3]: MOSEK. (2020). MOSEK Modeling Cookbook. Retrieved from https://docs.mosek.com/modeling-cookbook/index.html","category":"page"}]
}
