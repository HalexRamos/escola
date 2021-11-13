import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Halex',
      sobrenome: 'Ramos',
      email: 'halex@gmail.com',
      idade: 25,
      peso: 80,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
