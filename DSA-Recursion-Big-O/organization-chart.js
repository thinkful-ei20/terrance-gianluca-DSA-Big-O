/**
 * Zuckerberg
 *  	Schroepfer
 * 			Bosworth
 *          	Steve
 *          	Kyle
 *          	Andra
 *      	Zhao
 *       		Richie
 *           	Sofia
 *           	Jen
 *   	Schrage
 *       	VanDyck
 *           	Sabrina
 *           	Michelle
 *           	Josh
 *       	Swain
 *           	Blanch
 *           	Tom
 *           	Joe
 *   	Sandberg
 *      	Goler
 *           	Eddie
 *           	Julie
 *          	Annie
 *      	Hernandez
 *           	Rowi
 *           	Inga
 *           	Morgan
 *      	Moissinac
 *           	Amy
 *           	Chuck
 *           	Vinni
 *      	Kelley
 *          	Eric
 *          	Ana
 *          	Wes
 */


const organizationChart = [
	{id: 'Zuckerberg', parent: null},

	{id: 'Schroepfer', parent: 'Zuckerberg'},

	{id: 'Bosworth', parent: 'Schroepfer' },
	{id: 'Steve', parent: 'Bosworth' },
	{id: 'Kyle', parent: 'Bosworth' },
	{id: 'Andra', parent: 'Bosworth'},

	{id: 'Zhao', parent: 'Schroepfer' },
	{id: 'Richie', parent: 'Zhao' },
	{id: 'Sofia', parent: 'Zhao' },
	{id: 'Jen', parent: 'Zhao'},

	{id: 'Schrage', parent: 'Zuckerberg'},

	{id: 'Vandyck', parent: 'Schrage' },
	{id: 'Sabrina', parent: 'Vandyck' },
	{id: 'Michelle', parent: 'Vandyck' },
	{id: 'Josh', parent: 'Vandyck'},

	{id: 'Swain', parent: 'Schrage' },
	{id: 'Blanch', parent: 'Swain' },
	{id: 'Tom', parent: 'Swain' },
	{id: 'Joe', parent: 'Swain'},

	{id: 'Sandberg', parent: 'Zuckerberg'},

	{id: 'Goler', parent: 'Sandberg' },
	{id: 'Sabrina', parent: 'Goler' },
	{id: 'Michelle', parent: 'Goler' },
	{id: 'Josh', parent: 'Goler'},

	{id: 'Hernandez', parent: 'Sandberg' },
	{id: 'Rowi', parent: 'Hernandez' },
	{id: 'Inga', parent: 'Hernandez' },
	{id: 'Morgan', parent: 'Hernandez'},

	{id: 'Moissinac', parent: 'Sandberg' },
	{id: 'Amy', parent: 'Moissinac' },
	{id: 'Chuck', parent: 'Moissinac' },
	{id: 'Vinni', parent: 'Moissinac'},

	{id: 'Kelley', parent: 'Sandberg' },
	{id: 'Eric', parent: 'Kelley' },
	{id: 'Ana', parent: 'Kelley' },
	{id: 'Wes', parent: 'Kelley'},
];


function traverse(organizationChart, parent) {
	let node = {};
	organizationChart.filter(item => {
		if(item.parent === parent){
			return true;
		}
	})
		.forEach(item => {
			node[item.id] = traverse(organizationChart, item.id);
		});
	return node;
}
console.log(
	JSON.stringify(
		traverse(organizationChart, null)
		, null, 3)
);