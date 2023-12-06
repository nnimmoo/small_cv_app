import { ADD_SKILL, FETCH_SKILLS, DELETE_SKILL } from '../actions/skillActions';

const initialState = {
    skills: [],
};


const skillReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SKILL:
            return {
                ...state,
                skills: [...state.skills, action.payload],
            };
        case DELETE_SKILL:
                return {
                    ...state,
                    skills: state.skills.filter(skill => skill.name !== action.payload),
                };
        case FETCH_SKILLS:
            return {
                ...state,
                skills: action.payload,
            };
        default:
            return state;
    }
};


export default skillReducer;
