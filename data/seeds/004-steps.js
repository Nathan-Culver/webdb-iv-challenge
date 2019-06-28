exports.seed = function(knex, Promise) {
	return knex('steps').del().then(function() {
		return knex('steps').insert([
			{ recipes_id: 1, name: 'Chop Bacon', step: 1 },
			{ recipes_id: 1, name: 'Chop Onion', step: 2 },
			{ recipes_id: 1, name: 'Chop Pepperoni', step: 3 }
		]);
	});
};