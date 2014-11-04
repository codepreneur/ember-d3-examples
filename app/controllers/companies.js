import Ember from 'ember';

export default Ember.ArrayController.extend({
	chartData: function(){
		var _this = this;

		return {
			name: 'companies',
			children: this.map(function(c){
				return {
					name: c.name,
					// size: c.revenue
					size: c[_this.get('selectedItem')]
				};
			})
		};
	}.property('content', 'selectedItem'),

	items: ['revenue', 'cost'],

	needs: ['company'],
	selectedCompanyIndex: function(){
		return this.indexOf(this.get('controllers.company.model'));
	}.property('controllers.company.model') 

});
