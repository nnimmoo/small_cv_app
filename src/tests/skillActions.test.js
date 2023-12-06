import { deleteSkillSuccess, ADD_SKILL, DELETE_SKILL, FETCH_SKILLS,addSkill,fetchSkillsSuccess } from '../actions/skillActions';

describe('deleteSkillSuccess', () => {
    it('should create an action to delete a skill', () => {
        const skillName = 'React';
        const expectedAction = {
            type: DELETE_SKILL,
            payload: skillName,
        };
        expect(deleteSkillSuccess(skillName)).toEqual(expectedAction);
    });
});

describe('fetchSkillsSuccess', () => {
    it('should create an action to fetch skills', () => {
        const skills = [{ name: 'React', range: 80 }];
        const expectedAction = {
            type: FETCH_SKILLS,
            payload: skills,
        };
        expect(fetchSkillsSuccess(skills)).toEqual(expectedAction);
    });
});

// Mocking fetch API (you might use libraries like jest-fetch-mock)
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ skill: { name: 'React', range: 80 } }),
  })
);

describe('addSkill', () => {
    it('should create an action to add a skill', async () => {
        // Assuming addSkill is modified to return the action after fetch resolves
        const skill = { name: 'React', range: 80 };
        const expectedAction = {
            type: ADD_SKILL,
            payload: skill,
        };

        await expect(addSkill(skill)).resolves.toEqual(expectedAction);

        // Reset fetch mock
        global.fetch.mockClear();
        delete global.fetch;
    });
});
