var tabela = document.getElementById('table');
var qtdAluno = tabela.getElementsByTagName('tr');
var row1 = document.getElementById("gerarNota");
var qtdNota = 4;
var row;

function calculate() {
    var mediaSoma = 0;
    for (let aluno = 1; aluno <= qtdAluno.length; aluno++) {
        let notaParcial;
        let notaSoma = 0;

        for (let nota = 1; nota <= qtdNota; nota++) {
            notaParcial = Number(document.getElementById(`Nota${aluno}${nota}`).value);
            notaSoma = notaSoma + notaParcial;
        }

        let mediaTemp = ((notaSoma) / qtdNota);
        mediaSoma = (mediaSoma + mediaTemp);

        var mediaGeral = (mediaSoma / (qtdAluno.length - 1)).toFixed(2);
        document.getElementById("mediaGeral").innerText = mediaGeral;
        document.getElementById(`media${aluno}`).innerText = mediaTemp;
        
        if (mediaTemp >= 50) {
            document.getElementById(`status${aluno}`).innerText = "Aprovado";
            document.getElementById(`status${aluno}`).style.backgroundColor = 'green';
        } else if (mediaTemp >= 45 && mediaTemp < 50) {
            document.getElementById(`status${aluno}`).innerText = "Recuperacao";
            document.getElementById(`status${aluno}`).style.backgroundColor = 'yellow';
        } else if (mediaTemp < 50) {
            document.getElementById(`status${aluno}`).innerText = "Reprovado";
            document.getElementById(`status${aluno}`).style.backgroundColor = 'red';
        }

    }

}

function adicionar() {
    if (qtdAluno.length <= 10) {
        tabela = document.getElementById("table");
        row = table.insertRow(qtdAluno.length);

        var cell1 = row.insertCell(0);
        let input1 = document.createElement("input");
        input1.setAttribute("type", "text");
        input1.setAttribute("class", "form-control");
        input1.setAttribute("placeholder", "Nome do aluno");
        cell1.appendChild(input1);

        for (let o = 1; o <= qtdNota; o++) {
            var cell2 = row.insertCell(o);
            let input2 = document.createElement("input");
            input2.setAttribute("type", "number");
            input2.setAttribute("min", "0");
            input2.setAttribute("max", "100");
            input2.setAttribute("placeholder", `Nota ${o}`);
            cell2.appendChild(input2);

            for (let aluno = 1; aluno <= qtdAluno.length - 1; aluno++) {
                input2.setAttribute("id", `Nota${aluno}${o}`);
            }
        }
        var cell6 = row.insertCell(qtdNota + 1);
        var cell7 = row.insertCell(qtdNota + 2);

        cell6.setAttribute("id", `media${qtdAluno.length - 1}`);
        cell7.setAttribute("id", `status${qtdAluno.length - 1}`);
        input1.setAttribute("id", `idAluno${qtdAluno.length - 1}`);
        row.setAttribute("id", `idLinha${qtdAluno.length - 1}`);

    } else {
        alert("Limite 10 alunos")
    }
}

function coluna() {
    if (tabela.rows[0].cells.length < 9) {
        qtdNota = qtdNota + 1

        row1.insertCell(qtdNota).outerHTML = "<th>Nota</th>";
        for (let x = 1; x < qtdAluno.length; x++) {
            let linha = document.getElementById(`idLinha${x}`).insertCell(qtdNota)

            let input = document.createElement("input");
            input.setAttribute("type", "Number");
            input.setAttribute("min", "0");
            input.setAttribute("max", "100");

            for (let nota = 1; nota <= qtdNota; nota++) {
                input.setAttribute("id", `Nota${x}${nota}`);
                input.setAttribute("placeholder", `nota ${nota}`);
            }
            linha.appendChild(input)
        }
    } else {
        alert("Limite 6 Notas")
    }
}

function remove() {
    if (tabela.rows[0].cells.length > 4) {
        qtdNota = qtdNota - 1
        let apagar = tabela.rows[0].cells.length - 3;
        for (let i = 0; i < tabela.rows.length; i++) {
            tabela.rows[i].deleteCell(apagar);
        }
    } else {
        alert("Minimo 1 nota")
    }
}

function removeRow() {
    let peguei = qtdAluno.length - 1;
    tabela.deleteRow(peguei)
}
