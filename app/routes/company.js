import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return this.modelFor('companies').findBy('id', +params.company_id);
	},

	deactivate: function(){
		this.controller.set('content', null);
	}

});
