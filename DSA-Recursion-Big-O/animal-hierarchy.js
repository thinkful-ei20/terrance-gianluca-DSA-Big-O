const animalHierarchy = [
	{id: 'Animals', parent: null},
	{id: 'Mammals', parent: 'Animals'},
	{id: 'Dogs', parent:'Mammals' },
	{id: 'Cats', parent:'Mammals' },
	{id: 'Golden Retriever', parent: 'Dogs'},
	{id: 'Husky', parent:'Dogs' },
	{id: 'Bengal', parent:'Cats' }
];

// ==============================
function traverse(animalHierarchy, parent) {
	let node = {};
	animalHierarchy.filter(item => {
		if(item.parent === parent){
			return true;
		}
	})
		.forEach(item => {
			node[item.id] = traverse(animalHierarchy, item.id);
		});
	return node;
}
console.log(
	JSON.stringify(
		traverse(animalHierarchy, null)
		, null, 2)
);
