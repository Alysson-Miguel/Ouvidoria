const prisma = require('../lib/prisma');
const passEncrypt = require('../utils/passEncrypt')

module.exports = class userControl {
    static async createUser(request, response) {
        const { nome, email, cpf, password } = request.body;

        if(!nome) {
            return response.status(422).json({ message: "O Nome é obrigatorio" })
        }

        if(!email) {
            return response.status(422).json({ message: "O E-mail é obrigatorio" })
        }

        const emailCheck = await prisma.user.findFirst({ where: { email } });
        if(emailCheck) {
            return response.status(422).json({ message: "O email já cadastrado! Por favor, verifique seus dados novamente." })
        }

        if(!cpf) {
            return response.status(422).json({ message: "O CPF é obrigatorio" })
        }

        const cpfCheck = await prisma.user.findFirst({ where: { cpf } });
        if(cpfCheck) {
            return response.status(422).json({ message: "O CPF já cadastrado! Por favor, verifique seus dados novamente." })
        }

        if(!password) {
            return response.status(422).json({ message: "A Senha é obrigatoria" })
        }

        try { 
            const encrypt = await passEncrypt(password)

            const user = await prisma.user.create({
                data: {
                    nome,
                    email,
                    cpf,
                    password: encrypt
                }
            })

            return response.status(201).json({ message: "Usuario criado", user })
        } catch (error) {
            return response.status(422).json({ message: "Error", error })
        }
    }
}