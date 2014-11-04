import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('companies', {path: '/'}, function(){
		this.resource('company', {path: '/:company_id'});
	});
  this.route('bar-chart');
  this.route('donut-chart');
});

export default Router;
