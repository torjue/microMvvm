Micro MVVM framework
======

A tiny MVVM framework. Not capable of much, and that's the entire point of it.

###Usage:

######HTML:

	<p data-text="name">name</p>
	<p data-text="age">age</p>
	<p data-text="sex">sex</p>

######JavaScript:

	var viewModel =	 {
		name: "John Doe",
		age: 41,
		sex: "Male"
	};

	microMvvm.bind(viewModel);
	
	viewModel.name = "Jane Doe";
    		
### License
MIT: [torjue.mit-license.org](http://torjue.mit-license.org)