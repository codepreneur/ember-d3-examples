import Ember from 'ember';

export default Ember.ObjectController.extend({
	profit: function(){
		return this.get('revenue') - this.get('cost');
	}.property('revenue', 'cost')
});
