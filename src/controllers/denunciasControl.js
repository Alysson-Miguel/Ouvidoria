const prisma = require('../lib/prisma');
const jwt = require('jsonwebtoken');

module.exports = class denunciasController {
    static async createDenuncia(request, response) {
        const { empresa,endereco, texto } = request.body;

        const token = request.headers.authorization;

        try {
            
            const decodedToken = jwt.verify(token, process.env.SECRET);
            
            const userId = decodedToken.id;
           
            

            if (!userId) {
                return response.status(401).send({ message: "Unauthorized. Please log in." });
            }

            const denuncia = await prisma.denuncias.create({
                data: { 
                    empresa,
                    texto,
                    endereco,
                    userId: userId
                }
            });

            return response.status(200).send({ message: "Denuncia criada.", denuncia });
        } catch (error) {
            return response.status(401).send({ message: "Unauthorized. Invalid token." });
        }
    }
    static async getCredenciais(request,response){
        const token = request.headers.authorization;

        try {
            const decodedToken = jwt.verify(token, process.env.SECRET);
            
            const userId = decodedToken.id;
           
            

            if (!userId) {
                return response.status(401).send({ message: "Unauthorized. Please log in." });
            }

            const denuncia = await prisma.denuncias.findMany({
                where: {
                    userId: userId
                },
                
            })
            
            return response.status(200).send({ denuncia })

        } catch (error) {
            return response.status(422).send({ error })
        }
    }

};