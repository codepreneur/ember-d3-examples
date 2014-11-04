import Ember from 'ember';

export default Ember.Component.extend({
	classNames: 'bubble-chart',

	chart: d3.charts.bubble()
	.emptyMessage('No companies.'),

	didInsertElement: function(){
		var _this = this;

		d3.select(this.get('element')).selectAll('.node').on('click', function(d,i){
			_this.sendAction('action', i);
		});
	},

	draw: function(){
		d3.select(this.get('element'))
		.data([ this.get('data') ])
		.call(this.get('chart'));

		this.update();
	}.observes('data').on('didInsertElement'),

	update: function(){
		this.get('chart').selectItem(this.get('selectedBubble')); 
	}.observes('selectedBubble')	

});
