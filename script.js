// Alguns resultados são gerados números decimais, portanto ulilizamos o slice como melhor opção, ele traz os dois últimos dígitos
const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');
    

    const qtdSegundos = tempo % 60;/* peguei o resto do TEMPO e dividi por 60 segundos */ 

    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);/* peguei o resto do TEMPO dividido pela hora (60*60) e dividi por 60 segundos -> HORA ESTÁ EM SEGUNDOS */

    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));/* peguei o resto do TEMPO dividido pelo dia (60*60*24) e dividi pela hora(60*60) -> DIA E HORA ESTÃO EM SEGUNDOS */

    const qtdDias = Math.floor(tempo / (60 * 60 * 24));/* peguei o TEMPO e dividi pelo dia(60*60*24) -> DIA ESTÁ EM SEGUNDOS */
    
    
    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if (tempo === 0){
            pararContagem();
        }
        atualizar(tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}

const tempoRestante = () =>{
    const dataEvento = new Date('2024-02-26  23:00:00');//data do meu evento
    const hoje = Date.now();//date de agora
    return Math.floor((dataEvento - hoje) / 1000);//transformando milisegundos em segundos

}

contagemRegressiva(tempoRestante());// entende como segundos