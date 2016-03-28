  $(window).load(function() {
          pymChild = new pym.Child({});
          pymChild.sendHeight();
  });

function appendRatings(){
	$(".pf-top").append( '<div class="col-xs-12 pf-ratings"><h3>About our Ratings</h3><h4>True</h4><p>The statement is accurate and nothing significant is missing.</p><h4>Mostly True</h4><p>The statement is accurate but needs clarification or additional information.</p><h4>Half True</h4><p>The statement is partially accurate but leaves out important details or takes things out of context.</p><h4>Mostly False</h4><p>The statement contains some element of truth but ignores critical facts that would give a different impression.</p><h4>False</h4><p>The statement is not accurate.</p><h4>Pants on Fire</h4><p>The statement is not accurate and makes a ridiculous claim</p></div>');
	$(".about-ratings").remove();
	pymChild.sendHeight();
}