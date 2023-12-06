export const ADD_SKILL = 'ADD_SKILL';
export const FETCH_SKILLS = 'FETCH_SKILLS';

export const DELETE_SKILL = 'DELETE_SKILL';

export const deleteSkillSuccess = (skillName) => {
    return {
        type: DELETE_SKILL,
        payload: skillName,
    };
};

export const addSkill = (skill) => {
    fetch('/api/skills', {
        method: 'POST',
        body: JSON.stringify(skill),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch((error) => {
            console.error('Error posting skill:', error);
        });
    return {
        type: ADD_SKILL,
        payload: skill,
    };
};

export const deleteSkill= async (skillName) => {
    try {
        const response = await fetch(`/api/skills/${skillName}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        console.log("Skill successfully deleted from server");
    } catch (error) {
        console.error("Failed to delete skill:", error);
    }
};



export const fetchSkillsSuccess = (skills) => {
    return {
        type: FETCH_SKILLS,
        payload: skills,
    };
};

export const fetchSkills = () => {
    return (dispatch) => {
        fetch('/api/skills')
            .then((response) => response.json())
            .then((data) => {
                dispatch(fetchSkillsSuccess(data.skills));
            })
            .catch((error) => console.error('Error fetching skills:', error));
    };
};
