import { makeServer } from '../services/server'; // Import your MirageJS server function

let server;

beforeEach(() => {
    server = makeServer(); // Create a MirageJS server instance before each test
});

afterEach(() => {
    server.shutdown(); // Shutdown the MirageJS server after each test
});

it('handles GET request to /api/educations', async () => {
    const response = await fetch('/api/educations');
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.educations).toHaveLength(2); // Check that there are 2 educations in the response
});

it('handles GET request to /api/skills', async () => {
    const response = await fetch('/api/skills');
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.skills).toHaveLength(3); // Check that there are 3 skills in the response
});

it('handles POST request to /api/skills', async () => {
    const newSkill = {name: 'New Skill', range: 90 };
    const response = await fetch('/api/skills', {
        method: 'POST',
        body: JSON.stringify(newSkill),
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    expect(response.status).toBe(201);
});
