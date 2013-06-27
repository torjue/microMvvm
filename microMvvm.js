(function (name, context, definition) {
	if (typeof module !== 'undefined') module.exports = definition(name, context);
	else if (typeof define === 'function' && typeof define.amd  === 'object') define(definition);
	else context[name] = definition(name, context);
}('microMvvm', this, function(name, context) {
	"use strict";

	NodeList.prototype.forEach = Array.prototype.forEach;

	var updateTextBindings = function(rootElement, propertyName, propertyValue){
		var elements = rootElement.querySelectorAll('[data-text]');
		elements.forEach(function(element){
			var binding = element.getAttribute('data-text');
			if(binding === propertyName){
				element.innerText = propertyValue;
			}
		});
	};

	var bind = function(viewModel, rootElement){

		rootElement = rootElement || document;
		var propertyNames = Object.getOwnPropertyNames(viewModel);
		
		propertyNames.forEach(function(propertyName) {

			var propertyValue = viewModel[propertyName];

			var get = function(){
				return propertyValue;
			}

			var set = function(newValue){
				propertyValue = newValue;
				updateTextBindings(rootElement, propertyName, propertyValue);
			};

			Object.defineProperty(viewModel, propertyName, {
				configurable: true,
				enumerable: true,
				get: get,
				set: set
			});

			updateTextBindings(rootElement, propertyName, propertyValue);
		});
	};

	return {
		bind: bind
	};
}));