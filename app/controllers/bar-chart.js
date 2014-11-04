import Ember from 'ember';

export default Ember.ArrayController.extend({
	content: Ember.A([
			{'letter': 'A', 'frequency': 1492},
			{'letter': 'B', 'frequency': 8267}
		])
});
