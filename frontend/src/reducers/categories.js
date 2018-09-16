const initial = {
	categories : [],
	loading    : false,
	error      : false
}

export default function reducer(state = initial, action) {
	
	switch(action.type){
		case "FETCH_CATEGORIES_PENDING":
			return {
				categories : [], 
				loading    : true, 
				error      : false
			}

		case "FETCH_CATEGORIES_FULFILLED":
			return { 
				categories : action.payload, 
				loading    : false,
				error      : false 
			}
		
		case "FETCH_CATEGORIES_REJECTED":
			return { 
				categories : [],
				error      : true,
				loading    : false,
			}

		default:
			return { ...state }
	}
}
