const questions = [
	{ q: "In the word root for conservation, con stands for:", options: ["together", "to keep", "house", "manage"], answer: 0 },
	{ q: "The ability of a single economic actor (or small group of actors) to have a substantial influence on market prices is known as:", options: ["price power", "market power", "externality", "economic power"], answer: 1 },
	{ q: "An economy that allocates resources through the decentralised decisions of many firms and households as they interact in markets for goods and services is a/an:", options: ["urban economy", "rural economy", "planned economy", "market economy"], answer: 3 },
	{ q: "In the word root for conservation, servare stands for:", options: ["together", "to keep", "house", "manage"], answer: 1 },
	{ q: "Which of these is true?", options: ["Wants are unlimited, resources are unlimited", "Wants are limited, resources are limited", "Wants are unlimited, resources are limited", "Wants are limited, resources are unlimited"], answer: 2 },
	{ q: "An increase in the overall level of prices in the economy is:", options: ["inflation", "deflation", "stagflation", "priceflation"], answer: 0 },
	{ q: "Phillips curve shows the relation between:", options: ["profit and loss", "marked price and selling price", "inflation rate and unemployment rate", "electricity consumption and heat output"], answer: 2 },
	{ q: "In the word root for Economics, oikos stands for:", options: ["together", "to keep", "house", "manage"], answer: 2 },
	{ q: "Most of rational thinking occurs:", options: ["before the margin", "at the margin", "after the margin", "none of these"], answer: 1 },
	{ q: "Input costs that do not require an outlay of money are:", options: ["explicit costs", "implicit costs", "opportunity costs", "phantom costs"], answer: 1 },

	{ q: "Which of these is a pillar of sustainability?", options: ["social sustainability", "industrial sustainability", "agricultural sustainability", "trans-boundary sustainability"], answer: 0 },
	{ q: "According to Malthusian model:", options: ["Population grows in geometric progression, food supply increases in arithmetic progression", "Population grows in geometric progression, food supply increases in geometric progression", "Population grows in arithmetic progression, food supply increases in arithmetic progression", "Population grows in arithmetic progression, food supply increases in geometric progression"], answer: 0 },
	{ q: "Which of these is a preventive check according to Malthus?", options: ["foresight", "vice", "misery", "flood"], answer: 0 },
	{ q: "Which of these is a positive check according to Malthus?", options: ["late marriage", "war", "celibacy", "moral restraint"], answer: 1 },
	{ q: "The Trinity explosion of 1945 is taken as the beginning of the:", options: ["Holocene", "Cenocene", "Anthropocene", "Eocene"], answer: 2 },
	{ q: "The book 'An Essay on the Principle of Population' was written by:", options: ["Darwin", "Malthus", "Spencer", "Owens"], answer: 1 },
	{ q: "The demographic transition sees a society move from:", options: ["high birth rate, low death rate to low birth rate, high death rate", "low birth rate, high death rate to low birth rate, low death rate", "high birth rate, high death rate to low birth rate, low death rate", "high birth rate, high death rate to low birth rate, high death rate"], answer: 2 },
	{ q: "The quantum of human impacts can be written as:", options: ["I = P + A + T", "I = P X A + T", "I = P X A X T", "I = P + A X T"], answer: 2 },
	{ q: "The logistic growth equation curve is:", options: ["I-shaped", "J-shaped", "S-shaped", "U-shaped"], answer: 2 },
	{ q: "Which of these is not a pillar of sustainability?", options: ["environmental sustainability", "economic sustainability", "trans-boundary sustainability", "social sustainability"], answer: 2 },
	{ q: "__is used to identify which potential impacts are relevant to assess.", options: ["screening", "scoping", "reporting", "review"], answer: 1 },
	{ q: "The potential or capacity of a material to have adverse effects on living organisms is:", options: ["vulnerability", "susceptibility", "sustainability", "toxicity"], answer: 3 },
	{ q: "A deciduous forest in Madhya Pradesh was converted to a mine. After mining, the area was replanted. This is an example of:", options: ["recovery", "restoration", "enhancement", "replacement"], answer: 1 },
	{ q: "Hydrocarbons derived from incomplete burning of mineral oils are:", options: ["petrogenic hydrocarbons", "pyrogenic hydrocarbons", "biogenic hydrocarbons", "chemoenic hydrocarbons"], answer: 1 },
	{ q: "A deciduous forest was converted to a lake visited by migratory birds. This is an example of:", options: ["recovery", "restoration", "enhancement", "replacement"], answer: 3 },
	{ q: "The relative effect of exposure is called:", options: ["vulnerability", "sensitivity", "sustainability", "toxicity"], answer: 1 },
	{ q: "__determines which projects require a full or partial impact assessment study.", options: ["screening", "scoping", "reporting", "review"], answer: 0 },
	{ q: "The extent to which a chemical is available for uptake into an organism is:", options: ["bioavailability", "bioaccumulation", "biomagnification", "bioresponse"], answer: 0 },
	{ q: "Hydrocarbons derived from biological processes acting on mineral oils are:", options: ["petrogenic hydrocarbons", "pyrogenic hydrocarbons", "biogenic hydrocarbons", "chemoenic hydrocarbons"], answer: 2 },
	{ q: "An adaptation that increases vulnerability to climate stimuli instead of reducing it is called:", options: ["adaptation", "mitigation", "maladaptation", "malmitigation"], answer: 2 },

	{ q: "Which of these is a deterministic factor?", options: ["environmental variation", "forest fire", "death rate", "diseases"], answer: 2 },
	{ q: "Vegetables dying under a teak plantation could be due to:", options: ["autophagy", "allelophagy", "autopathy", "allelopathy"], answer: 3 },
	{ q: "The movement of lions across the Gir landscape is an example of:", options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"], answer: 0 },
	{ q: "'The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.' This is the statement for:", options: ["Liebig’s law of the minimum", "Liebig’s law of the maximum", "Shelford’s law of tolerance", "Shelford’s law of intolerance"], answer: 2 },
	{ q: "The regular, seasonal movement of animals, often along fixed routes is called :", options: ["translocation", "migration", "dispersal", "drifting"], answer: 1 },
	{ q: "Which of these is a stochastic factor?", options: ["birth rate", "death rate", "population structure", "environmental fluctuation"], answer: 3 },
	{ q: "Movement of individuals away from their birthplace to reproduce elsewhere is:", options: ["translocation", "migration", "dispersal", "drifting"], answer: 2 },
	{ q: "Scarcity of food is a:", options: ["chemical factor", "demographic factor", "push factor", "pull factor"], answer: 2 },
	{ q: "Correct sequence of habitat fragmentation is:", options: ["Original forest → Dissection → Perforation → Fragmentation → Attrition", "Original forest → Dissection → Attrition → Fragmentation → Perforation", "Original forest → Dissection → Perforation → Attrition → Fragmentation", "Original forest → Dissection → Fragmentation → Perforation → Attrition"], answer: 0 },
	{ q: "A root zone treatment plant is an example of:", options: ["phytoremediation", "biological control", "biomagnification", "bioaccumulation"], answer: 0 }

	, {
		q: "a measure of the responsiveness of quantity demanded or quantity supplied to a change in one of its determinants is",
		options: ["elasticity", "responsivity", "demand-supply equilibrium", "pricing"],
		answer: 0
	},
	{
		q: "the ability to produce a good using fewer inputs than another producer is",
		options: ["comparative advantage", "absolute advantage", "production advantage", "resource advantage"],
		answer: 1
	},
	{
		q: "Common resource goods are",
		options: ["excludable, rival in consumption", "non-excludable, rival in consumption", "excludable, non-rival in consumption", "non-excludable, non-rival in consumption"],
		answer: 1
	},
	{
		q: "If private parties can bargain without cost over the allocation of resources, they can solve the problem of externalities on their own. This is a statement for",
		options: ["Allocation theorem", "Phillips theorem", "Coase theorem", "Nash theorem"],
		answer: 2
	},
	{
		q: "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs is known as",
		options: ["Good development", "Sustainable development", "Futuristic development", "Gandhian development"],
		answer: 1
	},
	{
		q: "Club goods are",
		options: ["excludable, rival in consumption", "non-excludable, rival in consumption", "excludable, non-rival in consumption", "non-excludable, non-rival in consumption"],
		answer: 2
	},
	{
		q: "Which of these is not a method of internalisation of externalities?",
		options: ["tradable pollution permits", "charities to social causes", "command-and-control policies", "free market"],
		answer: 3
	},
	{
		q: "Private goods are",
		options: ["excludable, rival in consumption", "non-excludable, rival in consumption", "excludable, non-rival in consumption", "non-excludable, non-rival in consumption"],
		answer: 0
	},
	{
		q: "a simplified description, especially a mathematical one, of a system or process, to assist calculations and predictions is the definition of a/an",
		options: ["equation", "model", "philosophy", "process dynamics"],
		answer: 1
	},
	{
		q: "the impact of one person's actions on the well-being of a bystander is",
		options: ["actor-observer effect", "externality", "internality", "benefits principle"],
		answer: 1
	},

	{
		q: "the claim that, other things being equal, the quantity demanded of a good falls when the price of the good rises  is a statement of",
		options: ["law of demand", "law of supply", "law of quantity demanded", "law of quantity supplied"],
		answer: 0
	},
	{
		q: "a legal maximum on the price at which a good can be sold  is",
		options: ["price ceiling", "price floor", "selling ceiling", "selling floor"],
		answer: 0
	},
	{
		q: "a good for which, other things being equal, an increase in income leads to a decrease in demand  is",
		options: ["normal good", "inferior good", "Giffen good", "common good"],
		answer: 1
	},
	{
		q: "a table that shows the relationship between the price of a good and the quantity supplied  is",
		options: ["demand table", "demand schedule", "supply table", "supply schedule"],
		answer: 3
	},
	{
		q: "a graph of the relationship between the price of a good and the quantity demanded  is",
		options: ["demand curve", "supply curve", "Laffer's curve", "Phillips curve"],
		answer: 0
	},
	{
		q: "a table that shows the relationship between the price of a good and the quantity demanded  is",
		options: ["demand table", "demand schedule", "supply table", "supply schedule"],
		answer: 1
	},
	{
		q: "a measure of how much the quantity demanded of one good responds to a change in the price of another good, computed as the percentage change in quantity demanded of the first good divided by the percentage change in price of the second good  is",
		options: ["price elasticity of demand", "income elasticity of demand", "cross-price elasticity of demand", "price elasticity of supply"],
		answer: 2
	},
	{
		q: "Rice and wheat are",
		options: ["substitutes", "complements", "club goods", "public goods"],
		answer: 0
	},
	{
		q: "a good for which, other things being equal, an increase in income leads to an increase in demand  is",
		options: ["normal good", "inferior good", "Giffen good", "common good"],
		answer: 0
	},
	{
		q: "a measure of how much the quantity demanded of a good responds to a change in the price of that good, computed as the percentage change in quantity demanded divided by the percentage change in price  is",
		options: ["price elasticity of demand", "income elasticity of demand", "cross-price elasticity of demand", "price elasticity of supply"],
		answer: 0
	},

	{
		q: "  the price of a good that prevails in the world market for that good   is the definition of",
		options: ["export price", "import price", "world price", "domestic price"],
		answer: 2
	},
	{
		q: "The area between the demand curve and the price is an indicator of",
		options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
		answer: 0
	},
	{
		q: "  the amount a buyer is willing to pay for a good minus the amount the buyer actually pays for it   is",
		options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
		answer: 0
	},
	{
		q: "  the amount a seller is paid for a good minus the seller's cost of providing it   is",
		options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
		answer: 1
	},
	{
		q: "Value to buyers - Cost to sellers is",
		options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
		answer: 2
	},
	{
		q: "  the fall in total surplus that results from a market distortion, such as a tax   is",
		options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
		answer: 3
	},
	{
		q: "Laffer's curve is the relationship between",
		options: ["inflation and unemployment", "tax size and tax revenue", "producer surplus and consumer surplus", "tax size and deadweight loss"],
		answer: 1
	},
	{
		q: "Imposition of tariff",
		options: ["increases producer surplus and government revenue", "increases consumer surplus and government revenue", "increases producer surplus, consumer surplus and government revenue", "increases total surplus"],
		answer: 0
	},
	{
		q: "  the maximum amount that a buyer will pay for a good   is",
		options: ["willingness to pay", "market demand", "demand curve", "buyer's surplus"],
		answer: 0
	},
	{
		q: "The area between the supply curve and the price is an indicator of",
		options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
		answer: 1
	},
	{
		q: "For a positive consumption externality,",
		options: ["SMB = PMB", "SMB = PMB  MD", "SMB = PMB + MB", "SMC = PMC / MD"],
		answer: 2
	},
	{
		q: "For a positive production externality,",
		options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
		answer: 0
	},
	{
		q: "  The direct cost to producers of producing an additional unit of a good   is",
		options: ["private marginal cost (PMC)", "social marginal cost (SMC)", "private marginal benefit (PMB)", "social marginal benefit (SMB)"],
		answer: 0
	},
	{
		q: "For a negative production externality,",
		options: ["SMC = PMC + MD", "SMC = PMC - MD", "SMC = PMC", "SMC = PMC - MB"],
		answer: 0
	},
	{
		q: "  The private marginal cost to producers plus any costs associated with the production of the good that are imposed on others   is",
		options: ["private marginal cost (PMC)", "social marginal cost (SMC)", "private marginal benefit (PMB)", "social marginal benefit (SMB)"],
		answer: 1
	},
	{
		q: "Partying with loud noise is an example of",
		options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
		answer: 2
	},
	{
		q: "  When an individual’s consumption increases the well-being of others, but the individual is not compensated by those others,   we have",
		options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
		answer: 3
	},
	{
		q: "  When a firm’s production increases the well-being of others but the firm is not compensated by those others,   we have",
		options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
		answer: 1
	},
	{
		q: "  When an individual’s consumption reduces the well-being of others who are not compensated by the individual,   we have",
		options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
		answer: 2
	},
	{
		q: "For a negative consumption externality,",
		options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
		answer: 1
	},

	{
		q: "“costs that have already been committed and cannot be recovered” are",
		options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
		answer: 3
	},
	{
		q: "“total revenue minus total cost, including both explicit and implicit costs” is a definition of",
		options: ["economic profit", "accounting profit", "profit", "loss"],
		answer: 0
	},
	{
		q: "“the increase in total cost that arises from an extra unit of production” are",
		options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
		answer: 2
	},
	{
		q: "A monopolist firm's profit is given by",
		options: ["(Price - ATC) × Q", "(Price - Q) × ATC", "(ATC - Q) × Price", "Price × Q - ATC"],
		answer: 0
	},
	{
		q: "Which of the following is true for a competitive firm?",
		options: ["P > MR", "P > MC", "MR > MC", "MR = MC"],
		answer: 3
	},
	{
		q: "“the amount a firm receives for the sale of its output” is a definition of",
		options: ["total revenue", "total cost", "profit", "loss"],
		answer: 0
	},
	{
		q: "When the cost of production for a single firm is much lesser than the cost of production for competitive firms, we have a / an",
		options: ["natural monopoly", "artificial monopoly", "oligopoly", "duopoly"],
		answer: 0
	},
	{
		q: "“costs that do not vary with the quantity of output produced” are",
		options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
		answer: 0
	},
	{
		q: "“costs that vary with the quantity of output produced” are",
		options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
		answer: 1
	},
	{
		q: "“the increase in output that arises from an additional unit of input” is",
		options: ["marginal product", "marginal profit", "marginal loss", "marginal cost"],
		answer: 0
	},
	{
		q: "“an absolute level of income set by the government for each family size below which a family is deemed to be in poverty” is known as",
		options: ["deprivation line", "poverty line", "deprivation index", "poverty index"],
		answer: 1
	},
	{
		q: "Absolute poverty depends",
		options: [
			"on income but not on access to social services",
			"not on income but on access to social services",
			"on income and on access to social services",
			"neither on income nor on access to social services"
		],
		answer: 2
	},
	{
		q: "“the equipment and structures used to produce goods and services” is the definition of",
		options: ["tools", "machinery", "capital", "factors of production"],
		answer: 2
	},
	{
		q: "“above-equilibrium wages paid by firms to increase worker productivity” are known as",
		options: ["compensating wage", "efficiency wage", "productivity wage", "retention wage"],
		answer: 1
	},
	{
		q: "“government policy aimed at protecting people against the risk of adverse events” is",
		options: ["Social protection", "Social insurance", "Social security", "Socialism"],
		answer: 1
	},
	{
		q: "“a difference in wages that arises to offset the non-monetary characteristics of different jobs” is known as",
		options: ["differentiating differential", "compensating differential", "differentiating integral", "compensating integral"],
		answer: 1
	},
	{
		q: "For a competitive and profit-maximising firm,",
		options: [
			"each factor's rental price < the value of the marginal product for that factor",
			"each factor's rental price = the value of the marginal product for that factor",
			"each factor's rental price > the value of the marginal product for that factor",
			"each factor's rental price = the value of the average product for that factor"
		],
		answer: 1
	},
	{
		q: "“a condition characterised by severe deprivation of basic human needs, including food, safe drinking water, sanitation facilities, health, shelter, education and information” is known as",
		options: ["absolute poverty", "relative poverty", "median poverty", "poverty line"],
		answer: 0
	},
	{
		q: "“a condition where a household's income is lower than the median income in the particular country” is known as",
		options: ["absolute poverty", "relative poverty", "median poverty", "poverty line"],
		answer: 1
	},
	{
		q: "“the increase in the amount of output from an additional unit of labor” is",
		options: ["marginal product of labour", "marginal product of input", "average product of labour", "average product of input"],
		answer: 0
	},

	
	{
		q: "“an action taken by an uninformed party to induce an informed party to reveal information” is known as",
		options: ["signalling", "screening", "informing", "heuristics"],
		answer: 1
	},
	{
		q: "“the part of actual resources that can be developed profitably in the future” are",
		options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
		answer: 2
	},
	{
		q: "“the limit on the consumption bundles that a consumer can afford” is known as",
		options: ["consumption constraint", "budget constraint", "bundle constraint", "affordability constraint"],
		answer: 1
	},
	{
		q: "“mental short cut using emotion (gut feeling) to influences the decision” is",
		options: ["affect heuristic", "availability heuristic", "effort heuristic", "familiarity heuristic"],
		answer: 0
	},
	{
		q: "“those resources that are currently being used after surveying, quantification and qualification” are",
		options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
		answer: 1
	},
	{
		q: "“the change in consumption that results when a price change moves the consumer along a given indifference curve to a point with a new marginal rate of substitution” is known as",
		options: ["income effect", "substitution effect", "indifference effect", "budget effect"],
		answer: 1
	},
	{
		q: "An inferior good whose demand increases with price is called as",
		options: ["Normal good", "Veblen good", "Giffen good", "Demand good"],
		answer: 2
	},
	{
		q: "Which of these is not a property of indifference curves?",
		options: [
			"Higher indifference curves are preferred to lower ones",
			"Indifference curves are downward-sloping",
			"Indifference curves cross at right angles",
			"Indifference curves are bowed inwards"
		],
		answer: 2
	},
	{
		q: "“an action taken by an informed party to reveal private information to an uninformed party” is known as",
		options: ["signalling", "screening", "informing", "heuristics"],
		answer: 0
	},
	{
		q: "“simple strategies or mental processes used to quickly form judgments, make decisions, and find solutions to complex problems” is known as",
		options: ["signalling", "screening", "informing", "heuristics"],
		answer: 3
	},
	{ q: "As per Wildlife Protection Act 1972 (WPA 1972), wild life includes any animal, aquatic or land vegetation which forms part of any _____", options: ["ecosystem", "state", "country", "habitat"], answer: 3 },
	{ q: "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as", options: ["umbrella species", "keystone species", "flagship species", "all of the above"], answer: 3 },
	{ q: "Soil formation is an example of", options: ["provisioning service", "regulating service", "supporting service", "cultural service"], answer: 2 },
	{ q: "Zoo is an example of", options: ["in-situ conservation", "ex-situ conservation", "in-situ preservation", "ex-situ preservation"], answer: 1 },
	{ q: "The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of", options: ["least concern species", "keystone species", "flagship species", "extinct species"], answer: 1 },
	{ q: "Nutrient cycling is an example of", options: ["provisioning service", "regulating service", "supporting service", "cultural service"], answer: 2 },
	{ q: "People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as", options: ["umbrella species", "keystone species", "flagship species", "extinct species"], answer: 2 },
	{ q: "We prefer those areas for the creation of a conservation reserve where the level of threat is", options: ["very high", "medium", "very low", "non-existent"], answer: 1 },
	{ q: "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as", options: ["umbrella species", "keystone species", "flagship species", "all of the above"], answer: 3 },
	{ q: "Biological control of pest populations is an example of", options: ["provisioning service", "regulating service", "supporting service", "cultural service"], answer: 1 }
,{ q: "The ability to produce a good at a lower opportunity cost than another producer is a definition of", options: ["real advantage", "monetary advantage", "comparative advantage", "opportunity advantage"], answer: 2 },
{ q: "Fluctuations in economic activity, such as employment and production are referred to as", options: ["business cycles", "economic cycles", "production cycles", "market cycles"], answer: 0 },
{ q: "The property of society getting the most it can from its scarce resources is a definition of", options: ["efficiency", "equality", "prudence", "sustainability"], answer: 0 },
{ q: "In the word root for Economics, nemein stands for", options: ["together", "to keep", "house", "manage"], answer: 3 },
{ q: "Whatever must be given up to obtain some item is a definition of", options: ["explicit costs", "implicit costs", "opportunity costs", "phantom costs"], answer: 2 },
{ q: "Rational decision making compares", options: ["average benefits to average costs", "average benefits to marginal costs", "marginal benefits to average costs", "marginal benefits to marginal costs"], answer: 3 },
{ q: "Something that induces a person to act is a definition of", options: ["enticement", "attraction", "incentive", "occupation"], answer: 2 },
{ q: "Input costs that require an outlay of money are", options: ["explicit costs", "implicit costs", "opportunity costs", "phantom costs"], answer: 0 },
{ q: "The property of distributing economic prosperity uniformly among the members of society is a definition of", options: ["efficiency", "equality", "prudence", "sustainability"], answer: 1 },
{ q: "The ability of an individual to own and exercise control over scarce resources is known as", options: ["property rights", "resource rights", "individual rights", "social rights"], answer: 0 }
,	
]
const form = document.getElementById("quizForm");

// Generate 10 lessons with 10 questions each
const lessons = [];
for (let i = 0; i < 13; i++) {
	lessons.push({
		title: `Lesson ${i + 1}`,
		questions: questions.slice(i * 10, (i + 1) * 10) // Slice 10 questions for each lesson
	});
}

lessons.forEach((lesson, lessonIndex) => {
	const lessonDiv = document.createElement("div");
	lessonDiv.className = "lesson";
	const lessonTitle = document.createElement("h2");
	lessonTitle.textContent = lesson.title;
	lessonDiv.appendChild(lessonTitle);

	// Create questions for each lesson
	lesson.questions.forEach((q, i) => {
		const div = document.createElement("div");
		div.className = "question";
		div.innerHTML = `<p id="q${lessonIndex}_${i}"><strong>Q${i + 1}:</strong> ${q.q}</p>` +
			q.options.map((opt, j) => `
        <label><input type="radio" name="q${lessonIndex}_${i}" value="${j}"> ${opt}</label><br>`
			).join("");
		lessonDiv.appendChild(div);
	});

	// Add submit button for this lesson
	const submitButton = document.createElement("button");
	submitButton.textContent = "Submit " + lesson.title;
	submitButton.onclick = (event) => {
		event.preventDefault(); // Prevent page refresh
		submitQuiz(lessonIndex);
	};
	lessonDiv.appendChild(submitButton);

	form.appendChild(lessonDiv);
});

function submitQuiz(lessonIndex) {
	const results = document.querySelectorAll(".question");
	const lessonQuestions = lessons[lessonIndex].questions;
	lessonQuestions.forEach((q, i) => {
		const selected = document.querySelector(`input[name=q${lessonIndex}_${i}]:checked`);
		const p = document.getElementById(`q${lessonIndex}_${i}`);
		if (selected) {
			const val = parseInt(selected.value);
			if (val === q.answer) {
				p.className = "correct";
				p.innerHTML += '<span class="icon">✔️</span>';
			} else {
				p.className = "incorrect";
				p.innerHTML += '<span class="icon">❌</span> (Correct: ' + q.options[q.answer] + ')';
			}
		} else {
			p.className = "incorrect";
			p.innerHTML += '<span class="icon">❌</span> (Correct: ' + q.options[q.answer] + ')';
		}
	});
}
