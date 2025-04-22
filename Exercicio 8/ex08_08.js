function senhaAleatoria(qntdCar) {
    let listaCaracteres = ['!', 'a', 5, 'R', '$','#'];
    let senha = '';

    for (let x = 1; x <=qntdCar; x++){
        let posSortiada = Math.floor(Math.random() * 6)
        senha = senha + listaCaracteres[posSortiada]

    }
    return senha;
}