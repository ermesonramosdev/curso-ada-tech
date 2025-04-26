const permissions = 'Ermeson'; //Aluno ou Professor ou Admin

switch(permissions) {
  case "Aluno":
    console.log('Voçê só pode visualizar as aulas');
    break;
  case "Professor":
    console.log('Voçê pode visualizar as aulas, gravar, e excluir');
    break;
  case "Admin":
    console.log('Voçê pode fazer o que quiser no sistema operacional');
    break;
  default:
    console.log('Voçê não tem permissão para acessar esse recurso');
}