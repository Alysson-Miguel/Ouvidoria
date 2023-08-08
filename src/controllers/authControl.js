const prisma = require('../lib/prisma');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = class authControl {
    static async loginUser(request, response) {
        const { email, password } = request.body;

        if(!email) {
            return response.status(422).json({ message: "Campo obrigatorio" })
        }

        if(!password) {
            return response.status(422).json({ message: "Campo obrigatorio" })
        }

        const emailCheck = await prisma.user.findFirst({ where: { email } });
        if(!emailCheck) {
            return response.status(422).json({ message: "E-mail invalido" });
        }

        const passwordIsValid = await bcrypt.compare(password, emailCheck.password)
        if(!passwordIsValid){
            return response.status(422).json({ message: "Senha invalida" })
        }

        const user = await prisma.user.findFirst({ where: { email } });

        try {
            const token = jwt.sign(
                {
                    id: user.id,
                    nome: user.nome,
                    email: user.email
                },
                process.env.SECRET,
                {
                    expiresIn: '30 days'
                }
            )

            return response.status(200).json({ message: "Usuario logado com sucesso", token })
        } catch (error) {
            return response.status(422).json({ message: "Aconteceu um erro no servidor, tente novamente mais tarde", error })
        }
    }
}