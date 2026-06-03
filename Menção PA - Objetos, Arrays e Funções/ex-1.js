//Crie um objeto que represente um aluno com nome, idade e curso. Crie uma função que receba esse objeto e retorne uma frase apresentando o aluno.
const cadastroAluno = 
    {nome:'Nicole', 
    idade: 15,
    curso: 'Desenvolvimento de Sistemas'};
    
function apresentacaoDoAluno (cadastroAluno){
    return `Olá, meu nome é ${cadastroAluno.nome}, tenho ${cadastroAluno.idade} anos e estou cursando ${cadastroAluno.curso}`
}
const fraseDoAluno = apresentacaoDoAluno (cadastroAluno) 
console.log(fraseDoAluno)