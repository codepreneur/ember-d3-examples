import Ember from 'ember';

export default Ember.Component.extend({
	classNames: 'bubble-chart',

	chart: d3.charts.bubble()
		.emptyMessage('No companies.'),

	 draw: function(){
	 	d3.select(this.get('element'))
	 		.data([ this.get('data') ])
	 		.call(this.get('chart'));
	 }.observes('data').on('didInsertElement')	
});
