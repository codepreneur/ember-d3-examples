import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'svg',
	attributeBindings: 'width height'.w(),

	draw: function(){
		var radius = Math.min(this.get('width'), this.get('height')) / 2;
		
		var arc = d3.svg.arc()
		.outerRadius(radius)
		.innerRadius(radius-20);

		var pie = d3.layout.pie()
		.sort(null)
		.value(function(d){ return d.frequency; });

		var svg = d3.select(this.get('element'))
		.append('g')
		.attr('transform', 'translate(' + this.get('width')/2 + ',' + this.get('height')/2 + ')');

		var g = svg.selectAll('.arc')
		.data(pie(this.get('data'))).enter()
		.append('g')
		.attr('class', 'arc');

		g.append('path')
		.attr('d', arc)
		.attr('class', function(d, i){ return d.data.letter; });

		g.append('text')
		.attr('transform', function(d){ return 'translate(' + arc.centroid(d) + ')'; })
		.attr('dy', '.35em')
		.style('text-anchor', 'middle')
		.text(function(d){ return d.data.letter; });
	}.on('didInsertElement'),

	redraw: function(){
		var svg = d3.select(this.get('element'));
		svg.selectAll('*').remove();
		this.draw();
	}.observes('data.@each.frequency')	
});
