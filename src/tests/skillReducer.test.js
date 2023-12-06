import skillReducer from '../reducers/skillReducer';
import { ADD_SKILL, FETCH_SKILLS, DELETE_SKILL } from '../actions/skillActions';

describe('skillReducer', () => {
    const initialState = {
        skills: [],
    };

    it('should return the initial state', () => {
        expect(skillReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle ADD_SKILL', () => {
        const newSkill = { name: 'React', range: 80 };
        const addAction = { type: ADD_SKILL, payload: newSkill };
        const expectedState = {
            skills: [newSkill],
        };
        expect(skillReducer(initialState, addAction)).toEqual(expectedState);
    });

    it('should handle DELETE_SKILL', () => {
        const startingState = {
            skills: [{ name: 'React', range: 80 }, { name: 'JavaScript', range: 70 }],
        };
        const deleteAction = { type: DELETE_SKILL, payload: 'React' };
        const expectedState = {
            skills: [{ name: 'JavaScript', range: 70 }],
        };
        expect(skillReducer(startingState, deleteAction)).toEqual(expectedState);
    });

    it('should handle FETCH_SKILLS', () => {
        const fetchedSkills = [{ name: 'Node.js', range: 75 }, { name: 'GraphQL', range: 65 }];
        const fetchAction = { type: FETCH_SKILLS, payload: fetchedSkills };
        const expectedState = {
            skills: fetchedSkills,
        };
        expect(skillReducer(initialState, fetchAction)).toEqual(expectedState);
    });
});
