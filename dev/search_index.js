var documenterSearchIndex = {"docs":
[{"location":"api/#API-Reference","page":"API Reference","title":"API Reference","text":"","category":"section"},{"location":"robust-decision-programming/#Robust-Decision-Programming","page":"Robust Decision Programming","title":"Robust Decision Programming","text":"","category":"section"},{"location":"#RobustDecisionProgramming.jl","page":"Home","title":"RobustDecisionProgramming.jl","text":"","category":"section"},{"location":"#Description","page":"Home","title":"Description","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"RobustDecisionProgramming.jl extends DecisionProgramming.jl with robust optimization. For an overview of different robust optimization models, we recommend the paper [1]. As a general reference for fundamental mathematical concepts and notation such as propositional logic and sets, we recommend the book Logic and Proof [2]. For model building using convex optimization, we recommend MOSEK Modeling Cookbook [3].","category":"page"},{"location":"#References","page":"Home","title":"References","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"[1]: Gabrel, V., Murat, C., & Thiele, A. (2014). Recent advances in robust optimization: An overview. European Journal of Operational Research, 235(3), 471–483. https://doi.org/10.1016/j.ejor.2013.09.036","category":"page"},{"location":"","page":"Home","title":"Home","text":"[2]: Avigad, J., Lewis, R., & van Doorn, F. (2020). Logic and Proof. Retrieved from https://leanprover.github.io/logic_and_proof/","category":"page"},{"location":"","page":"Home","title":"Home","text":"[3]: MOSEK. (2020). MOSEK Modeling Cookbook. Retrieved from https://docs.mosek.com/modeling-cookbook/index.html","category":"page"},{"location":"robust-optimization/#Robust-Optimization","page":"Robust Optimization","title":"Robust Optimization","text":"","category":"section"},{"location":"robust-optimization/#Introduction","page":"Robust Optimization","title":"Introduction","text":"","category":"section"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Focus on distributionally robust over discrete probability distributions. Best worst-case analysis.","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"We denote scalar using lower-case math italics, vectors using lower-case boldface symbols, and sets using upper-case symbols. All non-matrix algebra operations on vectors are element-wise.","category":"page"},{"location":"robust-optimization/#Discrete-Probabilities","page":"Robust Optimization","title":"Discrete Probabilities","text":"","category":"section"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"We denote a finite set of discrete probabilities for states I=12k as","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"𝐩=(p_1p_2p_k)","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"such that 𝐩0 and 𝐩𝟏(k)=1 where 𝟏(k)=(1)^k is a vector of k ones.","category":"page"},{"location":"robust-optimization/#Difference","page":"Robust Optimization","title":"Difference","text":"","category":"section"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Given two finite sets of discrete probabilities 𝐩 and 𝐪 over states I we define the difference between the distributions as","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"𝐝=𝐩-𝐪","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"From the properties of discrete probabilities, we have","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"𝐝𝟏(k)=(𝐩-𝐪)𝟏(k)=𝐩𝟏(k)-𝐪𝟏(k)=0","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"We obtain the bounds for the values of the differences by taking the minimum and maximum over the set of all possible differences. Since the value of probabilities are between zero and one, we have","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"-1𝐝1","category":"page"},{"location":"robust-optimization/#Uncertainty-Sets","page":"Robust Optimization","title":"Uncertainty Sets","text":"","category":"section"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"We can reformulate the difference equation such when difference 𝐝 added to the original distribution 𝐩 yield the new distribution 𝐪 as","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"𝐪=𝐩+𝐝","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"The difference set consists of all possible difference vectors that yield a valid distribution when added to the original distribution","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"𝐃=𝐝-1𝐝1 𝐝𝟏(k)=0 𝐩+𝐝0","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"We can define a boolean function to limit the magnitude of the difference vectors as","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"mathcalC𝐃","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"We filter the difference set using the boolean function as a constraint into an ambiguity set","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Δ = d𝐃mathcalC(𝐝)","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"The function mathcalC is a design choice. We discuss concrete choices of the function later.","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Properties of mathcalC, convexity of Δ, polyhedral sets.","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"The uncertainty set consists of all distributions  within difference 𝐝Δ from 𝐩 as","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"𝐐=𝐩+𝐝𝐝Δ","category":"page"},{"location":"robust-optimization/#Minimum-Expected-Value","page":"Robust Optimization","title":"Minimum Expected Value","text":"","category":"section"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"We define a vector of real numbers associated with states I as","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"𝐮=(u_1u_2u_k)ℝ^k","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Then, we define the minimum expected value as","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"min_𝐪𝐐 𝐪𝐮 = min_𝐝Δ (𝐩+𝐝)𝐮 = 𝐩𝐮 + min_𝐝Δ 𝐝𝐮","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"To formulate the minimization problem as a discrete optimization formulation, we need to reduce Δ to a discrete set of possible difference vectors Δ^- such that 𝐝^-Δ^- where","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"𝐝^-=argmin_𝐝Δ 𝐝𝐮","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"We define the following lemma for solving the problem:","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Lemma: If u_1u_2 and d_1d_20 then:","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"beginaligned\nu_1 d_1 + u_2 d_2 = u_1 d_1^+ u_1 d_1^+u_2 d_2 \n u_1 d_1^ + u_2 d_1^ + u_2 d_2 \n= u_1 d_1^ + u_2 (d_1^ + d_2)\nendaligned","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"where d_1=d_1^+d_1^ such that d_1^d_1 and d_1^d_1","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Assign smallest d to highest u and vice versa.","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Generate solution for each permutation","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"u_1u_2u_k","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"If we do not have any information about the ordering of 𝐮 we can generate all permutations to cover all possible orderings","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Let mathcalP(I) define the set of all permutations of set I","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"𝐝^-(I^)","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"assuming order u_i_1u_i_2u_i_k where I^=i_1i_2i_k","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Δ^-=𝐝^-(I^)I^mathcalP(I)","category":"page"},{"location":"robust-optimization/#Maximin","page":"Robust Optimization","title":"Maximin","text":"","category":"section"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"The discrete set of all possible minimizing distributions","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"𝐐^-=𝐩+𝐝𝐝Δ^-","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Maximize the minimum expected value","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"max_zZ min_𝐪𝐐^-(z) 𝐪𝐮(z)","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Now we can linearize the objective as","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"max_zZ x","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"x𝐪𝐮(z)quad 𝐪𝐐^-(z)","category":"page"},{"location":"robust-optimization/#Wasserstein-Distance","page":"Robust Optimization","title":"Wasserstein Distance","text":"","category":"section"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"mathcalC(𝐝)","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"is equivalent to","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"𝐝_12ϵ","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"where 0ϵ1 is a parameter","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"beginaligned\nmin  d_1 u_1 +d_2 u_2 ++d_k u_k \n d_1+d_2++d_k=0 \n d_1+d_2++d_k2ϵ \n p_i + d_i  0quad i12k \n d_iℝquad i12k\nendaligned","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Solution. Let u_1u_2u_k and k1","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"ϵ^=minϵ1-p_k","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Decrease the probability of best outcomes:","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"beginaligned\nm_1 = ϵ^ \nd_1 = -minm_1p_1 \nm_2 = m_1 + d_1 \nd_2 = -minm_2p_2quad m_2  0 \n\nendaligned","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Increase the probability of worst outcomes.","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"d_k=ϵ^","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Difference vector","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"𝐝^-=(d_1d_2d_k)","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"Set of all difference vectors","category":"page"},{"location":"robust-optimization/#Intervals","page":"Robust Optimization","title":"Intervals","text":"","category":"section"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"mathcalC(𝐝)","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"is equivalent to","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"0𝐝^-  𝐝  𝐝^+1","category":"page"},{"location":"robust-optimization/","page":"Robust Optimization","title":"Robust Optimization","text":"where 𝐝^- and 𝐝^+ are parameters","category":"page"}]
}
