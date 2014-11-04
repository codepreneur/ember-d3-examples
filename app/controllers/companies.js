import Ember from 'ember';

export default Ember.ArrayController.extend({
	chartData: function(){
		var _this = this;

		return {
			name: 'companies',
			children: this.map(function(c){
				return {
					name: c.name,
					size: c.revenue
				};
			})
		};
	}.property('content')

});
