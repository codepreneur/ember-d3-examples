import Ember from 'ember';

export default Ember.ArrayController.extend({

	actions: {
		removeObject: function(letter){
			this.get('content').removeObject(letter);
		},

		changeNumbers: function(){
			this.get('content').forEach(function(item){
				if(item.get('frequency') % 2 === 1){
					item.decrementProperty('frequency', 200);
				} else {
					item.incrementProperty('frequency', 100);
				}
			});
		}
	}

});
