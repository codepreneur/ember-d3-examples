import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return [
			{id: 1, name: 'Wayne Enterprises', revenue: 3938, cost: 1423},
			{id: 2, name: 'Stark Industries', revenue: 3812, cost: 823},
			{id: 3, name: 'Acme Corp', revenue: 6714, cost: 2990},
			{id: 4, name: 'Dunder Mifflin', revenue: 743, cost: 1304},
		]; 
	}
});
