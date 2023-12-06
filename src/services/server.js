import { createServer, Model, Factory } from 'miragejs';

export function makeServer() {
    let server = createServer({
        models: {
            education: Model,
            skill: Model,
        },

        factories: {
            education: Factory.extend({
                date: '2020-2021',
                title: 'Your Education Title',
                description: 'Description of your education',
            }),
            skill: Factory.extend({
                name: 'Skill Name',
                range: 50,
            }),
        },
        seeds(server) {
            server.create("education",{date:"2008-2020", title:"Shavnaba Gymnasium", description:"I studied at the Gymnasium in Shavnabada and had the honor of receiving the silver medal for my academic achievements. This accolade wasn't just a recognition of my grades; It represented my dedication and hard work"})
            server.create("education",{date:"2020-2024", title:"Kutaisi International University", description: "Studying Computer Science at KIU was a transformative journey for me. My dedication and passion for technology were recognized when I was awarded a scholarship for maintaining a high GPA."})
            server.create('skill', { name: 'HTML', range: 70 });
            server.create('skill', { name: 'React', range: 60 });
            server.create('skill', { name: 'Python', range: 80 });
        },
        routes() {
            this.namespace = 'api';

            this.get('/educations', (schema) => {
                return schema.educations.all();
            });

            this.get('/skills', (schema) => {
                return schema.skills.all();
            });

            this.post('/skills', (schema, request) => {
                let attrs = JSON.parse(request.requestBody);
                return schema.skills.create(attrs);
            });
            
            this.delete('/skills/:name', (schema, request) => {
                let name = request.params.name;
                let skill = schema.skills.findBy({ name });
        
                if (skill) {
                    skill.destroy();
                    return { message: 'Skill deleted' };
                } else {
                    return new Response(404, {}, { errors: ['Skill not found'] });
                }
            });
        },
    });

    return server;
}
