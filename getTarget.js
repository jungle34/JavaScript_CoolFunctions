/**
 * Function to get target elements in div
 * 
 * @param {HTMLObjectElement} _element 
 * @param {String} _class 
 * 
 * @returns a list of target elements in div, they find the target if the element have data-target attribute
 */
function getCardTargets(_element, _class){
	let card = $(_element).closest(`.${_class}`)[0];
	let { target } = $(_element).data();
	let state = $(_element).prop('checked');
	let value = $(_element).val()
	targetElement  = $(card).find(`#${target}`)[0];

	return {
		card: card,
		state: state,
		value: value,
		target: targetElement		
	}	
}
